var nodes= [];
var slider;
let fieldPosX, fieldPosY, fieldX, fieldY;
function setup() {
  // User Experience layout.
  createCanvas(windowWidth, windowHeight);
  img = loadImage('assets/run.png'); // Load the image
  sliderFrameRate();
  fieldPosX = windowWidth * 0.25, fieldPosY = windowHeight * .1, fieldX = windowWidth * .5, windowHeight * .1, fieldY = windowHeight * .8;
  // Defining generation zero.
  for (var i=0;i<100;i++){
    nodes.push(new Node(windowWidth * .5, windowHeight * .5, fieldPosX, fieldPosY, fieldX, fieldY));
  }

  
  frameRate(10);

};

function draw() {
  // Redraw scene.
  background(1000);

  scenario(fieldPosX, fieldPosY, fieldX, fieldY);
  nodes.forEach(node => {
    node.move();
  });
}

function genZero() {
  var dot = [];

  for (i = 0; i < 10; i++) {
    dot[i] = new Node();
    if (i < 5) {
      dot[i].setSex(255, 0);
    }
    else {
      dot[i].setSex(0, 255);
    }
    dot[i].position(windowWidth / 2 + 30, windowHeight / 2 + sin(1 * 360 / 10) * frameCount * i)
    dot[i].display();
  }




};

