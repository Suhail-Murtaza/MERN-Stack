let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let playerMark = "x";
let computerMark = "o";
drawGame();

function drawGame() {
    let table = document.getElementById('gameBoard');
    let row, col;
    for (let i = 0; i < 3; i++) {
        row = table.insertRow(i);
        for (let j = 0; j < 3; j++) {
            col = row.insertCell(j);
            col.setAttribute('class', 'cells');
            col.setAttribute('id', i + "" + j);
            col.setAttribute('onclick', 'playGame(this.id)');
        }
    }
}

function playGame(id) {
    let val = id;
    if (id == "00" && document.getElementById('00').innerText == "") {
        document.getElementById(val).innerText = playerMark;
        board[0] = playerMark;

        let random = board[Math.floor(Math.random() * board.length - 1) + 1];
        board[random] = computerMark;

        if (random == 1) {
            document.getElementById('01').innerText = computerMark;
        }
        if (random == 2) {
            document.getElementById('02').innerText = computerMark;
        }
        if (random == 3) {
            document.getElementById('10').innerText = computerMark;
        }
        if (random == 4) {
            document.getElementById('11').innerText = computerMark;
        }
        if (random == 5) {
            document.getElementById('12').innerText = computerMark;
        }
        if (random == 6) {
            document.getElementById('20').innerText = computerMark;
        }
        if (random == 7) {
            document.getElementById('21').innerText = computerMark;
        }
        if (random == 8) {
            document.getElementById('22').innerText = computerMark;
        }
        console.log(board);

    } else if (id == "01" && document.getElementById('01').innerText == "") {
        document.getElementById(val).innerText = playerMark;
        board[1] = playerMark;

        let random = board[Math.floor(Math.random() * board.length - 1) + 1];
        board[random] = computerMark;
        if (random == 0 && (document.getElementById('00').innerText != playerMark || document.getElementById('00').innerText != computerMark)) {
            document.getElementById('00').innerText = computerMark;
        }
        if (random == 2 && (document.getElementById('02').innerText != playerMark || document.getElementById('02').innerText != computerMark)) {
            document.getElementById('02').innerText = computerMark;
        }
        if (random == 3 && (document.getElementById('10').innerText != playerMark || document.getElementById('10').innerText != computerMark)) {
            document.getElementById('10').innerText = computerMark;
        }
        if (random == 4 && (document.getElementById('11').innerText != playerMark || document.getElementById('11').innerText != computerMark)) {
            document.getElementById('11').innerText = computerMark;
        }
        if (random == 5 && (document.getElementById('12').innerText != playerMark || document.getElementById('12').innerText != computerMark)) {
            document.getElementById('12').innerText = computerMark;
        }
        if (random == 6 && (document.getElementById('20').innerText != playerMark || document.getElementById('20').innerText != computerMark)) {
            document.getElementById('20').innerText = computerMark;
        }
        if (random == 7 && (document.getElementById('21').innerText != playerMark || document.getElementById('21').innerText != computerMark)) {
            document.getElementById('21').innerText = computerMark;
        }
        if (random == 8 && (document.getElementById('22').innerText != playerMark || document.getElementById('22').innerText != computerMark)) {
            document.getElementById('22').innerText = computerMark;
        }

        console.log(board);
    } else if (id == "02" && document.getElementById('02').innerText == "") {
        document.getElementById(val).innerText = playerMark;
        board[2] = playerMark;

        let random = board[Math.floor(Math.random() * board.length - 1) + 1];
        board[random] = computerMark;
        if (random == 0 && (document.getElementById('00').innerText != playerMark || document.getElementById('00').innerText != computerMark)) {
            document.getElementById('00').innerText = computerMark;
        }
        if (random == 1 && (document.getElementById('01').innerText != playerMark || document.getElementById('01').innerText != computerMark)) {
            document.getElementById('01').innerText = computerMark;
        }
        if (random == 3 && (document.getElementById('10').innerText != playerMark || document.getElementById('10').innerText != computerMark)) {
            document.getElementById('10').innerText = computerMark;
        }
        if (random == 4 && (document.getElementById('11').innerText != playerMark || document.getElementById('11').innerText != computerMark)) {
            document.getElementById('11').innerText = computerMark;
        }
        if (random == 5 && (document.getElementById('12').innerText != playerMark || document.getElementById('12').innerText != computerMark)) {
            document.getElementById('12').innerText = computerMark;
        }
        if (random == 6 && (document.getElementById('20').innerText != playerMark || document.getElementById('20').innerText != computerMark)) {
            document.getElementById('20').innerText = computerMark;
        }
        if (random == 7 && (document.getElementById('21').innerText != playerMark || document.getElementById('21').innerText != computerMark)) {
            document.getElementById('21').innerText = computerMark;
        }
        if (random == 8 && (document.getElementById('22').innerText != playerMark || document.getElementById('22').innerText != computerMark)) {
            document.getElementById('22').innerText = computerMark;
        }

        console.log(board);


    } else if (id == "10" && document.getElementById('10').innerText == "") {
        document.getElementById(val).innerText = playerMark;
        board[3] = playerMark;

        let random = board[Math.floor(Math.random() * board.length - 1) + 1];
        board[random] = computerMark;
        if (random == 0 && (document.getElementById('00').innerText != playerMark || document.getElementById('00').innerText != computerMark)) {
            document.getElementById('00').innerText = computerMark;
        }
        if (random == 1 && (document.getElementById('01').innerText != playerMark || document.getElementById('01').innerText != computerMark)) {
            document.getElementById('01').innerText = computerMark;
        }
        if (random == 2 && (document.getElementById('02').innerText != playerMark || document.getElementById('02').innerText != computerMark)) {
            document.getElementById('02').innerText = computerMark;
        }
        if (random == 4 && (document.getElementById('11').innerText != playerMark || document.getElementById('11').innerText != computerMark)) {
            document.getElementById('11').innerText = computerMark;
        }
        if (random == 5 && (document.getElementById('12').innerText != playerMark || document.getElementById('12').innerText != computerMark)) {
            document.getElementById('12').innerText = computerMark;
        }
        if (random == 6 && (document.getElementById('20').innerText != playerMark || document.getElementById('20').innerText != computerMark)) {
            document.getElementById('20').innerText = computerMark;
        }
        if (random == 7 && (document.getElementById('21').innerText != playerMark || document.getElementById('21').innerText != computerMark)) {
            document.getElementById('21').innerText = computerMark;
        }
        if (random == 8 && (document.getElementById('22').innerText != playerMark || document.getElementById('22').innerText != computerMark)) {
            document.getElementById('22').innerText = computerMark;
        }
        console.log(board);


    } else if (id == "11" && document.getElementById('11').innerText == "") {
        document.getElementById(val).innerText = playerMark;
        board[4] = playerMark;

        let random = board[Math.floor(Math.random() * board.length - 1) + 1];
        board[random] = computerMark;
        if (random == 0 && (document.getElementById('00').innerText != playerMark || document.getElementById('00').innerText != computerMark)) {
            document.getElementById('00').innerText = computerMark;
        }
        if (random == 1 && (document.getElementById('01').innerText != playerMark || document.getElementById('01').innerText != computerMark)) {
            document.getElementById('01').innerText = computerMark;
        }
        if (random == 2 && (document.getElementById('02').innerText != playerMark || document.getElementById('02').innerText != computerMark)) {
            document.getElementById('02').innerText = computerMark;
        }
        if (random == 3 && (document.getElementById('10').innerText != playerMark || document.getElementById('10').innerText != computerMark)) {
            document.getElementById('10').innerText = computerMark;
        }
        if (random == 5 && (document.getElementById('12').innerText != playerMark || document.getElementById('12').innerText != computerMark)) {
            document.getElementById('12').innerText = computerMark;
        }
        if (random == 6 && (document.getElementById('20').innerText != playerMark || document.getElementById('20').innerText != computerMark)) {
            document.getElementById('20').innerText = computerMark;
        }
        if (random == 7 && (document.getElementById('21').innerText != playerMark || document.getElementById('21').innerText != computerMark)) {
            document.getElementById('21').innerText = computerMark;
        }
        if (random == 8 && (document.getElementById('22').innerText != playerMark || document.getElementById('22').innerText != computerMark)) {
            document.getElementById('22').innerText = computerMark;
        }

        console.log(board);


    } else if (id == "12" && document.getElementById('12').innerText == "") {
        document.getElementById(val).innerText = playerMark;
        board[5] = playerMark;

        let random = board[Math.floor(Math.random() * board.length - 1) + 1];
        board[random] = computerMark;
        if (random == 0 && (document.getElementById('00').innerText != playerMark || document.getElementById('00').innerText != computerMark)) {
            document.getElementById('00').innerText = computerMark;
        }
        if (random == 1 && (document.getElementById('01').innerText != playerMark || document.getElementById('01').innerText != computerMark)) {
            document.getElementById('01').innerText = computerMark;
        }
        if (random == 2 && (document.getElementById('02').innerText != playerMark || document.getElementById('02').innerText != computerMark)) {
            document.getElementById('02').innerText = computerMark;
        }
        if (random == 3 && (document.getElementById('10').innerText != playerMark || document.getElementById('10').innerText != computerMark)) {
            document.getElementById('10').innerText = computerMark;
        }
        if (random == 4 && (document.getElementById('11').innerText != playerMark || document.getElementById('11').innerText != computerMark)) {
            document.getElementById('11').innerText = computerMark;
        }
        if (random == 6 && (document.getElementById('20').innerText != playerMark || document.getElementById('20').innerText != computerMark)) {
            document.getElementById('20').innerText = computerMark;
        }
        if (random == 7 && (document.getElementById('21').innerText != playerMark || document.getElementById('21').innerText != computerMark)) {
            document.getElementById('21').innerText = computerMark;
        }
        if (random == 8 && (document.getElementById('22').innerText != playerMark || document.getElementById('22').innerText != computerMark)) {
            document.getElementById('22').innerText = computerMark;
        }

        console.log(board);


    } else if (id == "20" && document.getElementById('20').innerText == "") {
        document.getElementById(val).innerText = playerMark;
        board[6] = playerMark;

        let random = board[Math.floor(Math.random() * board.length - 1) + 1];
        board[random] = computerMark;
        if (random == 0 && (document.getElementById('00').innerText != playerMark || document.getElementById('00').innerText != computerMark)) {
            document.getElementById('00').innerText = computerMark;
        }
        if (random == 1 && (document.getElementById('01').innerText != playerMark || document.getElementById('01').innerText != computerMark)) {
            document.getElementById('01').innerText = computerMark;
        }
        if (random == 2 && (document.getElementById('02').innerText != playerMark || document.getElementById('02').innerText != computerMark)) {
            document.getElementById('02').innerText = computerMark;
        }
        if (random == 3 && (document.getElementById('10').innerText != playerMark || document.getElementById('10').innerText != computerMark)) {
            document.getElementById('10').innerText = computerMark;
        }
        if (random == 4 && (document.getElementById('11').innerText != playerMark || document.getElementById('11').innerText != computerMark)) {
            document.getElementById('11').innerText = computerMark;
        }
        if (random == 5 && (document.getElementById('12').innerText != playerMark || document.getElementById('12').innerText != computerMark)) {
            document.getElementById('12').innerText = computerMark;
        }
        if (random == 7 && (document.getElementById('21').innerText != playerMark || document.getElementById('21').innerText != computerMark)) {
            document.getElementById('21').innerText = computerMark;
        }
        if (random == 8 && (document.getElementById('22').innerText != playerMark || document.getElementById('22').innerText != computerMark)) {
            document.getElementById('22').innerText = computerMark;
        }

        console.log(board);


    } else if (id == "21" && document.getElementById('21').innerText == "") {
        document.getElementById(val).innerText = playerMark;
        board[7] = playerMark;

        let random = board[Math.floor(Math.random() * board.length - 1) + 1];
        board[random] = computerMark;
        if (random == 0 && (document.getElementById('00').innerText != playerMark || document.getElementById('00').innerText != computerMark)) {
            document.getElementById('00').innerText = computerMark;
        }
        if (random == 1 && (document.getElementById('01').innerText != playerMark || document.getElementById('01').innerText != computerMark)) {
            document.getElementById('01').innerText = computerMark;
        }
        if (random == 2 && (document.getElementById('02').innerText != playerMark || document.getElementById('02').innerText != computerMark)) {
            document.getElementById('02').innerText = computerMark;
        }
        if (random == 3 && (document.getElementById('10').innerText != playerMark || document.getElementById('10').innerText != computerMark)) {
            document.getElementById('10').innerText = computerMark;
        }
        if (random == 4 && (document.getElementById('11').innerText != playerMark || document.getElementById('11').innerText != computerMark)) {
            document.getElementById('11').innerText = computerMark;
        }
        if (random == 5 && (document.getElementById('12').innerText != playerMark || document.getElementById('12').innerText != computerMark)) {
            document.getElementById('12').innerText = computerMark;
        }
        if (random == 6 && (document.getElementById('20').innerText != playerMark || document.getElementById('20').innerText != computerMark)) {
            document.getElementById('20').innerText = computerMark;
        }
        if (random == 8 && (document.getElementById('22').innerText != playerMark || document.getElementById('22').innerText != computerMark)) {
            document.getElementById('22').innerText = computerMark;
        }

        console.log(board);


    } else if (id == "22" && document.getElementById('22').innerText == "") {
        document.getElementById(val).innerText = playerMark;
        board[8] = playerMark;

        let random = board[Math.floor(Math.random() * board.length - 1) + 1];
        board[random] = computerMark;
        if (random == 0 && (document.getElementById('00').innerText != playerMark || document.getElementById('00').innerText != computerMark)) {
            document.getElementById('00').innerText = computerMark;
        }
        if (random == 1 && (document.getElementById('01').innerText != playerMark || document.getElementById('01').innerText != computerMark)) {
            document.getElementById('01').innerText = computerMark;
        }
        if (random == 2 && (document.getElementById('02').innerText != playerMark || document.getElementById('02').innerText != computerMark)) {
            document.getElementById('02').innerText = computerMark;
        }
        if (random == 3 && (document.getElementById('10').innerText != playerMark || document.getElementById('10').innerText != computerMark)) {
            document.getElementById('10').innerText = computerMark;
        }
        if (random == 4 && (document.getElementById('11').innerText != playerMark || document.getElementById('11').innerText != computerMark)) {
            document.getElementById('11').innerText = computerMark;
        }
        if (random == 5 && (document.getElementById('12').innerText != playerMark || document.getElementById('12').innerText != computerMark)) {
            document.getElementById('12').innerText = computerMark;
        }
        if (random == 6 && (document.getElementById('20').innerText != playerMark || document.getElementById('20').innerText != computerMark)) {
            document.getElementById('20').innerText = computerMark;
        }
        if (random == 7 && (document.getElementById('21').innerText != playerMark || document.getElementById('21').innerText != computerMark)) {
            document.getElementById('21').innerText = computerMark;
        }

        console.log(board);

    }
    winCase();

}

