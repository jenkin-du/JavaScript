var chess = document.getElementById("chess");
var context = chess.getContext("2d");

var me = true;

context.strokeStyle = "#8B8B8B";//设置线框的颜色

var wins = [];

for (var i = 0; i < 15; i++) {
    wins[i] = [];
    for (var j = 0; j < 15; j++) {
        wins[i][j] = [];
    }
}

var count = 0;
for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 11; j++) {
        for (var k = 0; k < 5; k++) {
            wins[i][j + k][count] = true;
        }
        count++;
    }
}


var arr = [];
for (var i = 0; i < 15; i++) {
    arr[i] = [];
    for (var j = 0; j < 15; j++) {
        arr[i][j] = 0;
    }
}

var image = new Image();
image.src = "image/imooc.jpg";

image.onload = function () {
    context.drawImage(image, 0, 0, 450, 450);//绘制背景图片
    drawLine();//绘制网格
}


var drawLine = function () {


    for (var i = 0; i < 15; i++) {
        context.moveTo(15 + i * 30, 15);
        context.lineTo(15 + i * 30, 435);
        context.stroke();

        context.moveTo(15, 15 + i * 30);
        context.lineTo(435, 15 + i * 30);
        context.stroke();
    }
}

var drawOnStep = function (i, j, me) {

    context.beginPath();//画板开始绘制路径

    context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);//画圆

    context.closePath();

    var gradient = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13,
        15 + i * 30, 15 + j * 30, 0);//产生渐变对象
    if (me) {
        gradient.addColorStop(0, "#0A0A0A");
        gradient.addColorStop(1, "#636766");//设置渐变颜色
    } else {
        gradient.addColorStop(0, "#D1D1D1");
        gradient.addColorStop(1, "#F9F9F9");//设置渐变颜色
    }
    context.fillStyle = gradient;

    context.fill();//让图形显示出来,填充
}

chess.onclick = function (event) {
    var x = event.offsetX;
    var y = event.offsetY;//获取点击的坐标

    var i = Math.floor(x / 30);
    var j = Math.floor(y / 30);

    if (arr[i][j] == 0) {

        drawOnStep(i, j, me);
        if (me) {
            arr[i][j] = 1;
        } else {
            arr[i][j] = 2;
        }
        me = !me;
    }
}

