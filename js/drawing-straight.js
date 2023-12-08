class DrawingStraight extends PaintFunction {
    constructor (contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.contextDraft.lineWidth = lineWidthInput.value;
        this.contextDraft.strokeStyle = strokeColorInput.value;
        this.contextReal.lineWidth = lineWidthInput.value;
        this.contextReal.strokeStyle = strokeColorInput.value;
    }

        onMouseDown(coord, event) {
            this.origX = coord[0];
            this.origY = coord[1];
        }
        
        onDragging(coord, event) {
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX,this.origY);
            this.contextDraft.lineTo(coord[0],coord[1]);
            this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
            this.contextDraft.stroke();
        }
        
        onMouseUp(coord,event) {
            this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX,this.origY);
            this.contextReal.lineTo(coord[0],coord[1]);
            this.contextReal.stroke();
        }
    }
