var friction = 0.8;                 
var gravity = 0.4;  
const TERMINAL2 = 8; 

player2 = new Object();

player2.x = null;        
player2.y = null;
player2.width = 32;                  
player2.height = 32;                 
player2.image = new Image();
player2.image.src = "Assets/Character1.png";
player2.health = 100;
player2.speed = 6;
player2.velX = 0;                    
player2.velY = 0;                    
player2.isJumping = false; 


player2.poses = {};
player2.poses['right'] = new Animation(["Assets/2Right1.png","Assets/2Right2.png","Assets/2Right3.png" ]);    
player2.poses['left'] = new Animation(["Assets/2Left1.png","Assets/2Left2.png","Assets/2Left3.png" ]);
player2.poses['front'] = new Animation(["Assets/2Still1.png","Assets/2Still2.png","Assets/2Still3.png","Assets/2Still4.png"]);
player2.poses['jump'] = new Animation(["Assets/2Jump1.png","Assets/2Jump2.png","Assets/2Jump3.png"]);
player2.poses['still'] = new Animation(["Assets/2Still1.png","Assets/2Still2.png","Assets/2Left3.png"])
player2.currentPose = 'right';


player2.draw = function()
{
     if (input.keysDown.size == 0)
    {
         player2.currentPose = "still"
       
    }
    var sprite = player2.poses[player2.currentPose]
       player2.image = sprite.getImage(); 
    renderer.ctx.drawImage( player2.image, player2.x, player2.y, player2.width, player2.height ); 
};


player2.isTouching = function( gameObject )
{ 
    return ( player2.x <= (gameObject.x + 24) 
             && gameObject.x <= (player2.x + 24)
             && player2.y <= (gameObject.y + gameObject.height)
             && gameObject.y <= (player2.y + player2.height) ); 
};

player2.move = function(x, y)
{
    /*Left/Right Movement*/

    // player2 holding left
    if (input.keysDown.has(37) && player2.velX > -player2.speed) 
    { 
        player2.velX--; 
        player2.currentPose = 'left'
    }
    // player2 holding right
    if (input.keysDown.has(39) && player2.velX < player2.speed) 
    { 
        player2.velX++;
        player2.currentPose = 'right'
    }
    player2.velX *= friction;

    /*Jumping*/
    if ( (input.keysDown.has(38)  ) && !player2.isJumping) 
    { 
        player2.isJumping = true;
        player2.velY = -player2.speed*2;
        player2.currentPose = "jump";
    }

    //Apply terminal velocity
    if (player2.velY < TERMINAL2)
    {
        player2.velY += gravity;
    }

    //Check for collisons --> affects player2 velocity
    for (var i=0; i<scene.blocks.length; i++)
    {
        var block = scene.blocks[i];
        if (player2.isTouching(block) )
        {
            //check for bottom collisions
            if (player2.y+24 < block.y && player2.velY >= 0)
            {
                player2.isJumping = false;
                player2.velY = 0;
            }
            //check for top collisions
            else if (player2.y > block.y+24 && player2.velY < 0)
            {
                player2.velY = 0;
                player2.y = block.y + 24 + 1
            }
            //check for left collisions
            if (player2.x < block.x+32 && player2.velX < 0 && Math.abs(block.y - player2.y) < 8 )
            {
                player2.velX = 0;
                player2.x = block.x+32+1
            }

            //check for right collisions
            else if (player2.x+32 > block.x && player2.velX > 0 && Math.abs(block.y - player2.y) < 8 )
            {
                player2.velX = 0;
                player2.x = block.x - 32 - 1
            }
        }
    }

    //Velocity affects player2 position
    player2.x += player2.velX ;
    player2.y += player2.velY;
};


