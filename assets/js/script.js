var startButton = document.querySelector(".start-btn");
var startPage = document.querySelector(".start-container");
var quizPage = document.querySelector(".quiz-container");
var timerEl = document.getElementById("timer");
var questionEL = document.getElementById("question");
var aText = document.getElementById("a-text");
var bText = document.getElementById("b-text");
var cText = document.getElementById("c-text");
var dText = document.getElementById("d-text");
var correctWrong = document.getElementById("correct-wrong");


//hides my quiz page at start
quizPage.style.display = "none";

//when i click on the start button, the start page displays as none and quiz page displays flex

startButton.addEventListener("click", function () {
    startPage.style.display = "none";
    quizPage.style.display = "flex";
    countDown();
    showQuestion();
});

function countDown() {
    var timeLeft = 120;

    var timerInterval = setInterval(function () {
        timerEl.innerHTML = 'Timer: ' + timeLeft;
        // console.log(timeLeft);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

    //check for right or wrong answer, if answer is wrong subtract time left
}

function showQuestion() {
    var questions = [
        {
            question: 'What does CSS stand for?',
            answers: [
                { text: 'Cascading Style Sheets', correct: true },
                { text: 'Color Style Sheet', correct: false },
                { text: 'Cascade Simple Sheet', correct: false },
                { text: 'Hypertext Markup Language', correct: false }
            ]
        },
        {
            question: 'what color is the sky?',
            answers: [
                { text: 'Blue', correct: true },
                { text: 'Green', correct: false },
                { text: 'Red', correct: false },
                { text: 'Purple', correct: false }
            ]

        },
        {
            question: 'how orange is an orange?',
            answers: [
                { text: 'Blue', correct: false },
                { text: 'Green', correct: false },
                { text: 'Orange', correct: true },
                { text: 'Purple', correct: false }
            ]

        },
        {
            question: 'what color is the sky?',
            answers: [
                { text: 'Blue', correct: true },
                { text: 'Green', correct: false },
                { text: 'Red', correct: false },
                { text: 'Purple', correct: false }
            ]

        },
        {
            question: 'jkvfdhkjv?',
            answers: [
                { text: 'Blue', correct: true },
                { text: 'Green', correct: false },
                { text: 'Red', correct: false },
                { text: 'Purple', correct: false }
            ]

        }
    ]

    for (var i = 0; i < questions.length; i++) {
        document.getElementById("question").innerHTML = questions[i].question;
        document.getElementById("a-text").innerHTML = questions[i].answers[0].text;
        document.getElementById("b-text").innerHTML = questions[i].answers[1].text;
        document.getElementById("c-text").innerHTML = questions[i].answers[2].text;
        document.getElementById("d-text").innerHTML = questions[i].answers[3].text;



        console.log(questions[i].question);

        aText.addEventListener('click', function (i) {
            console.log(questions[i]);
            if (questions[i].answers[0].correct.value === true) {
                correctWrong.innerHTML = 'Correct!';
            } else {
                correctWrong.innerHTML = 'Wrong!';
            }
        });
    }



}

