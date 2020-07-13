const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var i, boy, rain, rand, lightning;
var moved = false;
var bolt1, bolt2, bolt3;
var lightningFrame = 0;

function preload(){
  soundFormats("mp3");
  rain = loadSound("rain");

  bolt1 = loadImage("bolt1.png");
  bolt2 = loadImage("bolt2.png");
  bolt3 = loadImage("bolt3.png");
}

function setup(){
  var canvas = createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  rain.setLoop(true);
  canvas.mousePressed(()=>{
    if(moved === false){
      rain.play();
      moved = true;
    }
  });

  boy = new Boy(200, 550);

  for(i = 0; i < 100; i++){
    drops.push(new drop(random(0, 800), random(0, -800)));
  }
}

function draw() {
  background("rgb(41, 40, 75)");
  Engine.update(engine);

  rand = Math.round(random(1,3));
  if(frameCount%100 === 0){
    lightningFrame = frameCount;
    lightning = createSprite(random(20,380), random(50,100), 10, 10);
    switch(rand){
      case 1: lightning.addImage(bolt1);
      break;
      case 2: lightning.addImage(bolt2);
      break; 
      case 3: lightning.addImage(bolt3);
      break;
      default: break;
    }
    lightning.scale = random(1,2);
  }
  if(lightningFrame + 20 === frameCount && lightning !== undefined){
    lightning.destroy();
  }

  drawSprites();
  boy.display();

  if(moved === false){
    fill("white");
    textSize(25);
    textFont("Impact");
    text("Press Anywhere", 170,200);
  }

  for(i of drops){
    i.display();
    i.resetPos();
  }
}