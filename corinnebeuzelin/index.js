const menu = document.getElementById('menu')
const checkbox = document.querySelector("input[name=checkbox]");

window.addEventListener('scroll', function() {
 fadeIn(document.querySelector('.servicebutton'))
 fadeIn(document.querySelector('form'))
});


function fadeIn(fadeInSubject) {
	const position = fadeInSubject.getBoundingClientRect();
	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		if (fadeInSubject.style.opacity != "100%") {
			fadeInSubject.style.opacity = "100%"
			}
			if (fadeInSubject.style.marginTop = "0") {
				fadeInSubject.style.marginTop = "20px"
		};
	};
};


checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      menu.style.top = "-205px"
    } else {
      menu.style.top = "70px"
    }
});


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || menu.style.top == "-205px") {
    document.getElementById('nav').style.bottom = "0";
  } else {
    document.getElementById('nav').style.bottom = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
