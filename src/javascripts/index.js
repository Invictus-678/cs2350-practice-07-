// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import 'bootstrap'

document.write('<div class="red box"></div>');
document.write('<div class="blue box"></div>');


let j = 0;
let k = 0;

//for
for(let i = 0; i < 10; i++){
    let R = Math.random();

    if (R < .5){
        document.write('<div class="blue box"></div>');
    }
    else{
        document.write('<div class="red box"></div>');
    }
}

//while
while (j < 10){
    let R = Math.random();

    if (R < .5){
        document.write('<div class="blue box"></div>');
    }
    else{
        document.write('<div class="red box"></div>');
    }
    j++;
}

//do-while
do{
    let R = Math.random();

    if (R < .5){
        document.write('<div class="blue box"></div>');
    }
    else{
        document.write('<div class="red box"></div>');
    }
    k++;
} while (k < 10)


//Randomization is reduntant-- lets use a function!!

 j = 0;
 k = 0;

const displayRandomBox = function(){
    let R = Math.random();

    if (R < .5){
        document.write('<div class="blue box"></div>');
    }
    else{
        document.write('<div class="red box"></div>');
    }
}


//for
for(let i = 0; i < 10; i++){
    displayRandomBox()
}

//while
while (j < 10){
    displayRandomBox()
    j++;
}

//do-while
do{
    displayRandomBox()
    k++;
} while (k < 10)



//display N boxes

j = 0;
k = 0;

function displayNBoxesUsingFor(n){
    for(let i = 0; i < n; i++){
        displayRandomBox()
    }
}

function displayNBoxesUsingWhile(n){
    while (j < n){
        displayRandomBox()
        j++;
    }
}
function displayNBoxesUsingDoWhile(n){
    do{
        displayRandomBox()
        k++;
    } while (k < n)
}


displayNBoxesUsingFor(11);
displayNBoxesUsingWhile(13);
displayNBoxesUsingDoWhile(13);

const square = function(x){

    return x*x;
}

function displayMessage() {
    let name = document.getElementById("name-f").value;
    let myText = "Hello " + name + ", Welcome!"
    alert (myText);
  }
