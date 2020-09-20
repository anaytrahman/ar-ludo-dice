var diceVal = document.querySelector("#dice");
var btnDice = document.querySelector("#throwDice");
var diceImg = document.querySelector("#diceImg");

var totalScore = document.querySelector("#totalScore");
var winStatus = document.querySelector("#winStatus");


let score = 0;


btnDice.addEventListener("click", function() {
	winStatus.innerHTML = 'Playing';
    var randomNumber = Math.floor((Math.random() * 6) + 1);

    if(diceVal) {
        diceVal.innerHTML = randomNumber
    }

    score += randomNumber;

    // update score in the score baord
    totalScore.innerHTML = score;

    // if score is 20 reset it
    if(score == 20 || score ==45) {
        score = 0;
		winStatus.innerHTML = "<h3>You Lost Try Again</h3>";
    } else if(score >= 50) {
        winStatus.innerHTML = "<h2>Winner !!!</h2>";
		score= 0;
    }
	
	

    


    // todo dual player -  with own score

    // this will change the dice according to the value
    diceImg.setAttribute('src', `./images/number-${randomNumber}.png`);
});




function throwDice() {
    
}

// todo : will have two section for each player
// todo : player will be switched automatically - same like normal ludo
// todo: score will be started after first 6
// todo : levels (easy, medium, difficult)