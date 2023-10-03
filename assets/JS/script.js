var timerEl = document.querySelector(".timer-count");
var startbtn = document.querySelector(".start-button");
var questionsEl = document.querySelector("questions");
var body = document.body;
var locq = document.header;
var question1 = document.createElement("p");
var question2 = document.createElement("p");
var question3 = document.createElement("p");
var question4 = document.createElement("p");

var listEl = document.createElement("ul");
var li1 = document.createElement("button");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var li5 = document.createElement("li");
var li6 = document.createElement("li");
var li7 = document.createElement("li");
var li8 = document.createElement("li");

var li9 = document.createElement("li");
var li10 = document.createElement("li");
var li11 = document.createElement("li");
var li12 = document.createElement("li");

var li13 = document.createElement("li");
var li14 = document.createElement("li");
var li15 = document.createElement("li");
var li16 = document.createElement("li");

question1.textContent = "What allows to create text with java script";
question2.textContent = "what allows you to create a container with java script";
question3.textContent = "what adds a elemet to the hmtl page in java script";
question4.textContent = "what changes the css in java script";

li1.textContent = "a";
li2.textContent = "b";
li3.textContent = "c";
li4.textContent = "d";

li5.textContent = "a";
li6.textContent = "b";
li7.textContent = "c";
li8.textContent = "d";

li9.textContent = "a";
li10.textContent = "b";
li11.textContent = "c";
li12.textContent = "d";

li13.textContent = "a";
li14.textContent = "b";
li15.textContent = "c";
li16.textContent = "d";




var timer;
var timerCount;

function startQuiz(){
   timerCount = 300;
    startbtn.disabled = true;
    head.appendChild(question1);
    document.body.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
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



// function Q1{
  

// }

li1.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px; font-size: 30px;");
li2.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px;font-size: 30px;");
li3.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px;font-size: 30px;");
li4.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px;font-size: 30px;");
startbtn.addEventListener("click",startQuiz);
