// so this is the javascript i used for this project
//I have taken variable for every question and answer

// variables
let question1=document.querySelector(".question1")
let answer=document.querySelector(".answer")
let icon=document.querySelector("#icon")
let question2=document.querySelector(".question2")
let answer2=document.querySelector(".answer2")
let icon2=document.querySelector("#icon2")
let question3=document.querySelector(".question3")
let answer3=document.querySelector(".answer3")
let icon3=document.querySelector("#icon3")


//even listener for the icons in the section 5
icon.addEventListener("click",(e)=>{
    if(icon.classList.contains("fa-plus")){
        question1.classList.toggle("responsive-question1")
        answer.classList.toggle("responsive-answer")
        icon.classList.remove("fa-plus")
        icon.classList.toggle("fa-x")
        
    }
    else{
        question1.classList.remove("responsive-question1")
        answer.classList.remove("responsive-answer")
        icon.classList.toggle("fa-plus")
        icon.classList.remove("fa-x")

    }
})
icon2.addEventListener("click",(e)=>{
    if(icon2.classList.contains("fa-plus")){
        question2.classList.toggle("responsive-question2")
        answer2.classList.toggle("responsive-answer2")
        icon2.classList.remove("fa-plus")
        icon2.classList.toggle("fa-x")
    }
    else{
        question2.classList.remove("responsive-question2")
        answer2.classList.remove("responsive-answer2")
        icon2.classList.toggle("fa-plus")
        icon2.classList.remove("fa-x")
    }
})
icon3.addEventListener("click",(e)=>{
    if(icon3.classList.contains("fa-plus")){
        question3.classList.toggle("responsive-question3")
        answer3.classList.toggle("responsive-answer3")
        icon3.classList.remove("fa-plus")
        icon3.classList.toggle("fa-x")
    }
    else{
        question3.classList.remove("responsive-question3")
        answer3.classList.remove("responsive-answer3")
        icon3.classList.toggle("fa-plus")
        icon3.classList.remove("fa-x")

    }
})



