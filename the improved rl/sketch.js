// variabes For The Strt game Name With The Creator Name
var points;
var font;
var amt;
var multiplier = 0.2;
var r = [];
var g = [];
var b = [];
var img;
/* create variables included in the game */
// game states The changes According to Functions 
var SERVE = 0;
var PLAY = 1;
var END = 2
var INFO = 3;
var  gameState ;
var pageNo = 1;

// variables fo Bg Images
var BGImage1,BGImage2,BGImage3,BGImage4,BGImage5;

// variables for THe bg Sounds 
var BGMusic1,BGMusic2,BGMusic3,BGMusic4,BGMusic5,BGMusic6;

// variables for the character Animations 
var Jumping_Joey,Slide_Joey,Running_Joey,Dead_Joey;

// variables for the character Motion Sounds
var JumpSound,DeadJoey_Sound;

// variables for the Big Ground images
var BigGround_Img,BigGround_Img2,BigGround_Img3,BigGround_Img4;

// variables for the Forever Ground Images
var ForeverGround_Img,ForeverGround_Img2,ForeverGround_Img3;

// variables for the River Images
var riverImage,riverdownImage;

// variables for the Icon images for the buttons
var previousIcon_Img,nextIcon_Img,LifeLineIcon_Img,RestartButtonIcon_Img,infoIcon_Img;

// variables for the Extra Ground Images
var LifeLineGround2_Img,StartGround_Img;

// variables for the Screen Images 
var ServeScreen_Img,EndScreen_Img,InfoScreen_Img,InfoScreen_Img2,InfoScreen_Img3;

// variables for the game png Format Images 
var GameOver_Img;

// variables for the Objects in The Game 
// Screen and the names 
var ServeScreen; // this is the variable for the Starting Screen Made with Buttons And help Corner 
var EndScreen;// this is the variable for the End Screen loaded with some unique Options of buttons and the game restrt 
var InfoScreen; // this is the variable for the Help Corner Screen Made with the images to shift the pages and help the user to get the Story Of the game and Instructions About it

//  variable for the changing background converted to Sprite 
var background;

// variable for thye Buttons used in the Game 
var StartButton,InfoButton,JumpButton,SlideButton,LifeLineButton2,LifeLineButton,RestartButton;

// variables for the Groups 
var ForeverGroundGroup,BigGroundGroup,RiverGroup,Treegroup,ObstacleGroup,CollideGroup;

// variables for the grouneds Spawning Grounds (BIG GROUNDS)
var BigGround,BigGround2,BigGround3,BigGround4,BigGround5,BigGround6;

//variables for the grouneds Spawning Grounds (Forever Grounds(The Small Grounds))
var Forever_Ground,Forever_Ground2,Forever_Ground3;

// variables for the River 
var river,river2,river3,riverdown,riverdown1,riverdown2,riverdown3;

// Obstacles and The Other Objects 
var obstacle,Tree;

// Icons For the Buttons In The GAME 
var LifeLineIcon,InfoIcon,RestartButton_Icon;

// objects and the Others 
var GameOver,pageNo,lifelineused,CharacterMotion ,NameBar,displayName,col,colr,title;



// Score variables genrates the Score 
var score = 0;
var Joey;// character of the game 
var BigGroundGroup;
var ForeverGroundGroup;

var yes = "LifeLineCharging";var no = 'Charged'
var LifeLineused = no
var LifelineButton2;
var LifelineButton;



