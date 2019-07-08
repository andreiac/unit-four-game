

//character list

var characters = ["barf", "loneStar", "presidentSkroob", "princessVespa"];

//function for random number selection
function randomIntFromInterval(min, max) // min and max included
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//character worth- randomly generated between 1 and 12

var barf = randomIntFromInterval(1, 12);
var loneStar = randomIntFromInterval(1, 12);
var presidentSkroob = randomIntFromInterval(1, 12);
var princessVespa = randomIntFromInterval(1, 12);


//target score- randomly generated between 19 and 120

var targetScore = randomIntFromInterval(19, 120);

var currentScore = 0;
currentScore = document.getElementById("#currentScore");
targetScore = document.getElementById("#targetScore");
var wins = 0;
var losses = 0;

//write info to html
$("currentScore").html(currentScore);
$('#targetScore').html(targetScore);
$('#wins').text(wins);
$('#losses').text(losses);

barf = randomIntFromInterval(1, 12);
loneStar = randomIntFromInterval(1, 12);
presidentSkroob = randomIntFromInterval(1, 12);
princessVespa = randomIntFromInterval(1, 12);
targetScore = randomIntFromInterval(19, 120);
currentScore = 0;
wins = 0;
losses = 0;
$("#currentScore").text(currentScore);
$("#targetScore").text(targetScore);


/*  I went down a bad rabbit hole here
document.getElementById('#barf').innerHTML = barf;
document.getElementById('#loneStar').innerHTML = loneStar;
document.getElementById('#presidentSkroob').innerHTML = presidentSkroob;
document.getElementById('#princessVespa').innerHTML = princessVespa;
document.getElementById('#targetScore').innerHTML = targetScore;
document.getElementById('#currentScore').innerHTML = currentScore;
*/

//reset game function
function reset() {
    barf = randomIntFromInterval(1, 12);
    loneStar = randomIntFromInterval(1, 12);
    presidentSkroob = randomIntFromInterval(1, 12);
    princessVespa = randomIntFromInterval(1, 12);
    targetScore = randomIntFromInterval(19, 120);
    currentScore = 0;
    $("#currentScore").text(currentScore);
    $("#targetScore").text(targetScore);

}


//add wins to total wins
function youWin() {
    alert("You won!");
    wins++;
    $('#wins').text(wins);
    reset();
}
//addes the losses to the userTotal
function youLose() {
    alert("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
}

//click on characters
$('#barf').on('click', function () {
    currentScore = currentScore + barf;
    $('#currentScore').text(currentScore);
    //win or lose
    if (currentScore == targetScore) {
        youWin();
    }
    else if (currentScore > targetScore) {
        youLose();
    }
})
$('#loneStar').on('click', function () {
    currentScore = currentScore + loneStar;
    $('#currentScore').text(currentScore);
    //win or lose
    if (currentScore == targetScore) {
        youWin();
    }
    else if (currentScore > targetScore) {
        youLose();
    }
})
$('#princessVespa').on('click', function () {
    currentScore = currentScore + princessVespa;
    $('#currentScore').text(currentScore);
    //win or lose
    if (currentScore == targetScore) {
        youWin();
    }
    else if (currentScore > targetScore) {
        youLose();
    }
})
$('#presidentSkroob').on('click', function () {
    currentScore = currentScore + presidentSkroob;
    $('#currentScore').text(currentScore);
    //win or lose
    if (currentScore == targetScore) {
        youWin();
    }
    else if (currentScore > targetScore) {
        youLose();
    }
})

