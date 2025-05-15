import https from 'https';
import fs from 'fs';

const url = 'https://i.pinimg.com/736x/fc/fa/76/fcfa7679e6ef8edc3e601d796df297ff.jpg';
const path = 'public/cyberpunk-avatar.png';

https.get(url, (res) => {
    const fileStream = fs.createWriteStream(path);
    res.pipe(fileStream);

    fileStream.on('finish', () => {
        fileStream.close();
        console.log('Image downloaded successfully');
    });
}).on('error', (err) => {
    console.error('Error downloading image:', err.message);
}); 