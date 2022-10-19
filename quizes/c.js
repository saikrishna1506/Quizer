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
var showans=document.querySelector("#showans");
var ancontainer=document.querySelector(".shans");
var dis=document.querySelectorAll(".a");

const arrayans=[];

//quiz data
const aptquiz=[{
    questiondata:"Which of the following is not a valid C variable name?",
    a:"int number;",
    b:"float rate;",
    c:"int variable_count;",
    d:"int $main;",
    correct:"d",
},
{
   questiondata:"Which of the following is true for variable names in C?",
    a:"They can contain alphanumeric characters as well as special characters",
    b:"It is not an error to declare a variable to be one of the keywords(like goto, static)",
    c:"Variable names cannot start with a digit",
    d:" Variable can be of any length",
    correct:"c",
},
{
    questiondata:"Which is valid C expression?",
    a:"int my_num = 100,000;",
    b:"int my_num = 100000;",
    c:"int my num = 1000;",
    d:"int $my_num = 10000;",
    correct:"b",
},
{
    questiondata:"Which of the following declaration is not supported by C language?",
    a:"String str;",
    b:"char *str;",
    c:"float str = 3e2;",
    d:"Both String str; & float str = 3e2;",
    correct:"a",
},
{
    questiondata:"Which keyword is used to prevent any changes in the variable within a C program?",
    a:"immutable",
    b:"mutable",
    c:"const",
    d:"volatile",
    correct:"c",
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
    arrayans.push(cor(aptquiz[quesno].correct));
    
    
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
    score.innerHTML=` Correct: ${correct}<br/> Incorrect: ${incorrect}`
    submit.style.display="none";
    
    showans.style.display="block";
});

//reset---------------------------------------------------------------------------
    const reset = () => {
        allInputs.forEach(
            (inputEl) => {
                inputEl.checked = false;
            }
        )
        }
 //-------------------------------------------------------------------------


 showans.addEventListener("click",()=>{
    username.style.display="none";
    showans.style.display="none";
    score.style.display="none";
    ancontainer.style.display="block";
    dis[0].innerHTML="1)."+arrayans[0];
    dis[1].innerHTML="2)."+arrayans[1];
    dis[2].innerHTML="3)."+arrayans[2];
    dis[3].innerHTML="4)."+arrayans[3];
    dis[4].innerHTML="5)."+arrayans[4];
    
    

 });


function cor(n){
    if(n=="a"){
        return aptquiz[quesno].a
    }
    else if(n=="b"){
        return aptquiz[quesno].b
    }
    else if(n=="c"){
        return aptquiz[quesno].c
    }
    else if(n=="d"){
        return aptquiz[quesno].d
    }
}


load(quesno);
//-___--------------------------------------------------------------------------------------------
