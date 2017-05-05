var BasicCard = require("./BasicCard.js");

//var clozeCard = require("./ClozeCard.js");




var inquirer = require('inquirer');



var basicCardsArr = [
{
	front: 'Who was the 2016 NBA MVP?',
	back: 'Stephen Curry'
},
{
	front: 'Who was the 2016 NFL MVP?',
	back: 'Matt Ryan'
},
{
	front: 'Who was the 2016 NHL MVP?',
	back: 'Patrick Kane'
},
{
	front: 'Who was the 2016 MLB MVP?',
	back: 'Kris Bryant'
}

];

//array for my questions^^

var basicInputArr = [];

//array for my constructors (BasicCard)

for (var i = 0; i < basicInputArr.length; i++) {
var newQuestion = new BasicCard(basicCardsArr[i].front, basicCardsArr[i].back);
	basicInputArr.push(newQuestion);
	console.log(newQuestion);
};
//I thought this would let me create new constructors based on my other array,
//but I deleted it and it worked fine, so I guess i'm not really using constructors
//I did have my BasicCard working through the exports, but I realize now i'm not channeling
// that at all anymore.

var count = 0;

function selectGame() {

	inquirer.prompt([

	{
		type: 'list',
		name: 'game',
		message: 'What type of trivia do you want to play?',
		choices: ['Basic?', 'Cloze?']
	}
		]).then(function(answers) {
			if (answers.game === 'Basic?') {

				console.log("OK, let's play the basic version")
				console.log("-----------------------------------------")
				askQuestion();
			


			}

			else {
				console.log("sorry, Cloze is out of order. We're going to play the Basic version");
				askQuestion();
				console.log("-----------------------------------------")
				askQuestion();
			};

		});
}


	
selectGame();



function askQuestion() {

	if (count < basicCardsArr.length) {

	

	
	inquirer.prompt([
	{
		name: "currentCard",
		message: basicCardsArr[count].front 
	},

		]).then(function(data) {

			if (data.currentCard.toLowerCase() === basicCardsArr[count].back.toLowerCase()) {
				console.log("correct")
			}

			else { 
				console.log("wrong, the correct answer was " + basicCardsArr[count].back);	
			}

			count++;

			askQuestion();


		});

	}
}

//^^ this function loops through my array of questions and displays the front, 
//then takes the answer and judges it against the back answer. If they are the same
//it logs correct, otherwise it is wrong, and it moves on to the next question

// askQuestion();


//I was using recursion here earlier, but when I implemented my selectGame()
//function it would start the askQuesion part of the game on top of the options.
// I got super stuck on this, if I didnt waste all that time, I would figure this out.
//


	

// 


// if (count===basicCardsArr.length) {

//  inquirer.prompt({
//       name: "again",
//       type: "confirm",
//       message: "Would you like to play another again?",
//       choices: ["Sure", "No, I'm good"]
//     }).then(function(answer) {
//       if (answer.again === "Sure") {
//         // starts new match with the same players
//         startGame();
//       }
//       else {
//         console.log("Come back again soon!");
//       }
//     });
// }
// }

// gameOver();

    