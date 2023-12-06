//Drawing circle function

//Variables
//Storing coordinations
let x1, y1, x2, y2;
//Is pressing shift key
let isShift = false;

class DrawingCircle extends PaintFunction {
    constructor (contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.fillStyle = "#000";
    }

    onMouseDown(coord, event) {
        //Style of stroke and fill
        this.contextReal.lineWidth = currentFunction.lineWidth;
        this.contextReal.strokeStyle = currentFunction.strokeStyle;
        this.contextReal.fillStyle = this.fillStyle;
        //Original coordination
        x1 = coord[0];
        y1 = coord[1];

    }

    onDragging(coord, event) {
        //Style of stroke and fill (draft)
        this.contextDraft.lineWidth = currentFunction.lineWidth;
        this.contextDraft.strokeStyle = currentFunction.strokeStyle;
        this.contextDraft.fillStyle = this.fillStyle;
        //Clear draft
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
            );

        //If pressing shift, draw circle
        if(isShift === true){
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
        } else {
            //if not pressing shift, draw eclipse
            //Actually draw the circle
            this.contextDraft.beginPath();
            x2 = coord[0];
            y2 = coord[1];
            this.contextDraft.ellipse(
                x1,
                y1,
                radiusX(x1, x2),
                radiusY(y1, y2),
                0,
                0,
                Math.PI * 2
            );
            this.contextDraft.fill();
            this.contextDraft.beginPath();
            this.contextDraft.ellipse(
                x1,
                y1,
                radiusX(x1, x2),
                radiusY(y1, y2),
                0,
                0,
                Math.PI * 2
            );
            this.contextDraft.stroke();
        }
    }

    onMouseUp(coord, event) {
        //Style of stroke and fill (draft)
        this.contextReal.lineWidth = currentFunction.lineWidth;
        this.contextReal.strokeStyle = currentFunction.strokeStyle;
        this.contextReal.fillStyle = this.fillStyle;
        //Clear Draft
        this.contextDraft.clearRect(
            0,
            0,
            canvasReal.width,
            canvasReal.height
        );

        //If pressing shift, draw circle
        if(isShift === true){
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
    } else {
        //if not pressing shift, draw eclipse
            //Actually draw the circle
            this.contextReal.beginPath();
            x2 = coord[0];
            y2 = coord[1];
            this.contextReal.ellipse(
                x1,
                y1,
                radiusX(x1, x2),
                radiusY(y1, y2),
                0,
                0,
                Math.PI * 2
            );
            this.contextReal.fill();
            this.contextReal.beginPath();
            this.contextReal.ellipse(
                x1,
                y1,
                radiusX(x1, x2),
                radiusY(y1, y2),
                0,
                0,
                Math.PI * 2
            );
            this.contextReal.stroke();
        }
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