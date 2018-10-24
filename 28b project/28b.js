//donut chart//
let number = getRandomNumber(26); //creates a number from 0 to 26//
var degrees = number / 26 * 360 - 90 + 'deg'; //first slice of chart to up to the 13//
var degreesTwo = number / 26 * 360 + 'deg'; //if chart goes over 13 slice 2 will engage as seen by the donut function below//

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
};



function Donut() {
  document.getElementById('centerChart').innerHTML += '<h1>' + number + '</h1>' + '<h3>' + '/26' + '</h3>';
  document.getElementById('sliceOne').style.transform = 'rotate(' + degrees + ')';
   if (number <= 13) {
     document.getElementById('sliceTwo').style.transform = 'rotate(0)'
   } else {
     document.getElementById('sliceOne').style.transform = 'rotate(90deg)';
     document.getElementById('sliceTwo').style.transform = 'rotate(' + degreesTwo + ')';
     document.getElementById('sliceTwo').style.background = 'orange';
   }
 }

Donut();

//// TODO: Create a for loop that puts out 6 numbers between 0 and 100 and add them together.
//If it does not equal 100 repeat the loop//
var numbersArray = []
var maximum = 6;
var percentArray = []


function getPercent() {
  for (var i = 0; i < maximum; i++) {
    var addingToArray = getRandomNumber(100)
    numbersArray.push(addingToArray)
  }
   var sum = numbersArray.reduce((total, amount) => total + amount);
    for (var i = 0; i < numbersArray.length; i++) {
      var percent = Math.floor(numbersArray[i]*100/sum);
      percentArray.push(percent)
    }
  }

function widths() {
  document.getElementById('avgOne').style.width = numbersArray[0] + "%";
  document.getElementById('avgTwo').style.width = numbersArray[1] + "%";
  document.getElementById('avgThree').style.width = numbersArray[2] + "%";
  document.getElementById('avgFour').style.width = numbersArray[3] + "%";
  document.getElementById('avgFive').style.width = numbersArray[4] + "%";
  document.getElementById('avgSix').style.width = numbersArray[5] + "%";

  document.getElementById('cautiousOne').style.width = numbersArray[5] + "%";
  document.getElementById('cautiousTwo').style.width = numbersArray[3] + "%";
  document.getElementById('cautiousThree').style.width = numbersArray[2] + "%";
  document.getElementById('cautiousFour').style.width = numbersArray[4] + "%";
  document.getElementById('cautiousFive').style.width = numbersArray[6] + "%";
  document.getElementById('cautiousSix').style.width = numbersArray[1] + "%";

  document.getElementById('complacentOne').style.width = numbersArray[4] + "%";
  document.getElementById('complacentTwo').style.width = numbersArray[1] + "%";
  document.getElementById('complacentThree').style.width = numbersArray[6] + "%";
  document.getElementById('complacentFour').style.width = numbersArray[2] + "%";
  document.getElementById('complacentFive').style.width = numbersArray[3] + "%";
  document.getElementById('complacentSix').style.width = numbersArray[5] + "%";

  document.getElementById('confidentOne').style.width = numbersArray[2] + "%";
  document.getElementById('confidentTwo').style.width = numbersArray[6] + "%";
  document.getElementById('confidentThree').style.width = numbersArray[1] + "%";
  document.getElementById('confidentFour').style.width = numbersArray[5] + "%";
  document.getElementById('confidentFive').style.width = numbersArray[4] + "%";
  document.getElementById('confidentSix').style.width = numbersArray[3] + "%";
}

getPercent();
widths();



console.log(percentArray)
console.log(numbersArray)



//// TODO: Create an array of objects and name and a randomizer to output the data on the overview div.
