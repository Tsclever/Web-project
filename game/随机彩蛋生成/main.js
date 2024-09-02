const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
  return Math.floor(Math.random() * number);
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function draw() {
  // .clearRect(x坐标, y坐标, 页面宽度, 页面高度), 实际作用: 清楚页面内容
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    // beginPath()开始一个新的路径, 接下来可以使用Canvas提供方法进行 绘制
    ctx.beginPath();
    // arc(): 用于绘制一个圆形, Math.PI: 用于表示π的值
    // arc(圆心的x坐标, 圆心的y坐标, 圆的半径, 起始角度（弧度）, 结束角度（弧度）, 是否逆时针方向)
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI, false);
    ctx.fillStyle = getRandomColor();
    // 填充颜色, 与 fillStyle联动
    ctx.fill();
  }
}

btn.addEventListener('click', draw);