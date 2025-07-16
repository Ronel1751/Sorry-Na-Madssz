const openBtn = document.getElementById('openBtn');
const envelope = document.getElementById('envelope');
const heartContainer = document.getElementById('heartContainer');
const messageElement = document.getElementById('message');
const bgMusic = document.getElementById('bgMusic');

// Typing effect
const messageText = "Hi Mads 💖\nSorry na, please forgive me 😔\nReply ka naman, I miss you 🥺";

function typeMessage(text, element, speed = 50) {
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(interval);
        }
    }, speed);
}

// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 10 + 20 + 'px';
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Launch multiple hearts
function launchHearts() {
    const heartInterval = setInterval(createHeart, 200);
    setTimeout(() => clearInterval(heartInterval), 4000);
}

openBtn.addEventListener('click', () => {
    envelope.classList.add('open');
    openBtn.style.display = 'none';
    bgMusic.volume = 0.3;
    bgMusic.play();
    launchHearts();
    setTimeout(() => {
        typeMessage(messageText, messageElement, 50);
    }, 1000);
});
