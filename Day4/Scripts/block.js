function Block(x,y,width,height)
{

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "Assets/Grass.png";
   

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image , this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( this.x <= (gameObject.x + gameObject.width) 
                 && gameObject.x <= (this.x + this.width)
                 && this.y <= (gameObject.y + gameObject.height)
                 && gameObject.y <= (this.y + this.height) ); 
    };
};

function Dirt(x,y,width,height)
{

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "Assets/Dirt.png";
   

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image , this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( this.x <= (gameObject.x + gameObject.width) 
                 && gameObject.x <= (this.x + this.width)
                 && this.y <= (gameObject.y + gameObject.height)
                 && gameObject.y <= (this.y + this.height) ); 
    };
};

function Logo(x,y,width,height)
{

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "Assets/Logo.png";
   

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image , this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( this.x <= (gameObject.x + gameObject.width) 
                 && gameObject.x <= (this.x + this.width)
                 && this.y <= (gameObject.y + gameObject.height)
                 && gameObject.y <= (this.y + this.height) ); 
    };
};

function Sand(x,y,width,height)
{

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "Assets/Sand.png";
   

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image , this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( this.x <= (gameObject.x + gameObject.width) 
                 && gameObject.x <= (this.x + this.width)
                 && this.y <= (gameObject.y + gameObject.height)
                 && gameObject.y <= (this.y + this.height) ); 
    };
};

function Lava(x,y,width,height)
{

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "Assets/Lava.png";
   

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image , this.x, this.y, this.width, this.height );
    };

    this.isTouching = function( gameObject )
    { 
        return ( this.x <= (gameObject.x + gameObject.width) 
                 && gameObject.x <= (this.x + this.width)
                 && this.y <= (gameObject.y + gameObject.height)
                 && gameObject.y <= (this.y + this.height) ); 
    };
}

function Sky(x,y,width,height)
{

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "Assets/Sky.png";
   

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image , this.x, this.y, this.width, this.height );
    };

    this.isTouching = function( gameObject )
    { 
        return ( this.x <= (gameObject.x + gameObject.width) 
                 && gameObject.x <= (this.x + this.width)
                 && this.y <= (gameObject.y + gameObject.height)
                 && gameObject.y <= (this.y + this.height) ); 
    };
}










