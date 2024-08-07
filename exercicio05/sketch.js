function setup() {
  createCanvas(400, 400);
}

function draw() {
  let tamanho_da_bolinha = width / 10;
  let posicaoInicial = tamanho_da_bolinha / 2

  background(220);
  fill('#fff005');

  for (let x = posicaoInicial; x <= width; x += tamanho_da_bolinha) {
    for (let y = posicaoInicial; y <= height; y += tamanho_da_bolinha) {
      circle(x, y, tamanho_da_bolinha)

    }
  }
}
