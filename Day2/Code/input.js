input = new Object();

input.x = null;
input.y = null;

input.start = function()
{
    renderer.canvas.addEventListener("mousemove", input.mouseMove);
    renderer.canvas.addEventListener("click",player.attack);
}

input.mouseMove = function(event)
{
    input.x = event.clientX - renderer.canvas.offsetLeft - player.width/2;
    input.y = event.clientY - renderer.canvas.offsetTop - player.height/2;
    
}

