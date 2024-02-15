let chooseSection = document.getElementById("chooseSection");
let penguinsButton = document.getElementById("penguinsButton");
let puppiesButton = document.getElementById("puppiesButton");
let valentineSection = document.getElementById("valentineSection");
let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");
let valentineGif = document.getElementById("valentineGif");
let yesText = document.getElementById("yesText");

// Paths to penguin GIFs
let penguinGifs = [
  "assets/images/penguin1.gif",
  "assets/images/penguin2.gif",
];

// Paths to puppy GIFs
let puppyGifs = [
  "assets/images/puppy1.gif",
  "assets/images/puppy2.gif",
];

let currentGifIndex = 0;

penguinsButton.addEventListener("click", function () {
  // Toggle active class
  penguinsButton.classList.add("active");
  puppiesButton.classList.remove("active");
  // Debugging: Log button states
  //console.log("Penguins button active:", penguinsButton.classList.contains("active"));
  //console.log("Puppies button active:", puppiesButton.classList.contains("active"));

  showValentineSection(penguinGifs[0]);
});

puppiesButton.addEventListener("click", function () {
  showValentineSection(puppyGifs[0]);
});

function showValentineSection(initialGif) {
  chooseSection.classList.add("hidden");
  valentineSection.classList.remove("hidden");
  valentineGif.src = initialGif;
}

let noMessages = [
  "Please?",
  "Don't do this please :(",
  "But I love you",
  "I'm gonna cry :(",
  "You're gonna break my heart :(",
  "Are you sure?",
  "Are you sure??",
  "Last chance ;(",
];
let maxNoMessages = 8;
let messageIndex = 0;

noButton.addEventListener("click", function () {
  if (messageIndex < maxNoMessages) {
    noButton.textContent = noMessages[messageIndex];
  } else {
    noButton.textContent = noMessages[maxNoMessages - 1];
  }
  messageIndex = Math.min(messageIndex + 1, noMessages.length - 1);
  let clickCount = messageIndex + 1; // Just an example use of clickCount
  increaseYesButtonSize(clickCount); // Increase size of Yes button
});

yesButton.addEventListener("click", function () {
  if (currentGifIndex === 0) {
    currentGifIndex = 1; // Move to the second GIF after clicking "Yes"
    //console.log("Penguins button active:", penguinsButton.classList.contains("active"));
    let selectedGifs = penguinsButton.classList.contains("active")
      ? penguinGifs
      : puppyGifs;
    //console.log("Selected GIFs:", selectedGifs);
    valentineGif.src = selectedGifs[currentGifIndex];
    yesText.textContent = "Yay! I love you!";
    yesButton.style.display = "none";
    noButton.style.display = "none";
  }
});

function increaseYesButtonSize(clickCount) {
  let width = 100 + clickCount * 10; // Increase width of Yes button
  let height = 40 + clickCount * 5; // Increase height of Yes button
  yesButton.style.width = width + "px";
  yesButton.style.height = height + "px";
}
