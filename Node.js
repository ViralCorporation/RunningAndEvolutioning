class Node {
  constructor(x, y, fieldPosX, fieldPosY, fieldX, fieldY) {
    this.fieldPosX = fieldPosX;
    this.fieldPosY = fieldPosY;
    this.fieldX = fieldX;
    this.fieldY = fieldY;
    this.x = x;
    this.y = y;
    this.speed = 10
    this.red = random(255);
    this.blue = random(255);
    this.reach = 25;
    this.journeyAngle = random(-PI, PI);
    this.age = true;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  setAngle() {
    this.journeyAngle = random(360);
  };

  setPosition(x, y) {
    this.y = x;
    this.x = y;
  };

  setSex(red, blue) {
    this.red = red;
    this.blue = blue;
  };

  getOlder() {
    this.age++
  };


  move() {
    if ((this.x >= fieldPosX + fieldX)) {
      this.journeyAngle = -this.journeyAngle + PI;
    } else if ((this.x <= fieldPosX)) {
      this.journeyAngle = -this.journeyAngle + PI;
    }
    if (this.y >= ((fieldPosY + fieldY))) {
      this.journeyAngle = - this.journeyAngle;
    } else if (this.y <= (fieldPosY)) {
      this.journeyAngle = -this.journeyAngle;
    }

    if (this.age === true) {
      this.x = cos(this.journeyAngle) * this.speed + this.x;
      this.y = sin(this.journeyAngle) * this.speed + this.y;
    }
    this.display();
  };

  display() {
    fill(0, 0, 0, 0);
    stroke(240);
    ellipse(this.x, this.y, this.reach, this.reach);
    fill(this.red, 0, this.blue);
    ellipse(this.x, this.y, 10, 10);
  }
};