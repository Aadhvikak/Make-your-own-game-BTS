//Create the score variable and set to 0
var score = 0; 

//Create the rewards and the obstacles
var bt21, tata, cooky, koya, rj, shooky, chimmy, mang; 
var at21, moya, dj, spooky, gwang, chief, tutu, ian; 

//Create the runner
var van, vanCollided, vanRunning; 

//Create the ground
var ground, invisibleGround, groundImage; 

function preload(){

    //Load images or animation of runner
    vanRunning = loadImage("Images/GroundVan/van.png");
    vanCollided = loadImage("Images/GroundVan/vanEnd.png");

    //Load Image of ground
    groundImage = loadImage("Images/GroundVan/ground2.png");

    //Load all images for BT21
    tata = loadImage("Images/Bt21/tata.png");
    cooky = loadImage("Images/Bt21/cooky.png");
    chimmy = loadImage("Images/Bt21/chimmy.png");
    shooky = loadImage("Images/Bt21/shooky.png");
    rj = loadImage("Images/Bt21/rj.png");
    koya = loadImage("Images/Bt21/koya.png");
    mang = loadImage("Images/Bt21/mang.png");

    //Load all images for At21
    tutu = loadImage("Images/At21/tutu.png");
    ian = loadImage("Images/At21/ian.png");
    chief = loadImage("Images/At21/chief.png");
    spooky = loadImage("Images/At21/spooky.png");
    dj = loadImage("Images/At21/dj.png");
    moya = loadImage("Images/At21/moya.png");
    gwang = loadImage("Images/At21/gwang.png");

}

function setup(){
    createCanvas(1000,1000); 

    //Create a sprite for the runner
    van = createSprite(200, 400, 20, 50); 
    van.addImage(vanRunning);
    van.scale = 0.6; 

    //Create never ending ground for infinite runner game
    ground = createSprite(500, 400, 800, 25);
    ground.addImage("Images/GroundVan/ground.png", groundImage);
    ground.x = ground.width/2;
    ground.velocityX = -4;

    invisibleGround = createSprite(500, 410, 800, 15);
    invisibleGround.visible = false; 

    //Creating rewards and obstacles groups
    bt21 = new Group();
    at21 = new Group();

    //Setting score's initial value
    score = 0;
}

function draw(){
    //Set Background to light blue
    background(173, 216, 230);

    //Set score
    if (van.collide(at21)) {
        score = score - 5;
    }
    if (van.collide(bt21)) {
        score = score + 5; 
    }

    //Display score
    text("Score: "+ score, 900,250);

    //Set van movements and velocity
    if(keyDown("space")) {
        van.velocityY = -10; 
    }

    van.velocityY = van.velocityY + 0.8;

    //Make ground continue forever and set ground to collide with van
    if(ground.x < 0) {
        ground.x = ground.width/2;
    }

    van.collide(invisibleGround);

    //Declare functions to spawn rewards and obstacles
    spawnAt21();
    spawnBt21();

    drawSprites();
} 

//Create At21 obstacles
function spawnAt21() {
    if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
      
        var rand = Math.round(random(1,7));
        switch(rand) {
            case 1: obstacle.addImage(tutu);
                break;
            case 2: obstacle.addImage(ian);
                break;
            case 3: obstacle.addImage(chief);
                break;
            case 4: obstacle.addImage(spooky);
                break;
            case 5: obstacle.addImage(dj);
                break;
            case 6: obstacle.addImage(moya);
                break;
            case 7: obstacle.addImage(gwang);
                break;

            default: break;
        }

        //Assign the scale and lifetime of at21
        obstacle.scale = 0.6;
        obstacle.lifetime = 300;

        //Add obstacles to at21
        at21.add(obstacle);

    } 

}
  
//Create bt21 rewards
function spawnBt21() {
    if(frameCount % 60 === 0) {
    var rewards = createSprite(600,165,10,40);
       rewards.velocityX = -4;
      
        var rand = Math.round(random(1,7));
        switch(rand) {
            case 1: rewards.addImage(tata);
                break;
            case 2: rewards.addImage(cooky);
                break;
            case 3: rewards.addImage(chimmy);
                break;
            case 4: rewards.addImage(shooky);
                break;
            case 5: rewards.addImage(rj);
                break;
            case 6: rewards.addImage(koya);
                break;
            case 7: rewards.addImage(mang);
                break;

            default: break;
        }

        //Assign the scale and lifetime of bt21
        rewards.scale = 0.6;
        rewards.lifetime = 300;
   
        //Add rewards to bt21
        bt21.add(rewards);
    } 
}


