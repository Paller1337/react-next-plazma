
//Создание превьюшек изобрображений

async function generatePreview() {
    const sharp = await import('sharp');
    const fs = await import('fs');
    const path = await import('path');


    const input = 'public/img';  // замените на вашу директорию
    const output = 'public/img-previews';  // замените на вашу директорию

    // функция определения является ли файл изображением
    function isImageFile(file) {
        const ext = path.extname(file);
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    }

    async function createPreviews(inputDir, outputDir) {
        const files = fs.readdirSync(inputDir);

        for (let i = 0; i < files.length; i++) {
            const inputFilePath = path.join(inputDir, files[i]);
            const outputFilePath = path.join(outputDir, files[i]);

            if (fs.statSync(inputFilePath).isDirectory()) {
                if (!fs.existsSync(outputFilePath)) {
                    fs.mkdirSync(outputFilePath);
                }
                await createPreviews(inputFilePath, outputFilePath);
            } else if (isImageFile(inputFilePath)) {
                const outputPath = path.join(outputDir, path.basename(files[i], path.extname(files[i])) + '.webp');
                await sharp.default(inputFilePath)
                    .resize(1280, 720, {
                        fit: 'inside',
                        withoutEnlargement: true
                    })
                    .webp()
                    .toFile(outputPath);
                console.log(`Created preview: ${outputPath}`);
            }
        }
    }

    createPreviews(input, output);

}


module.exports = { generatePreview }

generatePreview()