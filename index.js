//ex01: Output your name 

console.log('Hello, Tejas here!');

//ex02: read the name of your user

var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I know your name? \n');

//ex03: welcome your user
//ex04: do it all together

console.log('Welcome ' + userName + '!!');

//ex05: print right/wrong if greater than 25
//ex06: increment score if the right answer
var score = 0;

console.log("Let us know how much you know about me? \n");

var userAnswerForAge = readlineSync.question('Is my age greater than 20? (yes or no)\n');

if(userAnswerForAge === "yes"){
  console.log(`You're right!`);
  score++;
}else{
  console.log(`Ops... You're wrong`);
}

//ex07: function to add two numbers

function addTwoNumbers(number1, number2){
 return number1 + number2;
}

var resultOfOnePlustwo = addTwoNumbers(1, 2);

console.log('result of 1 + 2 is ' + resultOfOnePlustwo);

//ex08: function to check the answer

function askQuestion(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(`You're right!`);
    score++;
  }else{
    console.log(`Ops... You're wrong`);
  }
}

askQuestion('Which city did I study? \n', 'Bangalore');

//ex09: print your name 5 times

for(var i = 0; i <= 5; i++){
  console.log('Hello ' + userName + '\n');
}

//homework: star pattern (with bonus)

for(var i = 1; i <= 5; i++){
  var stars = []
  for(var j = 1; j <= i; j++){
    stars.push('*')
  }
  console.log(stars.join(''));
}

for(var i = 1; i <= 5; i++){
  var stars = []
  for(var j = 5; j >=i; j--){
    stars.push('*')
  }
  console.log(stars.join(''));
}


//ex10: list grocery items to buy

var groceryList = ['rice', 'lentils', 'milk', 'nuts'];

console.log('first item ', groceryList[0]);
console.log('second item ', groceryList[2]);
console.log('last item ', groceryList[groceryList.length - 1]);

//ex11: print every item on the list

for(var i = 0; i < groceryList.length; i++){
 console.log('Grocery Item ' + i + ' ' + groceryList[i]); 
}

//ex12: club info about a superhero together

var superheroes = [
  {
    name: 'ironman',
    universe: 'marvel'
  },
  {
    name: 'superman',
    universe: 'DC'
  }
]

//ex13: put a list of questions together

var questionsList = [
  {
    question: `Which superhero holds a hammer? \n`,
    answer: 'Thor'
  },
  {
    question: `Which superhero is from krypton? \n`,
    answer: 'Superman'
  }
]

//ex14: club everything to make the game

readlineSync.question('Press any key to continue');
console.clear();
console.log("Now Let's play a super hero quiz");
score = 0;

questionsList.forEach(function(questionObj){
  askQuestion(questionObj.question, questionObj.answer);
});

console.log('Your Score is ' + score + '/' + questionsList.length);