function preload(){
  //loads the font for the name function
  font = loadFont('Sprites/Fonts/Calistoga-Regular.ttf');

  // loads Background images 
    BGImage1 = loadImage("Sprites/images/BG_Images/bg-1.png");
    BGImage2 = loadImage("Sprites/images/BG_Images/bg-2.png");
    BGImage3 = loadImage("Sprites/images/BG_Images/bg-3.png");
    BGImage4 = loadImage("Sprites/images/BG_Images/bg-4.png");
    BGImage5 = loadImage("Sprites/images/BG_Images/bg-5.png");

    // loads Background Sounds 
    BGMusic1 = loadSound("Sprites/sounds/BGSounds/BGSound - 1.mp3");
    BGMusic2 = loadSound("Sprites/sounds/BGSounds/BGSound - 2.mp3");
    BGMusic3 = loadSound("Sprites/sounds/BGSounds/BGSound - 3.mp3");
    BGMusic4 = loadSound("Sprites/sounds/BGSounds/BGSound - 4.mp3");
    BGMusic5 = loadSound("Sprites/sounds/BGSounds/BGSound - 5.mp3");
    BGMusic6 = loadSound("Sprites/sounds/BGSounds/BGSound - 6.mp3");

    // Character Motion Sounds Loads
    DeadJoey_Sound = loadSound("Sprites/sounds/PlayerMotion(s)/DIESound.mp3");
    SinkJoey_Sound = loadSound("Sprites/sounds/PlayerMotion(s)/SINKSound.wav");
 
       


    //loads  Animations to the character
    //loads the animation for the Run
    Running_Joey = loadAnimation("Sprites/images/CharacterMotions/Run_imgs/Run (1).png","Sprites/images/CharacterMotions/Run_imgs/Run (2).png"
    ,"Sprites/images/CharacterMotions/Run_imgs/Run (3).png","Sprites/images/CharacterMotions/Run_imgs/Run (4).png"
    ,"Sprites/images/CharacterMotions/Run_imgs/Run (5).png","Sprites/images/CharacterMotions/Run_imgs/Run (6).png"
    ,"Sprites/images/CharacterMotions/Run_imgs/Run (7).png","Sprites/images/CharacterMotions/Run_imgs/Run (8).png");

    //loads the animation for the jump
    Jumping_Joey = loadAnimation("Sprites/images/CharacterMotions/Jump_imgs/Jump (1).png","Sprites/images/CharacterMotions/Jump_imgs/Jump (2).png"
    ,"Sprites/images/CharacterMotions/Jump_imgs/Jump (3).png","Sprites/images/CharacterMotions/Jump_imgs/Jump (4).png"
    ,"Sprites/images/CharacterMotions/Jump_imgs/Jump (5).png","Sprites/images/CharacterMotions/Jump_imgs/Jump (6).png"
    ,"Sprites/images/CharacterMotions/Jump_imgs/Jump (7).png","Sprites/images/CharacterMotions/Jump_imgs/Jump (8).png"
    ,"Sprites/images/CharacterMotions/Jump_imgs/Jump (9).png","Sprites/images/CharacterMotions/Jump_imgs/Jump (10).png"
    ,"Sprites/images/CharacterMotions/Jump_imgs/Jump (11).png","Sprites/images/CharacterMotions/Jump_imgs/Jump (12).png");

    //loads the animation for the death of the character
    Dead_Joey    = loadAnimation("Sprites/images/CharacterMotions/Dead_imgs/Dead (1).png","Sprites/images/CharacterMotions/Dead_imgs/Dead (2).png"
    ,"Sprites/images/CharacterMotions/Dead_imgs/Dead (3).png","Sprites/images/CharacterMotions/Dead_imgs/Dead (4).png"
    ,"Sprites/images/CharacterMotions/Dead_imgs/Dead (5).png","Sprites/images/CharacterMotions/Dead_imgs/Dead (6).png"
    ,"Sprites/images/CharacterMotions/Dead_imgs/Dead (7).png","Sprites/images/CharacterMotions/Dead_imgs/Dead (8).png"
    ,"Sprites/images/CharacterMotions/Dead_imgs/Dead (9).png");

    //loads the animation for the slide 
    Slide_Joey   = loadAnimation("Sprites/images/CharacterMotions/Slide (1).png");

    JumpButton_Img = loadImage("Sprites/images/CharacterMotions/Jump_imgs/Jump (5).png","Sprites/images/CharacterMotions/Jump_imgs/Jump (6).png");
    //loads player motion sounds
    //loads the jump sound
    JumpSound = loadSound("Sprites/sounds/PlayerMotion(s)/JUMPSound.wav");

    // Loads the images present in the game as objects (BigGround -IMG)
    BigGround_Img  = loadImage("Sprites/images/game_Obj/big-ground/1.png");
    BigGround_Img2 = loadImage("Sprites/images/game_Obj/big-ground/6.png");
    BigGround_Img3 = loadImage("Sprites/images/game_Obj/big-ground/3.png");
    BigGround_Img4 = loadImage("Sprites/images/game_Obj/big-ground/4.png");

    // Loads the images present in the game as objects (smallGround(Forever) -IMG)
    ForeverGround_Img  = loadImage("Sprites/images/game_Obj/forv_ground/14.png");
    ForeverGround_Img2 = loadImage("Sprites/images/game_Obj/forv_ground/15.png");
    ForeverGround_Img3 = loadImage("Sprites/images/game_Obj/forv_ground/16.png");

   //loads the game objects the obstacle and tree
    TreeImage      =  loadImage("Sprites/images/game_Obj/Obstacles/Tree_1.png");
    ObstacleImage  = loadImage("Sprites/images/game_Obj/Obstacles/Stone.png")
    ObstacleImage2 = loadImage("Sprites/images/game_Obj/Obstacles/Crystal.png");
   //loads the river images
    riverImage     = loadImage("Sprites/images/game_Obj/forv_river/17.png");
    riverdownImage = loadImage("Sprites/images/game_Obj/forv_river/18.png");

   //loads the screen Image (HelpScreen)
    InfoScreen_Img   = loadAnimation("Sprites/images/game_Images/InfoScreen/Info1.png");
    InfoScreen_Img2  = loadAnimation("Sprites/images/game_Images/InfoScreen/Info2.png");
    InfoScreen_Img3  = loadAnimation("Sprites/images/game_Images/InfoScreen/Info3.png");

   //loads the screen Image (ServeScreen)
    ServeScreen_Img = loadImage("Sprites/images/game_Images/ServeScreen/gameStart.jpg");

   //loads the screen Image (ENdScreen)
    EndScreen_Img   = loadImage("Sprites/images/game_Images/EndScreen/EndScreen.jpg")

    //Loads the Life Line Ground Image of the Life Line IN the game 
    LifeLineGround2_Img = loadImage("Sprites/images/game_Images/PlayScreen/llground.png");

    // LOads the Strting Ground Images
    StartGround_Img = loadImage("Sprites/images/game_Obj/strt_ground/StartGround.png");

    //loads All the Icon iMages For The Buttons 
    previousIcon_Img = loadImage("Sprites/images/game_Images/InfoScreen/previous.png");
    nextIcon_Img     = loadImage("Sprites/images/game_Images/InfoScreen/next.png");
    infoIcon_Img     = loadImage("Sprites/images/game_Images/InfoScreen/InfoIcon.png");       
    LifeLineIcon_Img = loadImage("Sprites/images/game_Images/PlayScreen/llicon.jpg"); 

    //Loads the sprite images for the end screen objects 
    GameOver_Img          = loadImage("Sprites/images/game_Images/EndScreen/gameOver-1.png");
    RestartButtonIcon_Img = loadImage("Sprites/images/game_Images/EndScreen/restart-1.png");
    
  
  
  }


