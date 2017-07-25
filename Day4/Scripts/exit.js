var exit = new Exit();

function Exit()
{

    this.x = 0;
    this.y = 0;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.src = "Assets/Door.png";

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        // #Are they touching?
        return ( Math.abs(this.x - gameObject.x) < 8 &&
                 Math.abs(this.y - gameObject.y) < 8); 
    };
}



