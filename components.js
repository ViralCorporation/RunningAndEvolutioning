// Components

// Slider of speed.
function sliderFrameRate() {
	slider = createSlider(0, 10, 5, 0);
	slider.position(windowWidth *0.1, windowHeight * .95);
	slider.style('width', '80vw');
};

// Interations.
function txtInteractions() {

}

function scenario(fieldPosX, fieldPosY,fieldX,fieldY) {
	//Battle Field
	image(img, (width / 2) - (img.width / 2), 0);
	noStroke();
	fill('rgba(0, 0, 0, 0.14)');
	rect(fieldPosX + 3, fieldPosY + 3, fieldX + 3, fieldY + 3, 4);
	noStroke();
	fill(255, 204, 0)
	rect(fieldPosX, fieldPosY, fieldX, fieldY);
	fill('rgba(0, 0, 0, 1)');
	//Text
}
// Interations.
function btnStop() {
}

// Interations.
function btnReset() {
}