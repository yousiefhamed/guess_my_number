'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = "";
    for (let i = 0; i < message.length; i++) {
        setTimeout(() => {
            document.querySelector('.message').textContent += message[i];
        }, i * 15);
    }
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const guess = Number(document.querySelector('.guess').value);

    if (document.querySelector('.guess').value < 1 || document.querySelector('.guess').value > 20) {
        const message = "🧮 Please enter a number between 1 and 20";
        displayMessage(message);

        // when there is no guess
    } else if (!guess) {
        const message = "⛔ No number!";
        displayMessage(message)

        // when player wins
    } else if (guess === secretNumber) {
        const message = "🎉 Correct Number!";
        displayMessage(message)
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b357';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            const message = "📈 Too High!";
            displayMessage(message)
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            const message = "💥 You lost the game!";
            displayMessage(message)
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#662727';
            document.querySelector('.number').style.width = '30rem';
        }

        // when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            const message = "📉 Too Low!";
            displayMessage(message)
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            const message = "💥 You lost the game!";
            displayMessage(message)
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#662727';
            document.querySelector('.number').style.width = '30rem';
        }
    }
});

document.querySelector('.check').addEventListener('click', () => {


    // when there is no guess

})

document.querySelector('.again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    const message = "🤔 Start guessing...";
    displayMessage(message)
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})