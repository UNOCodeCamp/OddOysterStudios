renderer = new Object();

// Create the canvas
renderer.canvas = document.getElementById("viewport");
renderer.ctx = renderer.canvas.getContext("2d");

renderer.ctx.webkitImageSmoothingEnabled = false;
  renderer.ctx.mozImageSmoothingEnabled = false;
  renderer.ctx.msImageSmoothingEnabled = false;
  renderer.ctx.imageSmoothingEnabled = false;


renderer.draw = function()
{
	renderer.ctx.clearRect(0,0,viewport.width,viewport.height);
	//Draw game
	scene.draw(); 
	player.draw();
	player2.draw();
	hud.draw();
	if (game.level == 0){
	hud.drawText("xxxxxxxxxxxxxxxxxxxxxxxxx   OddOyster Studios Presents, The Box Trap",viewport.width/8, viewport.height/15, "center", 40)
	}
};

