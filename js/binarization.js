//2値化
var canvas,ctx,photo,comWidth,comHeight,url;

//グレースケール化→2値化
var binarization = document.getElementById('buttonbinarization').addEventListener('click',function(){
    var canvasbinarization = document.getElementById('canvasbinarization');
    var ctx5 = canvasbinarization.getContext('2d');
    const bnum = 128;
    photo = new Image();
    photo.src = url;
    photo.onload = function(){
        imageData = ctx.getImageData(0,0,comWidth,comHeight);
        binarization = ctx.createImageData(comWidth,comHeight);
        for(var i = 0;i<imageData.data.length;i+=4){
            var y = 0.2126*imageData.data[i]+0.7152*imageData.data[i+1]+0.0722*imageData.data[i+2];
            y = parseInt(y,10);
            if (y > bnum) {
                y = 255;
              } else {
                y = 0;
              }
            binarization.data[i]=y;
            binarization.data[i+1]=y;
            binarization.data[i+2]=y;
            binarization.data[i+3]=imageData.data[i+3];
        }
        ctx5.putImageData(binarization,0,0);
    }
})
