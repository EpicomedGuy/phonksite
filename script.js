// Extended Question Bank with working Direct Media URLs
const questionBank = [
  {
    question: "What is the ultimate rule of a true Sigma?",
    image: "https://media.tenor.com/MbZ-Uvlmn6cAAAAM/sigma-boy-mewing.gif",
    options: ["Never break the grindset", "Always talk in public", "Ask for permission", "Follow all trends"],
    answerIndex: 0
  },
  {
    question: "Where does the Mewing streak start?",
    image: "https://media.tenor.com/MbZ-Uvlmn6cAAAAM/sigma-boy-mewing.gif",
    options: ["At the gym", "In silence", "On TikTok", "At midnight"],
    answerIndex: 1
  },
  {
    question: "What is the primary power source of Brainrot?",
    image: "https://media.tenor.com/gmtaaiX-x5cAAAA1/micsinasz-masi.webp",
    options: ["Skibidi energy", "Phonk beats", "Subway Surfers gameplay", "All of the above"],
    answerIndex: 3
  },
  {
    question: "Who is the CEO of Ohio?",
    image: "https://media.tenor.com/CbN3G2XceVYAAAAM/putin-trump.gif",
    options: ["Kai Cenat", "Baby Gronk", "The Rizzler", "Livvy Dunne"],
    answerIndex: 2
  },
  {
    question: "What happens when you achieve W Rizz?",
    image: "https://media.tenor.com/VNk5icqd96wAAAAM/ursinho.gif",
    options: ["You gain +100 aura", "You lose internet access", "You fall asleep", "Nothing"],
    answerIndex: 0
  },
  {
    question: "What time does the Sigma wake up?",
    image: "https://media.tenor.com/a8IHKcQkXmkAAAAm/aura.webp",
    options: ["8:00 AM", "3:00 AM", "Sigma doesn't sleep", "12:00 PM"],
    answerIndex: 2
  },
  {
    question: "What music plays in the background of a Sigma edit?",
    image: "https://media.tenor.com/fbEy_7PiYFIAAAAM/%D0%B3%D0%BE%D0%B2%D0%BD%D0%BE-%D1%81%D0%BE%D0%BB%D0%BE-%D0%BB%D0%B5%D0%B2%D0%B5%D0%BB%D0%B8%D0%BD%D0%B3.gif",
    options: ["Classical Opera", "Brazilian Phonk", "Jazz", "Lofi Beats"],
    answerIndex: 1
  },
  {
    question: "If someone hits you with an Unspoken Rizz, what do you do?",
    image: "https://media.tenor.com/ThLxxC0zE0YAAAAM/shocked-surprised.gif",
    options: ["Mew back immediately", "Run away", "Call the police", "Cry"],
    answerIndex: 0
  },
  {
    question: "Which state has maximum brainrot level?",
    image: "https://media.tenor.com/zqSA5TmyIYUAAAAM/sus-cat-2-suspicious-cat.gif",
    options: ["Florida", "Ohio", "Texas", "California"],
    answerIndex: 1
  },
  {
    question: "What is Fanum Tax?",
    image: "https://media.tenor.com/thsdSeKiTqgAAAA1/benjammins-fanum.webp",
    options: ["A state government tax", "Stealing 20% of your friend's food", "Paying for Wi-Fi", "Subscribing on Twitch"],
    answerIndex: 1
  },
  {
    question: "What does Mogging mean?",
    image: "https://media.tenor.com/idGbTm3l6mwAAAAM/cruz-mewing-potato.gif",
    options: ["Walking fast", "Looking visually superior to everyone around", "Eating fast food", "Dancing"],
    answerIndex: 1
  },
  {
    question: "What is Grimace Shake known for?",
    image: "https://media.tenor.com/0QYEO-SgW0oAAAAM/grimace-shaker.gif",
    options: ["Infinite health", "Level 100 Gyatt", "Instant brainrot anomaly", "Gives you aura"],
    answerIndex: 2
  },
  {
    question: "What is the maximum aura loss for dropping your lunch tray?",
    image: "https://media.tenor.com/67fCL8AygjQAAAA1/no-aura.webp",
    options: ["-10 Aura", "-500 Aura", "-100,000 Aura", "Infinite Aura loss"],
    answerIndex: 3
  },
  {
    question: "What happens when Baby Gronk rizzes up Livvy Dunne?",
    image: "https://media.tenor.com/MCJFAavmyJwAAAAM/rizzler-the-rizzler.gif",
    options: ["He becomes the new Drip King", "Nothing", "Internet explodes", "Ohio resets"],
    answerIndex: 0
  },
  {
    question: "What is the primary food source of a Sigma?",
    image: "https://media.tenor.com/SexLjc5sAokAAAA1/caseoh-case-oh.webp",
    options: ["Raw eggs and grindset", "Pizza", "Salad", "Protein powder mixed with air"],
    answerIndex: 0
  },
  {
    question: "How do you counter a negative Aura interaction?",
    image: "https://media.tenor.com/ohh4VUlpwq0AAAAM/trollge-6-7.gif",
    options: ["Hit a quick jawline flex", "Apologize instantly", "Leave the state", "Start laughing"],
    answerIndex: 0
  },
  {
    question: "What is Skibidi Toilet's main arch-enemy?",
    image: "https://media.tenor.com/8qFRPXJZRy0AAAAM/toilet.gif",
    options: ["Cameramen", "Speakerheads", "TV Men", "All of the above"],
    answerIndex: 3
  },
  {
    question: "What does 'Bussin' mean in Sigma language?",
    image: "https://media.tenor.com/oYP4A77b_rIAAAAM/granny-dance.gif",
    options: ["Extremely good", "Taking the bus", "Broken", "Boring"],
    answerIndex: 0
  },
  {
    question: "What is the highest achievable rank in brainrot hierarchy?",
    image: "https://media.tenor.com/17tz5nLA3I0AAAAM/%D0%B4.gif",
    options: ["Ligma Sigma God", "Alpha Leader", "Beta NPC", "Ohio Mayor"],
    answerIndex: 0
  },
  {
    question: "Why does the Sigma never double text?",
    image: "https://media.tenor.com/62tPd3bFZjcAAAAM/the-rizzler-roblox.gif",
    options: ["They are busy on the grind", "They forgot", "No service", "Keyboard is broken"],
    answerIndex: 0
  },
  {
    question: "What happens if you break eye contact first?",
    image: "https://media1.tenor.com/m/T7iurPaOs14AAAAd/freaky-orochimaru.gif",
    options: ["You get mogged instantly", "You win", "Nothing", "+50 Aura"],
    answerIndex: 0
  },
  {
    question: "Which stance grants maximum aura during a conversation?",
    image: "https://media.tenor.com/hnVvqJoFSKYAAAAm/aura-max-aura.webp",
    options: ["Crossed arms, silent nod", "T-Pose", "Sitting down", "Dancing"],
    answerIndex: 0
  },
  {
    question: "What is the official currency of Ohio?",
    image: "https://media.tenor.com/pB2hs8Wj814AAAAm/ohio-text.webp",
    options: ["Aura points", "US Dollars", "Robux", "V-Bucks"],
    answerIndex: 0
  },
  {
    question: "What sound does a Sigma make when entering a room?",
    image: "https://media.tenor.com/4945vVZQeYcAAAAM/im-aura-farming-aura.gif",
    options: ["Bass boosted phonk noise", "Hello everyone!", "Cough", "Silent walk"],
    answerIndex: 0
  },
  {
    question: "What is the ultimate response to hatin' betas?",
    image: "https://media.tenor.com/0BbetNtQpCoAAAAM/beta-son-im-crine.gif",
    options: ["🗿 (Silence)", "Argue back", "Cry", "Block them"],
    answerIndex: 0
  },
  {
    question: "What happens when you look into CaseOh's eyes?",
    image: "https://media.tenor.com/SexLjc5sAokAAAA1/caseoh-case-oh.webp",
    options: ["You feel gravity pulling you", "Nothing", "You get free food", "+100 Rizz"],
    answerIndex: 0
  },
  {
    question: "What is Duke Dennis' signature attribute?",
    image: "https://media.tenor.com/MCJFAavmyJwAAAAM/rizzler-the-rizzler.gif",
    options: ["Drip and Infinite Rizz", "Mewing", "Gaming skills", "Fast running"],
    answerIndex: 0
  },
  {
    question: "What does 'Edge' mean in Sigma terminology?",
    image: "https://media.tenor.com/MbZ-Uvlmn6cAAAAM/sigma-boy-mewing.gif",
    options: ["Maintaining maximum focus/control", "Standing on a cliff", "Playing games", "Sleeping"],
    answerIndex: 0
  },
  {
    question: "How do you achieve Level 100 Gyatt status?",
    image: "https://media.tenor.com/0QYEO-SgW0oAAAAM/grimace-shaker.gif",
    options: ["Squats and Phonk music", "Drinking milk", "Sleeping 12 hours", "Watching TikTok"],
    answerIndex: 0
  },
  {
    question: "What is the ultimate Sigma drink?",
    image: "https://media.tenor.com/0QYEO-SgW0oAAAAM/grimace-shaker.gif",
    options: ["Pure Phonk Liquid", "Water", "Soda", "Coffee"],
    answerIndex: 0
  }
];

