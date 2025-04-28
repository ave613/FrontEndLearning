const decreasedBtn=document.getElementById("decBtn");
const resetBtn=document.getElementById("reBtn");
const increaseBtn=document.getElementById("incBtn");
const countLabel=document.getElementById("countLabel");
let count=0;
increaseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decreasedBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}