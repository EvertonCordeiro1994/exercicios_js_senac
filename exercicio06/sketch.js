let movimento = 0;

const nuvens = (x, y) => {
  fill('white');
  ellipse(x, 50, y, 40);
  ellipse(x + 50, y - (y / 3), 90, 40);
}

const sol = (x) => {

  if (x <= 200) {
    fill('yellow')
  } else if (x > 200 && x < 400) {
    fill('red')
  } else {
    fill('white')
  }
  circle(x, 50, 50)
}

const pinheiros = (x) => {
  fill('brown');
  rect(x + 20, 200, 30, 100);
  fill('green');
  triangle(x, 200, x + 35, 100, x + 70, 200);
}

function setup() {
  createCanvas(600, 350);
}

function draw() {
  movimento += 1;
  if (movimento - 50 >= width) { movimento = 0 }

  if (movimento <= 200) {
    background('rgb(218,218,240)');
  } else if (movimento > 200 && movimento < 400) {
    background('orange');
  } else {
    background('black');
  }

  sol(movimento);

  fill('green');
  rect(0, 300, width, 55);

  for (let position = 0; position <= width; position += 50) {
    pinheiros(position);
  }
}
