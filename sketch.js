let capture;
let symmetry = 6;
let audioInput;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth / 2, windowHeight / 2);
  capture.hide();

  audioInput = new p5.AudioIn();
  audioInput.start();

  createInteractiveControls();
  noStroke();
}

function draw() {
  background(0);

  capture.loadPixels();
  if (capture.pixels.length > 0) {
    let stepSize = 10;
    let volume = audioInput.getLevel() * 500; 
    for (let x = 0; x < capture.width; x += stepSize) {
      for (let y = 0; y < capture.height; y += stepSize) {
        let index = (x + y * capture.width) * 4;
        let r = capture.pixels[index];
        let g = capture.pixels[index + 1];
        let b = capture.pixels[index + 2];

        fill(r, g, b, 200);
        let mirroredX = map(x, 0, capture.width, -volume, volume);
        let mirroredY = map(y, 0, capture.height, -volume, volume);

        for (let i = 0; i < symmetry; i++) {
          let angle = TWO_PI / symmetry * i;
          push();
          translate(width / 2, height / 2);
          rotate(angle);
          ellipse(mirroredX, mirroredY, stepSize, stepSize);
          pop();
        }
      }
    }
  }
}

function createInteractiveControls() {
  let sliderDiv = createDiv('Adjust Symmetry:').style('font-size', '16px').style('color', '#FFF');
  let symmetrySlider = createSlider(3, 12, symmetry);
  symmetrySlider.input(() => {
    symmetry = symmetrySlider.value();
  });

  createDiv('').style('margin', '10px 0');
  let label = createDiv('Speak into the microphone to see the kaleidoscope react!').style('font-size', '14px').style('color', '#FFF');
}
