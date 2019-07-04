const addNewRow = document.getElementById("addnewrow");
const totalDisplay = document.getElementById("totalsaved");
const columnOne = document.getElementById("columnone");
const columnTwo = document.getElementById("columntwo");
let one = document.getElementById("expenditure").elements;
let total = 0;
let arrayOfExpenditure = [];
const currency = document.getElementById('currency')

addNewRow.addEventListener("click", function() {
  columnOne.insertAdjacentHTML("beforeend","<input type='text' name='expenditure' value='' placeholder='Amount' id='expenditure' class='expenditure'>");
  columnTwo.insertAdjacentHTML("beforeend","<select id='pet-select''><option value=''>--Please choose an option--</option><option value='dog'>Dog</option><option value='cat'>Cat</option><option value='hamster'>Hamster</option><option value='parrot'>Parrot</option><option value='spider'>Spider</option><option value='goldfish'>Goldfish</option></select>");
});

setInterval(function(){
  let inputs = document.querySelectorAll(".expenditure");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "" || isNaN(inputs[i].value) === true) {
      let sentence = "<p>Please insert a number</p>"
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
    currencySelected = currency.options[currency.selectedIndex].text;
    let sentence = "<p>Your total savings every month are " + currencySelected + total2 + "</p>"
    totalDisplay.innerHTML = sentence
    arrayOfExpenditure.length = 0;
  } else {
    let sentence = "<p>Please insert a number</p>"
    totalDisplay.innerHTML = sentence
  }
}, 10);
