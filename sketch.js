const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var hero;
var block1, block2, block3, block4, block5,block6, block7, block8, block9, block10, block11, block12, block13, block14, block15,block16, block17, block18, block19, block20, block21, block22, block23, block24, block25,block26, block27, block28, block29, block30, block31, block32, block33, block34, block35,block36, block37, block38, block39, block40;
var bgImg;
var ground;
var chain;
var monsterBody;
var laserButton, buttonImg;
var laserImg;
var imgl;
var bg1, bg1Img;

function preload(){
    bgImg = loadImage("assets/bgImg.jpg");
    buttonImg = loadImage("assets/button.gif");
    laserImg = loadImage("assets/laser.png");
}

function setup(){
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  // laserButton = createSprite(47, 47, 30,30);
  // laserButton.addImage("laserButtonImg", buttonImg);
  // laserButton.scale=0.2;
  // laserButton.debug=true;
  // laserButton.setCollider('circle', 0, 0, 130);
  ground = new Ground(600, 565, 2400, 50);

  block1 = new Box(485, 500, 20, 20);
  block2 = new Box(510, 500,20, 20);
  block3 = new Box(485, 470,20, 20);
  block4 = new Box(510,470, 20, 20);
  block5 = new Box(485,440, 20, 20);
  block6 = new Box(510, 440,20, 20);
  block7 = new Box(485, 410, 20, 20);
  block8 = new Box(510, 410, 20, 20);
  block9 = new Box(485, 380, 20, 20);
  block10 = new Box(510, 380, 20, 20);
  block11 = new Box(485, 350, 20, 20);
  block12 = new Box(510, 350,20, 20);
  block13 = new Box(485, 320,20, 20);
  block14 = new Box(510, 320, 20, 20);
  block15 = new Box(485, 290, 20, 20);
  block16 = new Box(510, 290,20, 20);
  block17 = new Box(485, 260, 20, 20);
  block18 = new Box(510, 260, 20, 20);
  block19 = new Box(485, 220, 20, 20);
  block20 = new Box(510, 220, 20, 20);
  block21 = new Box(485, 500, 20, 20);
  block22 = new Box(510, 500,20, 20);
  block23 = new Box(485, 470,20, 20);
  block24 = new Box(510,470, 20, 20);
  block25 = new Box(485,440, 20, 20);
  block26 = new Box(510, 440,20, 20);
  block27 = new Box(485, 410, 20, 20);
  block28 = new Box(510, 410, 20, 20);
  block29 = new Box(485, 380, 20, 20);
  block30 = new Box(510, 380, 20, 20);
  block31 = new Box(485, 350, 20, 20);
  block32 = new Box(510, 350,20, 20);
  block33 = new Box(485, 320,20, 20);
  block34 = new Box(510, 320, 20, 20);
  block35 = new Box(485, 290, 20, 20);
  block36 = new Box(510, 290,20, 20);
  block37 = new Box(485, 260, 20, 20);
  block38 = new Box(510, 260, 20, 20);
  block39 = new Box(485, 220, 20, 20);
  block40 = new Box(510, 220, 20, 20);

  monsterBody = new Monster(860, 295, 320, 400);
  hero=new Hero(100, 200, 200, 200);
  chain=new Chain(hero.body, {x:225, y:300});
 


 // button = createSprite(100, 100, 80, 40);

  // heroSprite=createSprite(200, 400, 100, 100);
  // heroSprite.debug=true;
  // heroSprite.setCollider('rectangle', 0, 0, 100, 150);

  Engine.run(engine);
}

function draw(){
    background(bgImg);
    // push();
    // textStyle(BOLD);
    // textSize(15);
    // fill("WHITE");
    // textFont("Verdana");
    // text("Laser", 25, 90);
    // pop();
    
    // if(laserButton.visible=true){
    //      imageMode(CENTER);
    //     image(laserImg,850, 300, 5, 1200);
    //     image(laserImg, 800, 300, 5, 1200);
    // }
    drawSprites();
 
    ApplyForce();
     block1.display();
     block2.display();
     block4.display();
     block5.display();
     block3.display();
     block6.display();
     block7.display();
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();
     block13.display();
     block14.display();
     block15.display();
     block16.display();
     block17.display();
     block18.display();
     block19.display();
     block20.display();
     block21.display();
     block22.display();
     block24.display();
     block25.display();
     block23.display();
     block26.display();
     block27.display();
     block28.display();
     block29.display();
     block30.display();
     block31.display();
     block32.display();
     block34.display();
     block35.display();
     block33.display();
     block36.display();
     block37.display();
     block38.display();
     block39.display();
     block40.display();

      monsterBody.display();
      hero.display();
      chain.display();
      
      text(mouseX+","+mouseY,mouseX,mouseY);
      Engine.update(engine);
      
      //detectCollision();
    }
  function mouseDragged(){
     if(hero.body.position.x>=25){
       Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
     }
  }
  function mouseReleased(){
    chain.fly();
  }
  function keyPressed(){
    if(keyCode===32){
      chain.attach(hero.body);
    }
  }
  

  function detectCollision(){
      var pos1 = monsterBody.body.position;
      var pos2 = hero.body.position;
      var distance = dist(pos1.x, pos1.y, pos2.x, pos2.y);
      if(distance<=pos1.x/2+pos2.x/2){
          Matter.Body.setStatic(monsterBody.body, false);
      }
  }


  function ApplyForce(){
    if(keyWentDown(LEFT_ARROW)){
          Matter.Body.applyForce(hero.body, hero.body.position, {x:-10, y:0});
    }
    if(keyWentDown(RIGHT_ARROW)){
          Matter.Body.applyForce(hero.body, hero.body.position, {x:10, y:2});
    }
  }