/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingRectangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      //Style of stroke and fill (draft)
      this.contextDraft.lineWidth = lineWidthInput.value;
      this.contextDraft.strokeStyle = strokeColorInput.value;
      this.contextDraft.fillStyle = fillColorInput.value;
      //Style of stroke and fill (real)
      this.contextReal.lineWidth = lineWidthInput.value;
      this.contextReal.strokeStyle = strokeColorInput.value;
      this.contextReal.fillStyle = fillColorInput.value;
    }
  
    onMouseDown(coord, event) {
      //Original coordination
      this.x1 = coord[0];
      this.y1 = coord[1];
    }
  
    onDragging(coord, event) {
      // Clear draft
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );
      
      //If pressing shift, draw square
      if(isShift){
        //Actually draw the square
        this.x2 = coord[0];
        this.y2 = coord[1];
        this.contextDraft.fillRect(
          this.x1,
          this.y1,
          squareLength(this.x1, this.x2, this.y1, this.y2),
          squareLength(this.x1, this.x2, this.y1, this.y2)
          )
        this.contextDraft.strokeRect(
          this.x1,
          this.y1,
          squareLength(this.x1, this.x2, this.y1, this.y2),
          squareLength(this.x1, this.x2, this.y1, this.y2)
        )
      } else {
        //if not pressing shift, draw rectangle
        //Actually draw the rectangle
        this.x2 = coord[0];
        this.y2 = coord[1];
       this.contextDraft.fillRect(
         this.x1,
         this.y1,
         this.x2 - this.x1,
         this.y2 - this.y1
         )
       this.contextDraft.strokeRect(
         this.x1,
         this.y1,
         this.x2 - this.x1,
         this.y2 - this.y1
       )
      
     }
  
    }
  
    onMouseMove() {}
  
    // Committing the element to the canvas
    onMouseUp(coord) {
      // Clear draft
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );
      
      //If pressing shift, draw square
      if(isShift){
        //Actually draw the square
        this.x2 = coord[0];
        this.y2 = coord[1];
        this.contextReal.fillRect(
          this.x1,
          this.y1,
          squareLength(this.x1, this.x2, this.y1, this.y2),
          squareLength(this.x1, this.x2, this.y1, this.y2)
          )
        this.contextReal.strokeRect(
          this.x1,
          this.y1,
          squareLength(this.x1, this.x2, this.y1, this.y2),
          squareLength(this.x1, this.x2, this.y1, this.y2)
        )
      } else {
        //if not pressing shift, draw rectangle
        //Actually draw the rectangle
        this.x2 = coord[0];
        this.y2 = coord[1];
       this.contextReal.fillRect(
         this.x1,
         this.y1,
         this.x2 - this.x1,
         this.y2 - this.y1
         )
       this.contextReal.strokeRect(
         this.x1,
         this.y1,
         this.x2 - this.x1,
         this.y2 - this.y1
       )
      
     }
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }
  
  //Custom Function
  
  function squareLength(x1, x2, y1, y2){
    if(x2 - x1 > y2 - y1){
      return x2 - x1;
    } else {
      return y2 - y1;
    }
  }
  
  //Check if user is pressing shift key
  $('body').keydown(function(e){
    if(e.keyCode === 16){
        isShift = true;
    }
  })
  
  $('body').keyup(function(e){
    if(e.keyCode === 16){
        isShift = false;
    }
  })