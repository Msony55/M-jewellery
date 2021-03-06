// Global variable
const defaultPerspective = '-150px';
// const pageX = window.screen.width;
// const pageY = window.screen.height;
// Track the mouse movemont
let mouseX = 0;
let mouseY = 0;
let lastXDeg = 180;
let lastYDeg = 180;
// The speed of the cube following movement
const speed = 0.1;

$(document).ready(()=>{
  drawContent();
  setInterval(rotateCube, 66)
})

$(document).mousemove(updateMousePosition);

// Set inner heml for face
function drawContent() {
  $('.face').html(`
    <div class='outer-layer'></div>
    <div class='cover cicle'></div>
    <div class='inner cicle'>
   <img src="img-01.png" alt="IMG" style="width:200px;height:200px;"> 
 `)
}

// Follow mouse movement
function updateMousePosition(e) {
  mouseX = e.pageX/getWidth();
  mouseY = e.pageY/getHeight();
}

function rotateCube() {
  lastXDeg = lastXDeg + (getAngle(mouseX) - lastXDeg
) * speed;
  lastYDeg = lastYDeg + (getAngle(mouseY) - lastYDeg
) * speed;
    let newStyle = `translateZ(${defaultPerspective}) rotateY(${lastXDeg}deg) rotateX(${lastYDeg}deg)`
    console.log(newStyle);
  $('.cube').css('transform', newStyle);
}

// this function return the corresponding angle for an x value
function getAngle(x) {
  return 180 - 360 * x;
}

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  )
}