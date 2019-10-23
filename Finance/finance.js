const addNewRow = document.getElementById("addnewrow"); //ADD NEW ROW BUTTON
const totalDisplay = document.getElementById("totalsaved"); //TOTAL DISPLAYED
const columnOne = document.getElementById("columnone"); //LEFT SIDE COLUMN OF FINANCE SECTION
const columnTwo = document.getElementById("columntwo"); //RIGHT SIDE COLUMN OF FINANCE SECTION
const currency = document.getElementById('currency'); //CURRENCY SELECT MENU
const income = document.getElementById('monthly'); //MONTHLY INCOME INPUT
const remove = document.getElementById('remove'); //DELETE BUTTON
const save = document.getElementById('save'); //SAVE BUTTON
const list = document.querySelectorAll('li'); //LIST ELELMENTS UNDER PIE CHART
let currencySelected = currency.value; // CURRENCY SELECTED FROM CURRENCY SELECT MENU
let inputs = document.querySelectorAll(".expenditure"); //EXPENDITURE inputs
let currencyIcon = document.querySelectorAll(".unit"); //SPAN ELEMENT LOCATED LEFT SIDE OF EXPENDITURE INPUT
let arrayOfExpenditure = []; //EXPENDITURE INPUTS PUSHED HERE TO CALCULATE TOTAL USING REDUCE FUNCTION
let expenditureType = document.querySelectorAll(".expendituretype");
let pieChart = document.getElementById('pieChart')
let circle = document.querySelectorAll('circle')

let rowData = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; //IF THERE IS ITEMS IN LOCAL STORAGE RETRIEVE THEM OR IF NOT FOUND, CREATE ITEMS AS AN EMPTY OBJECT



//DATA FOR PIE CHART AND LIST, COLOUR SCHEMES AND NAMES
let data = [
  {
   "name": "none",
   "color": "#e82e2e",
   "value": 0
  }, {
   "name": "none",
   "color": "#5ecc62",
   "value": 0
  }, {
   "name": "none",
   "color": "#6f5ecc",
   "value": 0
  }, {
   "name": "none",
   "color": "#ed24d6",
   "value": 0
  }, {
   "name": "none",
   "color": "#2460ed",
   "value": 0
  }
];


//EVENT LISTENERS
//SAVE DATA TO LOCAL STORAGE
save.addEventListener('click', function(e) {
  e.preventDefault(); //PREVENTS PAGE RELOAD
  let inputs = document.querySelectorAll(".expenditure");
  let expenditureType = document.querySelectorAll(".expendituretype");
  rowData = []; //DATA FOR LOCALSTORAGE AND IS RESET EVERY TIME THE FUNCTION FIRES
  rowData.push(income.value);
  rowData.push(currency.value);
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value != "") { //IF STATEMENT TO AVOID UNNECESSARY EMPTY STRINGS BEING SAVED TO THE LOCAL STORAGE
      rowData.push({'amount': inputs[i].value, 'name': expenditureType[i].value});
      localStorage.setItem('items', JSON.stringify(rowData));
    }
  }
});

//CLEAR LOCAL STORAGE FUNCTION
remove.addEventListener('click', function(e) {
  localStorage.clear();
  location.reload(true);
});

//CHANGE CURRENCY BESIDE THE EXPENDITURE INPUT BOXES AND TOTAL DISPLAY
currency.addEventListener("change", function() {
  currencyIconDisplay();
});

//CLICK EVENT FUNCTION THAT ADDS A NEW ROW FOR INPUT
addNewRow.addEventListener("click", function() {
  createRow();
});

document.addEventListener("change", function() {
  checkingInputFields();
  calculatingTotal();
  assigningVariablesToType();
  createListAndPieChart();
});


//FUNCTIONS
//CHANGES THE CURRENCY DISPLAYED NEXT TO THE INPUT BOXES AND IN THE TOTAL DISPLAYED
function currencyIconDisplay() {
  let currencyIcon = document.querySelectorAll(".unit");
  let currencySelected = currency.value; //CURRENCY SELECTED IN THE SELECTED CURRENCY MENU
  for (let i = 0; i < currencyIcon.length; i++) {
    currencyIcon[i].innerHTML = currencySelected;
  }
}



//CREATES NEW INPUT ROWS FOR ADDITIONAL EXPENDITURE
function createRow() {
  let currencySelected = currency.value;
  let pieValues = document.getElementById('pieValues')
  columnOne.insertAdjacentHTML("beforeend",'<div class="row"><span class="unit">'+ currencySelected +'</span><input type="text" name="expenditure" value=""  placeholder="Amount" id="expenditure" class="expenditure"></div>');
  columnTwo.insertAdjacentHTML("beforeend",'<input class="expendituretype" type="text" name="" value="">');
  pieValues.insertAdjacentHTML("beforeend", '<li></li>');
  let letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++){
    color += letters[(Math.floor(Math.random() * 16))];
  }
  data.push({
   "name": "none",
   "color": color,
   "value": 0
  })
  let border = document.getElementById('border');
  let newCircle = document.createElement('circle')
  pieChart.insertBefore(newCircle, border)
  console.log('ping!')
}

