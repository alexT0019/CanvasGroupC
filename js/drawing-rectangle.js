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
  }

  onMouseDown(coord, event) {
    //Style of stroke and fill
    this.contextReal.lineWidth = 1;
    this.contextReal.strokeStyle = "black";
    this.contextReal.fillStyle = "white";
    //Original coordination
    this.x1 = coord[0];
    this.y1 = coord[1];
  }

  onDragging(coord, event) {
    //Style of stroke and fill (draft)
    this.contextDraft.lineWidth = 1;
    this.contextDraft.strokeStyle = "black";
    this.contextDraft.fillStyle = "white";
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
    //Style of stroke and fill (real)
    this.contextReal.lineWidth = 1;
    this.contextReal.strokeStyle = "black";
    this.contextReal.fillStyle = "white";
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