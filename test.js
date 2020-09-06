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
var score = 0;
var scrsel = document.querySelector("#scrupd");
var triessc = 6;
var trysel = document.querySelector("#tryupd");

var count = 0;
var count2 = 0;
var bo = false;
// var z = 0;

for(var i = 0; i < modeBtn.length; i++){
    modeBtn[i].addEventListener("click", function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected")

        if(this.textContent === "Easy"){
            numsq = 3;
            score = 0;
            triessc = 6;
            scrsel.textContent = score;
            trysel.textContent = triessc;
        }
        else{
            numsq = 6;
            score = 0;
            triessc = 6;
            scrsel.textContent = score;
            trysel.textContent = triessc;
        }
        reset();

    });
}
// function res(){
//     h1.style.backgroundColor = "steelblue";
//     colours = genRanColrs(numsq);
//     pickedColour = picColr();
//     colourDisplay.textContent = pickedColour;
//     messageDisplay.textContent = "";
//     resetBtn.textContent = "New Colours"

//     for(var i = 0; i < squares.length; i++){
//         if(colours[i]){
//             squares[i].style.display = "block";
//             squares[i].style.backgroundColor = colours[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }

// }

function reset(){
    h1.style.backgroundColor = "steelblue";
    scores.style.backgroundColor = "steelblue";
    colours = genRanColrs(numsq);
    pickedColour = picColr();
    colourDisplay.textContent = pickedColour;
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Colours"
    count = 0;
    count2 =0;

    // handler(e);

    for(var i = 0; i < squares.length; i++){
        // squares[i].removeEventListener("click",real,false);
        if(colours[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
            
        }
        else{
            squares[i].style.display = "none";
        }
    }
    // event.stopImmediatePropagation();
    // setTimeout(handler,1000);



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
// var c = squares[0].style.backgroundColor;
// function check{
//     for(var i = 1; i <= squares.length; i++){
//         if(c === squares[i].style.backgroundColor)
//     }

    
// }



var er = "rgb(35, 35, 35)";



colourDisplay.textContent = pickedColour;





for(var i = 0; i <= squares.length; i++){
    squares[i].style.backgroundColor = colours[i];
    
    squares[i].addEventListener("click", function(){
        // z++;++;
        // if (z==1){
            
        // }
        var clickedColour = this.style.backgroundColor;

        // count2--;
        // count++;
        console.log(clickedColour);
        if(clickedColour === pickedColour){
            count++;
            if(count === 1){
                score++;
            }
            scrsel.textContent = score;
            // console.log(clickedColour,pickedColour);
            messageDisplay.textContent = "Correct!";
            trysel.textContent = triessc;
            
            changeColours(clickedColour);
            h1.style.backgroundColor = clickedColour;
            scores.style.backgroundColor = clickedColour;
            
            bo = true;
            
            if(bo){
                // count = 0;
                bo = false;
                // reset();
                
                setTimeout(reset,1000);
            }
            // if(count === 1 ){
            //     // console.log("count");
            //     count = 0;
            //     reset();
            // }
            
        }
        else if(clickedColour !== er){
            count2++;
            if (count2 === 1){
                --triessc;
                count2 = 0;
            }
            scrsel.textContent = score;
            trysel.textContent = triessc;
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again!";

            // console.log(triessc);
            if(triessc <= 0){
                // console.log(triessc);
                messageDisplay.textContent = "GAME OVER !";
                
                scrsel.textContent = score;
                trysel.textContent = 0;
                resetBtn.textContent = "Play Again!"
                setTimeout(perish,1000);
                // changeColours(rgb(35, 35, 35));
                
                resetBtn.addEventListener("click", function(){
                    score = 0;
                    triessc = 6;
                    scrsel.textContent = score;
                    trysel.textContent = triessc;

                    reset();
                })
                
            }
        }
    });
}

// function handler(){
//     console.log("");
// }
    

function perish(){
    for(var i =0; i < squares.length; i++){
        squares[i].style.backgroundColor = "#232323";
    }
}

function changeColours(colr){
    for(var i =0; i < squares.length; i++){
        squares[i].style.backgroundColor = colr;
    }
    // event.stopImmediatePropagation();
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


