
const cobrinhaCorpo = (posX,tamanho) => {
  for(let i = 0; i < tamanho; i++){
    fill('white')
    circle(posX,200,40)
    posX += 40 / 2
  }

  fill('black')
  circle(posX-20,195,10);
  circle(posX-10,195,10); 
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('blue');
  cobrinhaCorpo(50,5);
}