//A setup Function Which Create The in Game Objects aND all The hTml various Options 
function setup(){
  //makes the canvas for the game according Tothe screen width
    createCanvas(windowWidth,windowHeight);
    // Groups
    BigGroundGroup     = new Group();
    ForeverGroundGroup = new Group();
    CollideGroup       = new Group();
    Treegroup          = new Group();
    ObstacleGroup      = new Group();
    RiverGroup         = new Group();


   
     gameState = SERVE
    // various Functions of The Html BOdy For Creating The input baar a button and a greeting 
    // Name BAR,save Button etc are made here 
       NameBar = createInput("Enter your name");
       displayName = createElement('h2');
       SaveName = createButton("save")
     
       NameBar.position(width/2,height/2-100);
       SaveName.position(width/2,height/2+20);
       title = createElement('h1');
       title.html("RUNNERS LANDSCAPE");
       title.position(50, 10);
       title.style('font-size', '70px');
       title.style('color', 'red');

   // Retrieve text 
  //code for name
  points = font.textToPoints('Runners ',width/2-200,height/2-50,width/height+100, {
    sampleFactor: 0.3,
    simplifyThreshold: 0
});
points2 = font.textToPoints("landscape",width/2-150,height/2+80,width/height+100,{
    sampleFactor: 0.3,
    simplifyThreshold: 0
});
points3 = font.textToPoints("Vishnu ",width/2-290,height/2-140,width/height+80,{
    sampleFactor: 0.3,
    simplifyThreshold: 0
});
points4 = font.textToPoints("presents  :-",width/2-9,height/2-140,width/height+80,{
    sampleFactor: 0.3,
    simplifyThreshold: 0
});
points5 = font.textToPoints("The Endless Spirit",width/2-280,height-50,width/height+60,{
    sampleFactor: 0.3,
    simplifyThreshold: 0
});
//end

    // makes background
  
     background = createSprite(0,0,600,600);
     background.addImage("bg-1",BGImage1);
     background.addImage("bg-2",BGImage2);
     background.addImage("bg-3",BGImage3);
     background.addImage("bg-4",BGImage4);
     background.addImage("bg-5",BGImage5);
     background.scale = 6
  // plays the background music1 whenin the play state 
  // plays the game Sound When it Starts 
    BGMusic6.play();
  // creates and adds properties to the chracter 
      Joey = createSprite(50,0,20,50);
      Joey.scale= 0.25
      Joey.x = 50
      Joey.y = 0
      Joey.addAnimation("Jumping",Jumping_Joey);
      Joey.addAnimation("running", Running_Joey);
      Joey.addAnimation("death",Dead_Joey);
      Joey.addAnimation("sliding",Slide_Joey);
      Joey.setCollider("rectangle",50,0,280,380);

       //Creates in game Buttons
     colr = color(random(0,255),random(0,255),random(0,255));
     JumpButton = createButton("Click To Jump");
     JumpButton.position(50,height-100);
     JumpButton.hide();
     JumpButton.style('width', '100px');
     JumpButton.style('height', '30px');
     JumpButton.style('background',colr)

    
     SlideButton =  createButton("Click To Slide");           
     SlideButton.position(width-150,height-100);      
     SlideButton.mousePressed(Slide);
     SlideButton.style('width', '100px');
     SlideButton.style('height', '30px');
     SlideButton.style('background',colr)
     SlideButton.hide();    

      StartButton = createButton("START");
      StartButton.size (180,50);
      StartButton.position(width/2+30,height-90)
      StartButton.style('width', '200px');
      StartButton.style('height', '40px');
     // colr = random(0,255)
      StartButton.style('background', colr);
      StartButton.hide();

      InfoButton = createButton("Info")   
      InfoButton.position(width-90,height/13) 
      InfoButton.mousePressed(gsINFO);           
      InfoButton.hide();  
      
       col = color("red"); //use color instead of fill
          
       CancelButton  = createButton("cancel")
       CancelButton.position(width-100,height/8)
       CancelButton.hide()
       CancelButton.style('background-color', col); 
        
       NextButton = createButton("next")
       NextButton.position(width/2+240,height/2)         
       NextButton.hide();

       PreviousButton = createButton("previous")
       PreviousButton.position(width/2-280,height/2)
       PreviousButton.hide();
       
       LifelineButton = createButton("lifeline");
       LifelineButton.position(width-2-200,height/+20)            
       LifelineButton.hide();  

       LifelineButton2 = createButton("lifeline") 
       LifelineButton2.position(width-2-200,height/+20)   
       LifelineButton2.hide();
      

       RestartButton = createButton("Restart");
       RestartButton.position(width/2+20,height/2-20);
       RestartButton.style('color', 'skyblue');
       RestartButton.hide();


    // game state screens and the  sprites
        EndScreen = createSprite(width/2,height/2,200,200);
        EndScreen.addImage(EndScreen_Img);
        EndScreen.visible = false
       
        lineofalert = createSprite(width/2,height/2+190,width,20);
        lineofalert.visible = false
        
        InfoScreen = createSprite(width/2,height/2,width*2,height*2)
        InfoScreen.visible = false
        InfoScreen.addAnimation("page1",InfoScreen_Img);
        InfoScreen.addAnimation("page2",InfoScreen_Img2);
        InfoScreen.addAnimation("page3",InfoScreen_Img3);

        ServeScreen=createSprite(width/2,height/2,width*2,height*2)
        ServeScreen.addImage(ServeScreen_Img);
        ServeScreen.visible = false
        ServeScreen.scale = windowWidth/windowHeight

        //game State Objects and icons of it

        previousIcon = createSprite(width/2-280,height/2)
        previousIcon.addImage(previousIcon_Img)
        previousIcon.scale = 0.25
        previousIcon.visible = false

        nextIcon = createSprite(width/2+280,height/2)
        nextIcon.addImage(nextIcon_Img)
        nextIcon.scale = 0.25
        nextIcon.visible = false
        
        LifeLineGround2=createSprite(1200,120,20,20)
        LifeLineGround2.addImage(LifeLineGround2_Img)
        LifeLineGround2.scale = 0.5
        LifeLineGround2.visible = false

        LifeLineGround = createSprite(1200,120,20,20)
        LifeLineGround.addImage(LifeLineGround2_Img)
        LifeLineGround.scale = 0.5
        LifeLineGround.visible = false

        StartGround = createSprite(50,height/2-160)
        StartGround.addImage(StartGround_Img)
        StartGround.scale = 0.9
        StartGround.visible = false
        StartGround.setCollider("rectangle",0,0,100,40);
        CollideGroup.add(StartGround);
  
        StartGround2= createSprite(150,height/2-120)
        StartGround2.addImage(StartGround_Img)
        StartGround2.scale = 0.9
        StartGround2.visible = false
        StartGround2.setCollider("rectangle",0,0,100,40);
        CollideGroup.add(StartGround2);
       
        StartGround3= createSprite(250,height/2-90);
        StartGround3.addImage(StartGround_Img);
        StartGround3.scale = 0.9
        StartGround3.visible = false
        CollideGroup.add(StartGround3);

        StartGround4= createSprite(350,height/2-60)
        StartGround4.addImage(StartGround_Img)
        StartGround4.scale = 0.9      
        CollideGroup.add(StartGround4);  
        StartGround4.visible = false;

        StartGround5= createSprite(450,height/2-60)
        StartGround5.addImage(StartGround_Img)
        StartGround5.scale = 0.9      
        CollideGroup.add(StartGround5);  
        StartGround5.visible = false;

        // creates the game Button Icons And hides them 

        InfoIcon  = createSprite(width-60,height/16,20,20);
        InfoIcon.visible = false
        InfoIcon.addImage(infoIcon_Img);
        InfoIcon.scale = 0.05;
        
        LifeLineIcon = createSprite(width-2-200,height/+20,10,10)
        LifeLineIcon.addImage(LifeLineIcon_Img)
        LifeLineIcon.scale=0.025
        LifeLineIcon.visible = false

        GameOver = createSprite(width/2,height/2- 50);
        GameOver.addImage(GameOver_Img);
        GameOver.visible = false;

        RestartButton_Icon=createSprite(width/2,height/2);
        RestartButton_Icon.addImage(RestartButtonIcon_Img);
        RestartButton_Icon.scale = 0.05
        RestartButton_Icon.visible = false;



  }
