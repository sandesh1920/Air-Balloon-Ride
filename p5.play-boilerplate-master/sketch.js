function setup() {
  createCanvas(800,400);
  var balloonPosition=database.ref('balloon/height');
  balloonPosition.on("value",readPosition, showError);
  

  }

function draw() {
  background(255,255,255); 
  if(Keydown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  } 
  else if(Keydown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if(Keydown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  else if(Keydown(DOWN_ARROW)){
    balloon.y=balloon.y+10;
  }
  drawSprites();
}
function updateHeight(x,y){
  database.ref('balloon/height').set({

    'x':height.x+x,
    'y':height.y+y

  })


}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;

}

function showError(){
  console.log("Error in writing to the database");
}