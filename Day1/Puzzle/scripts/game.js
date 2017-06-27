    var passcode = ~~(Math.random() * 1000);
    var tries = 15;
    
while(guess != passcode && tries > 0)
{
     console.log("You Have " + tries + " guesses left")   
    console.log("Guess a number between 0-999");
    var guess = prompt("Enter a number (0-999)");
    tries = tries - 1;
    if(guess == passcode)
    {
        console.log("You won!");
    }  
    else if (tries <= 0)
    {
        console.log("You lost!");
        
    }

else

    giveClue();
}


function giveClue()
{
    if (guess > passcode)
 {
     console.log("Too High")
 }
 else
 {
     console.log("Too Low")
 }
}
console.log(passcode)