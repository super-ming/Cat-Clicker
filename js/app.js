let clickCounter = 0;
let cat = document.querySelectorAll(".cat");
let strikes = document.querySelector(".strikes");

cat.forEach((image) => {
  image.addEventListener("click", () => {
    clickCount();
    playAudio();
  });
});

const clickCount = () => {
  clickCounter++;
  strikes.innerText = `${clickCounter} paw swipes!`;
}

const playAudio = () => {
  let audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.play();
}
