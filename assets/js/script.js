var startButton = document.querySelector(".start-btn");
var startPage = document.querySelector(".start-container");
var quizPage = document.querySelector(".quiz-container");
var finalPage = document.querySelector(".final-page");

var timerInterval;
var timerEl = document.getElementById("timer");
var questionEL = document.getElementById("question");

var aText = document.getElementById("a-text");
var bText = document.getElementById("b-text");
var cText = document.getElementById("c-text");
var dText = document.getElementById("d-text");

var correctWrong = document.getElementById("correct-wrong");
var timeLeft = 75;
var index = 0;

var finalButton = document.querySelector(".final-button");
var finalScore = document.getElementById("final-score");
var finalForm = document.querySelector(".final-form");

var highscorePage = document.querySelector(".highscores-container");

var goBack = document.querySelector(".go-back");
var goBack2 = document.querySelector(".go-back-2");

var clearHighscore = document.querySelector(".clear-highscore");
var viewHighscore = document.querySelector(".highscore-btn");
var playAgain = document.querySelector(".play-again-btn");

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var highscoreList = document.getElementById("highscore-list");

goBack.style.display = "none";
goBack2.style.display = "none";

//hides all pages except start page
quizPage.style.display = "none";
finalPage.style.display = "none";
highscorePage.style.display = "none";

//when i click on the start button, the start page displays as none and quiz page displays flex

startButton.addEventListener("click", function () {
    startPage.style.display = "none";
    quizPage.style.display = "flex";
    countDown();
    showQuestion(0);
});

function countDown() {


    timerInterval = setInterval(function () {
        timerEl.innerHTML = 'Timer: ' + timeLeft;
        // console.log(timeLeft);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            quizPage.style.display = "none";
            finalPage.style.display = "flex";
            finalScore.innerHTML = "Sorry, you ran out of time."
            finalForm.style.display = "none";
        }
    }, 1000);

}

function deductTime(seconds) {
    timeLeft -= seconds;
}

//questions array
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
        question: 'What JavaScript keyword declares a variable?',
        answers: [
            { text: 'var', correct: true },
            { text: 'if', correct: false },
            { text: 'for', correct: false },
            { text: 'create', correct: false }
        ]

    },
    {
        question: 'Which language runs in a web browser?',
        answers: [
            { text: 'Java', correct: false },
            { text: 'C', correct: false },
            { text: 'JavaScript', correct: true },
            { text: 'Python', correct: false }
        ]

    },
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyper Text Preprocessor', correct: false },
            { text: 'Hyper Text Multiple Language', correct: false },
            { text: 'Hyper Tool Multi Language', correct: false },
            { text: 'Hyper Text Markup Language', correct: true }
        ]

    },
    {
        question: 'Using a ____ statement is how you test for a specific condition',
        answers: [
            { text: 'Select', correct: false },
            { text: 'If', correct: true },
            { text: 'Switch', correct: false },
            { text: 'For', correct: false }
        ]

    }
]

//show question function, displays next question incrementing the index. when reached questions length, it will go to final page
function showQuestion(index) {

    if (index >= questions.length) {
        clearInterval(timerInterval);
        quizPage.style.display = "none";
        finalPage.style.display = "flex";
        timerEl.innerHTML = "Times up!";
        finalScore.innerHTML = "Your final score is: " + timeLeft;
        return;
    }

    document.getElementById("question").innerHTML = questions[index].question;
    document.getElementById("a-text").innerHTML = questions[index].answers[0].text;
    document.getElementById("b-text").innerHTML = questions[index].answers[1].text;
    document.getElementById("c-text").innerHTML = questions[index].answers[2].text;
    document.getElementById("d-text").innerHTML = questions[index].answers[3].text;
}

//event listeners for each answer button, will show next question if index is less than or equal to 3
if (index <= 3) {
    aText.addEventListener('click', function () {
        console.log(questions[index]);
        if (questions[index].answers[0].correct === true) {
            correctWrong.innerHTML = 'Correct!';
            index++;
            return showQuestion(index);
        } else {
            correctWrong.innerHTML = 'Wrong!';
            deductTime(10);
            index++;
            return showQuestion(index);
        }
    });

    bText.addEventListener('click', function () {
        console.log(questions[index]);
        if (questions[index].answers[1].correct === true) {
            correctWrong.innerHTML = 'Correct!';
            index++;
            return showQuestion(index);
        } else {
            correctWrong.innerHTML = 'Wrong!';
            deductTime(10);
            index++;
            return showQuestion(index);
        }
    });

    cText.addEventListener('click', function () {
        console.log(questions[index]);
        if (questions[index].answers[2].correct === true) {
            correctWrong.innerHTML = 'Correct!';
            index++;
            return showQuestion(index);
        } else {
            correctWrong.innerHTML = 'Wrong!';
            deductTime(10);
            index++;
            return showQuestion(index);
        }
    });

    dText.addEventListener('click', function () {
        console.log(questions[index]);
        if (questions[index].answers[3].correct === true) {
            correctWrong.innerHTML = 'Correct!';
            index++;
            return showQuestion(index);
        } else {
            correctWrong.innerHTML = 'Wrong!';
            deductTime(10);
            index++;
            return showQuestion(index);
        }
    });
}

//the submit button, when clicked will locally store data and send you to the highscore page where it wil create a new li until cleared by user
finalButton.addEventListener('click', function (event) {
    event.preventDefault();
    goBack.style.display = "block";
    goBack2.style.display = "none";


    var initials = document.getElementById("initials").value;
    var messageDiv = document.querySelector(".message-div");

    if (initials === "") {
        messageDiv.innerHTML = "Please input your initials"
        return;
    }

    highscorePage.style.display = "flex";
    finalPage.style.display = "none";

    highscores.push({ initials, timeLeft });

    localStorage.setItem("highscores", JSON.stringify(highscores));
    console.log(highscores);


    highscoreList.innerHTML = "";
    for (var i = 0; i < highscores.length; i++) {
        var li = document.createElement("li");
        li.textContent = highscores[i].initials + " - " + highscores[i].timeLeft;
        highscoreList.appendChild(li);
    }
});

//button event listeners
goBack.addEventListener('click', function () {
    finalPage.style.display = "flex";
    highscorePage.style.display = "none";
});

goBack2.addEventListener('click', function () {
    startPage.style.display = "flex";
    highscorePage.style.display = "none";
});


clearHighscore.addEventListener('click', function () {
    localStorage.clear();
    highscoreList.textContent = "";
});

playAgain.addEventListener('click', function () {
    finalPage.style.display = "none";
    startPage.style.display = "flex";
    location.reload();
});

viewHighscore.addEventListener('click', function () {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    finalPage.style.display = "none";
    highscorePage.style.display = "flex";
    goBack2.style.display = "block";


    highscoreList.innerHTML = "";
    for (var i = 0; i < highscores.length; i++) {
        var li = document.createElement("li");
        li.textContent = highscores[i].initials + " - " + highscores[i].timeLeft;
        highscoreList.appendChild(li);
    }

});
