 var numberOfDrumButtons = document.querySelectorAll(".drum").length;
 
 for( var i=0;i<numberOfDrumButtons;i++){



document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAmination(buttonInnerHTML);
});
 }

   /* switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;                        
    
        default:
            console.log(buttonInnerHTML);
            break;
    }

});
 }
*/

// Detecting keybord pesss

document.addEventListener( 'keydown', function ( event ){
    makeSound(event.key);
    buttonAmination(event.key);
} );


function makeSound(key) {
    switch (key) {
        case "q":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "w":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()  ;
            break;
        case "e":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "r":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "t":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "y":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "u":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;  
            
         //default: console.log(key);
    
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

 function buttonAmination(currentkey){

     var activeButton = document.querySelector("." + currentkey);

     activeButton.classList.add("pressed");

     setTimeout(function() { 
        activeButton.classList.remove("pressed");
        },100);
     
    }
























 //var audio = new Audio("sounds/tom-1.mp3");
 //audio.play();