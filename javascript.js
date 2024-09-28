let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice")
const msg=document.getElementById("msg")
const computer=document.getElementById("comp-score")
const users=document.getElementById("user-score")
const showWinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
        userScore++;
        users.innerText=userScore
        msg.innerText=`You win! your ${userChoice} beats ${compchoice}`
        msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        computer.innerText=compScore
        msg.innerText=`You lose!${compchoice} beats your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}
const playgame=(userChoice)=>{
    console.log("User choice is:",userChoice)
    //Generate computer choice
    const compchoice=gencompchoice()
    console.log("Computer choice is:",compchoice)
     if(userChoice===compchoice){
        msg.innerText="Draw!Play the game again"
        msg.style.backgroundColor="black"
     }
     else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userChoice,compchoice);
     }
}
const gencompchoice=()=>{
    let options=["rock","paper","scissors"]
    const randindex=Math.floor(Math.random()*3)
    return options[randindex]
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playgame(userChoice)
    })
})