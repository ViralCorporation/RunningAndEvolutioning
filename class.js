// Class Node
function Node() {
  let widht = 10;
  let startX = windowWidth / 2;
  let startY = windowHeight / 2;
  this.x = 0;
  this.y = 0;
  this.alphaSpeed = 5;
  this.red = random(255);
  this.blue = random(255);
  this.reach = 25;
  this.journeyAngle = random(360)
  this.visibleReach = 0;

  this.setSpeed = function (alphaSpeed) {
    this.alphaSpeed = alphaSpeed;
  };

  this.setAngle = function () {
    this.journeyAngle = random(360);
  };

  this.setPosition = function (x, y) {
    this.y = x;
    this.x = y;
  };

  this.setSex = function (red, blue) {
    this.red = red;
    this.blue = blue;
  };

  this.moveStart = function () {
    this.x = cos(this.journeyAngle) * frameCount * this.alphaSpeed + startX;
    this.y = sin(this.journeyAngle) * frameCount * this.alphaSpeed + startY;
  };

  this.move = function (x, y) {
    this.x = cos(this.journeyAngle) * frameCount * this.alphaSpeed + x;
    this.y = sin(this.journeyAngle) * frameCount * this.alphaSpeed + y;
  };

  this.display = function () {
    fill(0, 0, 0, 0);
    stroke(240);
    ellipse(this.x, this.y, this.reach, this.reach);
    fill(this.red, 0, this.blue);
    ellipse(this.x, this.y, widht, widht);
  }
};