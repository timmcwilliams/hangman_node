var WORD = require("./word.js");
var INQUIRER = require("inquirer");


// 	optional added that clears the console
// 	to try uncomment requite and all 'CLEAR();' statments in code below.
//const CLEAR = require("clear");  

var guessesLeft = 10;
var currentWord;


var Hangman = ["dog", "cat", "king", "ape", "aardvark", "zebra"];

// Displays that word initally.
// Resets guessesLeft
// Finally calls playGame().
function startNewGame(){

	// This just graps the frist word in Hangman array and creates a WORD object out of it.
	currentWord = new WORD(Hangman.shift());
	guessesLeft = 10; // resets 
	//CLEAR();
	console.log("\n", currentWord.displayWord());// displays word initally
	playGame();
}//END startNewGame


// This function contains all the game play logic.
function playGame()
{
	// first thing I do is check is word is solved
	if(currentWord.checkIfWin())
	{
		console.log("You Win!!!");
		guessesLeft = 0 // if so this will trigger else below	
	}
	
	if(guessesLeft > 0)
	{		
		INQUIRER.prompt(
		[
			{
				type: "input",
				message: "Enter a letter to guess: ",
				name: "guess"
			}
		])
		.then(function(data){
			
			// if guess is in word. If NOT decrements guesseLeft	
			if(!currentWord.search(data.guess))
			{
				guessesLeft--;
			}	
			
			//CLEAR();
			console.log("\n", currentWord.displayWord());
			console.log("Your letter:", data.guess.toUpperCase(), "Guesses Left:", guessesLeft);
			playGame();
		});
	}	
	else
	{
		console.log("Game Over! Answer was '" + currentWord.wordStr + "'.");
		
		INQUIRER.prompt(
		[
			{
				type: "confirm",
				message: "Would you like to play again?",
				name: "confirm",
    			default: true		
			}
		])
		.then(function(data)
		{
			// data.confirm a boolean -  true or false
			if(data.confirm)  //if true
			{ 
				startNewGame(); 
			}
			else
			{
				console.log("Goodbye!")
			}	
		});			
	}//END of else			
}// END of playGame()

startNewGame();

