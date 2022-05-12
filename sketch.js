var Piezas;

function preoload(){

}

function setup(){
  createCanvas(1000,550);
  T = new Group();
  Lizq = new Group();
  Lderecha = new Group();
  //piezaT();
  //piezaLizq();
  //piezaLderecha();
  console.log(T);
}

function draw(){
  background(180);
  abajo();
  drawSprites();
 /* if(keyDown("d")){
    T.x = T.x + 5;
  } */
  
  for(var i = 0; i <T.length; i++ ){
    if(keyDown("right")){
    T[i].position.x += 5
    }
  }
  for(var i = 0; i <T.length; i++ ){
    if(keyDown("left")){
      T[i].position.x += -5
    }
  }
  for(var i = 0; i <Lizq.length; i++ ){
    if(keyDown("right")){
    Lizq[i].position.x += 5
    }
  }
  for(var i = 0; i <Lizq.length; i++ ){
    if(keyDown("left")){
      Lizq[i].position.x += -5
    }
  }
  for(var i = 0; i <Lderecha.length; i++ ){
    if(keyDown("right")){
    Lderecha[i].position.x += 5
    }
  }
  for(var i = 0; i <Lderecha.length; i++ ){
    if(keyDown("left")){
      Lderecha[i].position.x += -5
    }
  }
}



function abajo(){
  Piezas = Math.round(random(1,3));
  if(frameCount %1 == 0){
    switch(Piezas){
      case 1:
        piezaT();
        T.setVelocityEach(0,5);
        break;
        case 2:
          piezaLizq();
          Lizq.setVelocityEach(0,5);
          break;
          case 3:
            piezaLderecha();
            Lderecha.setVelocityEach(0,5);
            break;
  }
}
}