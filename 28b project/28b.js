var maximum = 6; //the amount of numbers i want pushed out//
var numbersArray = []; //the array of random numbers
var percentArray = []; //numbers converted into percentages using the function getPercent//
var arrayOfIds = ['avgOne', 'avgTwo', 'avgThree', 'avgFour', 'avgFive', 'avgSix', 'cautiousOne', 'cautiousTwo',
'cautiousThree', 'cautiousFour', 'cautiousFive', 'cautiousSix', 'complacentOne','complacentTwo', 'complacentThree',
'complacentFour', 'complacentFive', 'complacentSix', 'confidentOne', 'confidentTwo', 'confidentThree', 'confidentFour',
'confidentFive', 'confidentSix'
]; //id's of the blocks which gets pushed out 6 at a time and then the numbers get regenerated. This is repeated 4 times.
var arrayOfToolTips = ['avgToolTipOne', 'avgToolTipTwo', 'avgToolTipThree', 'avgToolTipFour','avgToolTipFive','avgToolTipSix', 'cautiousToolTipOne', 'cautiousToolTipTwo',
'cautiousToolTipThree', 'cautiousToolTipFour', 'cautiousToolTipFive', 'cautiousToolTipSix', 'complacentToolTipOne', 'complacentToolTipTwo', 'complacentToolTipThree', 'complacentToolTipFour',
'complacentToolTipFive', 'complacentToolTipSix', 'confidentToolTipOne', 'confidentToolTipTwo', 'confidentToolTipThree', 'confidentToolTipFour', 'confidentToolTipFive',
'confidentToolTipSix'
];
var arrayOfUsers = ['Sam Repp', 'Dan Repp', 'Lukkio Repp', 'Manu Repp', 'Jere Repp', 'George Repp', 'Jacob Repp', 'Garry Repp']; //users that are picked by a random generated number//
var arrayOfMonths = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] //months picked by random generated number//
var arrayOfYears = ['2019', '2020', '2021'] //years picked by random generated number//
var hours
var minutes
var years
var user
var days
var months
const loader = document.getElementById('outer')
const number = document.getElementById('input')
const circumference = 48 * 2 * Math.PI;
let variable = getRandomNumber(27)
let percentage = retrievePercent(variable)
let displayedPercentage = givePercent()
let display = strokeDashOffSet()
const getTotal = () => {
    return percentArray.reduce((total, amount) => total + amount);
}
//donut chart//

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min); //generates a number//
}

function  retrievePercent(variable) {
   return Math.floor(variable * 100 / 26);  //gets the percentage out of 26//
}

function givePercent() {
  return percentage / 100 * circumference; //gets what the percentage is equal to in the circumference//
}

function strokeDashOffSet() {
  return circumference - displayedPercentage; //Substracts the circumference to leave the remaining display percentage//
}


document.getElementById('textid').textContent = variable;
loader.style.strokeDasharray = `${circumference}`;
loader.style.strokeDashoffset = -display




//bottom chart//
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max)); //generates random number between 0 and max variable//
};


function getPercent() {
    for (var i = 0; i < maximum; i++) {
        var addingToArray = getRandomNumber(100)
        numbersArray.push(addingToArray)
    }
    var sum = numbersArray.reduce((total, amount) => total + amount);
    for (var i = 0; i < numbersArray.length; i++) {
        var percent = Math.round(numbersArray[i] * 100 / sum);
        percentArray.push(percent)
    }
    var percentTotal = getTotal();
    if (percentTotal > 100) {
        percentArray[5]--;
    } else if (percentTotal < 100) {
        percentArray[5]++;
    }
    percentTotal = getTotal();
}



function widths() {
    for (var i = 0; i < maximum; i++) {
        document.getElementById(arrayOfIds[i]).style.width = percentArray[i] + "%";
        document.getElementById(arrayOfToolTips[i]).innerHTML = percentArray[i] + "%";
    }
    if (i === 6) {
        for (var i = 0; i < 6; i++) {
            percentArray.shift();
            arrayOfIds.shift();
            numbersArray.shift();
            arrayOfToolTips.shift();
        }
    } getPercent();
}

function repeat() {
    for (var x = 0; x < 4; x++) {
        widths()
    }
}

//dates
function variableForDates(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1); //generates random number between 1 and max variable
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //generates a random number between min and max
}

function displayNextDate() {
    let hours = getRandomInt(9, 18),
        minutes = getRandomInt(1, 60),
        years = getRandomNumber(2),
        user = getRandomNumber(7),
        months = getRandomNumber(11),
        days;
    welcome.innerHTML = arrayOfUsers[user];
    if (months === 1) {
        days = variableForDates(28);
    } else if (months === 5 || 7 || 8 || 10) {
        days = variableForDates(30);
    } else if (months === 0 || 2 || 4 || 6 || 7 || 9 || 11) {
        days = variableForDates(31);
    };

    if (hours <= 9) {
        hours = '0' + hours;
    };

    if (minutes < 10) {
        date.innerHTML = '<span>' + hours + ':' + '0' + minutes + '</span>' + '<br>' + days + ' ' + arrayOfMonths[months] + ' ' + arrayOfYears[years];
    } else {
        date.innerHTML = '<span>' + hours + ':' + minutes + '</span>' + '<br>' + days + ' ' + arrayOfMonths[months] + ' ' + arrayOfYears[years];
    };
};

function screenCheck() {
  if (screen.width < 1024) {
    window.alert("This interface is made primarily for tablets, laptops and desktops and may not be suitible for viewings on other platforms.")
  }
};

screenCheck();
displayNextDate()
getPercent();
repeat();
