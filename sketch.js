var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;

function setup() {
  background(255);
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  var options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(200, 385, width, 30, options);
  World.add(world, ground);
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
  background(220);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  fill(255, 0, 0);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 30);
}
