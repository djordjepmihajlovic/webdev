function SpotaKnotGamePage() {  
    window.location.href = 'spotaKnotGame.html';
  }

const questions = [
    {
        question: "img/knots/4_1_def1.png",
        answers: [
            { image: "img/unknot_gray.png", correct: false },
            { image: "img/trefoil_gray.png", correct: false },
            { image: "img/4_1_gray.png", correct: true },
            { image: "img/5_1_gray.png", correct: false },
            { image: "img/5_2_gray.png", correct:  false }
        ]
    },
    {       
        question: "img/knots/4_1_def2.png",
        answers: [
            { image: "img/unknot_gray.png", correct: false },
            { image: "img/trefoil_gray.png", correct: false },
            { image: "img/4_1_gray.png", correct: true },
            { image: "img/5_1_gray.png", correct: false },
            { image: "img/5_2_gray.png", correct: false }
        ]
    },
    {       
        question: "img/knots/4_1_def3.png",
        answers: [
            { image: "img/unknot_gray.png", correct: false },
            { image: "img/trefoil_gray.png", correct: false },
            { image: "img/4_1_gray.png", correct: true },
            { image: "img/5_1_gray.png", correct: false },
            { image: "img/5_2_gray.png", correct: false }
        ]
    },
    {       
        question: "img/knots/3_1_def1.png",
        answers: [
            { image: "img/unknot_gray.png", correct: false },
            { image: "img/trefoil_gray.png", correct: true },
            { image: "img/4_1_gray.png", correct: false },
            { image: "img/5_1_gray.png", correct: false },
            { image: "img/5_2_gray.png", correct: false }
        ]
    },
    {       
        question: "img/knots/3_1_def2.png",
        answers: [
            { image: "img/unknot_gray.png", correct: false },
            { image: "img/trefoil_gray.png", correct: true },
            { image: "img/4_1_gray.png", correct: false },
            { image: "img/5_1_gray.png", correct: false },
            { image: "img/5_2_gray.png", correct: false }
        ]
    },
    {       
        question: "img/knots/3_1_def3.png",
        answers: [
            { image: "img/unknot_gray.png", correct: false },
            { image: "img/trefoil_gray.png", correct: true },
            { image: "img/4_1_gray.png", correct: false },
            { image: "img/5_1_gray.png", correct: false },
            { image: "img/5_2_gray.png", correct: false }
        ]
    },

];

const questionElement = document.getElementById('question-container');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffle(questions);

let isDifficult = false;

// Function to toggle difficulty
function toggleDifficulty() {
    isDifficult = !isDifficult;

    const questionImages = document.querySelectorAll('.question');
    questionImages.forEach(image => {
        if (isDifficult) {
            image.classList.add('spin'); // Add class to enable spinning
        } else {
            image.classList.remove('spin'); // Remove class to disable spinning
        }
    });
}


function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const questionImage = document.createElement('img');
    questionImage.src = currentQuestion.question;
    questionImage.classList.add('question');

    if (isDifficult) {
        questionImage.classList.add('spin'); // Add spinning class if difficulty is set
    }

    questionContainer.appendChild(questionImage);

    const rotationDegree = Math.random() * 360;
    questionImage.style.transform = `rotate(${rotationDegree}deg)`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        const img = document.createElement('img');

        img.src = answer.image;
        img.classList.add('answerimg');
        button.appendChild(img);

        button.classList.add('answerbtn');
        answerButtons.appendChild(button);
        if(answer.correct) {
            img.dataset.correct = answer.correct;
        }
        img.addEventListener('click', selectAnswer);
});
}


function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;   
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect) {
        // selectedBtn.classList.add('correct');
        // const professorImage = document.querySelector('.proffesor img');
        // professorImage.src = 'img/prof_happy.png';
        const correctSound = document.querySelector('.proffesor audio');
        correctSound.src = 'audio/correct.mp3';
        correctSound.play();
        score++;
    }

    if(isCorrect === false) {
        // selectedBtn.classList.add('wrong');
        const correctSound = document.querySelector('.proffesor audio');
        correctSound.src = 'audio/incorrect.mp3';
        correctSound.volume = 0.5;
        correctSound.play();
        // const professorImage = document.querySelector('.proffesor img');
        // professorImage.src = 'img/prof_angry.png';
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.style.display = 'block';
    // setTimeout(() => {
    //     currentQuestionIndex++;
    //     if(currentQuestionIndex < questions.length){
    //         showQuestion();
    //     }else{
    //         showScore();
    //     }
    // }, 1500); 
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    questionElement.style.fontSize = '2em';
    questionElement.style.fontFamily = 'Arial';
    questionElement.style.color = 'wheat';
    nextButton.innerHTML = "Play again?";
    nextButton.style.display = 'block';
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startGame();
    }
    });   

startGame();


