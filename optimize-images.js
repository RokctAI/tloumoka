const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public', 'images');
console.log('Scanning directory:', directoryPath);

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const inputPath = path.join(directoryPath, file);
            const outputPath = path.join(directoryPath, path.parse(file).name + '.webp');

            sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath)
                .then(info => {
                    console.log(`Optimized: ${file} -> ${path.parse(file).name}.webp (${(info.size / 1024).toFixed(2)} KB)`);
                    // Optional: Delete original if successful
                    // fs.unlinkSync(inputPath);
                })
                .catch(err => {
                    console.error('Error optimizing file:', err);
                });
        }
    });
});
