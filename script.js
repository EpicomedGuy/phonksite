// Sound Effect Definitions
const MEME_SOUNDS = [
  'among-us-role-reveal-sound.mp3',
  'bark-fart_XRsy1HE.mp3',
  'chicken-on-tree-screaming.mp3',
  'dry-fart.mp3',
  'enrique.mp3',
  'google-chrome-20130527-1558.mp3',
  'long-brain-fart.mp3',
  'mr-beast-phonk-meme.mp3',
  'rizz-sound-effect.mp3',
  'sigeon-pex-so-ahh.mp3',
  'skibidi-toilet.mp3',
  'suii.mp3',
  'syfm_Uw1QK7v.mp3',
  'tuco-get-out.mp3',
  'undertakers-bell_2UwFCIe.mp3',
  'vine-boom.mp3'
];

// Active main audio tracker to prevent overlapping
let currentMainAudio = null;

// Helper to play main background/meme sound (stops current playing main sound)
function playAudio(filename) {
  if (currentMainAudio) {
    currentMainAudio.pause();
    currentMainAudio.currentTime = 0;
  }
  
  currentMainAudio = new Audio(filename);
  currentMainAudio.play().catch(err => {
    console.log(`Audio play blocked or failed for: ${filename}`, err);
  });
}

// Helper to play quick UI sounds (does NOT interrupt main audio)
function playClickSound() {
  const clickAudio = new Audio('click.mp3');
  clickAudio.play().catch(err => {
    console.log('Click audio play blocked or failed', err);
  });
}

// Play a random sound from the meme pool
function playRandomMemeSound() {
  const randomIndex = Math.floor(Math.random() * MEME_SOUNDS.length);
  playAudio(MEME_SOUNDS[randomIndex]);
}

// Handle site opening sound ("auraa.mp3") on first user interaction
let auraPlayed = false;
function triggerAuraOnFirstInteraction() {
  if (!auraPlayed) {
    playAudio('auraa.mp3');
    auraPlayed = true;
  }
}
document.addEventListener('click', triggerAuraOnFirstInteraction, { once: true });
document.addEventListener('keydown', triggerAuraOnFirstInteraction, { once: true });

// Attach global click SFX to all button elements
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
    playClickSound();
  }
});


