renderer = new Object();

// Create the canvas
renderer.canvas = document.getElementById("viewport");
renderer.ctx = renderer.canvas.getContext("2d");

renderer.draw = function()
{
	renderer.ctx.clearRect(0,0,viewport.width,viewport.height);
	//Draw game
	scene.draw(); 
	player.draw();
	player2.draw();
	
};