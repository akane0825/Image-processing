var canvas,ctx,photo,comWidth,comHeight,url;

//モザイク
var mosaic = document.getElementById('buttonblur').addEventListener('click',function(){
    var canvasblur = document.getElementById('canvasblur');
    var ctx3 = canvasblur.getContext('2d');
    photo = new Image();
    photo.src = url;
    photo.onload = function(){
        imageData = ctx.getImageData(0,0,comWidth,comHeight);
        mosaic = ctx.createImageData(comWidth,comHeight);
       var mosaic_dot = 10;
       for(var y = mosaic_dot; y < imageData.height; y+= mosaic_dot){
        for(var x = mosaic_dot; x < imageData.width; x += mosaic_dot){
            var i = ((y*4)*imageData.width)+(x*4);
            for (m_y = (y-mosaic_dot); m_y < y; m_y++) {
                for (m_x = (x-mosaic_dot); m_x < x; m_x++) {
                    var m_i = ((m_y * 4) * imageData.width) + (m_x * 4);
                    mosaic.data[m_i] = imageData.data[i];
                    mosaic.data[m_i + 1] = imageData.data[i + 1];
                    mosaic.data[m_i + 2] = imageData.data[i + 2];
                    mosaic.data[m_i + 3] = imageData.data[i + 3];
                }
            }
        }
       }
        ctx3.putImageData(mosaic,0,0);
    }
})

