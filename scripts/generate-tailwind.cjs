const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

const inputPath = path.join(__dirname, '..', 'src', 'index.css');
const outDir = path.join(__dirname, '..', 'public');
const outPath = path.join(outDir, 'tw.css');

async function run() {
  try {
    const css = fs.readFileSync(inputPath, 'utf8');
    const result = await postcss([tailwind(), autoprefixer()]).process(css, { from: inputPath });
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outPath, result.css, 'utf8');
    console.log(`Wrote ${outPath} (${result.css.length} bytes)`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
