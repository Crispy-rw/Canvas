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
