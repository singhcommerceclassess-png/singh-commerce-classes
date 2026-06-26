import sharp from 'sharp';
import fs from 'fs';
import pngToIco from 'png-to-ico';

const input = 'public/images/logo.png';
const outputMark = 'public/images/logo-mark.png';

async function generate() {
  const trimmedBuffer = await sharp(input).trim().toBuffer();
  
  const badgeBuffer = await sharp(trimmedBuffer)
    .extract({ left: 0, top: 0, width: 844, height: 844 })
    .toBuffer();

  await sharp(badgeBuffer).toFile(outputMark);
  console.log('Created logo-mark.png');
  
  await sharp(badgeBuffer).resize(16, 16).toFile('public/favicon-16x16.png');
  await sharp(badgeBuffer).resize(32, 32).toFile('public/favicon-32x32.png');
  await sharp(badgeBuffer).resize(48, 48).toFile('public/favicon-48x48.png');
  await sharp(badgeBuffer).resize(180, 180).toFile('public/apple-touch-icon.png');
  await sharp(badgeBuffer).resize(192, 192).toFile('public/android-chrome-192x192.png');
  await sharp(badgeBuffer).resize(512, 512).toFile('public/android-chrome-512x512.png');

  const icoBuffer = await pngToIco('public/favicon-32x32.png');
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  
  console.log('Favicons generated successfully.');
}

generate().catch(console.error);
