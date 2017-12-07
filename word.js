var LETTER = require("./letter.js");

// I add mehods using function prototypes. - Can mmove these up into the functions if wanted. 
var Word = function(word){

	this.wordStr = word.toUpperCase();
	this.wordArray = this.wordStr.split("");
	this.lettersArray = this.makeLettersArray(); 

}; 

// Turn word into an array of Letter objects
//====================================================
Word.prototype.makeLettersArray = function (){

	var letters = [];

	for(var i = 0; i < this.wordArray.length; i++)
	{
		letters.push(new LETTER(this.wordArray[i]));
	}

	return letters;
};

// Search 'lettersArray' for input letter 'char'

//_____________________________________________________________________
Word.prototype.search = function (char){

	char = char.toUpperCase(); //This converts the character to uppercase.
	
	// this is a flag to check wether char is a letter in lettersArray.
	var go = false;

	// Goes through each 'Letter' object in lettersArray
	// matches 'char' 
	for(var i = 0; i < this.lettersArray.length; i++)
	{
		if(this.lettersArray[i].letter === char)
		{
			this.lettersArray[i].guessed = true;
			go = true; 
		}	
	}
	return go;
};

//__________________________________________________________________

// Creates a string out of the letter in letterArray
// Uses Leter.display() method so letter may be letter or "_" hidden.
Word.prototype.displayWord = function (){

	var word = [];

	for(var i = 0; i < this.lettersArray.length; i++)
	{
		word.push(this.lettersArray[i].display());
		word.push(" "); // this add a space bewteen letters 
	}

	return word.join("");
};



// Check if all 'guessed' property of 'Letters' in lettersArray are true
// all letter guessed by user -> word solved
//__________________________________________________
Word.prototype.checkIfWin = function (){

	for(var i = 0; i < this.lettersArray.length; i++)
	{
		if(this.lettersArray[i].guessed == false)
		{
			return false;
		} 
	}
	return true;
};

module.exports = Word;