/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/
class DrawingLine extends PaintFunction {
    // This class extends the PaintFunction class
    // You are only passing one instance here
  
    constructor(contextReal) {
      super();
      this.context = contextReal;
      this.context.lineWidth = lineWidthInput.value;
      this.context.strokeStyle = strokeColorInput.value;
    }
  
    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
      // Kind of line
      this.context.lineJoin = "round";

      // Drawing the line here
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
    }
    // Clicking and removing your mouse
    onDragging(coord, event) {
      this.draw(coord[0], coord[1]);
    }
  
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
  
    draw(x, y) {
      //
      this.context.lineTo(x, y);
      // Draw the line onto the page
      this.context.stroke();
    }
  }