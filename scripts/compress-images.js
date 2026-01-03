const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. 原图目录 (你的 5GB 图片)
const SOURCE_DIR = path.join(__dirname, '../public/images/ScoopAIHackathon/moments');

// 2. 输出目录 (压缩后的图片放在这里，避免覆盖原图)
// 我们把它们放在一个叫 'optimized' 的子文件夹里
const OUTPUT_DIR = path.join(__dirname, '../public/images/ScoopAIHackathon/moments-optimized');

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function compressImages() {
    console.log("🚀 Starting image compression...");

    const files = fs.readdirSync(SOURCE_DIR);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

    console.log(`📸 Found ${imageFiles.length} images. Processing...`);

    let count = 0;

    for (const file of imageFiles) {
        const inputPath = path.join(SOURCE_DIR, file);
        const outputPath = path.join(OUTPUT_DIR, file);

        try {
            // 核心逻辑：调整宽度为 800px (足够瀑布流看了)，质量 80%，转换为 webp (体积更小)
            // 注意：如果你想保留原扩展名，可以去掉 .toFormat('webp')，但 webp 效果最好
            await sharp(inputPath)
                .resize({ width: 800, withoutEnlargement: true }) // 宽度限制在 800px
                .jpeg({ quality: 80, mozjpeg: true }) // 压缩质量
                .toFile(outputPath);

            count++;
            if (count % 20 === 0) console.log(`✅ Processed ${count}/${imageFiles.length}`);
        } catch (err) {
            console.error(`❌ Error compressing ${file}:`, err.message);
        }
    }

    console.log("🎉 Compression complete!");
    console.log(`📁 Optimized images are in: ${OUTPUT_DIR}`);
}

compressImages();