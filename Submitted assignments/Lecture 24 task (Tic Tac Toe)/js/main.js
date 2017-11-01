let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

drawGame();

function drawGame() {
    let table = document.getElementById('myTable');
    let row, col;
    for (let i = 0; i < 3; i++) {
        row = table.insertRow(i);
        for (let j = 0; j < 3; j++) {
            col = row.insertCell(j);
            col.setAttribute('class', 'cells');
            col.setAttribute('id', i + "" + j);
            col.setAttribute('onclick', 'play(this.id)');
        }
    }
}

function play(id) {
    let val = id;
    if (id == "00") {
        document.getElementById(val).innerText = "x";
        board = ["x", 1, 2, 3, 4, 5, 6, 7, 8];

        console.log(board);
    } else if (id == "01") {
        document.getElementById(val).innerText = "x";
        board = [0, "x", 2, 3, 4, 5, 6, 7, 8];
        console.log(board);
    } else if (id == "02") {
        document.getElementById(val).innerText = "x";
        board = [0, 1, "x", 3, 4, 5, 6, 7, 8];
        console.log(board);
    } else if (id == "10") {
        document.getElementById(val).innerText = "x";
        board = [0, 1, 2, "x", 4, 5, 6, 7, 8];
        console.log(board);
    } else if (id == "11") {
        document.getElementById(val).innerText = "x";
        board = [0, 1, 2, 3, "x", 5, 6, 7, 8];
        console.log(board);
    } else if (id == "12") {
        document.getElementById(val).innerText = "x";
        board = [0, 1, 2, 3, 4, "x", 6, 7, 8];
        console.log(board);
    } else if (id == "20") {
        document.getElementById(val).innerText = "x";
        board = [0, 1, 2, 3, 4, 5, "x", 7, 8];
        console.log(board);
    } else if (id == "21") {
        document.getElementById(val).innerText = "x";
        board = [0, 1, 2, 3, 4, 5, 6, "x", 8];
        console.log(board);
    } else if (id == "22") {
        document.getElementById(val).innerText = "x";
        board = [0, 1, 2, 3, 4, 5, 6, 7, "x"];
        console.log(board);
    }
}