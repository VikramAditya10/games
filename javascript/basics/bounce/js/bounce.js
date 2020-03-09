const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height;
let dx = 2;
let dy =  -2;
function draw(){
clearCanvas();
drawArc();
x+=dx;
dx=x>canvas.width||x<0?-dx:dx;
dy = y>canvas.height||y<0?-dy:dy;
y+=dy;

}
function drawArc() {
context.beginPath();
context.arc(x, y, 10, 0, Math.PI*2);
context.fillStyle = "#0095DD";
context.fill();
context.closePath();
}
function clearCanvas(){
context.clearRect(0, 0, canvas.width, canvas.height)
}
setInterval(draw,10);
