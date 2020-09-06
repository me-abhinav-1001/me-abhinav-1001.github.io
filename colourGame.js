// alert("CONNECTED!")
var numsq = 6;
var colours = genRanColrs(6);

var squares = document.querySelectorAll(".square");
var pickedColour = picColr();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetBtn = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeBtn = document.querySelectorAll(".mode");


for(var i = 0; i < modeBtn.length; i++){
    modeBtn[i].addEventListener("click", function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected")

        if(this.textContent === "Easy"){
            numsq = 3;
        }
        else{
            numsq = 6;
        }
        reset();

    });
}

function reset(){
    h1.style.backgroundColor = "steelblue";
    colours = genRanColrs(numsq);
    pickedColour = picColr();
    colourDisplay.textContent = pickedColour;
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Colours"

    for(var i = 0; i < squares.length; i++){
        if(colours[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }

}

resetBtn.addEventListener("click", function(){
    // h1.style.backgroundColor = "steelblue";
    // colours = genRanColrs(numsq);
    // pickedColour = picColr();
    // colourDisplay.textContent = pickedColour;
    // messageDisplay.textContent = "";
    // resetBtn.textContent = "New Colours"

    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colours[i];
    // }
    reset();
});

// easyBtn.addEventListener("click",function(){
//     h1.style.backgroundColor = "steelblue";
//     hardBtn.classList.remove("selected")
//     easyBtn.classList.add("selected");
//     numsq = 3;
//     colours = genRanColrs(numsq);
//     pickedColour = picColr();
//     colourDisplay.textContent = pickedColour;
//     messageDisplay.textContent = "";

//     for(var i = 0; i < squares.length; i++){
//         if(colours[i]){
//             squares[i].style.backgroundColor = colours[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click",function(){
//     h1.style.backgroundColor = "steelblue";
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numsq = 6;
//     colours = genRanColrs(numsq);
//     pickedColour = picColr();
//     colourDisplay.textContent = pickedColour;
//     messageDisplay.textContent = "";

//     for(var i = 0; i < squares.length; i++){
        
//             squares[i].style.backgroundColor = colours[i];
//             squares[i].style.display = "block";
        
//     }
// });


colourDisplay.textContent = pickedColour;

for(var i = 0; i <= squares.length; i++){
    squares[i].style.backgroundColor = colours[i];

    squares[i].addEventListener("click", function(){
        var clickedColour = this.style.backgroundColor;
        if(clickedColour === pickedColour){
            messageDisplay.textContent = "Correct!";
            resetBtn.textContent = "Play Again!"
            changeColours(clickedColour);
            h1.style.backgroundColor = clickedColour;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again!";
        }
    });
}

function changeColours(colr){
    for(var i =0; i < squares.length; i++){
        squares[i].style.backgroundColor = colr;
    }
}

function picColr(){
    var ran = Math.floor(Math.random() * colours.length);
    return colours[ran];
}

function genRanColrs(num){
    var arr =[];

    for(var i = 0; i < num; i++){
        arr.push(ranColrs())
    }

    return arr;
}

function ranColrs(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

