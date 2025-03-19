const { join, dirname } = require('path');
const fs = require('fs');
const { fileURLToPath } = require('url');

// Определяем текущий каталог
const filename = __filename;
const _dirname = dirname(filename);

// Функция для рекурсивного сканирования папок
const scanDirectory = async (directory, baseDirectory) => {
    const files = await fs.promises.readdir(directory, { withFileTypes: true });
    let fileList = [];

    for (const file of files) {
        const fullPath = join(directory, file.name);

        if (file.isDirectory()) {
            const nestedFiles = await scanDirectory(fullPath, baseDirectory);
            fileList = [...fileList, ...nestedFiles];
        } else {
            const relativePath = fullPath.replace(baseDirectory, '').replace(/\\/g, '/');
            fileList.push('/img/weddings/gallery' + relativePath);
        }
    }

    return fileList;
};

// Функция для создания JSON-файла с адресами изображений
const createFileList = async (directory, outputFile = 'files-weddings.json') => {
    try {
        const absolutePath = join(_dirname, directory);
        const files = await scanDirectory(absolutePath, absolutePath);
        const jsonContent = JSON.stringify(files, null, 2);
        
        await fs.promises.writeFile(outputFile, jsonContent);
        console.log(`Файл ${outputFile} создан со списком изображений.`);
    } catch (error) {
        console.error('Ошибка при сканировании директории:', error);
    }
};

// Запуск с указанием директории
const folderPath = '../public/img/weddings/gallery'; // Укажите нужную папку
createFileList(folderPath);
