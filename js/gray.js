var canvas,ctx,photo,comWidth,comHeight,url;

//グレースケール化
var gray = document.getElementById('buttongray').addEventListener('click',function(){
    var canvasgray = document.getElementById('canvasgary');
    var ctx2 = canvasgray.getContext('2d');
    photo = new Image();
    photo.src = url;
    photo.onload = function(){
        imageData = ctx.getImageData(0,0,comWidth,comHeight);
        gray = ctx.createImageData(comWidth,comHeight);
        for(var i = 0;i<imageData.data.length;i+=4){
            var y = 0.2126*imageData.data[i]+0.7152*imageData.data[i+1]+0.0722*imageData.data[i+2];
            y = parseInt(y,10);
            gray.data[i]=y;
            gray.data[i+1]=y;
            gray.data[i+2]=y;
            gray.data[i+3]=imageData.data[i+3];
        }
        ctx2.putImageData(gray,0,0);
    }
})
