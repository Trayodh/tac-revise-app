const { Jimp } = require('jimp');

async function createIcons() {
    console.log('Loading logo...');
    const image = await Jimp.read('assets/logo.jpeg');
    
    console.log('Creating icon-192.png...');
    const img192 = image.clone();
    img192.resize({ w: 192, h: 192 });
    await img192.write('icon-192.png');
    
    console.log('Creating icon-512.png...');
    const img512 = image.clone();
    img512.resize({ w: 512, h: 512 });
    await img512.write('icon-512.png');
    
    console.log('Done!');
}

createIcons().catch(console.error);
