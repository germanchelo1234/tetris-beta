function piezaT(){
    px = Math.round(random(100,900));
    //a = createSprite(200,-40,40,40);
    //b = createSprite(240,-40,40,40);
    //c = createSprite(160,-40,40,40);
    //d = createSprite(200,0,40,40);
    a = createSprite(px + 40,-40,40,40);
    b = createSprite(px + 80,-40,40,40);
    c = createSprite(px,-40,40,40);
    d = createSprite(px + 40,0,40,40);
    a.shapeColor = "blue"
    b.shapeColor = "blue"
    c.shapeColor = "blue"
    d.shapeColor = "blue"
    T.add(a);
    T.add(b);
    T.add(c);
    T.add(d);
}

function piezaLizq(){
    px = Math.round(random(100,900));
    a2 = createSprite(px,-80,40,40);
    b2 = createSprite(px,-40,40,40);
    c2 = createSprite(px,0,40,40);
    d2 = createSprite(px - 40,0,40,40);
    a2.shapeColor = "red"
    b2.shapeColor = "red"
    c2.shapeColor = "red"
    d2.shapeColor = "red"
    Lizq.add(a2);
    Lizq.add(b2);
    Lizq.add(c2);
    Lizq.add(d2);   
}

function piezaLderecha(){
    px = Math.round(random(100,900));
    a3 = createSprite(px,-80,40,40);
    b3 = createSprite(px,-40,40,40);
    c3 = createSprite(px,0,40,40);
    d3 = createSprite(px + 40,0,40,40);
    a3.shapeColor = "pink"
    b3.shapeColor = "pink"
    c3.shapeColor = "pink"
    d3.shapeColor = "pink"   
    Lderecha.add(a3);
    Lderecha.add(b3);
    Lderecha.add(c3);
    Lderecha.add(d3);
}

function piezauno(){

}