// State variables
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;
let currentDifficulty = 'medium';
let questionTimer = null;
let timeLeft = 10;

// DOM Elements
const heroSection = document.getElementById('hero-section');
const openDiffBtn = document.getElementById('open-difficulty-btn');
const difficultyContainer = document.getElementById('difficulty-container');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');

const diffButtons = document.querySelectorAll('.diff-btn');
const diffBadge = document.getElementById('diff-badge');
const timerDisplay = document.getElementById('timer-display');
const progressBar = document.getElementById('progress-bar');

const questionNumEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsGridEl = document.getElementById('options-grid');

const scoreTextEl = document.getElementById('score-text');
const rankTitleEl = document.getElementById('rank-title');
const rankDescEl = document.getElementById('rank-desc');
const resultGifContainer = document.getElementById('result-gif-container');
const restartBtn = document.getElementById('restart-btn');

// Event Listeners
openDiffBtn.addEventListener('click', showDifficultyScreen);

diffButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const diff = e.currentTarget.getAttribute('data-diff');
    startQuiz(diff);
  });
});

restartBtn.addEventListener('click', resetToHome);

function showDifficultyScreen() {
  heroSection.classList.add('hidden');
  difficultyContainer.classList.remove('hidden');
}

function resetToHome() {
  resultsContainer.classList.add('hidden');
  quizContainer.classList.add('hidden');
  heroSection.classList.remove('hidden');
  openDiffBtn.classList.remove('hidden');
  clearInterval(questionTimer);
}