// Function Draw is uSed to call an object and repeat it as it repeats itself
function draw(){
  if (millis() <20*1000) 
  {
          name()
          NameBar.hide();
          SaveName.hide();
          title.hide();
    //("name");
      }
      else
      { 
 // makes the properties for the game When the game is in The serve State
  if(gameState === SERVE){
    ServeScreen.visible = true;
    StartButton.mousePressed(gsPLAY);
    InfoIcon.visible = true;
    NameBar.show();
    SaveName.show();
    title.show();
    SaveName.mousePressed(ShowName);
    if(gameState === "NAMEHIDE"){
      NameBar.hide();
      SaveName.hide();
      title.hide();
      StartButton.show();
    }

  }
  
// makes the properties for the game When the game is in The play State
  if (gameState === PLAY){
  //  makes the Score Count Increase According to THe GAME Speed 
  score = score + Math.round(getFrameRate()/60.5);

  // changes background according to the score (frame count);
 
    if(frameCount%1000 === 0){
             var randback = Math.round(random(1,5));
          switch(randback) {
            case 1:background.changeImage("bg-1",BGImage1);
            background.scale = 6
             
               BGMusic1.play();
               BGMusic2.stop();
               BGMusic3.stop();
               BGMusic4.stop();
               BGMusic5.stop();
               BGMusic6.stop();
      
            break;
             
            case 2:background.changeImage("bg-2",BGImage2)
            background.scale = 6

                BGMusic2.play()
                BGMusic1.stop();
                BGMusic3.stop();
                BGMusic4.stop();
                BGMusic5.stop();
                BGMusic6.stop();
            
            break;
            case 3:background.changeImage("bg-3",BGImage3)
            background.scale = 6
            
              BGMusic3.play()
              BGMusic1.stop();
              BGMusic2.stop();
              BGMusic4.stop();
              BGMusic5.stop();
              BGMusic6.stop();
            
            break;
            case 4:background.changeImage("bg-4",BGImage4)
            background.scale = 6
             
              BGMusic4.play();
              BGMusic1.stop();
              BGMusic2.stop();
              BGMusic3.stop();
              BGMusic5.stop();
              BGMusic6.stop();
            
            break;
            
            case 5:background.changeImage("bg-5",BGImage5)
            background.scale = 6
            
              BGMusic5.play();
              BGMusic1.stop();
              BGMusic2.stop();
              BGMusic3.stop();
              BGMusic4.stop();
              BGMusic6.stop();
           
           default : break;}
          
          
        }
  // runs the background (background properties)
    if (background.x < 0){
    background.x = background.width/2;
     } 
    background.velocityX =-(3+3*score/100);
// Makes the Strt ground visible as when it was made it was hidden by the function
    StartGround.visible  = true
    StartGround2.visible = true
    StartGround3.visible = true
    StartGround4.visible = true

// Gives the Speed and the direction to the start Ground
    StartGround.velocityX  = -1.5
    StartGround2.velocityX = -1.5
    StartGround3.velocityX = -1.5
    StartGround4.velocityX = -1.5
    LifeLineGround2.visible  = true

 // Solves a bug of being the character Struk at Some Place
    if (Joey.x<50){
        Joey.velocityX = 3  
    }
// Resets The Charcter to the normal PositionAfter The Solving Of Bug
    if(Joey.x>60){
       Joey.x = 50
       Joey.velocityX = 0;
    }
  //  makes the gravity to the player
      Joey.velocityY =  Joey.velocityY + 0.8;
      
      // make the Slide Button After frame count as It is Being Detroyed when Touching An obstacle 
    if(frameCount%800===0||score ===0){
      SlideButton.x=width-150
      SlideButton.visible  =true
      SlideButton.show()
          }

        // make the Buttons Visible and Various Function to them
          JumpButton.show();
          LifelineButton.show();
          LifeLineIcon.visible = true
          LifelineButton.mousePressed(useLifeLine)
          LifelineButton2.mousePressed(useLifeLine2);
          SlideButton.mousePressed(Slide)

          //Destroys the Obstacle When Player Animation Is IN the slide 
      if(CharacterMotion === "Slide"&& Joey.isTouching(ObstacleGroup)){
        DestroyObstacle();
     }
     //adds ADditional gravity to the player so the game can be enjoyed and various Bugws Clears 
      if(Joey.isTouching(ForeverGroundGroup)||CollideGroup||BigGroundGroup){
        JumpButton.mousePressed(Jump);
        setTimeout(resetVelocity,2000);
      }
      // Bug OF moving Out oF screen Solves at Y basis 
      if(Joey.y <= 20){
        Joey.y = 50
      }
       // Spawns the various  game Objects 
         Spawn_ForeverGround();
         Spawn_ForeverRiver();
         Spawn_BigGround2();
         Spawn_BigGround();
         Spawn_Obstacle();

         //Hide the html body part of HELLO + name 
         displayName.hide();

        // sets the Depth of the various game Object added to The GRoups 
         RiverGroup.depth         = ForeverGroundGroup.depth - 1
         ForeverGroundGroup.depth = BigGroundGroup.depth - 1
         BigGroundGroup.depth     = background.depth+1

         //makes the Character stand on the ground 
         Joey.collide(BigGroundGroup);
         Joey.collide(CollideGroup); 
         Joey.scale= 0.15

         //changes  the game State according to to player Motion Of Touching An Obstacle 
         if(Joey.isTouching(ObstacleGroup)||Joey.y>500||Joey.x<-5){
          DeadJoey_Sound.play();
          DeadJoey_Sound.loop=0;
          gameState = END
          Joey.changeAnimation("death",Dead_Joey);
          DeadJoey_Sound.play();
       } 
        //changes  the game State according to to player Motion Of Touching An Obstacle 
       if(Joey.isTouching(RiverGroup)){
         gameState = END
         Joey.changeAnimation("death",Dead_Joey)
         SinkJoey_Sound.play(); 
       } 
       // changes the character animation when Touching the ground
       if( Joey.collide(ForeverGroundGroup)|| Joey.collide(BigGroundGroup)||
           Joey.collide(CollideGroup)){
           Joey.changeAnimation("running",Running_Joey);
           JumpSound.stop()
           CharacterMotion =  "Run";
       }
    }
    // Design the fUnction Controls for the End State 
    if(gameState === END){ 
     
// Destroys all The Objects 
      RiverGroup.destroyEach();
      BigGroundGroup.destroyEach();
      ForeverGroundGroup.destroyEach();
      Treegroup.destroyEach();
      ObstacleGroup.destroyEach();
      CollideGroup.destroyEach();
 
      // resets characters Position 
      Joey.x = 50;
      Joey.y = 50;
      Joey.velocityX  = 0 ;
      Joey.velocityY  = 0 ;
   // hides all The buttons
      JumpButton.hide();
      SlideButton.hide();
      LifelineButton2.hide();
      LifelineButton.hide();

      // Shows the restart Button and properties are being assigned 
      RestartButton_Icon.visible = true;
      RestartButton.show();
      GameOver.visible = true;
      RestartButton.mousePressed(Reset);
      EndScreen.visible = true
      EndScreen.scale = displayWidth/displayHeight+2

      // Stops all the Background Music 
      BGMusic1.stop();
      BGMusic2.stop();
      BGMusic3.stop();
      BGMusic4.stop();
      BGMusic5.stop();
      BGMusic6.stop();

    }
    // Design the helping state of game to help player how to play 
    if(gameState === INFO){
      // hides the buutons and shows the screen of the info
      StartButton.hide();
      InfoScreen.visible = true;
      InfoScreen.changeAnimation("page1",InfoScreen_Img);
      InfoScreen.depth = ServeScreen.depth+1
      InfoScreen.scale = 0.55;
      // hides the displaying saved name 
      displayName.hide();

      // hides the various Buttons in The game 
      InfoButton.hide();
      CancelButton.show();
      PreviousButton.show();
      
      // Shows the next and previous Button  to control Pages 
      NextButton.show();
      nextIcon.visible = true;
      
      
// a basic function when pressinfg cancel button
      CancelButton.mousePressed(gsSERVE)
      // changes the pages accordind to th page no 
      if(pageNo === 1 ){
        InfoScreen.changeAnimation("page1",InfoScreen_Img);
        PreviousButton.hide();
        previousIcon.visible = false;
        NextButton.mousePressed(pgChange2);
        
      }
      if(pageNo === 2){
        InfoScreen.changeAnimation("page2",InfoScreen_Img2)
        previousIcon.visible = true;
        PreviousButton.show();
        NextButton.mousePressed(pgChange3);
        PreviousButton.mousePressed(pgChange)
      }

      if(pageNo === 3){
        InfoScreen.changeAnimation("page3",InfoScreen_Img3);
        NextButton.hide();
        nextIcon.visible = false;
        PreviousButton.mousePressed(pgChange2)
      }
    }


 //  The Imp Function Of making visibel alll the sprites designed
    drawSprites(); 
    // makes the score visible 
    
  if(gameState === PLAY){
      textSize(20);
      fill(colr);
      stroke(col)
      text("Score: "+ score,width/2-200,height/2-200);
     
  }
  // shows the score along with the name Entered 
 if(gameState === END){
     displayName.show();
     displayName.html(NameBar.value()+" "+" You Scored "+   score)
     displayName.position(100,height/height/2);
     displayName.style('color',col)
     displayName.style('font-size', '70px');
 
 }
    
}}
// function assigned to jumpButton to make the chrarcter jump
function Jump(){
  JumpSound.play();
  Joey.velocityY = -14;
  Joey.velocityX  = 1
  Joey.changeAnimation("Jumping",Jumping_Joey);
  setTimeout(resetRuning,5000);
  CharacterMotion = "Jump"

}
// Solves a bug Of Not Chnging Animation Accortion to timeInterval 
function resetRuning(){
  Joey.changeAnimation("running",Running_Joey);
  
}

