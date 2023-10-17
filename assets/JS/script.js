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
var li2 = document.createElement("button");
var li3 = document.createElement("button");
var li4 = document.createElement("button");

var li5 = document.createElement("button");
var li6 = document.createElement("button");
var li7 = document.createElement("button");
var li8 = document.createElement("button");

var li9 = document.createElement("button");
var li10 = document.createElement("button");
var li11 = document.createElement("button");
var li12 = document.createElement("button");

var li13 = document.createElement("button");
var li14 = document.createElement("button");
var li15 = document.createElement("button");
var li16 = document.createElement("button");

var next = document.createElement("button");
var next1 = document.createElement("button");
question1.textContent = "What allows to create text with java script";
question2.textContent = "what allows you to create a container with java script";
question3.textContent = "what adds a element to the hmtl page in java script";
question4.textContent = "what changes the css in java script";

next.textContent = "Next";
next1.textContent = "Next";

li1.textContent = "append";
li2.textContent = "text-content";
li3.textContent = "create-elememt";
li4.textContent = "set-attribute";

li5.textContent = "text-content";
li6.textContent = "set-attribute";
li7.textContent = "append";
li8.textContent = "create-elememt";

li9.textContent = "a";
li10.textContent = "b";
li11.textContent = "c";
li12.textContent = "d";

li13.textContent = "a";
li14.textContent = "b";
li15.textContent = "c";
li16.textContent = "d";

question1.setAttribute("style","font-size: 40px; margin: 5%; border: solid 2px black; padding: 5px; background-color: midnightblue; color: yellow; ");
question2.setAttribute("style","font-size: 40px; margin: 5%; border: solid 2px black; padding: 5px; background-color: midnightblue; color: yellow; ");


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
    function correct(){
        alert("Correct!")
        body.appendChild(next)
    };
    function wrong(){
        alert("try agian")
    };
    function Next(){
        question1.remove()
        li1.remove()
        li2.remove()
        li3.remove()
        li4.remove()
        next.remove()
        head.appendChild(question2);
        listEl.appendChild(li5);
        listEl.appendChild(li6);
        listEl.appendChild(li7);
        listEl.appendChild(li8);


    };
    function correct1(){
        alert("Correct!")
        body.appendChild(next1)
    };
    function wrong1(){
        alert("try agian")
    };
    function Next1(){
        question2.remove()
        li5.remove()
        li6.remove()
        li7.remove()
        li8.remove()
        next1.remove()
        head.appendChild(question3);
        listEl.appendChild(li9);
        listEl.appendChild(li10);
        listEl.appendChild(li11);
        listEl.appendChild(li12);
    };

  
        
        
        
        li1.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px; font-size: 30px;");
        li2.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px;font-size: 30px;");
        li3.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px;font-size: 30px;");
        li4.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px;font-size: 30px;");

       
        li5.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px; font-size: 30px;");
        li6.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px;font-size: 30px;");
        li7.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px;font-size: 30px;");
        li8.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 35px;font-size: 30px;");

        next.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 90%; margin-top: -2%; font-size: 30px; ");
        next1.setAttribute("style", " color:yellow; background:midnightblue; padding: 5px; margin-left: 90%; margin-top: -2%; font-size: 30px; ");






        startbtn.addEventListener("click",startQuiz);
        li1.addEventListener("click",wrong);
        li2.addEventListener("click",correct);
        li3.addEventListener("click",wrong);
        li4.addEventListener("click",wrong);
        next.addEventListener("click",Next);

        li5.addEventListener("click",wrong1);
        li6.addEventListener("click",wrong1);
        li7.addEventListener("click",wrong1);
        li8.addEventListener("click",correct1);
        next1.addEventListener("click",Next1);
        
        