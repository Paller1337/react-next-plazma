async function fullhdCheck() {
    const sharp = await import('sharp');
    const fs = await import('fs');
    const path = await import('path');



    //Проверка на разрешение (пропорциональное уменьшение) #2

    const inputDir = 'public/compressed-img';  // замените на вашу директорию
    const outputDir = 'public/resized-img';  // замените на вашу директорию

    function isImageFile(file) {
        const ext = path.extname(file);
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext.toLowerCase());
    }

    async function checkAndResizeImages(inputDir, outputDir) {
        const files = fs.readdirSync(inputDir);

        for (let i = 0; i < files.length; i++) {
            const inputFilePath = path.join(inputDir, files[i]);
            const outputFilePath = path.join(outputDir, files[i]);

            if (fs.statSync(inputFilePath).isDirectory()) {
                if (!fs.existsSync(outputFilePath)) {
                    fs.mkdirSync(outputFilePath);
                }
                await checkAndResizeImages(inputFilePath, outputFilePath);
            } else if (isImageFile(inputFilePath)) {
                const image = sharp.default(inputFilePath);

                // Получение информации об изображении
                const metadata = await image.metadata();

                if (metadata.width > 1920 || metadata.height > 1080) {
                    // Если изображение слишком большое, измените его размер
                    await image
                        .resize(1920, 1080, {
                            fit: 'inside',
                            withoutEnlargement: true
                        })
                        .toFile(outputFilePath)
                        .catch(err => console.error(err));

                    console.log(`Resized image: ${outputFilePath}`);
                } else {
                    // Если изображение имеет подходящий размер, просто скопируйте его
                    fs.copyFileSync(inputFilePath, outputFilePath);
                    console.log(`Copied image: ${outputFilePath}`);
                }
            }
        }
    }

    checkAndResizeImages(inputDir, outputDir);
}

module.exports = { fullhdCheck }
fullhdCheck()