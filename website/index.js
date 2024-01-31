let count = 0;
let day10 = "Congrats! Youe've reached a 10 day strek, you should celebrate by going out to eat"

document.getElementById("decreaseBtn").onclick = function() {
    count -=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count =0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
    if(count === 10){
        document.getElementById("celebrate").innerHTML = day10;
    }
    if(count === 11){
        document.getElementById("celebrate").innerHTML = "1";
    }
}