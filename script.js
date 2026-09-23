// Expanded Question Bank with GIFs and Images
const questionBank = [
  {
    question: "What is the ultimate rule of a true Sigma?",
    image: "https://media1.tenor.com/m/zyDv5iQ1DNkAAAAC/sad.gif",
    options: ["Never break the grindset", "Always talk in public", "Ask for permission", "Follow all trends"],
    answerIndex: 0
  },
  {
    question: "Where does the Mewing streak start?",
    image: "https://media.tenor.com/Lnt2uEm1vrUAAAA1/67-67-kid.webp",
    options: ["At the gym", "In silence", "On TikTok", "At midnight"],
    answerIndex: 1
  },
  {
    question: "What is the primary power source of Brainrot?",
    image: "https://media.tenor.com/vHqQ8_4y1X4AAAAC/sigma-male.gif",
    options: ["Skibidi energy", "Phonk beats", "Subway Surfers gameplay", "All of the above"],
    answerIndex: 3
  },
  {
    question: "Who is the CEO of Ohio?",
    image: "https://media.tenor.com/qLhI9J2x3sIAAAAC/giga-chad.gif",
    options: ["Kai Cenat", "Baby Gronk", "The Rizzler", "Livvy Dunne"],
    answerIndex: 2
  },
  {
    question: "What happens when you achieve W Rizz?",
    image: "https://media.tenor.com/53xI4xXwGfEAAAAC/cat-mewing.gif",
    options: ["You gain +100 aura", "You lose internet access", "You fall asleep", "Nothing"],
    answerIndex: 0
  },
  {
    question: "What time does the Sigma wake up?",
    image: "https://media.tenor.com/f04T81G1mBAAAAAC/bateman-patrick-bateman.gif",
    options: ["8:00 AM", "3:00 AM", "Sigma doesn't sleep", "12:00 PM"],
    answerIndex: 2
  },
  {
    question: "What music plays in the background of a Sigma edit?",
    image: "https://media.tenor.com/Q9yM0JjV6SIAAAAC/phonk.gif",
    options: ["Classical Opera", "Brazilian Phonk", "Jazz", "Lofi Beats"],
    answerIndex: 1
  },
  {
    question: "If someone hits you with an Unspoken Rizz, what do you do?",
    image: "https://media.tenor.com/Lnt2uEm1vrUAAAA1/67-67-kid.webp",
    options: ["Mew back immediately", "Run away", "Call the police", "Cry"],
    answerIndex: 0
  },
  {
    question: "Which state has maximum brainrot level?",
    image: "https://media.tenor.com/mJ9L0o3rX24AAAAC/ohio.gif",
    options: ["Florida", "Ohio", "Texas", "California"],
    answerIndex: 1
  },
  {
    question: "What is Fanum Tax?",
    image: "https://media.tenor.com/2s42kG3mD84AAAAC/food.gif",
    options: ["A state government tax", "Stealing 20% of your friend's food", "Paying for Wi-Fi", "Subscribing on Twitch"],
    answerIndex: 1
  },
  {
    question: "What does Mogging mean?",
    image: "https://media.tenor.com/qLhI9J2x3sIAAAAC/giga-chad.gif",
    options: ["Walking fast", "Looking visually superior to everyone around", "Eating fast food", "Dancing"],
    answerIndex: 1
  },
  {
    question: "What is Grimace Shake known for?",
    image: "https://media.tenor.com/vHqQ8_4y1X4AAAAC/sigma-male.gif",
    options: ["Infinite health", "Level 100 Gyatt", "Instant brainrot anomaly", "Gives you aura"],
    answerIndex: 2
  },
  {
    question: "What is the maximum aura loss for dropping your lunch tray?",
    image: "https://media1.tenor.com/m/zyDv5iQ1DNkAAAAC/sad.gif",
    options: ["-10 Aura", "-500 Aura", "-100,000 Aura", "Infinite Aura loss"],
    answerIndex: 3
  },
  {
    question: "What happens when Baby Gronk rizzes up Livvy Dunne?",
    image: "https://media.tenor.com/53xI4xXwGfEAAAAC/cat-mewing.gif",
    options: ["He becomes the new Drip King", "Nothing", "Internet explodes", "Ohio resets"],
    answerIndex: 0
  },
  {
    question: "What is the primary food source of a Sigma?",
    image: "https://media.tenor.com/2s42kG3mD84AAAAC/food.gif",
    options: ["Raw eggs and grindset", "Pizza", "Salad", "Protein powder mixed with air"],
    answerIndex: 0
  },
  {
    question: "How do you counter a negative Aura interaction?",
    image: "https://media.tenor.com/f04T81G1mBAAAAAC/bateman-patrick-bateman.gif",
    options: ["Hit a quick jawline flex", "Apologize instantly", "Leave the state", "Start laughing"],
    answerIndex: 0
  },
  {
    question: "What is Skibidi Toilet's main arch-enemy?",
    image: "https://media.tenor.com/vHqQ8_4y1X4AAAAC/sigma-male.gif",
    options: ["Cameramen", "Speakerheads", "TV Men", "All of the above"],
    answerIndex: 3
  },
  {
    question: "What does 'Bussin' mean in Sigma language?",
    image: "https://media.tenor.com/Q9yM0JjV6SIAAAAC/phonk.gif",
    options: ["Extremely good", "Taking the bus", "Broken", "Boring"],
    answerIndex: 0
  },
  {
    question: "What is the highest achievable rank in brainrot hierarchy?",
    image: "https://media.tenor.com/qLhI9J2x3sIAAAAC/giga-chad.gif",
    options: ["Ligma Sigma God", "Alpha Leader", "Beta NPC", "Ohio Mayor"],
    answerIndex: 0
  },
  {
    question: "Why does the Sigma never double text?",
    image: "https://media.tenor.com/f04T81G1mBAAAAAC/bateman-patrick-bateman.gif",
    options: ["They are busy on the grind", "They forgot", "No service", "Keyboard is broken"],
    answerIndex: 0
  },
  {
    question: "What happens if you break eye contact first?",
    image: "https://media.tenor.com/53xI4xXwGfEAAAAC/cat-mewing.gif",
    options: ["You get mogged instantly", "You win", "Nothing", "+50 Aura"],
    answerIndex: 0
  },
  {
    question: "Which stance grants maximum aura during a conversation?",
    image: "https://media.tenor.com/qLhI9J2x3sIAAAAC/giga-chad.gif",
    options: ["Crossed arms, silent nod", "T-Pose", "Sitting down", "Dancing"],
    answerIndex: 0
  },
  {
    question: "What is the official currency of Ohio?",
    image: "https://media.tenor.com/mJ9L0o3rX24AAAAC/ohio.gif",
    options: ["Aura points", "US Dollars", "Robux", "V-Bucks"],
    answerIndex: 0
  },
  {
    question: "What sound does a Sigma make when entering a room?",
    image: "https://media.tenor.com/Q9yM0JjV6SIAAAAC/phonk.gif",
    options: ["Bass boosted phonk noise", "Hello everyone!", "Cough", "Silent walk"],
    answerIndex: 0
  },
  {
    question: "What is the ultimate response to hatin' betas?",
    image: "https://media1.tenor.com/m/zyDv5iQ1DNkAAAAC/sad.gif",
    options: ["🗿 (Silence)", "Argue back", "Cry", "Block them"],
    answerIndex: 0
  }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;

// Element References
const startBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionNumEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsGridEl = document.getElementById('options-grid');
const scoreTextEl = document.getElementById('score-text');
const rankTextEl = document.getElementById('rank-text');
const restartBtn = document.getElementById('restart-btn');

// Start Quiz Event
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);

