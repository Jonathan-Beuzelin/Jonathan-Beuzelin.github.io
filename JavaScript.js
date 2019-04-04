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
var about = document.getElementById('about')
var skills = document.getElementById("skills")
var projects = document.getElementById("project-examples")
var contact = document.getElementById("contact")

var sticky = navBar.offsetTop

function myFunction() {
  if (screen.width > 1023) {
    if (window.pageYOffset > sticky) {
      navBar.classList.add("sticky")
      navBar.classList.add('shrink')
    } else {
      navBar.classList.remove("sticky")
      navBar.classList.remove('shrink')
    }
  }
}

function fixed() {
  if (screen.width < 1022) {
    if (window.pageYOffset > sticky) {
       navBar.classList.add('stickto')
      } else {
         navBar.classList.remove('stickto')
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

navBar.addEventListener("mouseover", enlarge);
navBar.addEventListener("mouseleave", minimize);

function enlarge() {
  navBar.classList.remove('shrink')
}

function minimize() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add('shrink')
  }
}
