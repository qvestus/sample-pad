// Get all the buttons
const buttons = document.querySelectorAll('.button');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', buttonClickHandler);
});

// Click event handler for buttons
function buttonClickHandler(event) {
  const button = event.target;
  const audioElement = button.querySelector('audio');

  // Play the audio file
  audioElement.currentTime = 0;
  audioElement.play();

  // Trigger the confetti animation
  const confettiSettings = { target: button };
  confetti(confettiSettings);
}