function startQuiz() {
  startBtn.classList.add('hidden');
  resultsContainer.classList.add('hidden');
  
  // Pick 10 unique questions randomly from the 25-question pool
  selectedQuestions = getRandomQuestions(questionBank, 10);
  currentQuestionIndex = 0;
  userScore = 0;

  quizContainer.classList.remove('hidden');
  displayQuestion();
}

function getRandomQuestions(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function displayQuestion() {
  const currentQ = selectedQuestions[currentQuestionIndex];

  questionNumEl.textContent = `Question ${currentQuestionIndex + 1} / 10`;

  // Render question text along with its GIF
  questionTextEl.innerHTML = `
    <div style="margin-bottom: 15px;">
      <img src="${currentQ.image}" alt="Meme GIF" class="quiz-gif">
    </div>
    <div>${currentQ.question}</div>
  `;

  // Clear previous options
  optionsGridEl.innerHTML = '';

  // Generate option buttons
  currentQ.options.forEach((optionText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = optionText;
    btn.addEventListener('click', () => handleOptionSelect(index));
    optionsGridEl.appendChild(btn);
  });
}

function handleOptionSelect(selectedIndex) {
  const currentQ = selectedQuestions[currentQuestionIndex];

  // Quietly track score without revealing correct answer
  if (selectedIndex === currentQ.answerIndex) {
    userScore++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < selectedQuestions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizContainer.classList.add('hidden');
  resultsContainer.classList.remove('hidden');

  scoreTextEl.textContent = `Your Sigma Score: ${userScore} / 10`;

  let rank = "";
  if (userScore === 10) rank = "LIGMA SIGMA GOD 🗿🔥 (+9999 Aura)";
  else if (userScore >= 7) rank = "GIGA CHAD IN TRAINING 🗿";
  else if (userScore >= 4) rank = "AVERAGE OHIO CITIZEN 🌽";
  else rank = "BETA NERD 🤓 (0 Aura)";

  rankTextEl.textContent = `Rank: ${rank}`;
}