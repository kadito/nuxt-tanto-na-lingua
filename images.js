require('dotenv').config();

const { TINIFY_KEY } = process.env;

const main = async () => {
    const tinify = require("tinify");

    tinify.key = TINIFY_KEY;
    
    const item = "maria-bernardes";
    
    const imagePath = `./images/team/${item}.jpeg`;
    
    const source = tinify.fromFile(imagePath);
    
    
    const fullConverted = source.convert({type:"image/webp"});
    const fullExtension = await fullConverted.result().extension();
    fullConverted.toFile(`./public/assets/images/${item}.${fullExtension}`);
    
    const resized = source.resize({
        method: "cover",
        width: 200,
        height: 200
    });
    
    const converted = resized.convert({type:"image/webp"});
    const extension = await converted.result().extension();
    
    converted.toFile(`./public/assets/images/${item}-rounded.${extension}`);
}

main()