async function convertToWebP() {
    const path = await import('path');
    const fs = await import('fs');


    //Конвертация в WebP (опционально) #3

    const input = 'public/resized-img';  
    const output = 'public/1img';  

    function isImageFile(file) {
        const ext = path.extname(file);
        return ['.jpg', '.jpeg', '.png'].includes(ext);
    }

    // Функция для конвертации изображений в формат WebP
    async function convertImageToWebP(filePath, outputDirPath) {
        const imagemin = await import('imagemin');
        const imageminWebp = await import('imagemin-webp');
        
        await imagemin.default([filePath], {
            destination: outputDirPath,
            plugins: [
                imageminWebp.default({ quality: 80 })
            ]
        });

        console.log(`Converted to WebP: ${outputDirPath}`);
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

                    convertImageToWebP(filePath, outputDirPath);
                }
            }
        });
    }

    processFiles(input, output);

}

convertToWebP()