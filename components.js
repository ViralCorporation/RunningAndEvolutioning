// Components

// Slider of speed.
function sliderFrameRate() {
	slider = createSlider(1, 60, 40, 0);
	slider.position(10, windowHeight * .95);
	slider.style('width', '90vw');
};

// Interations.
function txtInteractions() {
	text(frameCount, width * .98, height * 1);
}

// Interations.
function btnStop() {
}

// Interations.
function btnReset() {
}