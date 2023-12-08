class DrawingCurved extends PaintFunction {
    constructor (contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.counter = 0;
        this.contextDraft.lineWidth = lineWidthInput.value;
        this.contextDraft.strokeStyle = strokeColorInput.value;
        this.contextReal.lineWidth = lineWidthInput.value;
        this.contextReal.strokeStyle = strokeColorInput.value;
    }


        onMouseDown(coord, event) {
            if(this.counter==0){
                this.origX = coord[0];
                this.origY = coord[1];
                this.contextReal.beginPath();
                this.contextReal.moveTo(this.origX, this.origY);
            }else if(this.counter==1){}
        }
        
        onDragging(coord, event) {
            if (this.counter==0) {     
                this.endX=coord[0];
                this.endY=coord[1];
                this.contextDraft.closePath();
                this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
                this.contextDraft.beginPath();
                this.contextDraft.moveTo(this.origX,this.origY);
                this.contextDraft.quadraticCurveTo(this.origX,this.origY,this.endX,this.endY);
                this.contextDraft.stroke();
            }else if(this.counter==1){
                this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
                this.contextDraft.beginPath();
                this.contextDraft.moveTo(this.origX,this.origY);
                this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.endX,this.endY);
                this.contextDraft.stroke();
            } 

        }
        
        onMouseUp(coord,event) {
            if(this.counter==0){
                this.counter=1;
            }else if (this.counter==1){
                this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
                this.contextReal.quadraticCurveTo(coord[0],coord[1],this.endX,this.endY);
                this.contextReal.stroke();
                this.counter=0;
            }
  
        }
    }
