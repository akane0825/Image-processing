var canvas,ctx,photo,comWidth,comHeight,url;

//回転
//右回転
var Rrotate = document.getElementById('rightbutton').addEventListener('click',function(){
    var canvasrotate = document.getElementById('canvas1');
    var ctx4 = canvasrotate.getContext('2d');
    photo = new Image();
    photo.src = url;
    photo.onload = function(){
        imageData = ctx.getImageData(0,0,comWidth,comHeight);
        rotate = ctx.createImageData(comWidth,comHeight);
        
        ctx4.putImageData(rotate,0,0);
    }
})
//左回転
var Lrotate = document.getElementById('leftbutton').addEventListener('click',function(){
    
})