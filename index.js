var htmlElement = document.documentElement;
var bodyElement = document.body;

var height = Math.max(
    htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
    bodyElement.scrollHeight, bodyElement.offsetHeight
);

console.log(height)

document.addEventListener("scroll", function(){
    let documentHeight = document.body.scrollHeight - window.innerHeight;
    let currentScroll = window.scrollY;
    // When the user is [modifier]px from the bottom, fire the event.
        console.log(currentScroll / documentHeight * 100, documentHeight, currentScroll)
})


function fadeIn(fadeInSubject) {
    const position = fadeInSubject.getBoundingClientRect();
    // checking whether fully visible
    if (position.top >= 0 && position.bottom - 200 <= window.innerHeight) {
      if (fadeInSubject.style.opacity != "100%") {
        fadeInSubject.style.opacity = "100%"
      }
    };
  };
  