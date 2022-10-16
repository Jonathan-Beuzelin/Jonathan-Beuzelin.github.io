const colorPicked = document.getElementById("colorPicker");
const mode = document.getElementById("mode");
const getScheme = document.getElementById("getColours");
const colorDivs = document.querySelectorAll(".color");
const hexDivs = document.querySelectorAll(".hexcode");

getScheme.addEventListener("click", function (e) {
  let modePicked = mode.value;
  let hexCode = colorPicked.value.slice(1);
  e.preventDefault;
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexCode}&mode=${modePicked}&count=4`
  )
    .then((res) => res.json())
    .then((data) => {
      colorDivs[colorDivs.length - 1].style.backgroundColor =
        data.seed.hex.value;
      hexDivs[hexDivs.length - 1].innerHTML = data.seed.hex.value;
      data.colors.forEach((element, index) => {
        colorDivs[index].style.backgroundColor = element.hex.value;
        hexDivs[index].innerHTML = element.hex.value;
      });
    });
});


colorDivs.forEach((element, index) => {
  element.addEventListener("click", function () {
    navigator.clipboard.writeText(hexDivs[index].textContent);
    element.innerHTML = "<p class='copied'>copied!</p>";
    setTimeout(() => (element.innerHTML = ""), 1000);
  });
});