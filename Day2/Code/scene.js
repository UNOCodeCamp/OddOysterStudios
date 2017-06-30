scene = new Object();

scene.image = new Image();
scene.image.src = "assets/OddOysters_Moon.png";

scene.draw = function()
{
	renderer.ctx.drawImage( scene.image, 0, 0, 1400, 650 ); 
};
