'use strict';

const imageDict = {
  1: 'dice-1.png',
  2: 'dice-2.png',
  3: 'dice-3.png',
  4: 'dice-4.png',
  5: 'dice-5.png',
  6: 'dice-6.png',
};

const roll_button = document.querySelector('.btn--roll');
const hold_button = document.querySelector('.btn--hold');
const reset_button = document.querySelector('.btn--new');
const instruct_button = document.querySelector('.showInstruction');
const about_button = document.querySelector('.showAbout');
const btnCloseModal = document.querySelectorAll('.close-modal');

const show_currentScore_0 = document.getElementById('current--0');
const show_currentScore_1 = document.getElementById('current--1');
const show_realScore_0 = document.getElementById('score--0');
const show_realScore_1 = document.getElementById('score--1');
const show_playerName_0 = document.getElementById('name--0');
const show_playerName_1 = document.getElementById('name--1');
const player0_Effect = document.querySelector('.player--0');
const player1_Effect = document.querySelector('.player--1');
const bg_effect = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

let player0_active = true;

let current_score0 = 0;
let current_score1 = 0;
let real_score0 = 0;
let real_score1 = 0;

const modals = {
  instruction: document.querySelector('.modal-1'),
  about: document.querySelector('.modal-2'),
};

const openModal = function (modal) {
  console.log(`White Box clicked`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Exit to the main screen
const closeModal = function () {
  console.log(`Button X clicked`);
  Object.values(modals).forEach(m => m.classList.add('hidden'));
  overlay.classList.add('hidden');
};

function displayImage(imageURL) {
  document.querySelector('.dice').src = imageURL;
}

// Rain Emoji Function
function rainEmoji(emoji, count) {
  let container = document.querySelector('.emoji-container');

  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.classList.add('emoji');
    span.textContent = emoji;

    // Random horizontal position
    span.style.left = Math.random() * 100 + 'vw';

    // Random animation duration and delay
    span.style.animationDuration = 2 + Math.random() * 2 + 's';
    span.style.animationDelay = Math.random() * 0.5 + 's';

    container.appendChild(span);

    // Remove after animation ends
    span.addEventListener('animationend', () => {
      span.remove();
    });
  }
}

const winGame_effect = function () {
  if (real_score0 >= 50) {
    player0_Effect.classList.add('player--winner');
    roll_button.disabled = true;
    hold_button.disabled = true;
    bg_effect.style.backgroundColor = '#60b347';
    rainEmoji('😁', 30);
  } else if (real_score1 >= 50) {
    player1_Effect.classList.add('player--winner');
    roll_button.disabled = true;
    hold_button.disabled = true;
    bg_effect.style.backgroundColor = '#60b347';
    rainEmoji('😁', 30);
  }
};

const player0 = function () {
  let randomInt = Math.floor(Math.random() * 6 + 1);
  if (randomInt === 1) {
    current_score0 = 0;
    displayImage(imageDict[1]);
    player0_active = false;
    player0_Effect.classList.remove('player--active');
    player1_Effect.classList.add('player--active');
  } else {
    current_score0 += randomInt;
    displayImage(imageDict[randomInt]);
  }
  show_currentScore_0.textContent = current_score0;
};

const player1 = function () {
  let randomInt = Math.floor(Math.random() * 6 + 1);
  if (randomInt === 1) {
    current_score1 = 0;
    displayImage(imageDict[1]);
    player0_active = true;
    player1_Effect.classList.remove('player--active');
    player0_Effect.classList.add('player--active');
  } else {
    current_score1 += randomInt;
    displayImage(imageDict[randomInt]);
  }
  show_currentScore_1.textContent = current_score1;
};

roll_button.addEventListener('click', function () {
  if (player0_active) {
    player0();
  } else {
    player1();
  }
});

hold_button.addEventListener('click', function () {
  if (player0_active) {
    real_score0 += current_score0;
    show_realScore_0.textContent = real_score0;
    current_score0 = 0;
    show_currentScore_0.textContent = 0;
    player0_active = false;
    player0_Effect.classList.remove('player--active');
    player1_Effect.classList.add('player--active');
    winGame_effect();
  } else {
    real_score1 += current_score1;
    show_realScore_1.textContent = real_score1;
    current_score1 = 0;
    show_currentScore_1.textContent = 0;
    1;
    player0_active = true;
    player1_Effect.classList.remove('player--active');
    player0_Effect.classList.add('player--active');
    winGame_effect();
  }
});

reset_button.addEventListener('click', function () {
  player0_active = true;
  current_score0 = 0;
  current_score1 = 0;
  real_score0 = 0;
  real_score1 = 0;
  show_currentScore_0.textContent = 0;
  show_currentScore_1.textContent = 0;
  show_realScore_0.textContent = 0;
  show_realScore_1.textContent = 0;
  player0_Effect.classList.remove('player--winner');
  player1_Effect.classList.remove('player--winner');
  player0_Effect.classList.add('player--active');
  player1_Effect.classList.remove('player--active');
  bg_effect.style.backgroundColor = '#222';
  roll_button.disabled = false;
  hold_button.disabled = false;
});

instruct_button.addEventListener('click', () => openModal(modals.instruction));
about_button.addEventListener('click', () => openModal(modals.about));
btnCloseModal.forEach(btn => btn.addEventListener('click', closeModal));
overlay.addEventListener('click', closeModal);
