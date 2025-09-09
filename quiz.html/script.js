// 50-Question Bank
const questionsBank = [
  { question: "Which tag is used for a hyperlink in HTML?", choices: ["<link>", "<a>", "<href>", "<hlink>"], answer: 1 },
  { question: "Which CSS property sets the background color?", choices: ["color", "bgcolor", "background-color", "background"], answer: 2 },
  { question: "JS stands for?", choices: ["Java Syntax", "JavaScript", "Just Style", "Joint Script"], answer: 1 },
  { question: "How do you declare a variable in JS?", choices: ["v x;", "var x;", "variable x;", "let x;"], answer: 3 },
  { question: "Which event triggers JS after a button click?", choices: ["onhover", "onload", "onclick", "onsubmit"], answer: 2 },
  { question: "HTML stands for?", choices: ["Hyper Tool Markup Language", "Hyper Text Makeup Language", "Hyper Text Markup Language", "None"], answer: 2 },
  { question: "What is CSS used for?", choices: ["Programming", "Structure", "Styling", "Database"], answer: 2 },
  { question: "Which method selects an element by ID in JS?", choices: ["getElement()", "getElementId()", "getElementById()", "selectById()"], answer: 2 },
  { question: "How do you write a comment in JS?", choices: ["// comment", "<!-- comment -->", "/* comment */", "# comment"], answer: 0 },
  { question: "Which input type creates a slider?", choices: ["range", "slider", "scroll", "slidebar"], answer: 0 },
  { question: "How do you connect CSS to HTML?", choices: ["<style>", "<link>", "<css>", "<script>"], answer: 1 },
  { question: "How do you make text bold in HTML?", choices: ["<bold>", "<b>", "<em>", "<strong>"], answer: 1 },
  { question: "Which attribute provides alt text for images?", choices: ["src", "href", "alt", "title"], answer: 2 },
  { question: "Which tag is self-closing?", choices: ["<img>", "<p>", "<a>", "<table>"], answer: 0 },
  { question: "What does DOM stand for?", choices: ["Document Object Model", "Display Object Method", "Data Output Method", "Document Option Model"], answer: 0 },
  { question: "Which function rounds a number down?", choices: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.abs()"], answer: 1 },
  { question: "How do you write 'Hello' in an alert box?", choices: ["msg('Hello')", "alert('Hello')", "alertBox('Hello')", "msgBox('Hello')"], answer: 1 },
  { question: "Which property hides an element?", choices: ["display:none", "hide:true", "visible:false", "invisible"], answer: 0 },
  { question: "Which meta tag sets character encoding?", choices: ["<meta charset>", "<meta encoding>", "<meta language>", "<meta code>"], answer: 0 },
  { question: "What is the default display of <div>?", choices: ["block", "inline", "inline-block", "flex"], answer: 0 },
  { question: "What does SQL stand for?", choices: ["Stylish Question Language", "Statement Question Language", "Structured Query Language", "Structured Question Language"], answer: 2 },
  { question: "Which protocol is used for secure sites?", choices: ["http", "https", "ftp", "smtp"], answer: 1 },
  { question: "How to select every element?", choices: [".all", "#all", "*", "all:"], answer: 2 },
  { question: "Which tag creates a dropdown?", choices: ["<input>", "<switch>", "<select>", "<dropdown>"], answer: 2 },
  { question: "Which operator checks value and type?", choices: ["=", "==", "===", "!"], answer: 2 },
  { question: "Which tag defines a table row?", choices: ["<td>", "<tr>", "<table>", "<row>"], answer: 1 },
  { question: "Which tag makes a numbered list?", choices: ["<ul>", "<ol>", "<li>", "<nl>"], answer: 1 },
  { question: "How to declare an array in JS?", choices: ["[]", "array()", "arr[]", "new Array[]"], answer: 0 },
  { question: "What HTML5 tag shows video?", choices: ["<media>", "<video>", "<mp4>", "<movie>"], answer: 1 },
  { question: "Which selector selects .main class?", choices: ["#main", ".main", "main:", "main"], answer: 1 },
  { question: "What is 'NaN' short for?", choices: ["No any Number", "Null as Number", "Not a Number", "None at Number"], answer: 2 },
  { question: "What tag for the largest heading?", choices: ["<h6>", "<h1>", "<heading>", "<big>"], answer: 1 },
  { question: "What describes JavaScript?", choices: ["Backend", "Frontend", "Both", "None"], answer: 2 },
  { question: "Which is a JS framework?", choices: ["Laravel", "Node.js", "React", "Django"], answer: 2 },
  { question: "Which property is for font size?", choices: ["font-size", "size", "text-size", "font"], answer: 0 },
  { question: "Which is used for comments in CSS?", choices: ["//", "#", "<!-- -->", "/* */"], answer: 3 },
  { question: "Which is NOT a valid array?", choices: ["[1,2,3]", "{1,2,3}", "new Array()", "[]"], answer: 1 },
  { question: "Which tag is deprecated?", choices: ["<center>", "<span>", "<div>", "<strong>"], answer: 0 },
  { question: "What is the value of '2' + 2?", choices: ["4", "22", "undefined", "NaN"], answer: 1 },
  { question: "Which tag creates a line break?", choices: ["<lb>", "<br>", "<break>", "<hr>"], answer: 1 },
  { question: "Shortcut for browser console?", choices: ["F4", "F9", "F12", "Ctrl+F1"], answer: 2 },
  { question: "Property to set image width?", choices: ["image-width", "width", "img-width", "set-width"], answer: 1 },
  { question: "Which year did HTML5 launch?", choices: ["2014", "2012", "2010", "2008"], answer: 0 },
  { question: "Which is a semantic HTML tag?", choices: ["<div>", "<header>", "<span>", "<bold>"], answer: 1 },
  { question: "JS '===' means?", choices: ["Equal", "Assign", "Strict Equal", "Loop"], answer: 2 },
  { question: "Which input type for dates?", choices: ["datetime", "calendar", "date", "time"], answer: 2 },
  { question: "Method that joins array to string?", choices: ["merge()", "stringify()", "join()", "append()"], answer: 2 },
  { question: "Property to make text italic?", choices: ["font-weight", "font-style", "style", "text-decor"], answer: 1 },
  { question: "Which one is a correct syntax?", choices: ["if x = 5 then", "if(x==5)", "if x==5:", "if(x=5)"], answer: 1 },
  { question: "Which tag creates checkbox?", choices: ["<check>", "<input type='checkbox'>", "<box>", "<checkbox>"], answer: 1 },
  { question: "How to add JS in HTML?", choices: ["<script>", "<js>", "<javascript>", "<code>"], answer: 0 }
];

// ====== Quiz Variables =======
let questions = [];
const numQuestionsPerGame = 10;
let current = 0, score = 0, timer = 0, interval = null, gameOver = false;
const eachQTime = 15;
let timeLeft = eachQTime;
const progressBar = document.getElementById("progress-bar");

// ========= Utility ===========
function randomize(arr) {
  for(let i = arr.length-1; i > 0; i--) {
    let j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function startQuiz() {
  questions = [...questionsBank];
  randomize(questions);
  questions = questions.slice(0, numQuestionsPerGame);
  current = 0; score = 0; gameOver = false;
  document.getElementById("quiz").style.display = "";
  document.getElementById("end-screen").style.display = "none";
  updateProgress();
  showQuestion();
}
function showQuestion() {
  clearInterval(interval);
  timeLeft = eachQTime;
  updateTimer();
  playTick();
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("feedback").textContent = "";
  const q = questions[current];
  document.getElementById("question").textContent = `${current + 1}. ${q.question}`;
  const choicesUl = document.getElementById("choices");
  choicesUl.innerHTML = "";
  q.choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.onclick = () => handleAnswer(idx, btn);
    choicesUl.appendChild(btn);
    void btn.offsetWidth;
  });
  startTimer();
}
function handleAnswer(selected, btn) {
  stopTick();
  const q = questions[current];
  const choiceBtns = document.querySelectorAll('.choice-btn');
  choiceBtns.forEach(b => b.disabled = true);
  if (selected === q.answer) {
    score++;
    btn.classList.add("correct");
    playCorrect();
    document.getElementById("feedback").textContent = "Correct!";
  } else {
    btn.classList.add("wrong");
    playWrong();
    choiceBtns[q.answer].classList.add("correct");
    document.getElementById("feedback").textContent = `Wrong! Correct: "${q.choices[q.answer]}"`;
  }
  document.getElementById("next-btn").style.display = "inline-block";
  stopTimer();
  updateProgress();
}
document.getElementById("next-btn").onclick = () => {
  current++;
  if (current < questions.length) {
    updateProgress();
    showQuestion();
  } else {
    quizDone();
  }
};
function startTimer() {
  timer = eachQTime;
  let tickAudio = document.getElementById("tick-sound");
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      stopTimer();
      handleTimeout();
    }
    if (!gameOver) tickAudio.play();
  }, 1000);
}
function updateTimer() {
  document.getElementById("time").textContent = timeLeft;
}
function stopTimer() {clearInterval(interval);}
function handleTimeout() {
  playWrong();
  const q = questions[current];
  const choiceBtns = document.querySelectorAll('.choice-btn');
  choiceBtns[q.answer].classList.add("correct");
  choiceBtns.forEach(b => b.disabled = true);
  document.getElementById("feedback").textContent = `Time's up! Correct: "${q.choices[q.answer]}"`;
  document.getElementById("next-btn").style.display = "inline-block";
  updateProgress();
}
function updateProgress() {
  progressBar.style.width = ((current+((gameOver)?1:0))/numQuestionsPerGame*100) + "%";
}
function quizDone() {
  gameOver = true;
  playDone();
  addScoreToLocal(score, questions.length);
  document.getElementById("quiz").style.display = "none";
  document.getElementById("end-screen").style.display = "";
  document.getElementById("final-score").innerHTML = `You scored <b>${score}/${questions.length}</b>!`;
  showHistory();
}
// ====== Local Storage & History =====
function addScoreToLocal(score, total) {
  let scores = [];
  if(localStorage.getItem("quizScores")) {
    scores = JSON.parse(localStorage.getItem("quizScores"));
  }
  scores.push({date: new Date().toLocaleString(), score, total});
  if(scores.length>10) scores = scores.slice(-10);
  localStorage.setItem("quizScores", JSON.stringify(scores));
}
function showHistory() {
  let scores = [];
  if(localStorage.getItem("quizScores")) {
    scores = JSON.parse(localStorage.getItem("quizScores"));
  }
  const ul = document.getElementById("score-history");
  ul.innerHTML = "";
  if(scores.length === 0) {
    ul.innerHTML = "<li>No past scores yet.</li>";
    return;
  }
  scores.slice().reverse().forEach(sc =>
    ul.innerHTML += `<li>[${sc.date}] → <b>${sc.score}/${sc.total}</b></li>`
  );
}
// ===== Animations & Sound =====
function playCorrect() {
  document.getElementById("correct-sound").play();
}
function playWrong() {
  document.getElementById("wrong-sound").play();
}
function playTick() {
  document.getElementById("tick-sound").play();
}
function stopTick() {
  document.getElementById("tick-sound").pause();
  document.getElementById("tick-sound").currentTime = 0;
}
function playDone() {
  document.getElementById("done-sound").play();
}
document.getElementById("restart-btn").onclick = startQuiz;
window.onload = startQuiz;
