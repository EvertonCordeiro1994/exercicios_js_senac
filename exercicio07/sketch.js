let movimento = 0;
let centerX = 300;
let centerY = 300;
let radius = 250;
let angle = 0;
let corBG = 'rgb(218,218,240)';

const nuvens = (x, y) => {
  fill('white');
  ellipse(x, y, 60, 40);
  ellipse(x + 50, y - (y / 3), 90, 40);
};



const sol = () => {
  let x = centerX + radius * cos(angle);
  let y = centerY + radius * sin(angle);

  angle += 0.01;
  

  if (x < 200) {
    fill('yellow');
    corBG = 'cyan';
  } else if (x >= 200 && x <= 400) {
    fill('red');
    corBG = 'orange';
  } else {
    fill('white');
    corBG = 'black';
  }

  circle(x, y, 50);
  if(y>height) {
    angle = PI
  }
};

const pinheiros = (x) => {
  fill('brown');
  rect(x + 20, 200, 30, 100);
  fill('green');
  triangle(x, 200, x + 35, 100, x + 70, 200);
};

function setup() {
  createCanvas(600, 350);
}

function draw() {
  background(corBG);

  movimento += 1;
  if (movimento >= width) { movimento = 0; }

  sol();
  nuvens(movimento, 50);

  fill('green');
  rect(0, 300, width, 55);

  for (let position = 0; position <= width; position += 50) {
    pinheiros(position);
  }
}