//FUNCTION TO CHECK IF USER HAS INPUT MONTHLY INCOME AND EXPENDITURE AND TELLS USER WHERE TOTALDISPLAY WOULD BE.
function checkingInputFields() {
  for (let i = 0; i < inputs.length; i++) {
    if (income.value === "") {
      let sentence = "<p>Please insert a monthly income</p>";
      totalDisplay.innerHTML = sentence;
    } else if (inputs[i].value === "" || isNaN(inputs[i].value) === true) {
        let sentence = "<p>Please insert an expenditure</p>";
        totalDisplay.innerHTML = sentence;
      } else {
        let turnToFloat = parseFloat(inputs[i].value); //TURN TO FLOAT INSTEAD OF INTEGER TO ALLOW FOR 0.00 CURRENCY
        arrayOfExpenditure.push(turnToFloat);
      }
    }
}

//FUNCTION TO GET TOTAL AMOUNT OF THE EXPENDITURE INPUTS, TAKES THE TOTAL AWAY FROM THE MONTHLY INCOME AND THEN DISPLAYS THAT AS YOUR TOTAL SAVINGS.
function calculatingTotal() {
  if (arrayOfExpenditure.length != 0) {
    let sum = arrayOfExpenditure.reduce((total, amount) => total + amount);
    let monthly = parseFloat(document.getElementById("monthly").value);
    let total = monthly - sum;
    let total2 = total.toFixed(2);
    let currencySelected = currency.value;
    let sentence = "<p>Your total savings every month are " + currencySelected + total2 + "</p>";
    totalDisplay.innerHTML = sentence;
    arrayOfExpenditure.length = 0; //RESETS ARRAY FOR NEXT INTERVAL
  }
}

//ASSIGNS THE VARIABLES INTO THE DATA BY MATCHING THE EXPENDITURE TYPE AND THEN ASSIGNS IT TO THE ONE THAT MATCHES.
function assigningVariablesToType() {
  inputs = document.querySelectorAll(".expenditure");
  expenditureType = document.querySelectorAll(".expendituretype");
  for (var i = 0; i < expenditureType.length; i++) {
    data[i].name = expenditureType[i].value
  }
  for (let i = 0; i < expenditureType.length; i++) {
    for (let x = 0; x < data.length; x++) {
      if (expenditureType[i].value === data[x].name) {
        data[x].value += parseFloat(inputs[i].value) || 0;
      }
    }
  }
}


function createListAndPieChart() {
  let circle = document.querySelectorAll('circle');
  let totalValue = 0;
  let radius = 60;
  let circleLength = Math.PI * (radius * 2);
  let spaceLeft = circleLength;

  for (let i = 0; i < data.length; i++) {
    totalValue += data[i].value;
  }

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
    spaceLeft = spaceLeft < 0 ? 0 : spaceLeft;


    // Add value to list.
    let valuePct = parseFloat((data[c].value / totalValue) * 100).toFixed(2);

    // Add text to list item


    //SELECTS ALL LIST ELEMENTS AND BEGINS TO ASSIGN THE INNERHTML BASED ON AN IF STATEMENT IF VALUEPCT IS NOT A NUMBER

    const list = document.querySelectorAll('li');
    if (expenditureType[c].value != "") {
      if (isNaN(valuePct) ) {
        list[c].innerHTML = data[c].name + ' (' + "0.00" + '%)';
      } else {
        list[c].innerHTML = data[c].name + ' (' + valuePct + '%)';
      }

      // Set color of value to create relation to pie.
      list[c].style.color = data[c].color;
    }
    }

  //RESETS DATA VALUES FOR NEXT INTERVAL

  for (let a = 0; a < data.length; a++) {
    data[a].value = 0;
  }
}


//PUTS THE LOCALSTORAGE DATA INTO THE INPUT BOXES
function placingSavedData() {
let rowLength = rowData.length - 7; //DEFAULT INPUTS TAKEN OFF FROM THE VARIABLE SO WHEN A NEW ROW IS ADDED IT STARTS FROM ONE
if (rowData.length > 7) { //IF ROWDATA.LENGTH IS GREATER THAN 7 FIRE FOR LOOP
  for (let i = 0; i < rowLength; i++) { // IF THERE IS ONE ADDED ROW THEN ROWLENGTH WILL EQUAL ONE
    createRow();
  }
}
inputs = document.querySelectorAll(".expenditure"); //EXPENDITURE inputs
expenditureType = document.querySelectorAll(".expendituretype");
if (rowData.length > 0) { //IF ROWDATA IS GREATER THAN 0 INPUT THE DATA INTO THE INPUT BOXES
  income.value = rowData[0];
  currency.value = rowData[1];
} else { //ELSE EMPTY STRING TO AVOID UNDEFINED AND AVOID THE CURRENCY VALUE BEING BLANK
  income.value = "";
  currency.value = "£";
}
for (let i = 0; i < rowData.length - 2; i++) {//INPUTS DATA INTO THE EXPENDITURE AND EXPENDITURE TYPES
    inputs[i].value = rowData[i+2].amount;
    expenditureType[i].value = rowData[i+2].name;
  }
}



placingSavedData();
currencyIconDisplay();
checkingInputFields();
calculatingTotal();
assigningVariablesToType();
createListAndPieChart();
