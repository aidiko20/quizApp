const quizData = [
    {
        question: 'What is the rarest M&M color?',
        a: 'Brown',
        b: 'Yellow',
        c: 'Red',
        d: 'Green',
        correct: 'a',

    }, {
        question: 'In a website browser address bar, what does “www” stand for?',
        a: 'Woder Wise Woman',
        b: 'Wiskey World West',
        c: 'World Wide Web',
        d: 'Welcome Windy Window',
        correct: 'c',

    }, {
        question: 'Which programming language is popular?',
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'Javascript',
        correct: 'd',

    }, {
        question: 'What does HTML stands for?',
        a: 'Hypertext Markup language',
        b: 'Cascading Style Sheets',
        c: 'Human Time Machine Language',
        d: 'Jason object Notation',
        correct: 'a',

    }, {
        question: 'What year JS was launched?',
        a: '2000',
        b: '1990',
        c: '1995',
        d: '2010',
        correct: 'c',

    },
];

let currentQuiz = 0;
let score = 0;

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_answer = document.getElementById('a_answer');
const b_answer = document.getElementById('b_answer');
const c_answer = document.getElementById('c_answer');
const d_answer = document.getElementById('d_answer');
const submitBtn = document.getElementById('submit');

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_answer.innerText = currentQuizData.a;
    b_answer.innerText = currentQuizData.b;
    c_answer.innerText = currentQuizData.c;
    d_answer.innerText = currentQuizData.d;

};

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.<h2>

            <button onclick="location.reload()">Reload</button>`;
        }
    }
});
