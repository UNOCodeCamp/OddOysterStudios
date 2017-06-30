renderer = new Object();

// Create the canvas
renderer.canvas = document.getElementById("viewport");
renderer.ctx = renderer.canvas.getContext("2d");

// Use nearest-neighbor scaling when images are resized instead of the resizing algorithm to create blur.
  
renderer.ctx.webkitImageSmoothingEnabled = false;
  renderer.ctx.mozImageSmoothingEnabled = false;
  renderer.ctx.msImageSmoothingEnabled = false;
  renderer.ctx.imageSmoothingEnabled = false;

renderer.start = function()
{
	renderer.canvas.style = "cursor: none;"
}

renderer.draw = function()
{
	//Draw game
	scene.draw(); 
	enemy.draw();
    player.draw();
	hud.draw();
};