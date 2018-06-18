//setting initial variables to track at start of the game
var wins = 0;
var losses = 0;
var userScore = 0;

//this will generate a random number for the user to add up to
//value of number is with the 19-120 range
var compNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

//this will display that number to the user
$("#randomCompGen").html('Random Number: ' + compNumber);

//this will generate a random value for the crystals
//user will not see the value
var cryst1 = Math.floor(Math.random() * 12) + 1;
var cryst2 = Math.floor(Math.random() * 12) + 1;
var cryst3 = Math.floor(Math.random() * 12) + 1;
var cryst4 = Math.floor(Math.random() * 12) + 1;

//creates a reset function when the game round has ended
function reset(){
    userScore = 0;
    $('#currentScore').html(userScore);
    compNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#randomCompGen").html('Random Number: ' + compNumber);
    cryst1 = Math.floor(Math.random() * 12) + 1;
    cryst2 = Math.floor(Math.random() * 12) + 1;
    cryst3 = Math.floor(Math.random() * 12) + 1;
    cryst4 = Math.floor(Math.random() * 12) + 1;
};

//conditional statement to check whether score is equal to or over the set compNumber
function gameCheck(){
    if (userScore == compNumber){  //add point to Wins and resets the game for new round
        wins++;
        $('#win').html('Wins: '+ wins);
        alert("Good Job!");
        reset();
    }
    else if (userScore > compNumber){ //add point to Losses and resets the game for new round
        losses++;
        $('#lose').html('Losses: '+ losses);
        alert("Why don't we try that again?");
        reset();
    }
}

//assigning the values to the images and waits for event click from user 
//adds to the current score and displays the newest score
//runs gameCheck which has the reset nested within it

$('#crystal1').click(function(){
    userScore = userScore + cryst1;
    $('#currentScore').html(userScore);
    gameCheck();
});

$('#crystal2').click(function(){
    userScore = userScore + cryst2;
    $('#currentScore').html(userScore);
    gameCheck();
});

$('#crystal3').click(function(){
    userScore = userScore + cryst3;
    $('#currentScore').html(userScore);
    gameCheck();
});

$('#crystal4').click(function(){
    userScore = userScore + cryst4;
    $('#currentScore').html(userScore);
    gameCheck();
});