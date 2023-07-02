async function optimizeImages() {
  const imagemin = await import('imagemin');
  const imageminMozjpeg = await import('imagemin-mozjpeg');
  const imageminPngquant = await import('imagemin-pngquant');
  const path = await import('path');
  const fs = await import('fs');

  const inputDir = 'public/no-optimize-img';
  const outputDir = 'public/img';

  // Рекурсивно обрабатываем все файлы в директории и ее поддиректориях
  function processFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // Рекурсивно обрабатываем поддиректорию
        processFiles(filePath);
      } else {
        // Обрабатываем только файлы изображений
        if (isImageFile(file)) {
          optimizeImage(filePath);
        }
      }
    });
  }

  // Проверяем, является ли файл изображением
  function isImageFile(file) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  }

  async function optimizeImage(filePath) {
    const relativePath = path.relative(inputDir, filePath);
    const outputFilePath = path.join(outputDir, relativePath);
    const outputDirPath = path.dirname(outputFilePath);

    // Создаем директорию для сохранения файла, если она не существует
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }

    await imagemin.default([filePath], {
      destination: outputDirPath,
      plugins: [
        imageminMozjpeg.default({ quality: 80 }),
        imageminPngquant.default({ quality: [0.6, 0.8] })
      ]
    });

    console.log(`Optimized image: ${outputFilePath}`);
  }

  // Запускаем процесс обработки файлов
  processFiles(inputDir);
}

optimizeImages()