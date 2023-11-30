//Drawing circle function

class DrawingCircle extends PaintFunction {
    constructor (contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        //Fill in colour
        this.contextReal.strokeStyle = "";
        this.contextReal.fillStyle = "";
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord, event) {
        //Context draft
        this.contextDraft.strokeStyle = "";
        this.contextDraft.fillStyle = "";
        //Clear
        this.contextDraft.clearCircle();
        //Actually draw the circle
        this.contextDraft.fillCircle();
    }

    
}

//Custom function

//Actually draw the circle
function fillCircle(x1, y1, radius){
    x1 = canvasReal.offsetX;
    y1 = canvasReal.offsetY;
}
console.log(x1, y1);