// winning number, travler score and win & loss
var winningNumber = Math.floor(Math.random() * 300) + 30;
var travelScore = 0;
var van = Math.floor(Math.random() * 80) + 30;
var road = Math.floor(Math.random() * 10) + 0;
var cabin = Math.floor(Math.random() * 30) + 9;
var lake = Math.floor(Math.random() * 0) + 10;
var wins =0;
var losses =0;

$(document).ready(function () {

    function gameReset() {
        $("#travel-guess").html(winningNumber);
        winningNumber = Math.floor(Math.random() * 300) + 30;
        travelScore = 0;
        van = Math.floor(Math.random() * 80) + 30;
        road = Math.floor(Math.random() * 10) + 0;
        cabin = Math.floor(Math.random() * 30) + 9;
        lake = Math.floor(Math.random() * 0) + 10;
    }

    $("#travel-guess").html(winningNumber);
    $("#Wins").html(wins);
    $("#Losses").html(losses);

    $("#van").click(function (event) {
        travelScore = travelScore + van;
        $(van).text(travelScore);
        $("#travelers-number").html(travelScore);
        if (travelScore == winningNumber) {
            alert("you won a trip");
            wins++;
            $("#Wins").html(wins);
            gameReset();
        } else if (travelScore > winningNumber) {
            alert("no trip for you");
            losses++;
            $("#Losses").html(losses);
            gameReset();
        }

    });

    $("#road").click(function (event) {
        travelScore = travelScore + van;
        $(road).text(travelScore);
        $("#travelers-number").html(travelScore);
        if (travelScore == winningNumber) {
            alert("you won a trip");
            wins++;
            $("#Wins").html(wins);
            gameReset();
        } else if (travelScore > winningNumber) {
            alert("no trip for you");
            losses++;
            $("#Losses").html(losses);
            gameReset();
        }

    });
    $("#cabin").click(function (event) {
        travelScore = travelScore + van;
        $(cabin).text(travelScore);
        $("#travelers-number").html(travelScore);
        if (travelScore == winningNumber) {
            alert("you won a trip");
            wins++;
            $("#Wins").html(wins);
            gameReset();
        } else if (travelScore > winningNumber) {
            alert("no trip for you");
            losses++;
            $("#Losses").html(losses);
            gameReset();
        }

    });
    $("#lake").click(function (event) {
        travelScore = travelScore + van;
        $(lake).text(travelScore);
        $("#travelers-number").html(travelScore);
        if (travelScore == winningNumber) {
            alert("you won a trip");
            wins++;
            $("#Wins").html(wins);
            gameReset();
        } else if (travelScore > winningNumber) {
            alert("no trip for you");
            losses++;
            $("#Losses").html(losses);
            gameReset();
        }

    });

});

// loop for the numbers
// jquery images for the crsytals
// Assign each picture a random number
//if/then win/lose

