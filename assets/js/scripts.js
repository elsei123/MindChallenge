
// Buttons for start, next, and restarting
document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('next-button').addEventListener('click', nextQuestion);
document.getElementById('restart-button').addEventListener('click', restartQuiz);

let currentQuestionIndex = 0;
let score = 0;

// Array of question 
let questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Who wrote 'Don Quixote'?",
        answers: [
            { text: "Miguel de Cervantes", correct: true },
            { text: "Gabriel Garcia Marquez", correct: false },
            { text: "William Shakespeare", correct: false },
            { text: "Jorge Luis Borges", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "CO2", correct: false },
            { text: "H2", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Diamond", correct: true },
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "1", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        question: "Which element has the atomic number 1?",
        answers: [
            { text: "Hydrogen", correct: true },
            { text: "Helium", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Carbon", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Albert Einstein", correct: true },
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Tokyo", correct: true },
            { text: "Kyoto", correct: false },
            { text: "Osaka", correct: false },
            { text: "Nagoya", correct: false }
        ]
    }
];

// Function to start the quiz
function startQuiz() {
    const username = document.getElementById('username').value;
    if (username === '') {
        alert('Please enter a username.');
        return;
    }
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    showQuestion();
}

// Function to display the current question and answers
function showQuestion() {
    resetState();
    const questionData = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    questionElement.innerText = questionData.question;

    questionData.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answersElement.appendChild(button);
    });
}

// Function to reset the state for the next question
function resetState() {
    while (document.getElementById('answers').firstChild) {
        document.getElementById('answers').removeChild(document.getElementById('answers').firstChild);
    }
    document.getElementById('next-button').style.display = 'none';
}
