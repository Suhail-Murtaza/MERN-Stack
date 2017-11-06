let randomNumber;
let guessedNumber;
let j;

function start() {
    document.getElementById('paragraph').innerHTML = "You have 5 tries left";
    randomNumber = 0
    guessedNumber = 0
    j = 4;
    myFunction();
    clearField();
    document.getElementById('guessButton').innerHTML = "<button id='butn' class='btn btn-info' type='button' onclick='guess()'>Guess</button>"
}

function myFunction() {
    for (let i = 1; i <= 10; i++) {
        randomNumber = Math.floor(Math.random() * i + 1);
    }
}

function clearField() {
    document.getElementById('guessField').value = '';
}


function guess() {
    if (j >= 1) {
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
            } else if (j == 1 && guessedNumber != randomNumber) {
                document.getElementById('paragraph').innerHTML = "You have " + j + " try left";
            } else {
                document.getElementById('paragraph').innerHTML = "You have " + j + " tries left";
            }
        }
    } else {
        document.getElementById('paragraph').innerHTML = "You Lost :-P See You Later, Alligator ;)";
        document.getElementById('restartButton').innerHTML = "<button onclick='restart()' class='btn btn-outline-danger btn-block' type='button'>Restart</button>";
        document.getElementById('restartButton').style.display = "block";
        document.getElementById('guessField').disabled = "true";
    }
    console.log(randomNumber + " " + guessedNumber);

    clearField();
    myFunction();
    j--;
}


function restart() {
    document.getElementById('restartButton').style.display = "none";
    document.getElementById('guessField').removeAttribute('disabled');
    start();

}