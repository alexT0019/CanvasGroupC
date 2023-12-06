//Set "R" word change color in random
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // change color per second
  setInterval(function() {
    var flashingText = document.getElementById('flashing-text');
    flashingText.style.color = getRandomColor();
  }, 1000);