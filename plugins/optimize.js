
// const imagemin = require('imagemin');

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');



// Глобальные настройки
const OPTIONS = {
    optimizeImages: true,
    fullhdCheck: true,
    convertToWebP: true,
    generatePreview: true
};

const PATHS = {
    optimizeImages: {
        input: 'public/no-optimize-img',
        output: 'public/compressed-img'
    },
    fullhdCheck: {
        input: 'public/compressed-img',
        output: 'public/resized-img'
    },
    convertToWebP: {
        input: 'public/resized-img',
        output: 'public/img'
    },
    generatePreview: {
        input: 'public/img',
        output: 'public/img-previews'
    }
};

// Проверка, является ли файл изображением
function isImageFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
}

// Проверка существования файла
async function fileExists(filePath) {
    try {
        await fs.promises.access(filePath);
        return true;
    } catch {
        return false;
    }
}

// Создание директории, если она не существует
async function ensureDir(dirPath) {
    await fs.promises.mkdir(dirPath, { recursive: true });
}

// Оптимизация изображений
async function optimizeImage(inputPath, outputDir) {
    try {
        const imageminModule = await import('imagemin');
        const imagemin = imageminModule.default;

        const imageminMozjpegModule = await import('imagemin-mozjpeg');
        const imageminMozjpeg = imageminMozjpegModule.default;

        const imageminPngquantModule = await import('imagemin-pngquant');
        const imageminPngquant = imageminPngquantModule.default;

        await imagemin([inputPath], {
            destination: outputDir,
            plugins: [
                imageminMozjpeg({ quality: 80 }),
                imageminPngquant({ quality: [0.6, 0.8] })
            ]
        });
        console.log(`Изображение оптимизировано: ${inputPath}`);
    } catch (error) {
        console.error(`Ошибка при оптимизации изображения: ${inputPath}`);
        console.error(error);
    }
}

// Проверка и изменение размера изображений
async function fullhdCheckImage(inputPath, outputPath) {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        if (metadata.width > 1920 || metadata.height > 1080) {
            await image
                .resize(1920, 1080, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .toFile(outputPath);
            console.log(`Изображение изменено по размеру: ${outputPath}`);
        } else {
            await fs.promises.copyFile(inputPath, outputPath);
            console.log(`Изображение скопировано без изменений: ${outputPath}`);
        }
    } catch (error) {
        console.error(`Ошибка при изменении размера изображения: ${inputPath}`);
        console.error(error);
    }
}

// Конвертация в WebP
async function convertImageToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        console.log(`Конвертировано в WebP: ${outputPath}`);
    } catch (error) {
        console.error(`Ошибка при конвертации в WebP: ${inputPath}`);
        console.error(error);
    }
}

// Создание превьюшек
async function generatePreviewImage(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .resize(1280, 720, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .webp()
            .toFile(outputPath);
        console.log(`Превью создано: ${outputPath}`);
    } catch (error) {
        console.error(`Ошибка при создании превью: ${inputPath}`);
        console.error(error);
    }
}

// Обработка каждого изображения
async function processImage(inputFilePath, relativePath) {
    let currentInputPath = inputFilePath;
    let currentRelativePath = relativePath;

    // Оптимизация изображений
    if (OPTIONS.optimizeImages) {
        const outputDir = path.join(PATHS.optimizeImages.output, path.dirname(relativePath));
        const outputFilePath = path.join(PATHS.optimizeImages.output, relativePath);

        if (await fileExists(outputFilePath)) {
            // console.log(`Оптимизированное изображение уже существует: ${outputFilePath}, пропуск.`);
        } else {
            await ensureDir(outputDir);
            await optimizeImage(currentInputPath, outputDir);
        }

        currentInputPath = outputFilePath;
    }

    // Проверка на Full HD
    if (OPTIONS.fullhdCheck) {
        const outputDir = path.join(PATHS.fullhdCheck.output, path.dirname(relativePath));
        const outputFilePath = path.join(PATHS.fullhdCheck.output, relativePath);

        if (await fileExists(outputFilePath)) {
            // console.log(`Изображение уже проверено на разрешение: ${outputFilePath}, пропуск.`);
        } else {
            await ensureDir(outputDir);
            await fullhdCheckImage(currentInputPath, outputFilePath);
        }

        currentInputPath = outputFilePath;
    }

    // Конвертация в WebP
    if (OPTIONS.convertToWebP) {
        const outputDir = path.join(PATHS.convertToWebP.output, path.dirname(relativePath));
        const outputFileName = path.basename(relativePath, path.extname(relativePath)) + '.webp';
        const outputFilePath = path.join(outputDir, outputFileName);

        if (await fileExists(outputFilePath)) {
            // console.log(`Изображение WebP уже существует: ${outputFilePath}, пропуск.`);
        } else {
            await ensureDir(outputDir);
            await convertImageToWebP(currentInputPath, outputFilePath);
        }

        currentInputPath = outputFilePath;
        currentRelativePath = path.join(path.dirname(relativePath), outputFileName);
    }

    // Создание превью
    if (OPTIONS.generatePreview) {
        const outputDir = path.join(PATHS.generatePreview.output, path.dirname(currentRelativePath));
        const outputFileName = path.basename(currentRelativePath, path.extname(currentRelativePath)) + '.webp';
        const outputFilePath = path.join(outputDir, outputFileName);

        if (await fileExists(outputFilePath)) {
            // console.log(`Превью уже существует: ${outputFilePath}, пропуск.`);
        } else {
            await ensureDir(outputDir);
            await generatePreviewImage(currentInputPath, outputFilePath);
        }
    }
}

// Рекурсивная обработка директорий
async function processDirectory(inputDir, relativePath = '') {
    const dirPath = path.join(inputDir, relativePath);
    const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const entryRelativePath = path.join(relativePath, entry.name);
        const entryPath = path.join(inputDir, entryRelativePath);

        if (entry.isDirectory()) {
            await processDirectory(inputDir, entryRelativePath);
        } else if (entry.isFile() && isImageFile(entry.name)) {
            await processImage(entryPath, entryRelativePath);
        }
    }
}

// Запуск скрипта
(async () => {
    try {
        const inputDir = PATHS.optimizeImages.input;
        await processDirectory(inputDir);
        console.log('Обработка изображений завершена.');
    } catch (error) {
        console.error('Ошибка при обработке изображений:');
        console.error(error);
    }
})();
