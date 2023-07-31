console.log('Here');

const results = [
  { name: 'Satisfied', count: 1043, color: 'lightblue' },
  { name: 'Neutral', count: 563, color: 'lightgreen' },
  { name: 'Unsatisfied', count: 510, color: 'pink' },
  { name: 'No comment', count: 175, color: 'silver' },
];

let cx = document.querySelector('canvas').getContext('2d');
// cx.beginPath();
// cx.moveTo(10, 90);

// cx.bezierCurveTo(10, 10, 90, 10, 50, 90);
// cx.lineTo(90, 10);
// cx.lineTo(10, 10);
// cx.closePath();
// cx.stroke();

// =================

// cx.beginPath();
// cx.moveTo(10, 90);

// cx.quadraticCurveTo(50, 50, 90, 90);
// cx.lineTo(60, 10);
// cx.closePath();
// cx.stroke();

// ==============

cx.beginPath();
// center=(50,50) radius=40 angle=0 to 7
cx.arc(50, 50, 35, 0, 7);
// center=(150,50) radius=40 angle=0 to ½π
cx.arc(150, 50, 40, 0, 0.5 * Math.PI);
cx.stroke();

// =====================

let pieCtx = document.getElementById('pie').getContext('2d');

let total = results.reduce((sum, { count }) => sum + count, 0);

let currentAngle = -0.5 * Math.PI;

for (let result of results) {
  let sliceAngle = (result.count / total) * 2 * Math.PI;
  pieCtx.beginPath();
  pieCtx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
  currentAngle += sliceAngle;
  pieCtx.lineTo(100, 100);
  pieCtx.fillStyle = result.color;
  pieCtx.fill();
}

// ======================

let textCtx = document.getElementById('text').getContext('2d');

textCtx.font = '28px Georgie';
textCtx.fillStyle = 'fuchsia';
textCtx.fillText('I can draw text ,too', 10, 50);

// ==================================

let imgCtx = document.getElementById('image').getContext('2d');
let img = document.createElement('img');
img.src = 'img/sprites.png';
img.addEventListener('load', () => {
  for (let x = 10; x < 200; x += 30) {
    cx.drawImage(img, x, 10);
  }
});

// ============================
let playerCtx = document.getElementById('player').getContext('2d');
let plyrImg = document.createElement('img');
plyrImg.src = 'img/player.png';

let spriteW = 24,
  spriteH = 30;

plyrImg.addEventListener('load', () => {
  let cycle = 0;

  setInterval(() => {
    playerCtx.clearRect(0, 0, spriteW, spriteH);
    playerCtx.drawImage(
      plyrImg,
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

// ===========================
let transCtx = document.getElementById('transform').getContext('2d');

transCtx.scale(3, 0.5);
transCtx.beginPath();
transCtx.arc(50, 50, 40, 0, 7);
transCtx.lineWidth = 3;
transCtx.stroke();

// ===================

function flipHorizontally(context, around) {
  context.translate(around, 0);
  context.scale(-1, 1);
  context.translate(-around, 0);
}

let flipCtx = document.getElementById('flip').getContext('2d');
let plrImg = document.createElement('img');
plrImg.src = 'img/player.png';

plrImg.addEventListener('load', () => {
  flipHorizontally(flipCtx, 100 + spriteW / 2);
  flipCtx.drawImage(plrImg, 0, 0, spriteW, spriteH, 100, 0, spriteW, spriteH);
});

// ===============================================================

let ct2 = document.getElementById('ct2').getContext('2d');
function branch(length, angle, scale) {
  ct2.fillRect(0, 0, 1, length);
  if (length < 8) return;
  ct2.save();
  ct2.translate(0, length);
  ct2.rotate(-angle);
  branch(length * scale, angle, scale);
  ct2.rotate(2 * angle);
  branch(length * scale, angle, scale);
  ct2.restore();
}
ct2.translate(300, 0);
branch(60, 0.5, 0.8);
