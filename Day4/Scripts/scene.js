var scene = new Scene();

function Scene()
{
  this.hazards = new Array();
  this.blocks = new Array(); //#new
  this.height = null;
  this.width = null;

  this.draw = function()
  {
    for( i in this.blocks)
    {
     this.blocks.forEach( (block) => block.draw() );
     this.hazards.forEach( (hazard) => hazard.draw() );
     exit.draw();
    }
  };
  
  this.setScene = function(worldData)
  {
    
    this.height = worldData.length;
    this.width = worldData[0].length;
    
    for(var j=0; j<this.height; j++)
    {
      var textRow = worldData[j];
      for(var i =0; i < this.width; i++)
      {
        var tileID = textRow[i];
        if (tileID == '#')
        {
          var x = i*32;
          var y = j*32;
          var w = 32;
          var h = 32;
          var block = new Block(x,y,w,h);
          this.blocks.push(block);
        }
        
        else if (tileID == '~')
        {
          var x = i*32;
          var y = j*32;
          var w = 32;
          var h = 32;
          var block = new Dirt(x,y,w,h);
          this.blocks.push(block);
        }
        else if (tileID == '+')
        {
          var x = i*32;
          var y = j*32;
          var w = 800;
          var h = 300;
          var block = new Sky(x,y,w,h);
          this.blocks.push(block);
        }
        else if (tileID == 'T')
        {
          var x = i*32;
          var y = j*32;
          var w = 32;
          var h = 32;
          var block = new Logo(x,y,w,h);
          this.blocks.push(block);
        }
        else if (tileID == 'O')
        {
          var x = i*32;
          var y = j*32;
          var w = 32;
          var h = 32;
          var block = new Sand(x,y,w,h);
          this.blocks.push(block);
        }
        if (tileID == 'D')
        {
          var x = i*32;
          var y = j*32;
          var w = 32;
          var h = 32;
          var block = new Lava(x,y,w,h);
          this.blocks.push(block);
        }
        else if (tileID  == '@')
        {
          player.x = i*32;
          player.y = j*32;
          
        }else if (tileID  == '$')
        {
          player2.x = i*32;
          player2.y = j*32;
          
        }
        else if (tileID == '!')
        {
          exit.x = i*32;
          exit.y = j*32;
        }
        else if (tileID == 'A')
        {
          var hazard = new FloorHazard();
          hazard.x = i*32
          hazard.y = j*32
          this.hazards.push(hazard)
        }
        else if (tileID == 'V')
        {
          var hazard = new CeilingHazard()
          hazard.x = i*32
          hazard.y = j*32
          this.hazards.push(hazard)
          
          
        }
        
      }
    }
    };
  };
