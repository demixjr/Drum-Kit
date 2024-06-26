function handleClick(){
    var name;
    switch(this.innerHTML){
        case "w":
            name="crash";
            break;
        case "a":
            name="kick-bass";
            break;   
        case "s":
            name="snare";
            break;
        case "d":
            name="tom-1";
            break;
        case "j":
            name="tom-2";
            break;
        case "k":
            name="tom-3";
            break;
        case "l":
            name="tom-4";
            break; 
        default:
            break;                        
    }
    
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
   var keyPressed = this.innerHTML;
   document.querySelector("."+keyPressed).classList.add("pressed");

setTimeout(function(){
    document.querySelector("."+keyPressed).classList.remove("pressed");
},
100);
  
}

for(var i = 0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
document.addEventListener("keydown", function(event){
    var pressedButton = event.key;
    var name;
    switch(pressedButton){
        case "w":
            name="crash";
            break;
        case "a":
            name="kick-bass";
            break;   
        case "s":
            name="snare";
            break;
        case "d":
            name="tom-1";
            break;
        case "j":
            name="tom-2";
            break;
        case "k":
            name="tom-3";
            break;
        case "l":
            name="tom-4";
            break; 
        default:
            break;                        
    }
    
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
    var keyPressed = event.key;
    document.querySelector("."+keyPressed).classList.add("pressed");
 
 setTimeout(function(){
     document.querySelector("."+keyPressed).classList.remove("pressed");
 },
 100);
   
}
);  
