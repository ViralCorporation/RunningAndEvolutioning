var TEFODEPORRA;
var TEFODEPORRA2;
var slider;
function setup() {
  // User Experience layout.
  createCanvas(windowWidth * .99, windowHeight * .96);
  sliderFrameRate();

  // Defining generation zero.
  TEFODEPORRA = new Node();
  TEFODEPORRA2 = new Node();
};

function draw() {
  // Redraw scene.
  background(1000);

  // Show the quantity of interactions
  txtInteractions();

  frameRate(slider.value());


  TEFODEPORRA2.moveStart();
  TEFODEPORRA2.display();
  
  TEFODEPORRA.moveStart();
  TEFODEPORRA.display();

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