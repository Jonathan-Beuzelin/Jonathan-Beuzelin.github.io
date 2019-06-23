const submitValue = document.getElementById('submit');
const boxElem = document.querySelector(".section");
const form = document.getElementById('form');
const header = document.getElementById('header')
const body = document.getElementById('body');
let user = new Object();
let forms = document.createElement("form")


submitValue.addEventListener('click', function (event) {
  event.preventDefault()
  let name = document.getElementById('name').value
  if (name != "") {
    form.submit.disabled = true;
    user.name = name
    console.log(user)
    setTimeout(function(){ header.remove(); form.remove() }, 1000)
    setTimeout(function(){ let createdHeader = document.createElement("header");
      document.body.appendChild(createdHeader);
      createdHeader.className = "welcome"
      createdHeader.innerHTML = '<h1>Welcome ' + name + '</h1>'
    }, 1200);
    setTimeout(function(){ let mainSection = document.createElement("main")
      document.body.appendChild(mainSection)
      mainSection.className = "maincontent"
      mainSection.innerHTML = '<h1 class="subheader">Your finance portfolio</h1>';
      let row = document.createElement("div")
      mainSection.appendChild(row)
      row.className = "row"
      //FORM//
      let forms = document.createElement("form")
      row.appendChild(forms)
      forms.className = "Calculations"
      forms.innerHTML = '<h1>Your Finances here</h1>'
      let monthly = document.createElement("div")
      forms.appendChild(monthly)
      monthly.className = "monthly"
      monthly.innerHTML +=  '<label for="monthly">Monthly Income</label>' +
          '<input type="text" name="monthly" value="Amount" id="monthly">'
      let inputSection = document.createElement("div");
      forms.appendChild(inputSection)
      inputSection.className = "inputsection"
      let columnOne = document.createElement("div")
      inputSection.appendChild(columnOne)
      columnOne.className = "column"
      columnOne.innerHTML += '<label for="thing">Expenditure</label>'
      for (var i = 0; i < 10; i++) {
        columnOne.innerHTML += '<input type="text" name="nameofexpenditure" value="Amount" id="nameofexpenditure">'
      }
      let columnTwo = document.createElement("div")
      inputSection.appendChild(columnTwo)
      columnTwo.className = "column"
      columnTwo.innerHTML += '<label for="thing">type</label>'
      for (var i = 0; i < 10; i++) {
        columnTwo.innerHTML += '<select id="type">' +
        '<option value="">--Please choose an option--</option>' +
        '<option value="dog">Dog</option>' +
        '<option value="dog">Dog</option>' +
        '<option value="dog">Dog</option>' +
        '<option value="dog">Dog</option>'
      }
      let bottom = document.createElement("div")
      forms.appendChild(bottom)
      bottom.className = "bottom"
      bottom.innerHTML ='Total =' + ' total'
      //GRAPH//
      let graph = document.createElement("div")
      row.appendChild(graph)
      graph.className = "graph"
      graph.innerHTML = '<h1>Overview</h1>'
    },8000)
  } else {
      alert("Insert your name.");
    }
});

// TODO: Create the layout and add the sections
// TODO: SVG pie chart.
