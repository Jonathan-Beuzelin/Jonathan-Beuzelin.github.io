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
var percentagesArray = []
var maximum = 6;
for (var i = 0; i < maximum; i++) {
  var adding = getRandomNumber(100)
  percentagesArray.push(adding)
  var reducer = (accumulator, currentValue) => accumulator + currentValue;
}

console.log(percentagesArray.reduce(reducer))

//// TODO: Create an array of objects and name and a randomizer to output the data on the overview div.
