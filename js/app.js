'use strict';

let clickCounter = 0;
let cat = document.querySelectorAll(".cat-container");
let strikes = document.querySelector(".strikes");
let list = document.querySelector(".cat-list");
let imageURL = ["https://i.imgflip.com/2g5970.jpg",
"https://www.pexels.com/photo/adorable-angry-animal-animal-portrait-208984/",
"https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?cs=srgb&dl=adorable-animal-cat-127028.jpg&fm=jpg",
"https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?cs=srgb&dl=animal-animal-photography-cat-96938.jpg&fm=jpg",
"https://images.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg?cs=srgb&dl=adorable-animal-cat-54632.jpg&fm=jpg"];
let catNames = ["Grumpy-Cat", "Boss", "JeanGray", "Meep", "Puzzle"];
let cats = [];

class Cat {
  constructor(name, url){
    this.name = name;
    this.url = url;
    this.clickCounter = 0;
  }
};

// Instantiate cat objects
function makeCats() {
  for (let name of catNames) {
    cats.push(new Cat(name));
  };

  cats.forEach((cat, index) => cat.url = imageURL[index]);
  makeCatList();

};

// Create list of cats
function makeCatList() {
  for (let cat of cats) {
    let listName = document.createElement("ul");
    let radioButton = document.createElement("input");
    let label = document.createElement("label");
    radioButton.setAttribute("type", "radio");
    radioButton.id = cat.name;
    radioButton.name = "cat";
    radioButton.value = cat.name;
    label.setAttribute("for", radioButton.id);
    label.innerText = cat.name;
    listName.appendChild(radioButton);
    listName.appendChild(label);
    list.appendChild(listName);
  };
};

makeCats();
console.log(cats);
/*
for (let catObj of cats) {
  let count = catObj.clickCounter;
  const
}*/

// Add event listener to each cat
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