// function assigned to SlideButton to make the character Slide
function Slide(){
  Joey.changeAnimation("sliding",Slide_Joey);
  CharacterMotion = "Slide"
  
}
// Function To Spawn The Big Ground
function Spawn_BigGround(){
  if (frameCount%290===0){

    var BigGround  = createSprite(width+180,height-145,10,10);
        BigGround.addImage(BigGround_Img);
    var BigGround2 = createSprite(width+300,height-145,10,10);
        BigGround2.addImage(BigGround_Img3);
    
    var BigGround3 = createSprite(width+180,height-25,10,10);
        BigGround3.addImage(BigGround_Img4);
    
    var BigGround4 = createSprite(width+300,height-25,10,10);
        BigGround4.addImage(BigGround_Img2);
    
    var BigGround5 = createSprite(width+400,height-25,10,10) ;  
        BigGround5.addImage(BigGround_Img);

    var BigGround6 = createSprite(width+450,height-25,10,10);
        BigGround6.addImage(BigGround_Img3) ;                        
   
         BigGround.velocityX  = -(3 + 3*score/100);                           
         BigGround2.velocityX = -(3 + 3*score/100);       
         BigGround3.velocityX = -(3 + 3*score/100);                  
         BigGround4.velocityX = -(3 + 3*score/100);                     
         BigGround5.velocityX = -(3 + 3*score/100);                     
         BigGround6.velocityX = -(3 + 3*score/100);                               
         
         BigGround.lifetime  = 350                          
         BigGround2.lifetime = 350                          
         BigGround3.lifetime = 350                        
         BigGround4.lifetime = 350                          
         BigGround5.lifetime = 350
         BigGround6.lifetime = 350
  
                                                                                                
                                  
         BigGroundGroup.add(BigGround);    
         BigGroundGroup.add(BigGround3);
         BigGroundGroup.add(BigGround2);                             
         BigGroundGroup.add(BigGround4);       
         BigGroundGroup.add(BigGround5);  
         BigGroundGroup.add(BigGround6);    
         
         
    
    }
    
        }
