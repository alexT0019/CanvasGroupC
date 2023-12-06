/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
//get the line width input element
const lineWidthInput = document.getElementById("lineWidth");
//get the stroke color input element
const strokeColorInput = document.getElementById("strokeColor");
//get the fill color input element
const fillColorInput = document.getElementById("fillColor")

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

//Update the line width when the input changes
lineWidthInput.addEventListener("input",function(){
  currentFunction.lineWidth = lineWidthInput.value;
})
//Update the stroke color when the input changes
strokeColorInput.addEventListener("input",function(){
  currentFunction.strokeStyle = strokeColorInput.value;
})
//Update the fill color when the input changes
fillColorInput.addEventListener("input",function(){
  currentFunction.fillStyle = fillColorInput.value;
})

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
  constructor(){}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}