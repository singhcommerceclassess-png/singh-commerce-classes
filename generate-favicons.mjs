import sharp from 'sharp';
import fs from 'fs';
import pngToIco from 'png-to-ico';

const input = 'public/logo.png';

async function generate() {
  const trimmedBuffer = await sharp(input).trim().toBuffer();
  
  const badgeBuffer = await sharp(trimmedBuffer)
    .extract({ left: 0, top: 0, width: 844, height: 844 })
    .toBuffer();

  const size = 844;
  const padding = 0; // Occupy 100% of canvas
  
  const paddedBadge = await sharp(badgeBuffer)
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();

  await sharp(paddedBadge).resize(16, 16).toFile('public/favicon-16x16.png');
  await sharp(paddedBadge).resize(32, 32).toFile('public/favicon-32x32.png');
  await sharp(paddedBadge).resize(48, 48).toFile('public/favicon-48x48.png');
  await sharp(paddedBadge).resize(180, 180).toFile('public/apple-touch-icon.png');
  
  const icoBuffer = await pngToIco('public/favicon-32x32.png');
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  
  console.log('Favicons generated successfully.');
}

generate().catch(console.error);
