
const herName = "Sakshuu";
const loveMessages = [
  "You are the reason I smile every day ❤️",
  "My world is brighter with you in it 🌟",
  "Your laughter is my favorite song 🎶",
  "Every moment with you is magic ✨",
  "You are my heart's favorite feeling 💖",
  "With you, forever doesn't feel long enough 🕊️",
  "You're my dream come true 🌙"
];
const slideShowMessages = [
  "Sakshu, every moment with you feels like a beautiful dream I never want to wake up from.",
  "Your smile is the only sunshine I need, even on my darkest days.",
  "With you, Sakshu, I’ve found the meaning of love — pure, deep, and infinite.",
  "You're not just my girlfriend, you're the peace to my chaos, the heart to my soul.",
  "I didn’t believe in magic until I saw it in your eyes, Sakshu.",
  "No words could ever describe how much I adore you, but I’ll spend my life showing you.",
  "Sakshu, you’re the poetry my heart was trying to write all along.",
  "Every heartbeat whispers your name, every breath I take is filled with your love.",
  "I still get butterflies every time I hear your name — that’s how special you are to me.",
  "Forever isn’t long enough with you, Sakshu. I want lifetimes with you."


];

document.getElementById("herName").textContent = herName;

function showMessage() {
  const msgEl = document.getElementById("message");
  const randomIndex = Math.floor(Math.random() * loveMessages.length);
  msgEl.textContent = loveMessages[randomIndex];
  msgEl.style.display = "block";
  msgEl.classList.remove("typing");
  void msgEl.offsetWidth;
  msgEl.classList.add("typing");
}

// Live anniversary timer
function updateTimer() {
  const startDate = new Date("2025-04-10T00:00:00");
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById("timer").textContent =
    `${days} days ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateTimer, 1000);
updateTimer();

// Slideshow rotation
let slideIndex = 0;
function rotateSlides() {
  const slideText = document.getElementById("slideshowText");
  slideText.textContent = slideShowMessages[slideIndex];
  slideIndex = (slideIndex + 1) % slideShowMessages.length;
}
setInterval(rotateSlides, 5000);
rotateSlides();

// Floating hearts
for (let i = 0; i < 40; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  heart.style.width = heart.style.height = `${10 + Math.random() * 15}px`;
  document.body.appendChild(heart);
}

// Custom music player logic with autoplay
const audio = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPause");
const playIconSpan = document.getElementById("playIcon");
const progress = document.getElementById("progress");
const currentTimeSpan = document.getElementById("currentTime");
const durationSpan = document.getElementById("duration");

// Try autoplay
window.addEventListener("DOMContentLoaded", () => {
  audio.play().catch(() => {
    // Autoplay blocked, wait for user interaction
    playIconSpan.textContent = "▶";
  });
});

// Fallback: play on first user interaction
document.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().then(() => {
      playIconSpan.textContent = "⏸";
    }).catch(() => {});
  }
}, { once: true });

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", () => playIconSpan.textContent = "⏸");
audio.addEventListener("pause", () => playIconSpan.textContent = "▶");

audio.addEventListener("loadedmetadata", () => {
  durationSpan.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
  currentTimeSpan.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}
