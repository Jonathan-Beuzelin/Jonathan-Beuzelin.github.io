document.querySelectorAll('a[href^="#hiddenanchor"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelectorAll('a[href^="#hiddenanchor1"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelectorAll('a[href^="#hiddenanchor2"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelectorAll('a[href^="#hiddenanchor3"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


window.onscroll = function functionName() {
  myFunction()
  fixed()
}

var navBar = document.getElementById('navigationBar')
var svg = document.getElementById('svgCon')
var menu = document.getElementById('navigationBar')

var sticky = navBar.offsetTop

function myFunction() {
  if (screen.width > 960) {
    if (window.pageYOffset > sticky) {
      navBar.classList.add("sticky")
    } else {
      navBar.classList.remove("sticky")
    }
  }
}

function fixed() {
  if (screen.width < 960) {
    if (window.pageYOffset > sticky) {
       menu.classList.add('stickto')
      } else {
         menu.classList.remove('stickto')
        }
      }
    }


var a = document.getElementById("about").addEventListener("click", functionName)
var b = document.getElementById("skills").addEventListener("click", functionName)
var c = document.getElementById("project-examples").addEventListener("click", functionName)
var d = document.getElementById("contact").addEventListener("click", functionName)


function functionName() {
  document.getElementById('checked').checked = false;
}