function Spawn_BigGround2(){  
 if (frameCount%480===0){

    var BigGround = createSprite(width+180,height-145,10,10)
        BigGround.addImage(BigGround_Img)
        BigGround.velocityX =-(3 + 3*score/100);  
    var BigGround2 = createSprite(width+300,height-145,10,10)
        BigGround2.addImage(BigGround_Img3)
        BigGround2.velocityX =-(3 + 3*score/100);  
      
  
     
    var BigGround3 = createSprite(width+180,height-25,10,10)
        BigGround3.addImage(BigGround_Img4)
        BigGround3.velocityX =-(3 + 3*score/100);  
   
    var BigGround4 = createSprite(width+300,height-25,10,10)
        BigGround4.addImage(BigGround_Img2)
        BigGround4.velocityX =-(3 + 3*score/100);  
        BigGround.lifetime  = 350
        BigGround2.lifetime = 350
        BigGround3.lifetime = 350
        BigGround4.lifetime = 350
        BigGroundGroup.add(BigGround)
        BigGroundGroup.add(BigGround2)
        BigGroundGroup.add(BigGround3)
        BigGroundGroup.add(BigGround4)
       
   }}
   // function To Spawn the small / Forever Ground 
   function Spawn_ForeverGround(){
    if (frameCount% 80 ===0) {
     var rand = Math.round(random(1,6));
       switch(rand) {
         case 1:  var Forever_Ground = createSprite(width+100,height-240,10,10)
                      Forever_Ground.addImage(ForeverGround_Img)
                      Forever_Ground.scale = 0.5
                      Forever_Ground.velocityX =-(3 + 3*score/100);  
      
       
                  var Forever_Ground2 = createSprite(width+164,height-240,10,10)
                      Forever_Ground2.addImage(ForeverGround_Img2)
                      Forever_Ground2.scale = 0.5
                      Forever_Ground2.velocityX =-(3 + 3*score/100); 

                  var invisibleground = createSprite(width+164,height-265,200,5)
                      invisibleground.velocityX = Forever_Ground2.velocityX
                      invisibleground.visible = false
       
                  var Forever_Ground3= createSprite(width+220,height-240,10,10)
                      Forever_Ground3.addImage(ForeverGround_Img3)
                      Forever_Ground3.scale = 0.5
                      Forever_Ground3.velocityX =-(3 + 3*score/100);  
           
                      Forever_Ground.lifetime  = 350
                      Forever_Ground2.lifetime = 350
                      Forever_Ground3.lifetime = 350
                      invisibleground.lifetime = 350

            ForeverGroundGroup.add(Forever_Ground)  
            ForeverGroundGroup.add(Forever_Ground2)  
            ForeverGroundGroup.add(Forever_Ground3) 
            CollideGroup.add(invisibleground);


           
           var Tree =  createSprite(width+220,height-300,0,10)
               Tree.addImage(TreeImage)
               Tree.velocityX =-(3 + 3*score/100);  
               Tree.scale=0.25
               Treegroup.add(Tree);
          
           var obstacle = createSprite(width+220,height-280,0,10)
               obstacle.addImage(ObstacleImage2)
               obstacle.velocityX =-(3 + 3*score/100);  
               obstacle.scale = 0.5;
               ObstacleGroup.add(obstacle)
           
           
               CollideGroup.add(invisibleground) 
         
           
           
                 break;
        case 2:  var Forever_Ground = createSprite(width+100,height-320,10,10)
                     Forever_Ground.addImage(ForeverGround_Img)
                     Forever_Ground.scale = 0.5
                     Forever_Ground.velocityX =-(3 + 3*score/100);  
                    
       
                 var Forever_Ground2 = createSprite(width+164,height-320,10,10)
                     Forever_Ground2.addImage(ForeverGround_Img2)
                     Forever_Ground2.scale = 0.5
                     Forever_Ground2.velocityX =-(3 + 3*score/100);  

                 var invisibleground2 = createSprite(width+164,height-350,200,5)
                     invisibleground2.velocityX = Forever_Ground2.velocityX
                     invisibleground2.visible = false

                     CollideGroup.add(invisibleground2)
            
                 
           
                 var Forever_Ground3= createSprite(width+220,height-320,10,10)
                     Forever_Ground3.addImage(ForeverGround_Img3)
                     Forever_Ground3.scale = 0.5
                     Forever_Ground3.velocityX =-(3 + 3*score/100);  

                     Forever_Ground.lifetime   = 350;
                     Forever_Ground2.lifetime  = 350;
                     Forever_Ground3.lifetime  = 350;
                     invisibleground2.lifetime = 350;

                     ForeverGroundGroup.add(Forever_Ground)  
                     ForeverGroundGroup.add(Forever_Ground2)  
                     ForeverGroundGroup.add(Forever_Ground3)  
          
                 break;
                 case 3:  var Forever_Ground = createSprite(width+100,height-120,10,10)
                              Forever_Ground.addImage(ForeverGround_Img)
                              Forever_Ground.scale = 0.5
                              Forever_Ground.velocityX =-(3 + 3*score/100);  
                            
       
                          var Forever_Ground2 = createSprite(width+164,height-120,10,10)
                              Forever_Ground2.addImage(ForeverGround_Img2)
                              Forever_Ground2.scale = 0.5
                              Forever_Ground2.velocityX =-(3 + 3*score/100);  
                               
                          var invisibleground3 = createSprite(width+164,height-145,200,5)
                              invisibleground3.velocityX = Forever_Ground2.velocityX
                              invisibleground3.visible = false

      
       var Forever_Ground3= createSprite(width+220,height-120,10,10)
           Forever_Ground3.addImage(ForeverGround_Img3)
           Forever_Ground3.scale = 0.5
           Forever_Ground3.velocityX =-(3 + 3*score/100);  

           Forever_Ground.lifetime   = 350
           Forever_Ground2.lifetime  = 350
           Forever_Ground3.lifetime  = 350
           invisibleground3.lifetime = 350

           ForeverGroundGroup.add(Forever_Ground)  
           ForeverGroundGroup.add(Forever_Ground2)  
           ForeverGroundGroup.add(Forever_Ground3)
           
             Tree =  createSprite(width+164,height-180,0,10)
             Tree.addImage(TreeImage)
             Tree.velocityX =-(3 + 3*score/100);  
             Tree.scale=0.25
             Treegroup.add(Tree);
             Tree.collide(Forever_Ground3)
           
             CollideGroup.add(invisibleground3)
          
                 break;
                 case 4: var Forever_Ground = createSprite(width+100,height/2,10,10)
                            Forever_Ground.addImage(ForeverGround_Img)
                            Forever_Ground.scale = 0.5
                            Forever_Ground.velocityX =-(3 + 3*score/100);  
                            
       
                         var Forever_Ground2 = createSprite(width+164,height/2,10,10)
                             Forever_Ground2.addImage(ForeverGround_Img2)
                             Forever_Ground2.scale = 0.5
                             Forever_Ground2.velocityX =-(3 + 3*score/100);  
                              
                        var invisibleground4=createSprite(width+164,height/2-25,200,5)
                            invisibleground4.velocityX = Forever_Ground2.velocityX
                            invisibleground4.visible = false

                          

                        var Forever_Ground3= createSprite(width+220,height/2,10,10)
                            Forever_Ground3.addImage(ForeverGround_Img3)
                            Forever_Ground3.scale = 0.5
                            Forever_Ground3.velocityX =-(3 + 3*score/100);  
           
                            Forever_Ground.lifetime   = 350
                            Forever_Ground2.lifetime  = 350
                            Forever_Ground3.lifetime  = 350
                            invisibleground4.lifetime = 350

                            ForeverGroundGroup.add(Forever_Ground)  
                            ForeverGroundGroup.add(Forever_Ground2)  
                            ForeverGroundGroup.add(Forever_Ground3)  

                            CollideGroup.add(invisibleground4)

           
                 break;
                 case 5:  var Forever_Ground = createSprite(width+100,height-110,10,10)
                              Forever_Ground.addImage(ForeverGround_Img)
                              Forever_Ground.scale = 0.5
                              Forever_Ground.velocityX =-(3 + 3*score/100);  
                             
       
                          var Forever_Ground2 = createSprite(width+164,height-110,10,10)
                               Forever_Ground2.addImage(ForeverGround_Img2)
                               Forever_Ground2.scale = 0.5
                               Forever_Ground2.velocityX =-(3 + 3*score/100);  
        
                          var invisibleground5 = createSprite(width+164,height-140,200,5)
                              invisibleground5.velocityX = Forever_Ground2.velocityX
                              invisibleground5.visible = false
           
                          var Forever_Ground3= createSprite(width+220,height-110,10,10)
                              Forever_Ground3.addImage(ForeverGround_Img3)
                              Forever_Ground3.scale = 0.5
                              Forever_Ground3.velocityX =-(3 + 3*score/100);  
           
                              Forever_Ground.lifetime   = 350
                              Forever_Ground2.lifetime  = 350
                              Forever_Ground3.lifetime  = 350
                              invisibleground5.lifetime = 350
                              ForeverGroundGroup.add(Forever_Ground)  
                              ForeverGroundGroup.add(Forever_Ground2)  
                              ForeverGroundGroup.add(Forever_Ground3) 
                              

                              CollideGroup.add(invisibleground5)
                           var Tree =  createSprite(width+164,height-170,0,10)
                               Tree.addImage(TreeImage)
                               Tree.velocityX =-(3 + 3*score/100);  
                               Tree.scale=0.25
                               Treegroup.add(Tree);
          
          
                 break;
                 case 6:  var Forever_Ground = createSprite(width+100,height-400,10,10)
                              Forever_Ground.addImage(ForeverGround_Img)
                              Forever_Ground.scale = 0.5
                              Forever_Ground.velocityX =-(3 + 3*score/100);  
      
       
                          var Forever_Ground2 = createSprite(width+164,height-400,10,10)
                              Forever_Ground2.addImage(ForeverGround_Img2)
                              Forever_Ground2.scale = 0.5
                              Forever_Ground2.velocityX =-(3 + 3*score/100);  
        
                          var invisibleground6 = createSprite(width +164,height-425,200,5);
                              invisibleground6.velocityX = Forever_Ground2.velocityX
                              invisibleground6.visible = false

                          var Forever_Ground3= createSprite(width+220,height-400,10,10)
                              Forever_Ground3.addImage(ForeverGround_Img3)
                              Forever_Ground3.scale = 0.5
                              Forever_Ground3.velocityX =-(3 + 3*score/100);  

                              Forever_Ground.lifetime   = 350
                              Forever_Ground2.lifetime  = 350
                              Forever_Ground3.lifetime  = 350
                              invisibleground6.lifetime = 350


                              ForeverGroundGroup.add(Forever_Ground)  
                              ForeverGroundGroup.add(Forever_Ground2)  
                              ForeverGroundGroup.add(Forever_Ground3)  
      
                              CollideGroup.add(invisibleground6)
                 break;
                 default: break;
          
       }
     
    }   
   }
   // River Spawning Function 
   function Spawn_ForeverRiver(){
        if (frameCount%40===0){

          var river = createSprite(width+80,height-15,10,0);                        
          river.addImage(riverImage)
          river.scale = 0.5

           var river2 = createSprite(width+140,height-15,10,10)
               river2.addImage(riverImage)
               river2.scale = 0.5
                
           var riverdown = createSprite(width+80,height+20,10,10)
               riverdown.addImage(riverdownImage)
               riverdown.scale = 0.5;
          
           var riverdown2 =createSprite(width+140,height+20,10,10)
               riverdown2.addImage(riverdownImage)
               riverdown2.scale= 0.5
 
          if(gameState===PLAY){
            river.velocityX      =-3                             
            river2.velocityX     =-3  
            riverdown.velocityX  =-3                               
            riverdown2.velocityX =-3  

            river.lifetime      = 320; 
            river2.lifetime     = 320;
            riverdown.lifetime  = 320; 
            riverdown2.lifetime = 320; 
          }
            RiverGroup.add(river);
            RiverGroup.add(river2);
            RiverGroup.add(riverdown2);
            RiverGroup.add(riverdown);

            if(gameState===END){
             river.setvelocityX      = 0;                            
             river2.setVelocityX     = 0;                             
             riverdown.setVelocityX  = 0;                             
             riverdown2.setVelocityX = 0;
      }
      if(gameState === PLAY && frameCount<=250){
         
       var river = createSprite(displayWidth/2-300,height-15,10,0);                        
          river.addImage(riverImage)
          river.scale = 0.5

       var river2 = createSprite(displayWidth/2-240,height-15,10,10)
           river2.addImage(riverImage)
           river2.scale = 0.5
            
       var riverdown = createSprite(displayWidth/2-300,height+20,10,10)
           riverdown.addImage(riverdownImage)
           riverdown.scale = 0.5;
      
       var riverdown2 =createSprite(displayWidth/2-240,height+20,10,10)
           riverdown2.addImage(riverdownImage)
           riverdown2.scale= 0.5

           river.velocityX      =-2                            
           river2.velocityX     =-2 
           riverdown.velocityX  =-2                              
           riverdown2.velocityX =-2 

           river.lifetime      = 250; 
           river2.lifetime     = 250;
           riverdown.lifetime  = 250; 
           riverdown2.lifetime = 250; 
           RiverGroup.add(river);
           RiverGroup.add(river2);
           RiverGroup.add(riverdown2);
           RiverGroup.add(riverdown);

         var river = createSprite(displayWidth/2-360,height-15,10,0);                        
             river.addImage(riverImage)
             river.scale = 0.5
     
          var river2 = createSprite(displayWidth/2-300,height-15,10,10)
              river2.addImage(riverImage)
              river2.scale = 0.5
               
          var riverdown = createSprite(displayWidth/2-360,height+20,10,10)
              riverdown.addImage(riverdownImage)
              riverdown.scale = 0.5;
         
          var riverdown2 =createSprite(displayWidth/2-300,height+20,10,10)
              riverdown2.addImage(riverdownImage)
              riverdown2.scale= 0.5

              river.velocityX      =-2                            
              river2.velocityX     =-2 
              riverdown.velocityX  =-2                              
              riverdown2.velocityX =-2 
   
              river.lifetime      = 250; 
              river2.lifetime     = 250;
              riverdown.lifetime  = 250; 
              riverdown2.lifetime = 250; 
              RiverGroup.add(river);
              RiverGroup.add(river2);
              RiverGroup.add(riverdown2);
              RiverGroup.add(riverdown);

              var river = createSprite(displayWidth/2-240,height-15,10,0);                        
                  river.addImage(riverImage)
                  river.scale = 0.5
        
               var river2 = createSprite(displayWidth/2-180,height-15,10,10)
                   river2.addImage(riverImage)
                   river2.scale = 0.5
                    
               var riverdown = createSprite(displayWidth/2-240,height+20,10,10)
                   riverdown.addImage(riverdownImage)
                   riverdown.scale = 0.5;
              
               var riverdown2 =createSprite(displayWidth/2-180,height+20,10,10)
                   riverdown2.addImage(riverdownImage)
                   riverdown2.scale= 0.5

                   river.velocityX      =-2                            
                   river2.velocityX     =-2 
                   riverdown.velocityX  =-2                              
                   riverdown2.velocityX =-2 
        
                   river.lifetime      = 250; 
                   river2.lifetime     = 250;
                   riverdown.lifetime  = 250; 
                   riverdown2.lifetime = 250;

                   RiverGroup.add(river);
                   RiverGroup.add(river2);
                   RiverGroup.add(riverdown2);
                   RiverGroup.add(riverdown);

                
      }
    }
   
  
    
  }
  
