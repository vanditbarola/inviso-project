// script.js
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("mainHeader");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
        header.classList.add("visible");
      } else {
        header.classList.remove("visible");
      }
    });
  });
  
// Add this to your script.js
const framesContainer = document.querySelector('.frames');
const dots = document.querySelectorAll('.dot');
const leftButton = document.querySelector('.arrow-btn.left');
const rightButton = document.querySelector('.arrow-btn.right');
let currentFrame = 0;

function updateFrames() {
  framesContainer.style.transform = `translateX(-${currentFrame * 100}%)`;
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentFrame);
  });
}

function updateButtonsVisibility() {
  leftButton.style.display = currentFrame === 0 ? 'none' : 'block';
  rightButton.style.display = currentFrame === 3 ? 'none' : 'block';
}

function changeFrame(direction) {
  if (direction == 1 && currentFrame < 3) {
    currentFrame++;
  } else if (direction == -1 && currentFrame > 0) {
    currentFrame--;
  }

  console.log('Current Frame:', currentFrame);
  updateFrames();
  updateDots();
  updateButtonsVisibility();
}

// Add event listeners for arrow buttons
leftButton.addEventListener('click', () => changeFrame(-1));
rightButton.addEventListener('click', () => changeFrame(1));
