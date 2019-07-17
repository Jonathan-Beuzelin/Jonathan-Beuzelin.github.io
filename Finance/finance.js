const addNewRow = document.getElementById("addnewrow"); //ADD NEW ROW BUTTON
const totalDisplay = document.getElementById("totalsaved"); //TOTAL DISPLAYED
const columnOne = document.getElementById("columnone"); //LEFT SIDE COLUMN OF FINANCE SECTION
const columnTwo = document.getElementById("columntwo"); //RIGHT SIDE COLUMN OF FINANCE SECTION
const currency = document.getElementById('currency'); //CURRENCY SELECT MENU
const income = document.getElementById('monthly'); //MONTHLY INCOME INPUT
let currencySelected = currency.value; // CURRENCY SELECTED FROM CURRENCY SELECT MENU
let inputs = document.querySelectorAll(".expenditure"); //EXPENDITURE inputs
let currencyIcon = document.querySelectorAll(".unit"); //SPAN ELEMENT LOCATED LEFT SIDE OF EXPENDITURE INPUT
let arrayOfExpenditure = []; //EXPENDITURE INPUTS PUSHED HERE TO CALCULATE TOTAL USING REDUCE FUNCTION
let expenditureType = document.querySelectorAll("#expendituretype");

let rowData = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(rowData));
let rowItems = JSON.parse(localStorage.getItem('items'));


//DATA FOR PIE CHART AND LIST, COLOUR SCHEMES AND NAMES
let data = [
  {
   "name": "food",
   "color": "#e82e2e",
   "value": 0
  }, {
   "name": "bills",
   "color": "#5ecc62",
   "value": 0
  }, {
   "name": "transport",
   "color": "#6f5ecc",
   "value": 0
  }, {
   "name": "clothing",
   "color": "#ed24d6",
   "value": 0
  }, {
   "name": "social",
   "color": "#2460ed",
   "value": 0
  }, {
   "name": "health",
   "color": "#a7d0d4",
   "value": 0
  }, {
   "name": "other",
   "color": "#f28d42",
   "value": 0
  }
];


save.addEventListener('click', function(e) {
  e.preventDefault();
  let inputs = document.querySelectorAll(".expenditure"); //EXPENDITURE inputs
  let expenditureType = document.querySelectorAll("#expendituretype");
  rowData = [];
  rowData.push(income.value);
  rowData.push(currency.value);
  for (let i = 0; i < inputs.length; i++) {
    rowData.push({'amount': inputs[i].value, 'type': expenditureType[i].value});
    localStorage.setItem('items', JSON.stringify(rowData))
  }
})



function placingSavedData() {
let rowLength = rowData.length - 7
if (rowData.length > 7) {
  for (let i = 0; i < rowLength; i++) {
    createRow()
  }
}
inputs = document.querySelectorAll(".expenditure"); //EXPENDITURE inputs
expenditureType = document.querySelectorAll("#expendituretype");
if (rowData.length > 0) {
  income.value = rowData[0]
  currency.value = rowData[1]
} else {
  income.value = ""
  currency.value = "£"
}
for (let i = 0; i < rowData.length - 2; i++) {
    inputs[i].value = rowData[i+2].amount
    expenditureType[i].value = rowData[i+2].type
  }
}


//FUNCTION SET ON AN INTERVAL TO CHECK LENGTH OF CURRENCYICON AND THEN TO CHANGE THE CURRENCY ICON BASED ON CURRENCY SELECTED

currency.addEventListener("change", function() {
  currencyIconDisplay()
});

//CLICK EVENT FUNCTION THAT ADDS A NEW ROW FOR INPUT

addNewRow.addEventListener("click", function() {
  createRow()
});


//FUNCTION FOR USER INTERACTION, CALCULATING TOTALS AND INTERACTION WITH PIE CHART AND LIST

//FUNCTION TO CHECK IF USER HAS INPUT MONTHLY INCOME AND EXPENDITURE AND DISPLAY WHERE TOTALDISPLAY WOULD BE TO TELL USER.

document.addEventListener("change", function() {
  checkingInputFields()
  calculatingTotal()
  assigningVariablesToType()
  createListAndPieChart()
});


function currencyIconDisplay() {
  let currencyIcon = document.querySelectorAll(".unit")
  let currencySelected = currency.value;
  for (let i = 0; i < currencyIcon.length; i++) {
    currencyIcon[i].innerHTML = currencySelected
  };
};


function createRow() {
  let currencySelected = currency.value;
  columnOne.insertAdjacentHTML("beforeend",'<div class="row"><span class="unit">'+ currencySelected +'</span><input type="text" name="expenditure" value=""  placeholder="Amount" id="expenditure" class="expenditure"></div>');
  columnTwo.insertAdjacentHTML("beforeend",'<select id="expendituretype"><option value="">--Please choose an option--</option><option value="food">Food</option><option value="bills">Bills</option><option value="transport">Transport</option><option value="clothing">Clothing</option><option value="social">Social</option><option value="health">Health</option><option value="other">Other</option>elect>');
};

function checkingInputFields() {
  for (let i = 0; i < inputs.length; i++) {
    if (income.value === "") {
      let sentence = "<p>Please insert a monthly income</p>"
      totalDisplay.innerHTML = sentence
    } else if (inputs[i].value === "" || isNaN(inputs[i].value) === true) {
        let sentence = "<p>Please insert an expenditure</p>"
        totalDisplay.innerHTML = sentence
      } else {
        let turnToFloat = parseFloat(inputs[i].value) //TURN TO FLOAT INSTEAD OF INTEGER TO ALLOW FOR 0.00 CURRENCY
        arrayOfExpenditure.push(turnToFloat)
      }
    };
};


function calculatingTotal() {
  if (arrayOfExpenditure.length != 0) {
    let sum = arrayOfExpenditure.reduce((total, amount) => total + amount);
    let monthly = parseFloat(document.getElementById("monthly").value)
    let total = monthly - sum
    let total2 = total.toFixed(2)
    let currencySelected = currency.value;
    let sentence = "<p>Your total savings every month are " + currencySelected + total2 + "</p>"
    totalDisplay.innerHTML = sentence
    arrayOfExpenditure.length = 0; //RESETS ARRAY FOR NEXT INTERVAL
  };
};


function assigningVariablesToType() {
  inputs = document.querySelectorAll(".expenditure");
  expenditureType = document.querySelectorAll("#expendituretype");
  for (let i = 0; i < expenditureType.length; i++) {
    for (let x = 0; x < data.length; x++) {
      if (expenditureType[i].value === data[x].name) {
        data[x].value += parseFloat(inputs[i].value) || 0
      };
    };
  };
};


function createListAndPieChart() {
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
    let valuePct = parseFloat((data[c].value / totalValue) * 100).toFixed(2);

    // Add text to list item


    //SELECTS ALL LIST ELEMENTS AND BEGINS TO ASSIGN THE INNERHTML BASED ON AN IF STATEMENT IF VALUEPCT IS NOT A NUMBER

    list = document.querySelectorAll('li')

    if (isNaN(valuePct) ) {
      list[c].innerHTML = data[c].name + ' (' + "0.00" + '%)'
    } else {
      list[c].innerHTML = data[c].name + ' (' + valuePct + '%)'
    }

    // Set color of value to create relation to pie.
    list[c].style.color = data[c].color;
  }

  //RESETS DATA VALUES FOR NEXT INTERVAL

  for (let a = 0; a < data.length; a++) {
    data[a].value = 0;
  }
}

placingSavedData()
currencyIconDisplay()
checkingInputFields()
calculatingTotal()
assigningVariablesToType()
createListAndPieChart()
