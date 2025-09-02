const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

recognition.onstart = function () {
  console.log("Voice recognition started. Speak into the microphone.");
};

recognition.onresult = function (event) {
  const transcript = event.results[0][0].transcript;
  console.log("You said: " + transcript);
};

recognition.onerror = function (event) {
  console.error("Error occurred in recognition: " + event.error);
};

recognition.onend = function () {
  console.log("Voice recognition ended.");
};
