//Drawing circle function

class DrawingCircle extends PaintFunction {
    constructor (contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        //Style of stroke and fill
        this.contextDraft.lineWidth = lineWidthInput.value;
        this.contextDraft.strokeStyle = strokeColorInput.value;
        this.contextDraft.fillStyle = fillColorInput.value;
        //Original coordination
        this.x1 = coord[0];
        this.y1 = coord[1];
    }

    onDragging(coord, event) {
        //Style of stroke and fill (draft)
        this.contextDraft.lineWidth = lineWidthInput.value;
        this.contextDraft.strokeStyle = strokeColorInput.value;
        this.contextDraft.fillStyle = fillColorInput.value;
        //Clear draft
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
            );

        //If pressing shift, draw circle
        if(isShift){
            //Actually draw the circle
            this.contextDraft.beginPath();
            this.x2 = coord[0];
            this.y2 = coord[1];
            this.contextDraft.arc(
                this.x1,
                this.y1,
                Math.sqrt(Math.pow((radiusX(this.x1, this.x2)), 2) + Math.pow((radiusY(this.y1, this.y2)), 2)),
                0,
                Math.PI * 2
            );
            this.contextDraft.fill();
            this.contextDraft.beginPath();
            this.contextDraft.arc(
                this.x1,
                this.y1,
                Math.sqrt(Math.pow((radiusX(this.x1, this.x2)), 2) + Math.pow((radiusY(this.y1, this.y2)), 2)),
                0,
                Math.PI * 2
            );
            this.contextDraft.stroke();
        } else {
            //if not pressing shift, draw ellipse
            //Actually draw the ellipse
            this.contextDraft.beginPath();
            this.x2 = coord[0];
            this.y2 = coord[1];
            this.contextDraft.ellipse(
                this.x1,
                this.y1,
                radiusX(this.x1, this.x2),
                radiusY(this.y1, this.y2),
                0,
                0,
                Math.PI * 2
            );
            this.contextDraft.fill();
            this.contextDraft.beginPath();
            this.contextDraft.ellipse(
                this.x1,
                this.y1,
                radiusX(this.x1, this.x2),
                radiusY(this.y1, this.y2),
                0,
                0,
                Math.PI * 2
            );
            this.contextDraft.stroke();
        }
    }

    onMouseUp(coord, event) {
        //Style of stroke and fill (real)
        this.contextDraft.lineWidth = lineWidthInput.value;
        this.contextDraft.strokeStyle = strokeColorInput.value;
        this.contextDraft.fillStyle = fillColorInput.value;
        //Clear Draft
        this.contextDraft.clearRect(
            0,
            0,
            canvasReal.width,
            canvasReal.height
        );

        //If pressing shift, draw circle
        if(isShift){
        //Actually draw the circle
        this.contextReal.beginPath();
        this.contextReal.arc(
            this.x1,
            this.y1,
            Math.sqrt(Math.pow((radiusX(this.x1, this.x2)), 2) + Math.pow((radiusY(this.y1, this.y2)), 2)),
            0,
            Math.PI * 2
        );
        this.contextReal.fill();
        this.contextReal.beginPath();
        this.contextReal.arc(
            this.x1,
            this.y1,
            Math.sqrt(Math.pow((radiusX(this.x1, this.x2)), 2) + Math.pow((radiusY(this.y1, this.y2)), 2)),
            0,
            Math.PI * 2
        );
        this.contextReal.stroke();
    } else {
        //if not pressing shift, draw ellipse
            //Actually draw the ellipse
            this.contextReal.beginPath();
            this.x2 = coord[0];
            this.y2 = coord[1];
            this.contextReal.ellipse(
                this.x1,
                this.y1,
                radiusX(this.x1, this.x2),
                radiusY(this.y1, this.y2),
                0,
                0,
                Math.PI * 2
            );
            this.contextReal.fill();
            this.contextReal.beginPath();
            this.contextReal.ellipse(
                this.x1,
                this.y1,
                radiusX(this.x1, this.x2),
                radiusY(this.y1, this.y2),
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