import { buttonData } from './buttonData.js';

const container = document.getElementById('button-container');

buttonData.forEach((button) => {
  const buttonElement = document.createElement('button');
  buttonElement.classList.add('button');
  buttonElement.addEventListener('click', () => playSound(button.soundSrc));

  const buttonContent = document.createElement('div');
  buttonContent.classList.add('button-content');

  const imgElement = document.createElement('img');
  imgElement.src = button.imgSrc;
  imgElement.alt = button.label;

  const labelElement = document.createElement('span');
  labelElement.classList.add('button-label');
  labelElement.textContent = button.label;

  buttonContent.appendChild(imgElement);
  buttonContent.appendChild(labelElement);
  buttonElement.appendChild(buttonContent);
  container.appendChild(buttonElement);
});
