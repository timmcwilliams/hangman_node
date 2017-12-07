

var Letter = function (letter)
{
	this.letter = letter;
	this.guessed = false;
};

// returns letter if guessed = true, otherwise returns '_'
// Used in word.js inside .displayWord()
Letter.prototype.display = function(){

	if(this.guessed) {
		return this.letter;
	}
	
	else {
		return '_';	
	}
};

module.exports = Letter;