// function assigned to StartButton to make the game Strt
    function gsPLAY(){
          gameState = PLAY
          ServeScreen.visible= false
          StartButton.hide();
          InfoButton.hide();
          InfoIcon.visible = false;
          touches = []
          Joey.x = StartGround.x
          Joey.changeAnimation("Jumping",Jumping_Joey);
          SaveName.hide();
          displayName.hide();
          NameBar.hide();
          title.hide();
         
    }
 // Destroys the Obstacle According To The motion OF character 
    function DestroyObstacle(){
       ObstacleGroup[0].destroy();
       SlideButton.hide();
      
   }
 
// function assigned to LifeLineButton to make the life LIne use
   function useLifeLine(){
  
      LifeLineGround.visible = true
      LifeLineGround.x =   Joey.x
      LifeLineGround.y = Joey.y + 50
      LifeLineGround.lifetime = 800
      CollideGroup.add(LifeLineGround)
      LifeLineIcon.visible = false
      LifeLineIcon.x       = 2000
      LifelineButton.remove();
      LifeLineused         = yes
}

// function assigned to lifelineButton to make the lifeline Reusable 
function useLifeLine2(){
  
    LifeLineGround2.visible = true
    LifeLineGround2.x       = Joey.x
    LifeLineGround2.y       = Joey.y+50
    CollideGroup.add(LifeLineGround2);
    setTimeout(reuselifeline,20000)
    LifeLineIcon.visible = false
    LifeLineIcon.x = 2000
    LifelineButton2.hide();
    LifeLineused = yes


}
// Reuseable FunctionFor life line 
      function reuselifeline(){

       CollideGroup.remove(LifeLineGround2)
       LifeLineGround2.x       = 1200
       LifeLineGround2.y       = 120
       LifeLineIcon.visible    = false
       LifeLineGround2.visible = false

}

