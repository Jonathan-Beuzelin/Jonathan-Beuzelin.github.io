
const snowFlakes = document.getElementById('snowFlakes')
for (var i = 1; i < 10; i++) {
  let special = document.createElement('img');
  special.src = 'snowflake.png'
  special.className = 'slowfall' + i
  snowFlakes.appendChild(special)
}

const number = 12;

const isOdd = number % 2 !== 0;

console.log(isOdd);
