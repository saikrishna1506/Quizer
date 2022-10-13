var question=document.querySelector("#question");
var opt1=document.querySelector("#op1");
var opt2=document.querySelector("#op2");
var opt3=document.querySelector("#op3");
var opt4=document.querySelector("#op4");
var score=document.querySelector("#score");
var next=document.querySelector("#next");
var submit=document.querySelector("#submit");
var container=document.querySelector(".containerr");
var subcont=document.querySelector(".subcont");
var namee=document.querySelector("#name");
var username=document.querySelector("#user");
var semi=document.querySelector(".semi");




//quiz data
const aptquiz=[{
    questiondata:"Who developed Python Programming Language?",
    a:"Wick van Rossum",
    b:"Rasmus Lerdorf",
    c:"Guido van Rossum",
    d:"Niene Stom",
    correct:"c",
},
{
    questiondata:"Which of the following is the correct extension of the Python file?",
    a:".python",
    b:".pl",
    c:".py",
    d:".p",
    correct:"c",
},
{
    questiondata:"All keywords in Python are in _________",
    a:"Capitalized",
    b:"lower case",
    c:"UPPER CASE",
    d:"None of the mentioned",
    correct:"d",
},
{
    questiondata:"Which keyword is used for function in Python language?",
    a:"Function",
    b:"Def",
    c:"Fun",
    d:"Define",
    correct:"b",
},
{
    questiondata:"What is the order of precedence in python?",
    a:"Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",
    b:"Exponential, Parentheses, Division, Multiplication, Addition, Subtraction",
    c:"Parentheses, Exponential, Multiplication, Division, Subtraction, Addition",
    d:"Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",
    correct:"d",
},]
let quesno=0;
//-------------------------------------------------------------
var namebox=document.querySelector(".in");
var enter=document.querySelector("#start");
enter.addEventListener("click",()=>{
    namebox.style.display="none";
    container.style.display="block";

});
//--------------------------------------------------------------
function progress(){
    document.querySelector(".pr1").style.width = ((quesno)*20)+"%";
}

//----------------------------------------------------------------------------------------------------------


let correct=0;
let incorrect=0;
let allInputs = document.querySelectorAll("input[type='radio']")
function load(){

    
question.innerHTML=aptquiz[quesno].questiondata;
    allInputs[0].nextElementSibling.innerText = aptquiz[quesno].a
    allInputs[1].nextElementSibling.innerText = aptquiz[quesno].b
    allInputs[2].nextElementSibling.innerText = aptquiz[quesno].c
    allInputs[3].nextElementSibling.innerText = aptquiz[quesno].d
    
    

}

//-----------------------------------------------------------------------------------------------------

next.addEventListener("click",() => {
 
    const data = aptquiz[quesno];
    
     const ans = getAnswer()
     if (data.correct === ans) {
           
           
         correct++;
     } else {
           
         incorrect++;
     }
     if(ans){ 
      quesno++;}
      else{
        quesno=quesno;
      }
      if(quesno === aptquiz.length){
        subcont.style.display="block";
        container.style.display='none';
        submit.style.display='block';
      }
       else{
        reset();
        load();
        progress();
       }
    
})
//---------------------------------------------------------------------------------------------------------

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    
    return ans;

    }
//------------------------------------------------------------------------------------------------

submit.addEventListener("click",() => {
    semi.style.display="none";
    score.style.display="block";
    username.innerHTML=`${namee.value}, you got `
    score.innerHTML=` Correct:  ${correct}<br/> Incorrect: ${incorrect}`
    submit.style.display="none";
});

//reset---------------------------------------------------------------------------
    const reset = () => {
        allInputs.forEach(
            (inputEl) => {
                inputEl.checked = false;
            }
        )
        }

load(quesno);
//-___--------------------------------------------------------------------------------------------