function winCase() {
    if (document.getElementById('00').innerText == "x" && document.getElementById('01').innerText == "x" && document.getElementById('02').innerText == "x") {
        document.getElementById('paragraph').innerHTML = "You  Win";
    } else if (document.getElementById('00').innerText == "x" && document.getElementById('11').innerText == "x" && document.getElementById('22').innerText == "x") {
        document.getElementById('paragraph').innerHTML = "You  Win";
    } else if (document.getElementById('00').innerText == "x" && document.getElementById('10').innerText == "x" && document.getElementById('20').innerText == "x") {
        document.getElementById('paragraph').innerHTML = "You  Win";
    } else if (document.getElementById('10').innerText == "x" && document.getElementById('11').innerText == "x" && document.getElementById('12').innerText == "x") {
        document.getElementById('paragraph').innerHTML = "You  Win";
    } else if (document.getElementById('20').innerText == "x" && document.getElementById('21').innerText == "x" && document.getElementById('22').innerText == "x") {
        document.getElementById('paragraph').innerHTML = "You  Win";
    } else if (document.getElementById('01').innerText == "x" && document.getElementById('11').innerText == "x" && document.getElementById('21').innerText == "x") {
        document.getElementById('paragraph').innerHTML = "You  Win";
    } else if (document.getElementById('02').innerText == "x" && document.getElementById('12').innerText == "x" && document.getElementById('22').innerText == "x") {
        document.getElementById('paragraph').innerHTML = "You  Win";
    } else if (document.getElementById('20').innerText == "x" && document.getElementById('11').innerText == "x" && document.getElementById('02').innerText == "x") {
        document.getElementById('paragraph').innerHTML = "You  Win";
    } else if (document.getElementById('00').innerText == "o" && document.getElementById('01').innerText == "o" && document.getElementById('02').innerText == "o") {
        document.getElementById('paragraph').innerHTML = "Computer  Wins";
    } else if (document.getElementById('00').innerText == "o" && document.getElementById('11').innerText == "o" && document.getElementById('22').innerText == "o") {
        document.getElementById('paragraph').innerHTML = "Computer  Wins";
    } else if (document.getElementById('00').innerText == "o" && document.getElementById('10').innerText == "o" && document.getElementById('20').innerText == "o") {
        document.getElementById('paragraph').innerHTML = "Computer  Wins";
    } else if (document.getElementById('10').innerText == "o" && document.getElementById('11').innerText == "o" && document.getElementById('12').innerText == "o") {
        document.getElementById('paragraph').innerHTML = "Computer  Wins";
    } else if (document.getElementById('20').innerText == "o" && document.getElementById('21').innerText == "o" && document.getElementById('22').innerText == "o") {
        document.getElementById('paragraph').innerHTML = "Computer  Wins";
    } else if (document.getElementById('01').innerText == "o" && document.getElementById('11').innerText == "o" && document.getElementById('21').innerText == "o") {
        document.getElementById('paragraph').innerHTML = "Computer  Wins";
    } else if (document.getElementById('02').innerText == "o" && document.getElementById('12').innerText == "o" && document.getElementById('22').innerText == "o") {
        document.getElementById('paragraph').innerHTML = "Computer  Wins";
    } else if (document.getElementById('20').innerText == "o" && document.getElementById('11').innerText == "o" && document.getElementById('02').innerText == "o") {
        document.getElementById('paragraph').innerHTML = "Computer  Wins";
    } else if (document.getElementById('00').innerText != "" && document.getElementById('01').innerText != "" && document.getElementById('02').innerText != "" && document.getElementById('10').innerText != "" && document.getElementById('11').innerText != "" && document.getElementById('12').innerText != "" && document.getElementById('20').innerText != "" && document.getElementById('21').innerText != "" && document.getElementById('22').innerText != "") {
        document.getElementById('paragraph').innerHTML = "Game Drawn";
    }
}