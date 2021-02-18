
var numOfColors = 6;
var colors = generatingRandomColor(numOfColors);

var boxes = document.querySelectorAll(".box");
var pickedColor =  randomColor();
var displayColor = document.querySelector("#displayColor");
var displayResult = document.querySelector("#display");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


//listening to the easy button
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfColors = 3;
    colors = generatingRandomColor(numOfColors);
    pickedColor =  randomColor();
    displayColor.textContent = pickedColor;
    for(let i=0; i<boxes.length; i++){
        if(colors[i]){
            boxes[i].style.backgroundColor = colors[i];
        }else{
            boxes[i].style.display = "none";
        }
    }  
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfColors = 6;
    colors = generatingRandomColor(numOfColors);
    pickedColor =  randomColor();
    displayColor.textContent = pickedColor;
    for(let i=0; i<boxes.length; i++){
        boxes[i].style.backgroundColor = colors[i];
        boxes[i].style.display = "block";
    }  
    
})

//listening to the reset button
resetBtn.addEventListener("click", function(){
    colors = generatingRandomColor(numOfColors);
    pickedColor =  randomColor();
    displayColor.textContent = pickedColor;
    this.textContent = "NEW COLORS";

    displayResult.textContent = "";
    for(let i=0; i<boxes.length; i++){
        boxes[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "steelblue";
})

for(let i=0; i<boxes.length; i++){
  boxes[i].style.backgroundColor = colors[i];

  //listening for a click event
  boxes[i].addEventListener("click",function(){
      if(boxes[i].style.backgroundColor === pickedColor){
        displayResult.textContent = "Congratulations";
        h1.style.backgroundColor = pickedColor;
        resetBtn.textContent = "PLAY AGAIN?";
        changeColor(pickedColor);
        
        

      }else{
        displayResult.textContent = "Try again";
        this.style.backgroundColor = "#232323"
      }
  })
}

displayColor.textContent = pickedColor;

//function on winning scenario changes all to the correct color
function changeColor(color){
    for(let i=0; i<boxes.length; i++){
        boxes[i].style.backgroundColor = color;
    }
}

function randomColor(){
   var randomNumber =  Math.floor(Math.random()*colors.length);
   return colors[randomNumber]
}

function generatingRandomColor(num){
let arr = [];
    for(let i=0; i<num; i++){
    arr.push(randomRGB())    
}
return arr;
}

function randomRGB(){
var r = Math.floor(Math.random()* 256);
var g = Math.floor(Math.random()* 256);
var b = Math.floor(Math.random()* 256);
return "rgb(" + r + ", "+ g + ", " + b + ")";
}