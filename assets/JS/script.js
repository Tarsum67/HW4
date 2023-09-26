var timerEl = document.querySelector(".timer-count");
var startbtn = document.querySelector(".start-button");
var questionsEl = document.querySelector("questions");


var timer;
var timerCount;

function startQuiz(){
    timerCount = 300;
    startbtn.disabled = true;
    startTimer()
   startbtn.remove()
}

function startTimer(){
timer = setInterval(function(){
    timerCount--;
    timerEl.textContent = timerCount;

    if (timerCount === 0){
        clearInterval(timer);
        // outOfTime()

    }

},1000);
}
// function outOfTime{ 

//     .textContent = "Out Of Time"
// }



function Q1{
  

}

startbtn.addEventListener("click",startQuiz);
