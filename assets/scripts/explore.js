// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.querySelector('textarea');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voices.forEach(function (voice, index) {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  speechSynthesis.addEventListener('voiceschanged', function () {
    voiceSelect.innerHTML = '';
    loadVoices();
  });

  talkButton.addEventListener('click', function () {
    const text = textArea.value;
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.voice = voices[voiceSelect.value];

    utterance.onstart = function () {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = function () {
      faceImage.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });
}