var navBar = document.getElementById('navigationBar');
var sticky = navBar.offsetTop;
document.getElementById("about").addEventListener("click", functionName);
document.getElementById("skills").addEventListener("click", functionName);
document.getElementById("project-examples").addEventListener("click", functionName);
document.getElementById("contact").addEventListener("click", functionName);

navBar.addEventListener("mouseover", enlarge);
navBar.addEventListener("mouseleave", minimize);


//Smooth scroll from links to sections//

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

//Begins functions on scroll down. If the condition on the if statement it will not run//

window.onscroll = function scrollDown() {
  attachNavBar()
  hamburgerIconFixed()
}


//If the width of the screen is wider than 1024 and the page is offset on the Y axis on scrolldown this function will begin.//

function attachNavBar() {
  if (screen.width >= 1024) {
    if (window.pageYOffset > sticky) {
      navBar.classList.add("sticky")
      navBar.classList.add('shrink')
    } else {
      navBar.classList.remove("sticky")
      navBar.classList.remove('shrink')
    }
  }
}

//If the page has a width less than or equal to 1023//

function hamburgerIconFixed() {
  if (screen.width <= 1023) {
    if (window.pageYOffset > sticky) {
       navBar.classList.add('stickto')
      } else {
         navBar.classList.remove('stickto')
        }
      }
    }


//If addEventListener is triggered this will activate on the hamburger menu when displayed closing it when a link is clicked.//
function functionName() {
  document.getElementById('checked').checked = false;
}

//If mouseover is detected this function will fire and will see if the navbar is in the needed state to be activated and will remove the class that has minimized the bar.//

function enlarge() {
  if (screen.width > 1023) {
    if (window.pageYOffset > sticky) {
      navBar.classList.remove('shrink')
    }
  }
}

//if the mouse is detected to leave the area this will add the class required to minimize//

function minimize() {
  if (screen.width > 1023) {
    if (window.pageYOffset > sticky) {
      navBar.classList.add('shrink')
    }
  }
}
