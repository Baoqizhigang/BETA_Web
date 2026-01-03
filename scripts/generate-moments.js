const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images/ScoopAIHackathon/moments');
const OUTPUT_DIR = path.join(__dirname, '../src/data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'moments.json');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Read directory
fs.readdir(IMAGES_DIR, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    const moments = imageFiles.map((file, index) => {
        // Random height between 300 and 600
        const height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;

        return {
            id: index,
            img: `/images/ScoopAIHackathon/moments/${file}`,
            height: height
        };
    });

    fs.writeFile(OUTPUT_FILE, JSON.stringify(moments, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log(`Successfully generated data for ${moments.length} images from ScoopAIHackathon/moments.`);
        }
    });
});