function startQuiz(difficulty) {
  currentDifficulty = difficulty;
  difficultyContainer.classList.add('hidden');
  resultsContainer.classList.add('hidden');

  // Set number of questions based on difficulty
  let count = 10;
  if (difficulty === 'easy') count = 5;
  if (difficulty === 'hard') count = 15;

  selectedQuestions = getRandomQuestions(questionBank, count);
  currentQuestionIndex = 0;
  userScore = 0;

  // Setup UI badges
  diffBadge.textContent = difficulty.toUpperCase();
  diffBadge.className = `badge ${difficulty}-badge`;

  if (difficulty === 'hard') {
    timerDisplay.classList.remove('hidden');
  } else {
    timerDisplay.classList.add('hidden');
  }

  quizContainer.classList.remove('hidden');
  displayQuestion();
}

function getRandomQuestions(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function displayQuestion() {
  clearInterval(questionTimer);
  const total = selectedQuestions.length;
  const currentQ = selectedQuestions[currentQuestionIndex];

  // Update Progress Bar & Question Count
  progressBar.style.width = `${((currentQuestionIndex) / total) * 100}%`;
  questionNumEl.textContent = `Question ${currentQuestionIndex + 1} / ${total}`;

  // Render question text & meme image
  questionTextEl.innerHTML = `
    <div style="margin-bottom: 15px;">
      <img src="${currentQ.image}" alt="Meme GIF" class="quiz-gif">
    </div>
    <div>${currentQ.question}</div>
  `;

  // Render options grid
  optionsGridEl.innerHTML = '';
  currentQ.options.forEach((optionText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = optionText;
    btn.addEventListener('click', () => handleOptionSelect(index));
    optionsGridEl.appendChild(btn);
  });

  // Handle Timer for Hard mode
  if (currentDifficulty === 'hard') {
    timeLeft = 10;
    timerDisplay.textContent = `⏳ ${timeLeft}s`;
    questionTimer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `⏳ ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(questionTimer);
        // Time out - advance without point
        nextQuestion();
      }
    }, 1000);
  }
}

function handleOptionSelect(selectedIndex) {
  clearInterval(questionTimer);
  const currentQ = selectedQuestions[currentQuestionIndex];

  if (selectedIndex === currentQ.answerIndex) {
    userScore++;
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  clearInterval(questionTimer);
  quizContainer.classList.add('hidden');
  resultsContainer.classList.remove('hidden');

  const total = selectedQuestions.length;
  const percentage = Math.round((userScore / total) * 100);

  scoreTextEl.textContent = `Your Score: ${userScore} / ${total} (${percentage}%)`;

  // Determine Advanced Rank & Message
  let rank = "";
  let message = "";
  let gifUrl = "";

  if (percentage === 100) {
    rank = "👑 GOD-KING OF OHIO (+99,999 AURA)";
    message = "You have reached peak brainrot ascension. Mewing level infinite. GigaChads fear your presence.";
    gifUrl = "https://media.tenor.com/MbZ-Uvlmn6cAAAAM/sigma-boy-mewing.gif";
  } else if (percentage >= 80) {
    rank = "🗿 ULTIMATE SIGMA GRINDSET (+5,000 AURA)";
    message = "Heavy phonk music plays wherever you walk. Your jawline can cut diamonds.";
    gifUrl = "https://media.tenor.com/a8IHKcQkXmkAAAAm/aura.webp";
  } else if (percentage >= 60) {
    rank = "🔥 CERTIFIED RIZZLER (+1,000 AURA)";
    message = "Not bad! You know your way around Ohio and Fanum taxes, but you need to keep grinding.";
    gifUrl = "https://media.tenor.com/MCJFAavmyJwAAAAM/rizzler-the-rizzler.gif";
  } else if (percentage >= 40) {
    rank = "🌽 AVERAGE OHIO RESIDENT (0 AURA)";
    message = "You get hit by Fanum Tax daily. Time to locks in and start mewing.";
    gifUrl = "https://media.tenor.com/zqSA5TmyIYUAAAAM/sus-cat-2-suspicious-cat.gif";
  } else if (percentage >= 20) {
    rank = "🤓 BETA NPC (-5,000 AURA)";
    message = "You dropped your lunch tray and lost all your aura points. Embarrassing.";
    gifUrl = "https://media.tenor.com/67fCL8AygjQAAAA1/no-aura.webp";
  } else {
    rank = "💀 SKIBIDI TOILET VICTIM (-99,999 AURA)";
    message = "Zero brainrot knowledge. Go back to basic training before stepping foot in Ohio again.";
    gifUrl = "https://media1.tenor.com/m/zyDv5iQ1DNkAAAAC/sad.gif";
  }

  rankTitleEl.textContent = rank;
  rankDescEl.textContent = message;
  resultGifContainer.innerHTML = `<img src="${gifUrl}" class="result-gif" alt="Result GIF">`;
}
