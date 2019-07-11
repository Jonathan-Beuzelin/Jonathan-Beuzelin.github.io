const addNewRow = document.getElementById("addnewrow");
const totalDisplay = document.getElementById("totalsaved");
const columnOne = document.getElementById("columnone");
const columnTwo = document.getElementById("columntwo");
let total = 0;
let arrayOfExpenditure = [];
const currency = document.getElementById('currency')
const currencyIcon = document.querySelectorAll(".unit")
const income = document.getElementById('monthly')
const inputs = document.querySelectorAll(".expenditure");

let data = [
  {
   "name": "food",
   "color": "red",
    "value": 0
  }, {
   "name": "bills",
   "color": "rebeccapurple",
    "value": 0
  }, {
   "name": "transport",
   "color": "green",
    "value": 0
  }, {
   "name": "clothing",
   "color": "pink",
    "value": 0
  }, {
   "name": "social",
   "color": "blue",
    "value": 0
  }, {
   "name": "health",
   "color": "yellow",
    "value": 0
  }, {
   "name": "other",
   "color": "grey",
    "value": 0
  }
];

setInterval(function() {
  let currencySelected = currency.value;
  for (let i = 0; i < currencyIcon.length; i++) {
    currencyIcon[i].innerHTML = currencySelected
  }
}, 10)

addNewRow.addEventListener("click", function() {
  let currencySelected = currency.value;
  columnOne.insertAdjacentHTML("beforeend",'<div class="row"><span class="unit">'+ currencySelected +'</span><input type="text" name="expenditure" value=""  placeholder="Amount" id="expenditure" class="expenditure"></div>');
  columnTwo.insertAdjacentHTML("beforeend",'<select id="expendituretype"><option value="">--Please choose an option--</option><option value="food">Food</option><option value="bills">Bills</option><option value="transport">Transport</option><option value="clothing">Clothing</option><option value="social">Social</option><option value="health">Health</option><option value="other">Other</option>elect>');
});

setInterval(function(){
  for (let i = 0; i < inputs.length; i++) {
    if (income.value === "") {
      let sentence = "<p>Please insert a monthly income</p>"
      totalDisplay.innerHTML = sentence
    } else if (inputs[i].value === "" || isNaN(inputs[i].value) === true) {
        let sentence = "<p>Please insert an expenditure</p>"
        totalDisplay.innerHTML = sentence
      } else {
        let turnToFloat = parseFloat(inputs[i].value)
        arrayOfExpenditure.push(turnToFloat)
      }
    }

  if (arrayOfExpenditure.length != 0) {
    let sum = arrayOfExpenditure.reduce((total, amount) => total + amount);
    let monthly = parseFloat(document.getElementById("monthly").value)
    let total = monthly - sum
    let total2 = total.toFixed(2)
    let currencySelected = currency.options[currency.selectedIndex].value;
    let sentence = "<p>Your total savings every month are " + currencySelected + total2 + "</p>"
    totalDisplay.innerHTML = sentence
    arrayOfExpenditure.length = 0;
  }

  const expenditureType = document.querySelectorAll("#expendituretype")
  for (let i = 0; i < expenditureType.length; i++) {
    for (let x = 0; x < data.length; x++) {
      if (expenditureType[i].value === data[x].name) {
        data[x].value += parseFloat(inputs[i].value)
      }
    }
  }

  totalValue = 0,
  radius = 60,
  circleLength = Math.PI * (radius * 2)
  spaceLeft = circleLength;

  for (let i = 0; i < data.length; i++) {
    totalValue += data[i].value;
  }

  circle = document.querySelectorAll('circle')

  for (let c = 0; c < data.length; c++) {
    circle[c].setAttribute("class", "pie-chart-value");
    circle[c].setAttribute("cx", 150);
    circle[c].setAttribute("cy", 150);
    circle[c].setAttribute("r", radius);

    // Set dash on circle
    circle[c].style.strokeDasharray = (spaceLeft) + " " + circleLength;

    // Set Stroke color
    circle[c].style.stroke = data[c].color;

    // Subtract current value from spaceLeft
    spaceLeft -= (data[c].value / totalValue) * circleLength;

    // Add value to list.
    let listItem = document.getElementById('pie-values'),
        valuePct = parseFloat((data[c].value / totalValue) * 100).toFixed(1);

    // Add text to list item

    list = document.querySelectorAll('li')

    if (isNaN(valuePct) ) {
      list[c].innerHTML = data[c].name + ' (' + 0 + '%)'
    } else {
      list[c].innerHTML = data[c].name + ' (' + valuePct + '%)'
    }

    // Set color of value to create relation to pie.
    list[c].style.color = data[c].color;
  }

  for (let a = 0; a < data.length; a++) {
    data[a].value = 0;
  }
}, 1000);
