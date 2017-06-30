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
player2.poses['right'] = new Animation(["Assets/WalkRight1 (1).png","Assets/WalkRight2.png","Assets/WalkRight3.png" ]);    
player2.poses['left'] = new Animation(["Assets/WalkLeft1.png","Assets/Walkleft2.png","Assets/WalkLeft3.png" ]);
player2.poses['front'] = new Animation(["Assets/Walk1.png","Assets/Walk2.png","Assets/Walk3.png" ]);
player2.currentPose = 'left';


player2.draw = function()
{
    var sprite = player.poses[player.currentPose]
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
    }
    // player2 holding right
    if (input.keysDown.has(39) && player2.velX < player2.speed) 
    { 
        player2.velX++;
    }
    player2.velX *= friction;

    /*Jumping*/
    if ( (input.keysDown.has(38) || input.keysDown.has(32) ) && !player2.isJumping) 
    { 
        player2.isJumping = true;
        player2.velY = -player2.speed*2;
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