// Spawns the Obstacles
 function Spawn_Obstacle(){
  if (frameCount%480===0)  {
  var obstacle  =  createSprite(width+300,height-225,10,10)
  obstacle.addImage(ObstacleImage)
  obstacle.velocityX =-(3 + 3*score/100);  
  obstacle.scale=0.5
  ObstacleGroup.add(obstacle);
 
 
   }
 
  }
  // 
// function assigned to restartButton to make the game Restrt
  function Reset(){
 
    gameState = PLAY
    console.clear()
    GameOver.visible = false
    RestartButton_Icon.visible = false
    EndScreen.visible = false
        touches = []
        score = 0
        frameCount = 0
      
{          LifeLineIcon.visible = true
           LifeLineIcon = width-2-200
           LifelineButton.show();
           RestartButton.hide();

}
        
   if(LifeLineused===yes){
    LifelineButton2.show() 
    LifeLineIcon.visible = true
      

     lifelineused      = no
     LifeLineGround    = 1200
     LifeLineGround    =120
  }
      
        
        Joey.changeAnimation("Jumping",Jumping_Joey)
        
         
          StartGround = createSprite(50,height/2-160)
          StartGround.addImage(StartGround_Img)
          StartGround.scale = 0.9  
          StartGround.setCollider("rectangle",0,0,100,40);
          CollideGroup.add(StartGround);
    
          StartGround2= createSprite(150,height/2-120)
          StartGround2.addImage(StartGround_Img)
          StartGround2.scale = 0.9       
          StartGround2.setCollider("rectangle",0,0,100,40);
          CollideGroup.add(StartGround2);
         
          StartGround3= createSprite(250,height/2-90);
          StartGround3.addImage(StartGround_Img);
          StartGround3.scale = 0.9
          CollideGroup.add(StartGround3);

          StartGround4= createSprite(350,height/2-60)
          StartGround4.addImage(StartGround_Img)
          StartGround4.scale = 0.9

          StartGround5= createSprite(450,height/2-60)
          StartGround5.addImage(StartGround_Img)
          StartGround5.scale = 0.9      
          StartGround5.visible = false;
          CollideGroup.add(StartGround4);      
         


}

// function assigned to InfoButton to make the Game State change 
function gsINFO(){
  gameState= INFO
}

// function when game is in info state "help state"
  function gsSERVE(){
    gameState = SERVE
    InfoScreen.visible = false;
    CancelButton.hide();
    NextButton.hide();
    PreviousButton.hide();
    nextIcon.visible  =false;
    previousIcon.visible = false;
    StartButton.show();
    displayName.show();
  }
// function of info screen to changee page 
function pgChange2(){
  pageNo = 2
 
}

// function of info Screen to change page 
function pgChange3(){
  pageNo = 3
 
}
function pgChange(){
  pageNo = 1
 
}
//Helps to solve a bug 
 function resetVelocity(){
  Joey.velocityY += 1
 }
// The Function For The HTML content of the page in Sevrve Screen 
function ShowName(){
  SaveName.hide();
  displayName.html("HELLO "+NameBar.value())
  displayName.position(100,height/2-190);
  displayName.style('color',col)
  displayName.style('color', 'white');
  displayName.style('font-size', '100px');
  NameBar.hide();
  StartButton.show();
  title.hide();
  InfoButton.show();
  gameState = "NAMEHIDE"

}
// Function For The name 
function name()
{
  var trail = map(mouseY, 0, height, 1, 10);
    fill(0, trail);
    rect(0, 0, width, height);

    noStroke();
    for(let i= 0; i < points.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points2.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points2[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points3.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points3[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points4.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points4[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points5.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points5[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
}