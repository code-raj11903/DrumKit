

// detecting when buttons are pressed

var NoOfDrumButtons = document.querySelectorAll(" .drum ").length;
for(var i =0; i<NoOfDrumButtons; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){ ///anonymous function
  
 var ButtonHtml = this.innerHTML; //  this keyword will tell which is pressed 
maksound(ButtonHtml);
buttonanimation(ButtonHtml);

});
}
// detecting when key Board is pressed
document.addEventListener("keydown", function(event){
    var buttonPressed = event.key;
    maksound(buttonPressed);
    buttonanimation(buttonPressed);
});



// function to makesound 
function maksound(key)
{
    switch (key) {
        case "w": var sound = new Audio("/sounds/tom-1.mp3");
                sound.play();
            break;
        case "a":var sound = new Audio("/sounds/tom-2.mp3");
        sound.play();
            break;
        case "s":var sound = new Audio("/sounds/tom-3.mp3");
        sound.play();
            break;
        case "d":var sound = new Audio("/sounds/tom-4.mp3");
        sound.play();
            break; 
        case "j":var sound = new Audio("/sounds/snare.mp3");
        sound.play();
            break;
        case "k":var sound = new Audio("/sounds/kick-bass.mp3");
        sound.play();
            break;
        case "l":var sound = new Audio("/sounds/crash.mp3");
        sound.play();
            break;
            
        default:console.log ("Input is not valid");
            break;
     }
}


// add animation
function buttonanimation(currentkey){
var activebutton = document.querySelector("."+currentkey);
activebutton.classList.add("pressed");
 setTimeout(function()
 {activebutton.classList.remove("pressed");
 },100);
}
