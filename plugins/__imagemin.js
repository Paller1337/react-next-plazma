async function optimizeImages() {
  const imagemin = await import('imagemin');
  const imageminMozjpeg = await import('imagemin-mozjpeg');
  const imageminPngquant = await import('imagemin-pngquant');
  const imageminWebp = await import('imagemin-webp');
  const path = await import('path');
  const fs = await import('fs');

  const inputDir = 'public/no-optimize-img';
  const outputDir = 'public/optimize-img';

  let imports = '';
  let imagesObject = {};

  function setPath(obj, pathArray, value) {
    let lastKey = toCamelCase(pathArray.pop(), true);
    pathArray.reduce((a, b) => a[toCamelCase(b, false)] = a[toCamelCase(b, false)] || {}, obj)[lastKey] = value;
  }

  function toCamelCase(str, addPrefix) {
    str = str.replace(/([-_.][a-z0-9])/ig, group => group.toUpperCase().replace('-', '_').replace('.', '_').replace('_', '')).replace(/[-.]/g, '_');
    return addPrefix ? 'img' + str : str;
  }

  function processFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        processFiles(filePath);
      } else {
        if (isImageFile(file)) {
          optimizeImage(filePath);
          const relativePath = path.relative(inputDir, filePath).replace(/\\/g, '/');
          const extension = path.extname(file);
          const importVariable = toCamelCase(relativePath.replace(/\//g, '_'), true);
          imports += `import ${importVariable} from '@/images/${relativePath}';\n`;
          setPath(imagesObject, relativePath.split('/'), importVariable);
        }
      }
    });
  }

  function isImageFile(file) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  }

  async function optimizeImage(filePath) {
    const relativePath = path.relative(inputDir, filePath);
    const outputFilePath = path.join(outputDir, relativePath);
    const outputDirPath = path.dirname(outputFilePath);

    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }

    await imagemin.default([filePath], {
      destination: outputDirPath,
      plugins: [
        imageminMozjpeg.default({ quality: 80 }),
        imageminPngquant.default({ quality: [0.6, 0.8] }),
        imageminWebp.default({ quality: 50 })
      ]
    });

    console.log(`Optimized image: ${outputFilePath}`);
  }

  processFiles(inputDir);

  let imagesExport = 'export const images = ' + JSON.stringify(imagesObject, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"([^"]+)"/g, '$1');

  fs.writeFileSync('imageImports.ts', imports + imagesExport);
}

optimizeImages();


// Функция для оптимизации изображений
async function optimizeImage(filePath, outputDirPath) {
  const imagemin = await import('imagemin');
  const imageminMozjpeg = await import('imagemin-mozjpeg');
  const imageminPngquant = await import('imagemin-pngquant');
  const imageminWebp = await import('imagemin-webp');
  await imagemin([filePath], {
    destination: outputDirPath,
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.6, 0.8] })
    ]
  });

  console.log(`Optimized image: ${outputDirPath}`);
}

// Функция для конвертации изображений в формат WebP
async function convertImageToWebP(filePath, outputDirPath) {
  await imagemin([filePath], {
    destination: outputDirPath,
    plugins: [
      imageminWebp({ quality: 50 })
    ]
  });

  console.log(`Converted to WebP: ${outputDirPath}`);
}

// Измененная функция обработки файлов
async function processFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processFiles(filePath);
    } else {
      if (isImageFile(file)) {
        const relativePath = path.relative(inputDir, filePath);
        const outputFilePath = path.join(outputDir, relativePath);
        const outputDirPath = path.dirname(outputFilePath);

        if (!fs.existsSync(outputDirPath)) {
          fs.mkdirSync(outputDirPath, { recursive: true });
        }

        optimizeImage(filePath, outputDirPath);
        convertImageToWebP(filePath, outputDirPath);

        const importVariable = toCamelCase(relativePath.replace(/\//g, '_'), true);
        imports += `import ${importVariable} from '@/images/${relativePath}';\n`;
        setPath(imagesObject, relativePath.split('/'), importVariable);
      }
    }
  });
}
