import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set viewport to match our desired favicon size with higher resolution
    await page.setViewport({
        width: 180,
        height: 180,
        deviceScaleFactor: 2 // Higher resolution
    });

    // Load our HTML file
    await page.goto(`file:${join(__dirname, 'public', 'circle-crop.html')}`);
    
    // Wait for the circle-crop div to be visible
    await page.waitForSelector('.circle-crop', { visible: true });
    
    // Take screenshot
    await page.screenshot({
        path: 'public/favicon-circle.png',
        clip: {
            x: 0,
            y: 0,
            width: 180,
            height: 180
        },
        omitBackground: true // Make background transparent
    });

    await browser.close();
})(); 