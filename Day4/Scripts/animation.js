function Animation(imageArray)
{
    this.startTime = Date.now();
    this.frameIndex = 0; 
    this.sequence = new Array();
    imageArray.forEach( (imgsrc) => 
        { 
            var image = new Image();
            image.src = imgsrc;
            this.sequence.push(image ); 
            
        });
    
    
    
    this.getImage = function()
    {
        var index = this.frameIndex;
        
        var now = Date.now();
        if(now - this.startTime > 75){
            this.frameIndex = (index + 1) % this.sequence.length;
            this.startTime = now;
        }
        
        return this.sequence[index];
    }
}