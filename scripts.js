import { buttonData } from './buttonData.js';

const container = document.querySelector('#button-container');

const buttonTemplate = ({ imgSrc, label }) => `
  <button class="button">
    <div class="button-content">
      <img src="${imgSrc}" alt="${label}">
      <span class="button-label">${label}</span>
    </div>
  </button>
`;

buttonData.forEach((button) => {
  const buttonElement = document.createRange().createContextualFragment(buttonTemplate(button)).querySelector('button');
  
  buttonElement.addEventListener('click', () => playSound(button));

  container.appendChild(buttonElement);

  button.audio = new Audio(button.soundSrc);
  button.audio.preload = 'auto';
});

function playSound(button) {
  button.audio.currentTime = 0;
  button.audio.play();
}
 
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
