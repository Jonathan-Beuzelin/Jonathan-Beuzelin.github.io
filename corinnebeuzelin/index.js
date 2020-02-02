const menu = document.getElementById('menu')
const checkbox = document.querySelector("input[name=checkbox]");

window.addEventListener('scroll', function() {
  fadeIn(document.querySelector('.buttonlink'))
  fadeIn(document.querySelector('form'))
});


function fadeIn(fadeInSubject) {
  const position = fadeInSubject.getBoundingClientRect();
  // checking whether fully visible
  if (position.top >= 0 && position.bottom - 200 <= window.innerHeight) {
    if (fadeInSubject.style.opacity != "100%") {
      fadeInSubject.style.opacity = "100%"
    }
  };
};


checkbox.addEventListener('change', function() {
  if (this.checked) {
    menu.style.opacity = "100%"
    menu.style.visibility = "visible"
  } else {
    menu.style.visibility = "collapse"
    menu.style.opacity = "0%"
  }
});

/*let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || menu.style.top == "-205px") {
    document.getElementById('nav').style.top = "0";
  } else {
    document.getElementById('nav').style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}*/
