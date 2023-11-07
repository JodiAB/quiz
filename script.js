const questions = [

    {
        question: "What is the capital of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Madrid", correct: false},
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {text: "Jane Austen", correct: false},
            {text: "Charles Dickens", correct: false},
            {text: "Mark Twain", correct: false},
            {text: "William Shakespeare", correct: true},
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Madrid", correct: false},
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Jupiter", correct: true},
            {text: "Earth", correct: false},
            {text: "Saturn", correct: false},
            {text: "Mars", correct: false},
        ]
    },
    {
        question: "In which year did Christopher Columbus discover America?",
        answers: [
            {text: "1812", correct: false},
            {text: "1776", correct: false},
            {text: "1620", correct: false},
            {text: "1492", correct: true},
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Au", correct: true},
            {text: "Go", correct: false},
            {text: "Gd", correct: false},
            {text: "GoL", correct: false},
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        answers: [
            {text: "Hydrogen (H2)", correct: false},
            {text: "Carbon dioxide (CO2)", correct: true},
            {text: "Oxygen (O2)", correct: false},
            {text: "Nitrogen (N2)", correct: false},
        ]
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        answers: [
            {text: "J.K. Rowling", correct: false},
            {text: "George Orwell", correct: false},
            {text: "Harper Lee", correct: true},
            {text: "Mark Twain", correct: false},
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            {text: "K2", correct: false},
            {text: "Kilimanjaro", correct: false},
            {text: "Mount McKinley", correct: false},
            {text: "Mount Everest", correct: true},
        ]
    },
    {
        question: "How many continents are there on Earth?",
        answers: [
            {text: "7", correct: true},
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "8", correct: false},
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answers: [
            {text: "O2", correct: false},
            {text: "CO2", correct: false},
            {text: "H2O", correct: true},
            {text: "H2SO4", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selecttAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
const selectBtn = e.target;
const isCorrect = selectBtn.dataset.correct === true;
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}

Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
    
});

nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ${score} pout of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
    }


nextButton.addEventListener("click", () => {
    if(cuurentQuestionIndex < questions.length){
    handleNextButton();
    }else{
        startQuiz();
    }
});