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
