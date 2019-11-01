const income = document.getElementById('monthly'); //MONTHLY INCOME INPUT
let rowData = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; //IF THERE IS ITEMS IN LOCAL STORAGE RETRIEVE THEM OR IF NOT FOUND, CREATE ITEMS AS AN EMPTY OBJECT


//DATA FOR PIE CHART AND LIST, COLOUR SCHEMES AND NAMES
const ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
  type:'pie',
  data: {
    labels: [],
    datasets: [{
        label: '',
        data: [],
        backgroundColor: [ //COLOURS FOR PIE CHART//
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(230, 25, 75, 0.6)',
            'rgba(60, 180, 75, 0.6)',
            'rgba(255, 225, 25, 0.6)',
            'rgba(0, 130, 200, 0.6)',
            'rgba(245, 130, 48, 0.6)',
            'rgba(145, 30, 180, 0.6)',
            'rgba(70, 240, 240, 0.6)',
            '(rgba240, 50, 230, 0.6)',
            'rgba(210, 245, 60, 0.6)',
            'rgba(250, 190, 190, 0.6)',
            'rgba(0, 128, 128, 0.6)',
            'rgba(230, 190, 255, 0.6)',
            'rgba(170, 110, 40, 0.6)',
            'rgba(255, 250, 200, 0.6)',
            'rgba(128, 0, 0, 0.6)',
            'rgba(170, 255, 195, 0.6)',
            'rgba(128, 128, 0, 0.6)',
            'rgba(255, 215, 180, 0.6)',
            'rgba(0, 0, 128, 0.6)',
            'rgba(128, 128, 128, 0.6)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(0, 0, 0, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(230, 25, 75, 1)',
            'rgba(60, 180, 75, 1)',
            'rgba(255, 225, 25,1)',
            'rgba(0, 130, 200, 1)',
            'rgba(245, 130, 48, 1)',
            'rgba(145, 30, 180, 1)',
            'rgba(70, 240, 240, 1)',
            '(rgba240, 50, 230, 1)',
            'rgba(210, 245, 60, 1)',
            'rgba(250, 190, 190, 1)',
            'rgba(0, 128, 128, 1)',
            'rgba(230, 190, 255, 1)',
            'rgba(170, 110, 40, 1)',
            'rgba(255, 250, 200, 1)',
            'rgba(128, 0, 0, 1)',
            'rgba(170, 255, 195, 1)',
            'rgba(128, 128, 0, 1)',
            'rgba(255, 215, 180, 1)',
            'rgba(0, 0, 128, 1)',
            'rgba(128, 128, 128, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 2
    }]
  },
  options: {
      tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              let dataset = data.datasets[tooltipItem.datasetIndex];
              let meta = dataset._meta[Object.keys(dataset._meta)[0]];
              let total = meta.total;
              let currentValue = dataset.data[tooltipItem.index];
              let percentage = parseFloat((currentValue/total*100).toFixed(1));
              let currencySelected = currency.value;
              return currencySelected + currentValue + ' (' + percentage + '%)';
            },
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        }
      }
});

//ADD DATA TO CHART FUNCTION//
function addData(chart, label, data) {
    myChart.data.labels.push(label);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    myChart.update();
}

//END OF CHART SECTIONS//

//EVENTLISTENERS

document.addEventListener("change", function() {
  let inputs = document.querySelectorAll(".expenditure");
  let expenditureType = document.querySelectorAll(".expendituretype");
  myChart.data.datasets[0].data = []
  myChart.data.labels = []
  for (var i = 0; i < inputs.length; i++) {
    if (expenditureType[i].value !="" && inputs[i].value !="") {
      addData(myChart, expenditureType[i].value, inputs[i].value)
    }
  }
  calculatingTotal();
});


//EVENT LISTENERS

//SAVE DATA TO LOCAL STORAGE
document.getElementById('save').addEventListener('click', function(e) {
  e.preventDefault(); //PREVENTS PAGE RELOAD
  saveData()
});

//CLEAR LOCAL STORAGE FUNCTION
document.getElementById('remove').addEventListener('click', function(e) {
  localStorage.clear();
  location.reload(true);
});

//CHANGE CURRENCY BESIDE THE EXPENDITURE INPUT BOXES AND TOTAL DISPLAY
document.getElementById('currency').addEventListener("change", function() {
  currencyIconDisplay();
});

//CLICK EVENT FUNCTION THAT ADDS A NEW ROW FOR INPUT
document.getElementById("addnewrow").addEventListener("click", function() {
  createRow();
});

//END OF EVENTLISTENERS//


//FUNCTIONS//

//CHANGES THE CURRENCY DISPLAYED NEXT TO THE INPUT BOXES AND IN THE TOTAL DISPLAYED

