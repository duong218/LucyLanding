const fs = require('fs');
const path = require('path');

const images = [
  'photo-1509062522246-3755977927d7', // 1
  'photo-1427504070118-20d0fbc4e164', // 2
  'photo-1503676260728-1c00da094a0b', // 3
  'photo-1522202176988-66273c2fd55f', // 4
  'photo-1497633762265-9d179a990aa6', // 5
  'photo-1516321318423-f06f85e504b3', // 6
  'photo-1456513080510-7bf3a84b82f8', // 7
  'photo-1523240795612-9a054b0db644', // 8
  'photo-1423592704159-992374225d30', // 9
  'photo-1524178232363-1fb2b075b655', // 10
  'photo-1434030216411-0b793f4b4173', // 11
  'photo-1513258496099-48168024aec0', // 12
  'photo-1491841550275-ad7854e35ca6', // 13
  'photo-1588072432836-e10032774350', // 14
  'photo-1511629091441-ee46146481b6', // 15
  'photo-1501504905252-473c47e087f8', // 16
  'photo-1503428593586-e225b16459ce', // 17
  'photo-1523050853023-8c2d3000f1ad', // 18
  'photo-1577896851231-70ef18881754', // 19
  'photo-1546410531-bb4caa19020a',  // 20
];

const files = ['vi.js', 'en.js', 'zh.js'];

files.forEach(file => {
  const filePath = path.join(__dirname, '../src/locales', file);
  let content = fs.readFileSync(filePath, 'utf8');

  // We only want to replace the `img: 'photo-...'` inside the courses.items array.
  // A simple way is to match all `img: 'photo-xxxx'` and just replace them sequentially.
  // Wait, there are `img:` properties in the `courses.items`, and maybe `why` or `hero`?
  // Only `courses.items` has `img:` currently, based on previous views.

  let index = 0;
  content = content.replace(/img:\s*'[^']+'/g, (match) => {
    if (index < images.length) {
      const newImg = `img: '${images[index]}'`
      index++;
      return newImg;
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file} with ${index} images.`);
});
