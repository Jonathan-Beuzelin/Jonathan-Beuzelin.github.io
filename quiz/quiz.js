var questionOne = prompt('Question one: What is the capital of Japan?');
var question1 = questionOne.toUpperCase();
var score = 0
 if(question1 === 'TOKYO') {
   alert('Thats right!')
   score++;
 } else {
   alert('Sorry thats wrong')
 }
  console.log(score)

 var questionTwo = prompt('Question two: How many continents are there?');
 var question2 = questionTwo.toUpperCase();
  if(question2 === '7' || question2 === 'SEVEN') {
    alert('That is correct!')
    score++;
  } else {
    alert('Thats wrong!');
  }
   console.log(question2);

  var questionThree = prompt('Question three: What is the Turkish word for lamb?');
  var question3 = questionThree.toUpperCase();
   if (question3 === 'KEBAB') {
     alert('Correcto!')
     score++;
   } else {
     alert('Wrong im afraid..')
   }
    console.log(score)

    var questionFour = prompt('Question four: Which plant does the Canadian flag contain?');
    var question4 = questionFour.toUpperCase();
     if (question4 === 'MAPLE') {
       alert('You got it!')
       score++;
     } else {
       alert('No thats wrong!');
     }

     var questionFive = prompt('Final Question: In which Nintendo DS game do you have to raise a puppy as well as possible?');
     var question5 = questionFive.toUpperCase();
      if (question5 === 'NINTENDOGS') {
        alert('Perfect!')
        score++;
      } else {
        alert('Oh no.');
      }

      document.write('<p>Congratulations you finished the quiz and got ' + score + ' correct!</p>');
