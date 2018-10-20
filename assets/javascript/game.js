$(document).ready(function(){
    //generate the letters array
    letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //chose a letter randomly
    computerchoice = letters[Math.floor(Math.random()*26)];
    //variables to keep track of wining and losing counting and how many guesses left
    win = 0;
    loss = 0;
    guessesleft = 10;
    //a function to reset all the variables
    function reset(){
        $("#guessesleft").text(10);
        guessesleft = $("#guessesleft").text();
        $("#computerguess").text(computerchoice);
        computerchoice = letters[Math.floor(Math.random()*26)];
        $("#alreadyguessed").empty();
    }

    $(document).keyup(function(event){
        //show the key pressed
        $("#alreadyguessed").append(event.key+", ");
        //show how many guesses left
        $("#guessesleft").text(--guessesleft);
        //check if there is no tries left
        if(guessesleft == 0){
            alert("you lost");
            $("#lossesno").text(++loss);
            reset();
        }
        //check if the player hit the correct letter and win
        if(event.key == computerchoice){
            alert("you won");
            $("#winsno").text(++win);
            reset();
        }
    });
});