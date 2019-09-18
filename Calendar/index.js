'use strict';
/*jshint esversion: 6 */
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let requestMonth = 1;
let displayMonth = 0;
let holidayData;


function daysInMonth (month, year) { // Use 1 for January, 2 for February, etc.
  return new Date(year, month, 0).getDate();
}

//FETCH
function getData() {
  let country = document.getElementById('country');
  fetch("https://calendarific.com/api/v2/holidays?&api_key=8a37ec55ae24fc349829d96200acf2a048cd37f8&country=" + country.value + "&year=" + year.value + "")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    holidayData = myJson;
    console.log(holidayData);
    addData();
  });
}


document.getElementById('returnToTopButton').addEventListener("click", function(){
  window.scrollTo(0, 0);
})



//BUTTON
document.getElementById('proceed').addEventListener("click", function(){
  createNavigation()
  gridGenerator();
  getData();
  left.addEventListener("click", function(e){
    e.preventDefault();
    requestMonth-=1;
    displayMonth-=1;
    console.log(requestMonth);
    if (requestMonth === 0) {
      requestMonth = 12;
      displayMonth = 11;
    }
    gridGenerator()
    addData();
  });
  right.addEventListener("click", function(e){
    e.preventDefault();
    requestMonth+=1;
    console.log(requestMonth);
    displayMonth+=1;
    if (requestMonth === 13) {
      requestMonth = 1;
      displayMonth = 0;
    }
    gridGenerator();
    addData();
  });
});


function createNavigation() {
  let changeMonth = document.getElementById('changeMonth');
  changeMonth.innerHTML = '<a href="#" class="arrow left" id="left"></a>' +
                          '<h3 class="month" id="monthHeader">' + monthNames[displayMonth] + '</h3>' +
                          '<a href="#" class="arrow right" id="right"></a>';
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const monthHeader = document.getElementById('monthHeader');
  const arrows = document.getElementsByClassName('arrow')
  window.addEventListener('scroll', function(){
    if (window.scrollY > 490) {
      left.style.top = "50%";
      left.style.left = "6%"
      right.style.top = "50%";
      right.style.right = "6%";
      for (var i = 0; i < arrows.length; i++) {
        arrows[i].style.position ="fixed"
        arrows[i].style.height = "40px";
        arrows[i].style.width = "40px";
      }
    } else {
      left.style.position = "static";
      right.style.position = "static";
      for (var i = 0; i < arrows.length; i++) {
        arrows[i].style.height = "20px";
        arrows[i].style.width = "20px";
      }
    }
  });
}

function gridGenerator() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  monthHeader.innerHTML = monthNames[displayMonth];
  let amountOfDays = daysInMonth(requestMonth, 2019);
  for (let i = 0; i < amountOfDays; i++) {
    let grid = document.createElement("div");
    grid.id = i;
    container.appendChild(grid);
    let x = i + 1;
    grid.innerHTML = '<h2>'+ x + '</h2>';
  }
}

//ADD DATA TO GRID
function addData() {
  for (let i = 0; i < holidayData.response.holidays.length; i++) {
    if (holidayData.response.holidays[i].date.datetime.year == year.value) {
      if (holidayData.response.holidays[i].date.datetime.month == requestMonth) {
        if (holidayData.response.holidays[i].states === "All") {
          let day = holidayData.response.holidays[i].date.datetime.day - 1;
          document.getElementById(day).innerHTML += '<h3>' + holidayData.response.holidays[i].name +'</h3>';
          if (typeof holidayData.response.holidays[i].description === 'string') {
            document.getElementById(day).innerHTML +='<p class="description">' + holidayData.response.holidays[i].description + '</p>';
          }
          else {
            document.getElementById(day).innerHTML +=  '<p class="description">No description found.</p>';
          }
          document.getElementById(day).innerHTML +='<p class="type">Type: ' + holidayData.response.holidays[i].type[0] + '</p>';
        }
      }
    }
  }
}
