//delete canvas function

//document ready
$(()=>{
    //On click 'delete canvas' button, clear the canvas with clearRect function
    $('#delete-button').click(function(){
        let canvasReal = document.getElementById("canvas-real");
        let contextReal = canvasReal.getContext("2d");
        contextReal.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
          );
    })
})