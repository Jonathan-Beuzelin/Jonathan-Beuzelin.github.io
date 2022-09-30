// Remember to import the data and Dog class!
import dogsData from './data.js'
import { Dog } from './Dog.js'

const imageContainer = document.getElementById('imageContainer')


let dogArray = []

for (let index = 0; index < dogsData.length; index++) {
    dogArray.push(dogsData[index].name);
}


function getNewDog() {
    const nextDogData = dogsData.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

function getlikedHtml() {
    if (dogArray.length) {
        newDog.hasBeenLiked = true
        let img = document.createElement('img')
        img.className = "feedback"
        img.src = './images/badge-like.png'
        imageContainer.appendChild(img)
        console.log(dogArray)
    }
}

function nope() {
    if (dogArray.length) {
        newDog.hasBeenSwiped = true
        let img = document.createElement('img')
        img.className = "feedback"
        img.src = './images/badge-nope.png'
        imageContainer.appendChild(img)
        console.log(dogArray)
    }
}

function setNewDog() {
    dogArray.shift()
    if (dogsData.length == 0) {
        setTimeout(() => {
            imageContainer.innerHTML = '<p>No New Dogs</p>'
        }, 1000)
    } else {
        setTimeout(function () {
            newDog = getNewDog()
            render()
        }, 1000)
    }
}
document.getElementById('like').addEventListener("click", () => { getlikedHtml(); setNewDog(); })
document.getElementById('nope').addEventListener("click", () => { nope(); setNewDog() })



function render() {
    imageContainer.innerHTML = newDog.getDogHtml()

}

let newDog = getNewDog()


render()
