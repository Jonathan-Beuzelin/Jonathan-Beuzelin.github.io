let number = getRandomNumber(26); //creates a number from 0 to 26//
var degrees = number / 26 * 360 - 90 + 'deg'; //first slice of chart to up to the 13//
var degreesTwo = number / 26 * 360 + 'deg'; //if chart goes over 13 slice 2 will engage as seen by the donut function below//
var maximum = 6;
var numbersArray = [];
var percentArray = [];
var arrayOfIds = ['avgOne', 'avgTwo', 'avgThree', 'avgFour', 'avgFive', 'avgSix', 'cautiousOne', 'cautiousTwo', 'cautiousThree', 'cautiousFour', 'cautiousFive', 'cautiousSix', 'complacentOne',
    'complacentTwo', 'complacentThree', 'complacentFour', 'complacentFive', 'complacentSix', 'confidentOne', 'confidentTwo', 'confidentThree', 'confidentFour', 'confidentFive', 'confidentSix'
];
var arrayOfUsers = ['Sam Rep', 'Dan Rep', 'Lukkio Rep', 'Manu Rep', 'Jere Rep', 'George Rep', 'Jacob Rep', 'Garry Rep'];
var arrayOfMonths = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var arrayOfYears = ['2019', '2020', '2021']
var hours
var minutes
var years
var user
var days
var months




function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

function variableForDates(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

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



function getPercent() {
    for (var i = 0; i < maximum; i++) {
        var addingToArray = getRandomNumber(100)
        numbersArray.push(addingToArray)
    }
    var sum = numbersArray.reduce((total, amount) => total + amount);
    for (var i = 0; i < numbersArray.length; i++) {
        var percent = Math.floor(numbersArray[i] * 100 / sum);
        percentArray.push(percent)
    }
}

function widths() {
    for (var i = 0; i < 6; i++) {
        document.getElementById(arrayOfIds[i]).style.width = numbersArray[i] + "%";
    }
    if (i === 6) {
        for (var i = 0; i < 6; i++) {
            percentArray.shift();
            arrayOfIds.shift();
            numbersArray.shift();
        }
        getPercent();
    }
}

function repeat() {
    for (var x = 0; x < 4; x++) {
        widths()
    }
}


function displayInfo() {
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


displayInfo()
getPercent();
repeat();


console.log(arrayOfIds)
console.log(percentArray)
console.log(numbersArray)
