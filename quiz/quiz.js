var questions = [
  ["Halloween is also known as All Hallows Eve, what is another name for Hallows?", "saints"],
  ["Which game involving fruit is commonly played at Halloween?", "bobbing for apples"],
  ["Who are Dr. Peter Venkman, Dr. Raymond Stantz, and Dr. Egon Spengler better known as?", "ghostbusters"],
  ["What is the name for a ghost responsible for physical disturbances, such as loud noises and objects being moved?", "poltergeist"],
  ["Which TV series had the characters Fred, Velma, and Daphne?", "scooby doo"]
];

var question;
var answers;
var score = 0;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output')
  outputDiv.innerHTML = message;
}

function listBuilder(array) {
  var list = '<ol>';
   for (var i = 0; i < array.length; i+= 1) {
     list += '<li>' + array[i] + '</li>';
   }
   list += '</ol>';
   return list;
}


for (var i = 0; i < questions.length; i += 1) {
  question = prompt(questions[i][0])
  answers = questions[i][1]
  response = question.toLowerCase();
  console.log(response);
  if (response === answers) {
  score += 1
  correct.push(questions[i][0]);
  console.log(score)
  console.log(correct);
} else {
  wrong.push(questions[i][0])
}
}

html = '<h1>Congratulations you got ' + score + ' correct!</h1>'
html += '<h2>You got these questions correct:</h2>';
html += listBuilder(correct);
html += '<h2>You got these questions wrong:</h2>';
html += listBuilder(wrong);
if (score < 1) {
  html += '<p>No crown for you but heres a puppy to cheer you up!</p>'
  html += '<img src ="dog.jpg" width="310" height="220">';
} else {
  if (score <= 2) {
    html += '<p>You did okay.. Take this apple!</p>';
    html += '<img src ="apple.jpg" width="310" height="320">';
  } else {
    if (score <= 3) {
      html += '<p>Not bad! Here is a toothbrush!</p>';
      html += '<img src ="toothbrush.jpg" width="310" height="320">';
    } else {
      if (score <= 4) {
        html += '<p>You did great! Take a cookie but only one.</p>';
        html += '<img src ="cookies.jpg" width="310" height="320">';
      } else {
        if (score === 5) {
          html += '<p>You got them all right and unlocked the motherload! Congratulations!</p>';
          html += '<img src ="sweets.jpg" width="310" height="320">';
        }
      }
    }
  }
}

print(html)
