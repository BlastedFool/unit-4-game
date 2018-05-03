//create variable for generating a random number between 19-120 to match

var randomNumber = Math.floor(Math.random() * 101 ) + 19;

$("#numToGuess").html(randomNumber);
console.log (randomNumber);

//give random number value to crystal between 1-12

var crystal_1 = Math.floor(Math.random() * 12 + 1);
var crystal_2 =  Math.floor(Math.random() * 12 + 1);
var crystal_3 =  Math.floor(Math.random() * 12 + 1);
var crystal_4 =  Math.floor(Math.random() * 12 + 1);

//set variables of what the user sees for totals wins a losses

var wins = 0;
var losses = 0;
var userTotal = 0;

//push the var to the html

$("#wins").html(wins);
$("#losses").html(losses);
$("#totalNum").html(userTotal);


//create a reset function when the game is won or lost

var reset = function() {
    //set user back to 0 !Very Important!
    userTotal = 0;
    randomNum = Math.floor(Math.random() * 120 + 19);
    var crystal_1 = Math.floor(Math.random() * 12 + 1);
    var crystal_2 =  Math.floor(Math.random() * 12 + 1);
    var crystal_3 =  Math.floor(Math.random() * 12 + 1);
    var crystal_4 =  Math.floor(Math.random() * 12 + 1);
    
    console.log(randomNum);

    $("#numToGuess").html(randomNum);
    $("#totalNum").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);

}

//create win lose conditions
//if player wins, increase win counter and send alert that they won
//if player loses then, increase lose counter and send an alert that they lost

var winCondition = function(){
    if (userTotal == randomNumber){
        wins++;
        alert("You have won, wow what a surprise");
        $("#wins").html(wins);
        reset();

    } else if (userTotal > randomNumber){
        losses++;
        alert("Ha you lost, what a scrub");
        $("losses").html(losses);
        reset();
    }
}

//click events for crystals using (on.click) a gem, the random number is added to the user score
// display number in the class totalNum ("#totalNum")

$("#crystal_1").on("click", function (){
    userTotal = userTotal + crystal_1;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCondition();

})

$("#crystal_2").on("click", function (){
    userTotal = userTotal + crystal_2;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCondition();
})

$("#crystal_3").on("click", function (){
    userTotal = userTotal + crystal_3;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCondition();
})

$("#crystal_4").on("click", function (){
    userTotal = userTotal + crystal_4;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCondition();
})
