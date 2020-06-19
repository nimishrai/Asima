var blood,maze,ball,maze1,lifeLine;
function preload(){
  bloodImg=loadImage ("blood.png")
  bg=loadImage("hospital.jpg")

  lifeimg=loadImage("lifeline.jpeg")
  //mazeImg=loadImage ("maze.png")
 // maze1Img=loadImage("maze1.png")
}

function setup() {
  createCanvas(1200,800);
  blood = createSprite(520, 290, 50, 50);
  blood.addImage(bloodImg);
  blood.scale=0.07;
  lifeline=4;

 // maze.addImage(mazeImg);
  maze  = createSprite(788.6,60,570,10)
  maze1 = createSprite(500,160,10,210);
  maze2 = createSprite(500,450,10,250);
  maze3 = createSprite(785,570,580,10);
  maze4 = createSprite(1070,345,10,460);
  maze5 = createSprite(605,210,10,100);
  maze6 = createSprite(550,210,100,10);
  maze7 = createSprite(582,120,155,10);
  maze8 = createSprite(655,170,10,90);
  maze9 = createSprite(704,210,90,10);
  maze10 = createSprite(580,156,60,10);
  maze11 = createSprite(750,115,10,100);
  maze12 = createSprite(845,90,10,50);
  maze13 = createSprite(980,80,10,49);
  maze14 = createSprite(930,100,90,10);
  maze15 = createSprite(824,232,10,150);
  maze16 = createSprite(792,312,74,10);
  maze17 = createSprite(754,342,10,70);
  maze18 = createSprite(659.5,372,200,10);
  maze19 = createSprite(610,520,10,110);
  maze20 = createSprite(556,425,10,200);
  maze21 = createSprite(581,421,60,10);
  maze22 = createSprite(700,390,10,210);
  maze23 = createSprite(640,500,50,10);
  maze24 = createSprite(750,490,100,10);
  maze25 = createSprite(800,510,10,50);
  maze26 = createSprite(760,450,10,70);
  maze27 = createSprite(860,510,10,117);
  maze28 = createSprite(890,450,180,10);
  maze29 = createSprite(1000,490,150,10);
  maze30 = createSprite(925,517,10,65);
  maze31 = createSprite(950,545,60,10);
  maze32 = createSprite(1035,430,10,120);
  maze33 = createSprite(982,370,115,10);
  maze34 = createSprite(925,331.5,10,85);
  maze35 = createSprite(940,290,120,10);
  maze36 = createSprite(880,315,10,60);
  maze37 = createSprite(852,350,65,10);
  maze38 = createSprite(900,190,160,10);
  maze39 = createSprite(979,148,10,93);
  maze41 = createSprite(1010,240,120,10);

  corona1 = createSprite(900,152,10,10);
  corona2 = createSprite(600,400,10,10);
  corona3 = createSprite(794,394,10,10);
  corona4 = createSprite(631,232,10,10);
  corona5 = createSprite(887,516,10,10);

lifeline1 = createSprite(624,615,10,10);
lifeline2 = createSprite(757,610,10,10);
lifeline3 = createSprite(822,604,10,10);
lifeline1.addImage(lifeimg);
lifeline1.scale=0.3;
lifeline2.addImage(lifeimg);
lifeline2.scale=0.3;
lifeline3.addImage(lifeimg);
lifeline3.scale=0.3;
lifeline4 = createSprite(962,604,10,10);
lifeline4.addImage(lifeimg);
lifeline4.scale=0.3;
  //maze40 = createSprite(1022,120,105,10);
 corona1.velocityX=3;
 corona2.velocityX=3;
 corona3.velocityX=3;
 corona4.velocityX=3;


 //corona2.velocityY=5;
 
  corona3.shapeColor="black"
  corona1.shapeColor="pink"
  corona2.shapeColor="turquoise"
  corona4.shapeColor="violet"
 // maze1.addImage(maze1Img);

  blood.setCollider("rectangle",0,0,450,450)
  blood.debug=true;
 // maze1.addImage(maze1Img);
 // maze1.scale= 0.5;
 // maze1 = createSprite(25,100)
}

function draw() {
  
  background(bg);


  if(keyDown (UP_ARROW) ){
    blood.y = blood.y-4;
  }
  if(keyDown (DOWN_ARROW)){
blood.y=blood.y+4;
  }
  if (keyDown(LEFT_ARROW)){
    blood.x=blood.x-4;
  }
if (keyDown(RIGHT_ARROW)){
  blood.x=blood.x+4;
}
if(blood.isTouching(corona1)){
  lifeline=lifeline-1;
  corona1.setVelocity(0,0);
  lifeline1.visible=false;
  console.log("cororna 1")
}
if(blood.isTouching(corona2)){
  lifeline=lifeline-1;
  corona2.setVelocity(0,0);
  lifeline2.visible=false;
  console.log("cororna 2")
}
if(blood.isTouching(corona3)){
  lifeline=lifeline-1;
  corona3.setVelocity(0,0);
  lifeline3.visible=false;
  console.log("cororna 3")
}
if(blood.isTouching(corona4)){
  lifeline=lifeline-1;
  corona4.setVelocity(0,0);
  lifeline4.visible=false;
  console.log("cororna 4")
}

bloodCollide();
bounceOffCorona();
// console.log(mouseX,mouseY)
  drawSprites();
}
function bounceOffCorona(){
  corona1.bounceOff(maze11);
  corona1.bounceOff(maze39);
  corona2.bounceOff(maze20);
  corona2.bounceOff(maze22);
  corona3.bounceOff(maze22);
  corona3.bounceOff(maze32);
  corona4.bounceOff(maze5);
  corona4.bounceOff(maze15);

}
function bloodCollide(){
  blood.collide(maze);
  blood.collide(maze1);
  blood.collide(maze2);
  blood.collide(maze3);
  blood.collide(maze4);
  blood.collide(maze5);
  blood.collide(maze6);
  blood.collide(maze7);
  blood.collide(maze8);
  blood.collide(maze9);
  blood.collide(maze10);
  blood.collide(maze11);
  blood.collide(maze12);
  blood.collide(maze13);
  blood.collide(maze14);
  blood.collide(maze15);
  blood.collide(maze16);
  blood.collide(maze17);
  blood.collide(maze18);
  blood.collide(maze19);
  blood.collide(maze20);
  blood.collide(maze21);
  blood.collide(maze22);
  blood.collide(maze23);
  blood.collide(maze24);
  blood.collide(maze25);
  blood.collide(maze26);
  blood.collide(maze27);
  blood.collide(maze28);
  blood.collide(maze29);
  blood.collide(maze30);
  blood.collide(maze31);
  blood.collide(maze32);
  blood.collide(maze33);
  blood.collide(maze34);
  blood.collide(maze35);
  blood.collide(maze36);
  blood.collide(maze37);
  blood.collide(maze38);
  blood.collide(maze39);
 // blood.collide(maze40);
  blood.collide(maze41);

}
