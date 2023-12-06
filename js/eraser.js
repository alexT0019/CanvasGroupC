class Eraser extends PaintFunction {
    constructor (contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

        onMouseDown(coord, event) {

        }
        
        onDragging(coord, event) {
            this.storkeSize=20;
            this.contextReal.clearRect(coord[0],coord[1],this.storkeSize,this.storkeSize);
        }
        
        onMouseUp(coord,event) {

        }
    }
