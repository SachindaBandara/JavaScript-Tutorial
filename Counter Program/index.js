// Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const CountLable = document.getElementById("CountLable");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    CountLable.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    CountLable.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    CountLable.textContent = count;
}
