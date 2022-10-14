const colorPicked = document.getElementById("colorPicker");
const mode = document.getElementById("mode");
const getScheme = document.getElementById("getColours");
const main = document.getElementById("main");
let coloursArray = [];
let hexCodeArray = [];
getScheme.addEventListener("click", function (e) {
  let modePicked = mode.value;
  let hexCode = colorPicked.value.slice(1);
  e.preventDefault;
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexCode}&mode=${modePicked}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.colors.length; i++) {
        coloursArray[i] = document.getElementById("color" + [i]);
        coloursArray[i].style.background = data.colors[i].hex.value;
        hexCodeArray[i] = document.getElementById("hexCode" + [i]);
        hexCodeArray[i].innerHTML = data.colors[i].hex.value;
        coloursArray[i].addEventListener("click", function () {
          navigator.clipboard.writeText(hexCodeArray[i].textContent)
          coloursArray[i].innerHTML = '<div class="copied">copied</div>'
          setTimeout(() => coloursArray[i].innerHTML = "", 2000)
        });
      }
    });
});
