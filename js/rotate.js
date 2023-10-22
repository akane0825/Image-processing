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