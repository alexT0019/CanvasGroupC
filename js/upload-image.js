let uploadImageBtn = document.getElementById('upload-image');
    uploadImageBtn.addEventListener('change', uploadImage, false);
    
    
function uploadImage(event){
    let canvasReal = document.getElementById("canvas-real");
    let contextReal = canvasReal.getContext("2d");
    let reader = new FileReader();
    reader.onload = function(event){
        let img = new Image();
        img.onload = function(){
            canvasReal.width = img.width;
            canvasReal.height = img.height;
            contextReal.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);     
}