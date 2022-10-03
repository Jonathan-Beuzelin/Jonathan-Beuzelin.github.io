import dogsData from "./data.js";
import { Dog } from "./Dog.js";

const imageContainer = document.getElementById("imageContainer");
const liked = document.getElementById("like");
const nope = document.getElementById("nope");

let locked = false;

function getNewDog() {
  const nextDogData = dogsData.shift();
  return nextDogData ? new Dog(nextDogData) : undefined;
}

let newDog = getNewDog();

function getLikedOrNopeHtml(preference) {
  if (newDog && locked == false) {
    locked = true;
    let img = document.createElement("img");
    img.className = "feedback";
    img.src = `./images/badge-${preference}.png`;
    imageContainer.appendChild(img);
    setNewDog();
  }
}

function setNewDog() {
  if (dogsData.length == 0) {
    setTimeout(() => {
      newDog = undefined;
      imageContainer.innerHTML =
        '<div class="no-more-dogs"><p>No New Dogs</p></div>';
    }, 1000);
  } else {
    setTimeout(function () {
      newDog = getNewDog();
      render();
      locked = false;
    }, 1000);
  }
}
liked.addEventListener("click", () => {
  getLikedOrNopeHtml("like");
});
nope.addEventListener("click", () => {
  getLikedOrNopeHtml("nope");
});

function render() {
  imageContainer.innerHTML = newDog.getDogHtml();
}


render();
