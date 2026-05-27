#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const HERO_DIR = path.join(__dirname, '..', 'public', 'images', 'hero');

function avgColor(samples) {
  const tot = samples.reduce((acc, s) => {
    acc.r += s[0]; acc.g += s[1]; acc.b += s[2]; return acc;
  }, {r:0,g:0,b:0});
  const n = samples.length;
  return [Math.round(tot.r/n), Math.round(tot.g/n), Math.round(tot.b/n)];
}

async function processFile(filePath) {
  const buf = await fs.promises.readFile(filePath);
  const img = sharp(buf).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info; // channels should be 4

  // sample corners (a small block) to estimate background color
  const samples = [];
  const sampleSize = 8;
  const samplePoints = [
    [0,0], [width-1,0], [0,height-1], [width-1,height-1]
  ];

  for (const [sx, sy] of samplePoints) {
    for (let y = 0; y < sampleSize && sy + y < height; y++) {
      for (let x = 0; x < sampleSize && sx + x < width; x++) {
        const px = Math.min(width-1, sx + x * (sx === 0 ? 1 : -1));
        const py = Math.min(height-1, sy + y * (sy === 0 ? 1 : -1));
        const idx = (py * width + px) * channels;
        samples.push([data[idx], data[idx+1], data[idx+2]]);
      }
    }
  }

  const bg = avgColor(samples);
  // threshold for color distance — tweak if needed
  const threshold = 72;

  // create new buffer and modify alpha channel where color is close to bg
  const out = Buffer.from(data); // copy
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const dr = r - bg[0], dg = g - bg[1], db = b - bg[2];
      const dist = Math.sqrt(dr*dr + dg*dg + db*db);
      // if close to background color, make transparent
      if (dist < threshold) {
        out[idx+3] = 0;
      } else {
        out[idx+3] = data[idx+3] === undefined ? 255 : data[idx+3];
      }
    }
  }

  const outPath = filePath.replace(/(\.png|\.jpg|\.jpeg)$/i, '') + '-transparent.png';
  await sharp(out, { raw: { width, height, channels } }).png().toFile(outPath);
  console.log('Wrote', outPath);
}

async function run() {
  if (!fs.existsSync(HERO_DIR)) {
    console.error('Hero directory not found:', HERO_DIR);
    process.exit(1);
  }

  const files = await fs.promises.readdir(HERO_DIR);
  const candidates = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));
  if (candidates.length === 0) {
    console.log('No PNG/JPG files found in', HERO_DIR);
    return;
  }

  for (const file of candidates) {
    const p = path.join(HERO_DIR, file);
    try {
      console.log('Processing', file);
      await processFile(p);
    } catch (err) {
      console.error('Failed', file, err.message || err);
    }
  }
}

run();
