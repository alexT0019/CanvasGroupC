//Drawing circle function

//Variables
//Storing coordinations
let x1, y1, x2, y2;

class DrawingCircle extends PaintFunction {
    constructor (contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        //Style of stroke and fill
        this.contextReal.lineWidth = 1;
        this.contextReal.strokeStyle = "black";
        this.contextReal.fillStyle = "grey";
        //Original coordination
        x1 = coord[0];
        y1 = coord[1];
    }

    onDragging(coord, event) {
        //Style of stroke and fill (draft)
        this.contextDraft.lineWidth = 1;
        this.contextDraft.strokeStyle = "black";
        this.contextDraft.fillStyle = "grey";
        //Clear draft
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        );
        //Actually draw the circle
        this.contextDraft.beginPath();
        x2 = coord[0];
        y2 = coord[1];
        this.contextDraft.arc(
            x1,
            y1,
            Math.sqrt(Math.pow((radiusX(x1, x2)), 2) + Math.pow((radiusY(y1, y2)), 2)),
            0,
            Math.PI * 2
        );
        this.contextDraft.fill();
        this.contextDraft.beginPath();
        this.contextDraft.arc(
            x1,
            y1,
            Math.sqrt(Math.pow((radiusX(x1, x2)), 2) + Math.pow((radiusY(y1, y2)), 2)),
            0,
            Math.PI * 2
        );
        this.contextDraft.stroke();
    }

    onMouseUp(coord, event) {
        //Style of stroke and fill (draft)
        this.contextReal.lineWidth = 1;
        this.contextReal.strokeStyle = "black";
        this.contextReal.fillStyle = "grey";
        //Clear Draft
        this.contextDraft.clearRect(
            0,
            0,
            canvasReal.width,
            canvasReal.height
        );
        //Actually draw the circle
        this.contextReal.beginPath();
        this.contextReal.arc(
            x1,
            y1,
            Math.sqrt(Math.pow((radiusX(x1, x2)), 2) + Math.pow((radiusY(y1, y2)), 2)),
            0,
            Math.PI * 2
        );
        this.contextReal.fill();
        this.contextReal.beginPath();
        this.contextReal.arc(
            x1,
            y1,
            Math.sqrt(Math.pow((radiusX(x1, x2)), 2) + Math.pow((radiusY(y1, y2)), 2)),
            0,
            Math.PI * 2
        );
        this.contextReal.stroke();
    }
}

//Custom Function

//Finding the differences between x and y-axis
function radiusX(x1, x2){
    if(x1 > x2){
        return x1 - x2;
    } else {
        return x2 - x1;
    }
}
function radiusY(y1, y2){
    if(y1 > y2){
        return y1 - y2;
    } else {
        return y2 - y1;
    }
}