//save canvas function

//document ready
$(()=>{
    //On click 'save canvas' button, save canvas as jpeg named 'untitled.jpeg' to disc
    $('#save-canvas').click(function(){
        let canvasReal = document.getElementById("canvas-real");
        let a = document.createElement('a');
        a.setAttribute('download', 'untitled.jpeg');
        a.setAttribute('href', canvasReal.toDataURL("image/jpeg, 1.0"));
        a.click();
    })

})