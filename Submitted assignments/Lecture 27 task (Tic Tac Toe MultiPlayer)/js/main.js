let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let player1;
let player2;
let player1Mark = "x";
let player2Mark = "o";
let turn = 0;

drawGame();

function fetchNames() {
    player1 = document.getElementById('player1Name').value;
    player2 = document.getElementById('player2Name').value;

    document.getElementById('player1Name').value = '';
    document.getElementById('player2Name').value = '';

    if (player1 == '' && player2 == '') {
        alert("Please insert names of players");
    }
}

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
    turn++;

    if (turn % 2 != 0) {
        if (id == "00" && document.getElementById('00').innerText == "") {
            document.getElementById(val).innerText = player1Mark;
            board[0] = player1Mark;

            console.log(board);

        } else if (id == "01" && document.getElementById('01').innerText == "") {
            document.getElementById(val).innerText = player1Mark;
            board[1] = player1Mark;

            console.log(board);
        } else if (id == "02" && document.getElementById('02').innerText == "") {
            document.getElementById(val).innerText = player1Mark;
            board[2] = player1Mark;

            console.log(board);


        } else if (id == "10" && document.getElementById('10').innerText == "") {
            document.getElementById(val).innerText = player1Mark;
            board[3] = player1Mark;
            console.log(board);


        } else if (id == "11" && document.getElementById('11').innerText == "") {
            document.getElementById(val).innerText = player1Mark;
            board[4] = player1Mark;


            console.log(board);


        } else if (id == "12" && document.getElementById('12').innerText == "") {
            document.getElementById(val).innerText = player1Mark;
            board[5] = player1Mark;

            console.log(board);


        } else if (id == "20" && document.getElementById('20').innerText == "") {
            document.getElementById(val).innerText = player1Mark;
            board[6] = player1Mark;


            console.log(board);


        } else if (id == "21" && document.getElementById('21').innerText == "") {
            document.getElementById(val).innerText = player1Mark;
            board[7] = player1Mark;


            console.log(board);


        } else if (id == "22" && document.getElementById('22').innerText == "") {
            document.getElementById(val).innerText = player1Mark;
            board[8] = player1Mark;
            console.log(board);

        }
    } else if (turn % 2 == 0) {
        if (id == "00" && document.getElementById('00').innerText == "") {
            document.getElementById(val).innerText = player2Mark;
            board[0] = player2Mark;

            console.log(board);

        } else if (id == "01" && document.getElementById('01').innerText == "") {
            document.getElementById(val).innerText = player2Mark;
            board[1] = player2Mark;

            console.log(board);
        } else if (id == "02" && document.getElementById('02').innerText == "") {
            document.getElementById(val).innerText = player2Mark;
            board[2] = player2Mark;

            console.log(board);


        } else if (id == "10" && document.getElementById('10').innerText == "") {
            document.getElementById(val).innerText = player2Mark;
            board[3] = player2Mark;
            console.log(board);


        } else if (id == "11" && document.getElementById('11').innerText == "") {
            document.getElementById(val).innerText = player2Mark;
            board[4] = player2Mark;


            console.log(board);


        } else if (id == "12" && document.getElementById('12').innerText == "") {
            document.getElementById(val).innerText = player2Mark;
            board[5] = player2Mark;

            console.log(board);


        } else if (id == "20" && document.getElementById('20').innerText == "") {
            document.getElementById(val).innerText = player2Mark;
            board[6] = player2Mark;


            console.log(board);


        } else if (id == "21" && document.getElementById('21').innerText == "") {
            document.getElementById(val).innerText = player2Mark;
            board[7] = player2Mark;


            console.log(board);


        } else if (id == "22" && document.getElementById('22').innerText == "") {
            document.getElementById(val).innerText = player2Mark;
            board[8] = player2Mark;
            console.log(board);

        }
    }





    winCase();

}

