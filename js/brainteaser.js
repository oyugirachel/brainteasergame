//Rachel oyugi

"use strict";
const data=[
    [
        "A man walks into a restaurant and the waiter says,Good day, Admiral Why did the waiter call the man an Admiral?",
        [
            "Cause of the logo",
            "Dont know",
            "It was just a compliment",
            "Because he was wearing his uniform!"
        ],
        3
    ],
    [
        "A man pushes his car to a hotel and tells its owner that he is bankrupt. Why?",
        [
            "He just doesnt have money",
            "He is playing Monopoly",
            "He is a gambler",
            " I Dont Know"
        ],
        1
    ],
    [
        "You have a 3-gallon jug and a 5-gallon jug. You need to measure out exactly 7 gallons of water. How can you do it?",
        [
            "Just forget about it",
            "Deal with the 5 gallon water first",
            "Fill the 5-gallon jug, pour it into the 3-gallon jug until the 3 gallon is full, and leaving 2 gallons in the 5-gallon jug. Now pour the 3-gallon jug out. Pour the remaining 2 gallons from the 5 gallon into the empty 3-gallon jug. Now fill the 5 gallon from the faucet. You now have exactly 7 gallons.",
            "Drink all the water"
        ],
        2
    ],
    [
        "What words are pronounced differently by merely capitalizing the first letter?",
        [
            "Burea",
            "Present,present",
            "Eat,eat",
            "There are several, and there could be more: 1. job, Job 2. herb, Herb 3. polish, Polish"
        ],
        3
    ],
    [
        "A rainbow has how many colors?",
        [
            "7",
            "9",
            "5",
            "3"
        ],
        0
    ],
    [
        "In Chemistry which letter represents Sodium?",
        [
            "Na",
            "K",
            "Fe",
            "Cu"
        ],
        0
    ],
    [
        "Your dad tells you that he will pay you $6.00 an hour for the 6 seconds that you take to wash your hands before dinner.How much did you make for washing your hands?",
        [
            "12 cents",
            "6 cents",
            "1 cent",
            "No Cash"
        ],
        2
    ],
    [
        "When young, I am sweet in the sun.When middle-aged, I make you gay.When old, I am valued more than ever.",
        [
            "Honey",
            "Sugar cane",
            "Sun Screen",
            "Wine"
        ],
        3
    ],
    [
        "A boy is walking down the road with a doctor. While the boy is the doctor’s son, the doctor is not the boy’s father. Then who is the doctor?",
        [
            "Obviously its the doctor",
            "He is not there",
            "The doctor is the boy’s mother.",
            "I dont know"
        ],
        2
    ],
    [
        "What has a mouth, but cannot eat; moves, but has no legs; and has a bank, but cannot put money in it?",
        [
            "River",
            "Lake",
            "Ocean",
            "River"
        ],
        0
    ],
    [
        "The number 8,549,176,320 is a unique number. What is so special about it?",
        [
            "I dont know",
            "Its always not that serious",
            "It has too many digits",
            "This is the only number that includes all the digits arranged in alphabetical order."
        ],
        3
    ]
];
let counter=0;
let score=0;

let root;

class Task {
constructor(task) {
    this.question=task[0];
    this.answers=task[1];
    this.correct=task[2];
    this.selected=-1;
    this.render();
}
render() {
    let container=document.createElement("div");
    container.classList="task";
    container.innerHTML+=`<div class="task_question">${this.question}</div>`;
    let answerBox=document.createElement("div");
    answerBox.classList="task_answers";
    this.answers.forEach((a,i)=>{
        let btn=document.createElement("button");
        btn.classList="task_btn";
        btn.innerText=a;
        btn.onclick=()=>{
            this.selectAnswer(i);
        }
        answerBox.appendChild(btn);
    });
    container.appendChild(answerBox);
    let submitBtn=document.createElement("button");
    submitBtn.classList="task_submit";
    submitBtn.innerText="Submit";
    submitBtn.onclick=()=>{
        this.submitAnswer();
    }
    container.appendChild(submitBtn);
    render(container,root);
}
selectAnswer(idx) {
    let btn=document.getElementsByClassName("task_btn");
    for(let i=0;i<btn.length;i++) {
        if(idx==i) {
            btn[i].classList.add("task_btn_selected");
        } else {
            btn[i].classList.remove("task_btn_selected");
        }
    }
    this.selected=idx;
}
submitAnswer() {
    let isCorrect=this.selected==this.correct;
    if(isCorrect) score++;
    let msg=`<div class="task_result ${isCorrect?'task_result_correct':''}">${isCorrect?"Correct!":"Wrong!"}</div>`;
    setTimeout(()=>{
        root.innerHTML=msg;
    },800-10);
    setTimeout(()=>{
        (++counter)>=data.length?root.innerHTML=`<div class="score">You scored ${Math.round(score/data.length*100)} %</div>`:new Task(data[counter]);
    },2800-10);
    document.querySelector(".task").style.animation="test 800ms";
}
}

const render=(el,p)=>{
    p.innerHTML="";
    p.appendChild(el);
}

onload=()=>{
    root=document.getElementById("root");
    root.innerHTML=`
        <div align="center">
            <div class="title">Brain Teaser</div>
            <button class="begin">Begin</button>
        </div>
    `;    document.querySelector(".begin").onclick=function() {
        new Task(data[counter]);
    }
}