const questionBank = [
  // --- ORIGINAL QUESTIONS ---
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
  },

  // --- NEW EXPANDED QUESTIONS ---
  {
    question: "What happens if you miss a single day of mewing?",
    image: "https://media.tenor.com/idGbTm3l6mwAAAAM/cruz-mewing-potato.gif",
    options: ["Your jawline dissolves", "Nothing at all", "You get +10 Aura", "You gain W Rizz"],
    answerIndex: 0
  },
  {
    question: "What is the side-eye stance used for?",
    image: "https://media.tenor.com/zqSA5TmyIYUAAAAM/sus-cat-2-suspicious-cat.gif",
    options: ["Detecting Beta NPCs", "Looking for food", "Sleeping standing up", "Checking the time"],
    answerIndex: 0
  },
  {
    question: "Who holds the record for most Aura in history?",
    image: "https://media.tenor.com/a8IHKcQkXmkAAAAm/aura.webp",
    options: ["GigaChad", "Beta Male #4", "The Lunch Lady", "Subway Surfer"],
    answerIndex: 0
  },
  {
    question: "What happens when CaseOh steps on the scale?",
    image: "https://media.tenor.com/SexLjc5sAokAAAA1/caseoh-case-oh.webp",
    options: ["Tectonic plates shift", "Scale reads 150 lbs", "Nothing", "Scale plays phonk"],
    answerIndex: 0
  },
  {
    question: "What is the primary objective in Roblox BrookHaven for Sigmas?",
    image: "https://media.tenor.com/62tPd3bFZjcAAAAM/the-rizzler-roblox.gif",
    options: ["Assert dominance and mog", "Buy a house", "Drive a normal car", "Make friends"],
    answerIndex: 0
  },
  {
    question: "What does 'Skeet' or 'Yeet' signify in brainrot physics?",
    image: "https://media.tenor.com/ThLxxC0zE0YAAAAM/shocked-surprised.gif",
    options: ["Maximum velocity propulsion", "Sleeping", "Mewing silently", "Eating lunch"],
    answerIndex: 0
  },
  {
    question: "What is the signature move of 'The Rizzler'?",
    image: "https://media.tenor.com/MCJFAavmyJwAAAAM/rizzler-the-rizzler.gif",
    options: ["The Unspoken Squint", "A backflip", "Handshake", "High Five"],
    answerIndex: 0
  },
  {
    question: "What happens if Kai Cenat enters AMP House during a stream?",
    image: "https://media.tenor.com/gmtaaiX-x5cAAAA1/micsinasz-masi.webp",
    options: ["Riot level increases by 300%", "Quiet studying", "Sleep mode activated", "Stream ends"],
    answerIndex: 0
  },
  {
    question: "What is the proper reaction to an L Take?",
    image: "https://media.tenor.com/0BbetNtQpCoAAAAM/beta-son-im-crine.gif",
    options: ["Hit 'em with the Skull Emoji 💀", "Say 'Thank you'", "Agree with them", "Cry"],
    answerIndex: 0
  },
  {
    question: "What does 'Glazing' mean?",
    image: "https://media.tenor.com/thsdSeKiTqgAAAA1/benjammins-fanum.webp",
    options: ["Over-praising someone excessively", "Making donuts", "Painting a wall", "Staring into space"],
    answerIndex: 0
  },
  {
    question: "What sound effect plays when a dramatic Sigma realization hits?",
    image: "https://media.tenor.com/fbEy_7PiYFIAAAAM/%D0%B3%D0%BE%D0%B2%D0%BD%D0%BE-%D1%81%D0%BE%D0%BB%D0%BE-%D0%BB%D0%B5%D0%B2%D0%B5%D0%BB%D0%B8%D0%BD%D0%B3.gif",
    options: ["Vine Boom", "Guitar solo", "Applause", "Silence"],
    answerIndex: 0
  },
  {
    question: "What is the main trait of a NPC (Non-Playable Character)?",
    image: "https://media.tenor.com/67fCL8AygjQAAAA1/no-aura.webp",
    options: ["Repeating dialogue and lack of original thought", "High Aura", "Perfect jawline", "Master of Rizz"],
    answerIndex: 0
  },
  {
    question: "What is the penalty for smiling during a cold stare contest?",
    image: "https://media.tenor.com/MbZ-Uvlmn6cAAAAM/sigma-boy-mewing.gif",
    options: ["Instant loss of 10,000 Aura", "You win", "Free food", "Promotion to Alpha"],
    answerIndex: 0
  },
  {
    question: "What vehicle does a True Sigma drive?",
    image: "https://media.tenor.com/4945vVZQeYcAAAAM/im-aura-farming-aura.gif",
    options: ["Batmobile / Stealth Fighter", "Minivan", "Bicycle with training wheels", "Scooter"],
    answerIndex: 0
  },
  {
    question: "What happens when you combine Phonk + Mewing + Cold Shower?",
    image: "https://media.tenor.com/a8IHKcQkXmkAAAAm/aura.webp",
    options: ["Ascension to Sigma Deity", "You get a cold", "Nothing", "You fall asleep"],
    answerIndex: 0
  },
  {
    question: "What does 'Sunk Cost Rizz' mean?",
    image: "https://media.tenor.com/VNk5icqd96wAAAAM/ursinho.gif",
    options: ["Rizzing so hard you lose money", "Failed attempts at flirtation", "Aura bankruptcy", "Winning instantly"],
    answerIndex: 0
  },
  {
    question: "What is the favorite game of Brainrot enthusiasts?",
    image: "https://media.tenor.com/gmtaaiX-x5cAAAA1/micsinasz-masi.webp",
    options: ["Subway Surfers + Family Guy split screen", "Chess", "Solitaire", "Sudoku"],
    answerIndex: 0
  },
  {
    question: "How do you respond to 'Who asked?'",
    image: "https://media.tenor.com/0BbetNtQpCoAAAAM/beta-son-im-crine.gif",
    options: ["'I asked.' (Sigma Stare)", "Apologize", "Walk away crying", "Say 'Nobody'"],
    answerIndex: 0
  },
  {
    question: "What is the mascot of Ohio's Secret Defense Force?",
    image: "https://media.tenor.com/zqSA5TmyIYUAAAAM/sus-cat-2-suspicious-cat.gif",
    options: ["Suspicious Cat", "Golden Retriever", "Goldfish", "Pigeon"],
    answerIndex: 0
  },
  {
    question: "What happens when you hit a 360 No-Scope in real life?",
    image: "https://media.tenor.com/17tz5nLA3I0AAAAM/%D0%B4.gif",
    options: ["+50,000 Aura points", "Physics breaks", "You get banned", "Nothing"],
    answerIndex: 0
  },
  {
    question: "What is the official anthem of Ohio?",
    image: "https://media.tenor.com/pB2hs8Wj814AAAAm/ohio-text.webp",
    options: ["Swag Like Ohio", "National Anthem", "Lofi Beats", "Classical Music"],
    answerIndex: 0
  },
  {
    question: "What is the weight class of CaseOh?",
    image: "https://media.tenor.com/SexLjc5sAokAAAA1/caseoh-case-oh.webp",
    options: ["Observable Universe", "Heavyweight", "Featherweight", "Middleweight"],
    answerIndex: 0
  },
  {
    question: "What happens if Fanum catches you eating pizza?",
    image: "https://media.tenor.com/thsdSeKiTqgAAAA1/benjammins-fanum.webp",
    options: ["20% slice tax enforced immediately", "He gives you more", "He ignores you", "He pays for it"],
    answerIndex: 0
  },
  {
    question: "What is the ultimate goal of the Grindset?",
    image: "https://media.tenor.com/a8IHKcQkXmkAAAAm/aura.webp",
    options: ["Self-sovereignty and limitless aura", "Getting 8 hours of sleep", "Playing games all day", "Following rules"],
    answerIndex: 0
  },
  {
    question: "What is the definition of 'Cooked'?",
    image: "https://media1.tenor.com/m/zyDv5iQ1DNkAAAAC/sad.gif",
    options: ["Completely over / defeated", "Preparing food", "Being happy", "Winning a prize"],
    answerIndex: 0
  },
  {
    question: "What happens when you step foot in an Ohio gas station at 3 AM?",
    image: "https://media.tenor.com/ohh4VUlpwq0AAAAM/trollge-6-7.gif",
    options: ["Boss fight initiates", "You get free snacks", "It's completely normal", "You gain +100 Health"],
    answerIndex: 0
  },
  {
    question: "What does 'Lightskin Stare' do?",
    image: "https://media.tenor.com/MCJFAavmyJwAAAAM/rizzler-the-rizzler.gif",
    options: ["Applies passive charm and confuses opponents", "Blinds people", "Heals teammates", "Causes rain"],
    answerIndex: 0
  },
  {
    question: "What is the ultimate counter to Grimace Shake?",
    image: "https://media.tenor.com/0QYEO-SgW0oAAAAM/grimace-shaker.gif",
    options: ["Pure Sigma Aura shield", "Drinking water", "Running away", "Calling for help"],
    answerIndex: 0
  },
  {
    question: "How do you know someone is an Alpha?",
    image: "https://media.tenor.com/MbZ-Uvlmn6cAAAAM/sigma-boy-mewing.gif",
    options: ["They tell everyone they are an Alpha", "They stay silent", "They mew constantly", "They hide in corners"],
    answerIndex: 0
  },
  {
    question: "What is the final boss of Brainrot level 100?",
    image: "https://media.tenor.com/17tz5nLA3I0AAAAM/%D0%B4.gif",
    options: ["The Skibidi Giga-Rizzler of Ohio", "A normal person", "A math test", "A clock"],
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

  let count = 10;
  if (difficulty === 'easy') count = 5;
  if (difficulty === 'hard') count = 15;

  selectedQuestions = getRandomQuestions(questionBank, count);
  currentQuestionIndex = 0;
  userScore = 0;

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
  
  playRandomMemeSound();

  const total = selectedQuestions.length;
  const currentQ = selectedQuestions[currentQuestionIndex];

  progressBar.style.width = `${((currentQuestionIndex) / total) * 100}%`;
  questionNumEl.textContent = `Question ${currentQuestionIndex + 1} / ${total}`;

  questionTextEl.innerHTML = `
    <div style="margin-bottom: 15px;">
      <img src="${currentQ.image}" alt="Meme GIF" class="quiz-gif">
    </div>
    <div>${currentQ.question}</div>
  `;

  optionsGridEl.innerHTML = '';
  currentQ.options.forEach((optionText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = optionText;
    btn.addEventListener('click', () => handleOptionSelect(index));
    optionsGridEl.appendChild(btn);
  });

  if (currentDifficulty === 'hard') {
    timeLeft = 10;
    timerDisplay.textContent = ` ${timeLeft}s`;
    questionTimer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = ` ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(questionTimer);
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

  let rank = "";
  let message = "";
  let gifUrl = "";
  let resultSound = "";

  if (percentage === 100) {
    rank = "👑 GOD-KING OF OHIO (+99,999 AURA)";
    message = "You have reached peak brainrot ascension. Mewing level infinite. GigaChads fear your presence.";
    gifUrl = "https://media.tenor.com/MbZ-Uvlmn6cAAAAM/sigma-boy-mewing.gif";
    resultSound = "mr-beast-phonk-meme.mp3";
  } else if (percentage >= 80) {
    rank = "🗿 ULTIMATE SIGMA GRINDSET (+5,000 AURA)";
    message = "Heavy phonk music plays wherever you walk. Your jawline can cut diamonds.";
    gifUrl = "https://media.tenor.com/a8IHKcQkXmkAAAAm/aura.webp";
    resultSound = "suii.mp3";
  } else if (percentage >= 60) {
    rank = "🔥 CERTIFIED RIZZLER (+1,000 AURA)";
    message = "Not bad! You know your way around Ohio and Fanum taxes, but you need to keep grinding.";
    gifUrl = "https://media.tenor.com/MCJFAavmyJwAAAAM/rizzler-the-rizzler.gif";
    resultSound = "rizz-sound-effect.mp3";
  } else if (percentage >= 40) {
    rank = "🌽 AVERAGE OHIO RESIDENT (0 AURA)";
    message = "You get hit by Fanum Tax daily. Time to lock in and start mewing.";
    gifUrl = "https://media.tenor.com/zqSA5TmyIYUAAAAM/sus-cat-2-suspicious-cat.gif";
    resultSound = "among-us-role-reveal-sound.mp3";
  } else if (percentage >= 20) {
    rank = "🤓 BETA NPC (-5,000 AURA)";
    message = "You dropped your lunch tray and lost all your aura points. Embarrassing.";
    gifUrl = "https://media.tenor.com/67fCL8AygjQAAAA1/no-aura.webp";
    resultSound = "ryan-gosling-burp.mp3";
  } else {
    rank = "💀 SKIBIDI TOILET VICTIM (-99,999 AURA)";
    message = "Zero brainrot knowledge. Go back to basic training before stepping foot in Ohio again.";
    gifUrl = "https://media1.tenor.com/m/zyDv5iQ1DNkAAAAC/sad.gif";
    resultSound = "ryan-gosling-burp.mp3";
  }

  playAudio(resultSound);

  rankTitleEl.textContent = rank;
  rankDescEl.textContent = message;
  resultGifContainer.innerHTML = `<img src="${gifUrl}" class="result-gif" alt="Result GIF">`;
}
