const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
question:"Which type of JavaScript language is ___?",

	a:"object-Oriented",
	b:"object-Based",
	c:"Assembly-language",
	d:"high-level",
	correct:"b",
},
];// create all the question here

let index=0;//use to fetch the question
let correct=0,incorrect=0;// for the result
let total=quizData.length;// to check the len

//fetch the question display part
let question=document.getElementById("questionBox");
//fetch the all option part
let allinputs=document.querySelectorAll("input");

// this function load the question and option one by one 
function loadQuestion(){

    // set the logic to end the quiz
    if(total==index){
         quizeEnd()
    }
    reset()
    const data=quizData[index];
    //set the question here 
    questionBox.innerHTML=`${index+1})${data.question}`;
    //set the option here
    allinputs[0].nextElementSibling.innerText=data.a;
    allinputs[1].nextElementSibling.innerText=data.b;
    allinputs[2].nextElementSibling.innerText=data.c;
    allinputs[3].nextElementSibling.innerText=data.d;
}

// set the submit btn

document.querySelector(".btn").addEventListener(
    "click",
    function(){
    const data=quizData[index]
    // use to fetch the ans
    const ans=getAnswer()
    if(ans==data.correct){
        correct++;
    }else{
        incorrect++;
    }
    index++;
    loadQuestion()
    
    }
)
const getAnswer = ()=>{
    let ans;
    allinputs.forEach((input)=>{
        if(input.checked){
            ans=input.value;
        }
    }
    
    )
    return ans;
}

const reset = () => {
    allinputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const  quizeEnd =() => {
    document.getElementsByClassName("box")[0].innerHTML = 
    `
    <div style="text-align:center;">
        <h2>THANK YOU FOR PLAYING THE QUIZ
        <h3> YOU'VE SCORED ${correct} / ${total} </h3>
    </div>
    `
}
loadQuestion(index)