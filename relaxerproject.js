const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 1.5;
const holdTime = totalTime / 4.5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Inhale!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'HOLD ON !';

    setTimeout(() => {
      text.innerText = 'Exhale!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);