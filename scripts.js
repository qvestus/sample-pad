import { buttonData } from './buttonData.js';

const container = document.querySelector('#button-container');

const buttonTemplate = ({ imgSrc, label }) => `
  <button class="button button-initial">
    <div class="button-content">
      <img src="${imgSrc}" alt="${label}">
      <span class="button-label">${label}</span>
    </div>
  </button>
`;

buttonData.forEach((button) => {
  const buttonElement = document.createRange().createContextualFragment(buttonTemplate(button)).querySelector('button');
  
  buttonElement.addEventListener('click', () => playSound(button, buttonElement));

  container.appendChild(buttonElement);

  button.audio = new Audio(button.soundSrc);
  button.audio.preload = 'auto';
});

function playSound(button, buttonElement) {
  button.audio.play();

  buttonElement.classList.remove('button-initial');
  buttonElement.classList.add('wiggle');
  button.audio.addEventListener('ended', () => {
    buttonElement.classList.remove('wiggle');
  });
}

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
