




var follower,fixed,game1,game2
function setup() {
  createCanvas(800,400);
 fixed = createSprite(400, 200, 50, 50);
 game1 = createSprite(800,200,50,50)
  follower = createSprite(400,200,50,50)
  game2 = createSprite(200,400,50,50)

}

function draw() {
  background(255,255,255); 
  follower.x = mouseX
  follower.y = mouseY
  if (isTouching(follower,fixed)){
    follower.shapeColor = "red"
    fixed.shapeColor = "orange"



  }
  if (isTouching(follower,game2)){
    follower.shapeColor = "red"
    game2.shapeColor = "orange"

  }
  if (isTouching(follower,game1)){
    follower.shapeColor = "red"
    game1.shapeColor = "orange"
  }
  
  

  drawSprites();
}
function isTouching (object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2 
    && object1.y - object2.y < object1.height/2 + object2.height/2 
    && object2.y - object1.y < object1.height/2 + object2.height/2 ){
   return true

    }
}