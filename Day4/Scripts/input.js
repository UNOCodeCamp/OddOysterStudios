input = new Object();

input.x = null;
input.y = null;
input.keysDown = new Set();

input.start = function()
{
	document.addEventListener("keydown", function(e){input.keysDown.add(e.keyCode)} );
	document.addEventListener("keyup", function(e){input.keysDown.delete(e.keyCode)} );

}
