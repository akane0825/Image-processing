//回転
//右回転
var angle = 0;
var Rrotate = document.getElementById('rightbutton').addEventListener('click',function(){
    var crotate = document.getElementById('canvas1');
    var ctx4 = crotate.getContext('2d');
    angle+=90;
    crotate.style.transform = "rotate("+angle+"deg)";
})
//左回転
var Lrotate = document.getElementById('leftbutton').addEventListener('click',function(){
    var crotate = document.getElementById('canvas1');
    var ctx4 = crotate.getContext('2d');
    angle-=90;
    crotate.style.transform = "rotate("+angle+"deg)";
})