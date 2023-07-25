console.log('Here');

const results = [
  { name: 'Satisfied', count: 1043, color: 'lightblue' },
  { name: 'Neutral', count: 563, color: 'lightgreen' },
  { name: 'Unsatisfied', count: 510, color: 'pink' },
  { name: 'No comment', count: 175, color: 'silver' },
];

let cx = document.querySelector('canvas').getContext('2d');

let img = document.createElement('img');
img.src = 'img/player.png';
let spriteW = 24,
  spriteH = 30;
img.addEventListener('load', () => {
  let cycle = 0;
  setInterval(() => {
    cx.clearRect(0, 0, spriteW, spriteH);
    cx.drawImage(
      img,
      // source rectangle
      cycle * spriteW,
      0,
      spriteW,
      spriteH,
      // destination rectangle
      0,
      0,
      spriteW,
      spriteH
    );
    cycle = (cycle + 1) % 8;
  }, 120);
});
