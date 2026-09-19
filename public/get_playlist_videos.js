const ytpl = require('ytpl');
const fs = require('fs');

async function main() {
    const urls = [
        "https://youtube.com/playlist?list=PLR3Wtc18_va58ILzopy-Q7l3dnRIXKc-z",
        "https://youtube.com/playlist?list=PLR3Wtc18_va5mvuJFRHw-V90qsAU5_Vhe",
        "https://www.youtube.com/live/nTxhflhWUIc",
        "https://youtu.be/xOWpVnALG3E"
    ];

    let finalVideoIds = [];

    for (let url of urls) {
        if (url.includes('playlist?list=')) {
            console.log(`Fetching playlist: ${url}`);
            try {
                const playlist = await ytpl(url, { limit: Infinity });
                const ids = playlist.items.map(i => i.id);
                console.log(`Found ${ids.length} videos in playlist.`);
                finalVideoIds.push(...ids);
            } catch (err) {
                console.error("Error fetching playlist", err.message);
            }
        } else {
            // extract video ID from regular youtube URL
            // live/nTxhflhWUIc or youtu.be/xOWpVnALG3E
            let vidId = '';
            if (url.includes('live/')) vidId = url.split('live/')[1].split('?')[0];
            else if (url.includes('youtu.be/')) vidId = url.split('youtu.be/')[1].split('?')[0];
            
            if (vidId) {
                finalVideoIds.push(vidId);
            }
        }
    }

    console.log(`Total videos to process: ${finalVideoIds.length}`);
    fs.writeFileSync('mega_batch.json', JSON.stringify(finalVideoIds, null, 2));
}

main();
