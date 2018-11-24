'use strict';

let catContainer = document.querySelector(".cat-container");
let strikes = document.querySelector(".strikes");
let list = document.querySelector(".cat-list");
let image = document.querySelector(".cat-image");
let imageURL = ["https://i.imgflip.com/2g5970.jpg",
"https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?cs=srgb&dl=adorable-angry-animal-208984.jpg&fm=jpg",
"https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?cs=srgb&dl=adorable-animal-cat-127028.jpg&fm=jpg",
"https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?cs=srgb&dl=animal-animal-photography-cat-96938.jpg&fm=jpg",
"https://images.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg?cs=srgb&dl=adorable-animal-cat-54632.jpg&fm=jpg"];
let catNames = ["Grumpy-Cat", "Boss-Cat", "Grayson", "Meep", "Puzzle"];
let catAlt = ["grumpy cat meme", "cat with crossed paws", "gray cat", "cat hiding behind covers", "confused cat"];
let cats = [];
let currentCat = cats[0];
let adminButton =  document.querySelector(".admin-btn");
let adminPanel = document.querySelector(".admin-panel");
let submit =  document.querySelector(".submit");
let cancel = document.querySelector(".cancel");

//MODEL
class Cat {
  constructor(name, url){
    this.name = name;
    this.url = url;
    this.clickCounter = 0;
  }

  strike() {
    this.clickCounter++;
  }
};

// Instantiate cat objects
const makeCats = () => {
  for (let name of catNames) {
    cats.push(new Cat(name));
  };
  currentCat = cats[0];
  cats.forEach((cat, index) => {
    cat.url = imageURL[index];
    makeCatList(cat, index);
  });
  let firstCat = document.getElementById(cats[0].name+"-btn");
  firstCat.checked = true;
};

makeCats();

//VIEW
// Create list of cats
const makeCatList = (cat, index) => {
    let listName = document.createElement("ul");
    let radioButton = document.createElement("input");
    let label = document.createElement("label");
    listName.setAttribute("id", cat.name);
    radioButton.setAttribute("type", "radio");
    radioButton.id = cat.name+"-btn";
    radioButton.name = "cat";
    radioButton.value = cat.name;
    label.setAttribute("for", radioButton.id);
    label.innerText = cat.name;
    listName.appendChild(radioButton);
    listName.appendChild(label);
    list.insertBefore(listName, adminButton);
    listName.addEventListener("click", () => {
      updateImage(cat, index);
      strikes.innerText = `${currentCat.clickCounter} paw swipes!`
    });
};

const adminUpdate = () => {
  let newName =  document.getElementById("newName");
  let newUrl =  document.getElementById("newUrl");
  let newClick =  document.getElementById("newClick");
  let newNameValue = newName.value;
  let newUrlValue = newUrl.value;
  let newClickValue = newClick.value;
  let oldCat = document.getElementsByClassName(currentCat.name);
  currentCat.name = newNameValue;
  currentCat.url = newUrlValue;
  currentCat.clickCounter = newClickValue;
  oldCat.id = currentCat.name;
  document.body.innerHTML.replace(new RegExp(oldCat.name, "g"), currentCat.name);
  adminPanel.style.visibility = "hidden";
};

adminButton.addEventListener("click", () => {
  adminPanel.style.visibility = "visible";
});

submit.addEventListener("click", () => {
  adminUpdate();
});

cancel.addEventListener("click", () => {
  adminPanel.style.visibility = "hidden";
});

const updateImage = (cat, index) => {
  let image = document.querySelector(".cat-image");
  currentCat = cats[index];
  image.src = cat.url;
  image.setAttribute("class", "cat-image");
  image.setAttribute("alt", `picture of ${catAlt[index]}`);
}

//OCTOPUS
// Add event listener to each cat
image.addEventListener("click", () => {
    clickCount();
    playAudio();
});

const clickCount = () => {
  currentCat.strike();
  strikes.innerText = `${currentCat.clickCounter} paw swipes!`;
}

const playAudio = () => {
  let audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.play();
}
