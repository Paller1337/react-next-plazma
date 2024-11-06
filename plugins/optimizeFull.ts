const { optimizeImages } = require('./optImages');
const { fullhdCheck } = require('./fullhdCheck');
const { convertToWebP } = require('./toWebp');
const { generatePreview } = require('./genPreview');

const start = async () => {
    await optimizeImages()
        .then(async () => { console.log('Step 1 done'); await fullhdCheck(); })
        .then(async () => { console.log('Step 2 done'); await convertToWebP(); })
        .then(async () => { console.log('Step 3 done'); await generatePreview(); })
        .then(async () => console.log('Step 4 done'))
        .catch(err => {
            console.error('Error during image processing:', err);
        });
};

start()