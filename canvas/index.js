const canvas = document.getElementById('canvas');
// 获取 CanvasRenderingContext2D 接口, 由此完成绘制
const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// fillRect(x,y,width,height)
// ctx.fillRect(10, 10, 300, 150); // 填充
// ctx.clearRect(50, 50, 60, 60);  // 透明

// ctx.strokeStyle = 'orange';
// ctx.strokeRect(50, 50, 100, 100);

// console.log(ctx);

// 创建路径
// ctx.beginPath();
// ctx.strokeStyle = 'orange';
// ctx.lineWidth = 5;
// ctx.moveTo(50, 50); // 起点
// ctx.lineTo(100, 50); // 终点
// ctx.lineTo(100, 100); // 终点
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = 'orange';
// ctx.arc(50, 50, 20, 0, (Math.PI / 180) * 64);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 20);
// ctx.arcTo(150, 100, 50, 20, 0);
// ctx.lineTo(50, 20);
// ctx.strokeStyle = 'orange';
// ctx.stroke();

// ctx.fillRect(150, 20, 5, 5);
// ctx.fillRect(150, 100, 5, 5);
// ctx.fillRect(50, 20, 5, 5);

// ctx.fillStyle = 'blue';

// ctx.beginPath();
// ctx.moveTo(50, 20);
// ctx.quadraticCurveTo(230, 30, 50, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 20);
// ctx.bezierCurveTo(230, 50, 150, 60, 50, 100);
// ctx.stroke();

// ctx.translate(100, 100);
// ctx.scale(2, 1);
// ctx.rotate((Math.PI / 180) * 30);
// ctx.transform(1, 1, 0, 1, 0, 0);
// ctx.setTransform(1, 1, 0, 1, 0, 0);
// ctx.fillRect(50, 0, 20, 20);

// ctx.fillRect();

const img = new Image();
img.src = 'https://www.apple.com/favicon.ico';

img.onload = function () {
  const pattern = ctx.createPattern(img, 'no-repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 150);
};
