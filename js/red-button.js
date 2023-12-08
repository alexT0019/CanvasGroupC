//default colour function (red)

//document ready
$(()=>{
    //On click colour buttons, change the stroke colour to respective colour(red, green, blue or yello)
    $('.red-button').click(function(){
        strokeColorInput.value = '#FF0000';
    })
})