require('dotenv').config({ path: "../.env" });
const fs = require('fs');
const path = require('path');

const { TINIFY_KEY } = process.env;

const processImage = async (item) => {
    const tinify = require("tinify");
    tinify.key = TINIFY_KEY;
    
    // Check for both .jpg and .jpeg extensions
    let imagePath = `../images/team/${item}.jpg`;
    if (!fs.existsSync(imagePath)) {
        imagePath = `../images/team/${item}.jpeg`;
        if (!fs.existsSync(imagePath)) {
            console.log(`❌ Image not found: ${item}.jpg or ${item}.jpeg`);
            return;
        }
    }
    
    console.log(`🔄 Processing: ${item}`);
    
    try {
        const source = tinify.fromFile(imagePath);
        
        // Create full-size image (for profile pages)
        const fullResized = source.resize({
            method: "thumb",
            width: 2000,
            height: 1800
        });

        const fullConverted = fullResized.convert({type:"image/webp"});
        const fullExtension = await fullConverted.result().extension();
        await fullConverted.toFile(`../public/assets/images/${item}.${fullExtension}`);
        console.log(`✅ Created: ${item}.${fullExtension}`);
        
        // Create rounded thumbnail (for team grid)
        const resized = source.resize({
            method: "thumb",
            width: 200,
            height: 200
        });
        
        const converted = resized.convert({type:"image/webp"});
        const extension = await converted.result().extension();
        
        await converted.toFile(`../public/assets/images/${item}-rounded.${extension}`);
        console.log(`✅ Created: ${item}-rounded.${extension}`);
        
    } catch (error) {
        console.log(`❌ Error processing ${item}:`, error.message);
    }
}

const main = async () => {
    // Get image names from command line arguments
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        // Default: process the new team members
        const imagesToProcess = ['ana-gomes', 'catarina-duarte'];
        console.log(`📸 Processing default images: ${imagesToProcess.join(', ')}`);
        
        for (const item of imagesToProcess) {
            await processImage(item);
        }
    } else {
        // Process specified images
        console.log(`📸 Processing specified images: ${args.join(', ')}`);
        
        for (const item of args) {
            await processImage(item);
        }
    }
    
    console.log('🎉 Image processing complete!');
}

main()