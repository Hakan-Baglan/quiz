function Question(text, choices, answer) {
  this.text = text;
  this.chocies = choices;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

// Question Constructor
function Quiz(question) {
  this.questions = question;
  this.score = 0;
  this.questionIndex = 0;
}

// Quiz Prototype
Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

// Quiz Finish
Quiz.prototype.isFinish = function () {
  return this.questions.length === this.questionIndex;
};

// Quiz Guess
Quiz.prototype.guess = function (answer) {
    let question = this.getQuestion();
    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
  };

let q1 = new Question(
  "what's the best programming language ?",
  ["c#", "js", "python"],
  "js"
);

let q2 = new Question(
  "what's the most popular programing language ?",
  ["c#", "visual basic", "python", "node js", "c#"],
  "c#"
);
let q3 = new Question(
  "what's the best modern programming language ?",
  ["c#", "js", "python"],
  "python"
);

let questions = [q1, q2, q3];

let quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
  if (quiz.isFinish()) {
    showScore();
  }else{
    let question = quiz.getQuestion();
    let chocies = question.chocies;
    document.querySelector('#question')
    .textContent = question.text;

    for (let i=0;i<chocies.length;i++) {
      let element = document.querySelector('#choice'+i);
      element.innerHTML = chocies[i];

      guess('btn'+i,chocies[i])
    }
    showProgress();
  } 
}

function showScore() {
let html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
document.querySelector('.card-body').innerHTML=html;
}

function guess(id,guess) {
  let btn = document.getElementById(id);
  btn.onclick= function() {
    quiz.guess(guess);
    loadQuestion();
  }}

  function showProgress() {
    let totalQuestion = quiz.questions.length;
    let questionNumber = quiz.questionIndex+1;
    document.querySelector('#progress').innerHTML='Question ' + questionNumber+' of '+totalQuestion
  }