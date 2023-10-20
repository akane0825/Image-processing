var canvas,ctx,photo,comWidth,comHeight,url;

//選択された画像ファイルをcanvasに表示
function onFileSelect(files,canvas1){
    var element = document.getElementById("filebox");
    var txt = document.getElementById("text");
    txt.innerHTML=element.value;
    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    var reader = new FileReader();
    reader.onload = function(event){
        photo = new Image();
        photo.onload = function(){
            var cwidth = canvas.width;
            var cheight = canvas.height;
            var photowidth = photo.naturalWidth;
            var photoheight = photo.naturalHeight;
            var canvasratio = cheight /cwidth;
            var ratio = photoheight / photowidth;
            if(ratio <= canvasratio){
                comWidth = cwidth;
                var comratio = cwidth / photowidth;
                comHeight = comratio * photoheight;
            }else{
                comHeight = cheight;
                comratio = cheight / photoheight;
                comWidth = comratio * photowidth;
            }
            //canvasに圧縮された画像を表示
            ctx.drawImage(photo,0,0,comWidth,comHeight);
        }
        photo.src = event.target.result;
        url = photo.src;
    }
    reader.readAsDataURL(files[0]);
}

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

