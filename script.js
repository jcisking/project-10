let answerParagraphs = document.querySelectorAll(".answerParagraph")
let arrowIcons = document.querySelectorAll(".arrowIcon")
let buttons = document.getElementsByClassName("questionAndArrowContainer")
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", () => {
        answerParagraphs[i].classList.toggle("show");
        arrowIcons[i].classList.toggle("invertIcon")
        buttons[i].classList.toggle("boldAndDarkText");
        buttons[i].classList.toggle("margin");
        
    })
}