function winCase() {
    if (document.getElementById('00').innerText == "x" && document.getElementById('01').innerText == "x" && document.getElementById('02').innerText == "x") {
        document.getElementById('paragraph').innerHTML = player1 + " Wins";
    } else if (document.getElementById('00').innerText == "x" && document.getElementById('11').innerText == "x" && document.getElementById('22').innerText == "x") {
        document.getElementById('paragraph').innerHTML = player1 + " Wins";
    } else if (document.getElementById('00').innerText == "x" && document.getElementById('10').innerText == "x" && document.getElementById('20').innerText == "x") {
        document.getElementById('paragraph').innerHTML = player1 + " Wins";
    } else if (document.getElementById('10').innerText == "x" && document.getElementById('11').innerText == "x" && document.getElementById('12').innerText == "x") {
        document.getElementById('paragraph').innerHTML = player1 + " Wins";
    } else if (document.getElementById('20').innerText == "x" && document.getElementById('21').innerText == "x" && document.getElementById('22').innerText == "x") {
        document.getElementById('paragraph').innerHTML = player1 + " Wins";
    } else if (document.getElementById('01').innerText == "x" && document.getElementById('11').innerText == "x" && document.getElementById('21').innerText == "x") {
        document.getElementById('paragraph').innerHTML = player1 + " Wins";
    } else if (document.getElementById('02').innerText == "x" && document.getElementById('12').innerText == "x" && document.getElementById('22').innerText == "x") {
        document.getElementById('paragraph').innerHTML = player1 + " Wins";
    } else if (document.getElementById('20').innerText == "x" && document.getElementById('11').innerText == "x" && document.getElementById('02').innerText == "x") {
        document.getElementById('paragraph').innerHTML = player1 + " Wins";
    } else if (document.getElementById('00').innerText == "o" && document.getElementById('01').innerText == "o" && document.getElementById('02').innerText == "o") {
        document.getElementById('paragraph').innerHTML = player2 + " Wins";
    } else if (document.getElementById('00').innerText == "o" && document.getElementById('11').innerText == "o" && document.getElementById('22').innerText == "o") {
        document.getElementById('paragraph').innerHTML = player2 + " Wins";
    } else if (document.getElementById('00').innerText == "o" && document.getElementById('10').innerText == "o" && document.getElementById('20').innerText == "o") {
        document.getElementById('paragraph').innerHTML = player2 + " Wins";
    } else if (document.getElementById('10').innerText == "o" && document.getElementById('11').innerText == "o" && document.getElementById('12').innerText == "o") {
        document.getElementById('paragraph').innerHTML = player2 + " Wins";
    } else if (document.getElementById('20').innerText == "o" && document.getElementById('21').innerText == "o" && document.getElementById('22').innerText == "o") {
        document.getElementById('paragraph').innerHTML = player2 + " Wins";
    } else if (document.getElementById('01').innerText == "o" && document.getElementById('11').innerText == "o" && document.getElementById('21').innerText == "o") {
        document.getElementById('paragraph').innerHTML = player2 + " Wins";
    } else if (document.getElementById('02').innerText == "o" && document.getElementById('12').innerText == "o" && document.getElementById('22').innerText == "o") {
        document.getElementById('paragraph').innerHTML = player2 + " Wins";
    } else if (document.getElementById('20').innerText == "o" && document.getElementById('11').innerText == "o" && document.getElementById('02').innerText == "o") {
        document.getElementById('paragraph').innerHTML = player2 + " Wins";
    } else if (document.getElementById('00').innerText != "" && document.getElementById('01').innerText != "" && document.getElementById('02').innerText != "" && document.getElementById('10').innerText != "" && document.getElementById('11').innerText != "" && document.getElementById('12').innerText != "" && document.getElementById('20').innerText != "" && document.getElementById('21').innerText != "" && document.getElementById('22').innerText != "") {
        document.getElementById('paragraph').innerHTML = "Game Drawn";
    }
}