function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    circle(mouseX,mouseY,50)

    if(mouseX >= 199){ 
      fill('#0000FF')
    }else{
      fill('#FF0000')
    }
  }