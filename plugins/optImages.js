async function optimizeImages() {
    const fs = await import('fs');
    const path = await import('path');


    const input = 'public/_to-opt'; // замените на вашу директорию
    const output = 'public/_webp-to'; // замените на вашу директорию


    // функция определения является ли файл изображением
    function isImageFile(file) {
        const ext = path.extname(file);
        return ['.jpg', '.jpeg', '.png'].includes(ext);
    }

    async function optimizeImage(filePath, outputDirPath) {
        const imagemin = await import('imagemin');
        const imageminMozjpeg = await import('imagemin-mozjpeg');
        const imageminPngquant = await import('imagemin-pngquant');
        await imagemin.default([filePath], {
            destination: outputDirPath,
            plugins: [
                imageminMozjpeg.default({ quality: 80 }),
                imageminPngquant.default({ quality: [0.6, 0.8] })
            ]
        });

        console.log(`Optimized image: ${outputDirPath}`);
    }

    async function processFiles(dir) {
        const files = fs.readdirSync(dir);

        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                processFiles(filePath);
            } else {
                if (isImageFile(file)) {
                    const relativePath = path.relative(input, filePath);
                    const outputFilePath = path.join(output, relativePath);
                    const outputDirPath = path.dirname(outputFilePath);

                    if (!fs.existsSync(outputDirPath)) {
                        fs.mkdirSync(outputDirPath, { recursive: true });
                    }

                    optimizeImage(filePath, outputDirPath);
                }
            }
        });
    }

    
    processFiles(input, output);
}

optimizeImages()