//FUNCTION TO GET TOTAL AMOUNT OF THE EXPENDITURE INPUTS, TAKES THE TOTAL AWAY FROM THE MONTHLY INCOME AND THEN DISPLAYS THAT AS YOUR TOTAL SAVINGS.
function calculatingTotal() {
  let arrayOfFloats = [];
  const totalDisplay = document.getElementById("totalsaved"); //TOTAL DISPLAYED
  let inputs = document.querySelectorAll(".expenditure"); //EXPENDITURE inputs
  if (income.value === "") {
    let sentence = "<p>Please insert a monthly income.</p>";
    totalDisplay.innerHTML = sentence;
  } else if (inputs[0].value === "" || isNaN(inputs[0].value) === true){
    let sentence = "<p>Please insert an expenditure, starting from the top.</p>";
    totalDisplay.innerHTML = sentence;
  } else if(myChart.data.datasets[0].data.length != 0) {
    for (let i = 0; i < myChart.data.datasets[0].data.length; i++) {
      let convert = parseFloat(myChart.data.datasets[0].data[i]);
      arrayOfFloats.push(convert)
    }
    let sum = arrayOfFloats.reduce((total, amount) => total + amount);
    let monthly = parseFloat(document.getElementById("monthly").value);
    let total = monthly - sum;
    let currencySelected = currency.value;
    let totalExpenditure = "<p>Your total expenditure is " + currencySelected + sum.toFixed(2) + "</p>"
    let savings = "<p>Your total savings every month are " + currencySelected + total.toFixed(2) + "</p>";
    totalDisplay.innerHTML = totalExpenditure + "<br>" + savings;
  }
}

//CREATES NEW INPUT ROWS FOR ADDITIONAL EXPENDITURE
function createRow() {
  const columnOne = document.getElementById("columnOne"); //LEFT SIDE COLUMN OF FINANCE SECTION
  const columnTwo = document.getElementById("columnTwo"); //RIGHT SIDE COLUMN OF FINANCE SECTION
  let currencySelected = currency.value;
  let pieValues = document.getElementById('pieValues')
  columnOne.insertAdjacentHTML("beforeend",'<input class="expendituretype" type="text" name="" value="" placeholder="Name">');
  columnTwo.insertAdjacentHTML("beforeend",'<div class="row"><span class="unit">'+ currencySelected +'</span><input type="text" name="expenditure" value=""  placeholder="Amount" id="expenditure" class="expenditure"></div>');
}

//GETS CURRENCY OPTION PICKED TO DISPLAY ACROSS THE PAGE
function currencyIconDisplay() {
  let currencyIcon = document.querySelectorAll(".unit");
  let currencySelected = currency.value; //CURRENCY SELECTED IN THE SELECTED CURRENCY MENU
  for (let i = 0; i < currencyIcon.length; i++) {
    currencyIcon[i].innerHTML = currencySelected;
  }
}

//SAVE DATA BY APPLYING IT TO THE LOCAL STORAGE
function saveData() {
  let inputs = document.querySelectorAll(".expenditure");
  let expenditureType = document.querySelectorAll(".expendituretype");
  rowData = []; //DATA FOR LOCALSTORAGE AND IS RESET EVERY TIME THE FUNCTION FIRES
  colorData = [];
  rowData.push(income.value);
  rowData.push(currency.value);
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value != "") { //IF STATEMENT TO AVOID UNNECESSARY EMPTY STRINGS BEING SAVED TO THE LOCAL STORAGE
      rowData.push({'amount': inputs[i].value, 'name': expenditureType[i].value});
      localStorage.setItem('items', JSON.stringify(rowData));
    }
  }
  if (myChart.data.datasets[0].backgroundColor.length > 6) {
    for (let i = 0; i < myChart.data.datasets[0].backgroundColor.length - 6; i++) {
      colorData.push(myChart.data.datasets[0].backgroundColor[i+6])
      localStorage.setItem('colors', JSON.stringify(colorData));
    }
  }
};


//PUTS THE LOCALSTORAGE DATA INTO THE INPUT BOXES
function placingSavedData() {
let rowLength = rowData.length - 7; //DEFAULT INPUTS TAKEN OFF FROM THE VARIABLE SO WHEN A NEW ROW IS ADDED IT STARTS FROM ONE
if (rowData.length > 7) { //IF ROWDATA.LENGTH IS GREATER THAN 7 FIRE FOR LOOP
  for (let i = 0; i < rowLength; i++) { // IF THERE IS ONE ADDED ROW THEN ROWLENGTH WILL EQUAL ONE
    createRow();
  }
}
let inputs = document.querySelectorAll(".expenditure"); //EXPENDITURE inputs
let expenditureType = document.querySelectorAll(".expendituretype");
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
  myChart.data.datasets[0].data = []
  myChart.data.labels = []
  for (let i = 0; i < inputs.length; i++) {
    if (expenditureType[i].value !="" && inputs[i].value !="") {
      addData(myChart, expenditureType[i].value, inputs[i].value)
    }
  }
}

//END OF FUNCTIONS SECTION//



placingSavedData();
currencyIconDisplay();
calculatingTotal();
