function setup() {
  createCanvas(400, 400);
}

function draw() {
  let raio = width / 10;
  let salto = raio ;   
  let x = raio / 2;
  let y = raio / 2;

  background(220);
  fill('#fff005');

  for (let i = salto; i <= width; i += salto) {
    for (let j = y; j <= height; j += salto) {
      circle(i-width/20, j, raio)
      
    }
  }
}
