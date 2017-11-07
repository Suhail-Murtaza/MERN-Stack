let randomNumber;
let guessedNumber;
let counter;

function start() {
    document.getElementById('paragraph').innerHTML = "You have 5 tries left";
    randomNumber = 0
    guessedNumber = 0
    counter = 4;
    generateRandomNumber();
    document.getElementById('guessButton').innerHTML = "<button id='butn' class='btn btn-info' type='button' onclick='guess()'>Guess</button>"
}

//Function for generating Random number from 1 to 10. 
function generateRandomNumber() {
    for (let i = 1; i <= 10; i++) {
        randomNumber = Math.floor(Math.random() * i + 1);
    }
}

//Function to clear the text field after click on guess button
function clearField() {
    document.getElementById('guessField').value = '';
}

// Function to take the guessed number value and compare it with randomly generated number value, and generate output according to condition
function guess() {
    if (counter >= 1) {
        guessedNumber = document.getElementById('guessField').value;
        if (guessedNumber < 1 || guessedNumber > 10 || guessedNumber == "") {
            alert("Number must be between 1 & 10");
            clearField();
            return;
        } else {
            if (guessedNumber == randomNumber) {
                document.getElementById('paragraph').innerHTML = "You win";
                document.getElementById('restartButton').innerHTML = "<button onclick='restart()' class='btn btn-outline-success btn-block' type='button'>Restart</button>";
                document.getElementById('restartButton').style.display = "block";
                document.getElementById('guessField').disabled = "true";
            } else if (counter == 1 && guessedNumber != randomNumber) {
                document.getElementById('paragraph').innerHTML = "You have " + counter + " try left";
            } else {
                document.getElementById('paragraph').innerHTML = "You have " + counter + " tries left";
            }
        }
    } else {
        document.getElementById('paragraph').innerHTML = "You Lost";
        document.getElementById('restartButton').innerHTML = "<button onclick='restart()' class='btn btn-outline-danger btn-block' type='button'>Restart</button>";
        document.getElementById('restartButton').style.display = "block";
        document.getElementById('guessField').disabled = "true";
    }


    counter--;
    generateRandomNumber();
    console.log(randomNumber + " " + guessedNumber);
    clearField();
}

//Function to restart the game
function restart() {
    document.getElementById('restartButton').style.display = "none";
    document.getElementById('guessField').removeAttribute('disabled');
    start();

}