//guess game
/*const answer = Math.floor(Math.random()* 10  + 1);
let guesses = 0;

document.getElementById("submitBtn").onclick = function(){
    let guessed = document.getElementById("guessBox").value;
    guesses +=1;
    
    if (guessed == answer){
        alert(`Congrats ${answer} is the # , it took you ${guesses} guesses`);
    }
    else if (guessed < answer ) {
        alert("A bit higher");
    } 
    else {
        alert("A bit lower");
    }
}

let adult = checkAge(6);
console.log(adult);

function checkAge(age){
    return age >= 18 ? true : false;
} 

let symbol = window.prompt("Choose a simbol.");
let rows = window.prompt("Choose number of rows.");
let colums = window.prompt("Choose number of colums.");

for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= colums; j+=1){
        document.getElementById("myLabel").innerHTML += symbol;
    }
    document.getElementById("myLabel").innerHTML += "<br>";
}*/
document.getElementById("submitButton").onclick = function(){
    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = toCelsius(temp);
        temp = Number(temp);
        document.getElementById("tempLabel").innerHTML = temp + " C°";
        
    }

    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = toFahrenheit(temp);
        temp = Number(temp);
        document.getElementById("tempLabel").innerHTML = temp + " F°";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit!";
    }
}




function toCelsius(temp){
    return (temp - 32) * (5/9);
}
function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}