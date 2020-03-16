window.onload = function () {
    setUpBoard();
}

function setUpBoard() {
    var board = document.getElementById("board");
    console.log(board.innerHTML);
    for(i = 1; i < 10; i++)
    {
        var divToAdd = '<div id="gameTile' + i + '" class="gameTile" onClick="tileClicked(this.id)"> </div>'
        board.innerHTML += divToAdd;
        if(i%3==0){
            board.innerHTML += '<div style="clear: both"></div>'
        }
    }
}

var counter = 1;
var checkedX = new Array(10);
var checkedO = new Array(10);

function tileClicked(clickedId) {
    var clickedTile = document.getElementById(clickedId);
    var clickedTileNumber = clickedId.split("gameTile")[1];
    console.log(clickedTileNumber);
    clickedTile.onclick = null;

    if(counter %2 == 0) {
        clickedTile.innerHTML = "X";
        checkedX[clickedTileNumber] = true;
    } else {
        clickedTile.innerHTML = "O";
        checkedO[clickedTileNumber] = true;
    }

    if(checkScore()){
        resetBoard();
    }
    else{
        counter++;
    }
}

function checkScore() {
    if((checkedO[1] && checkedO[2] && checkedO[3]) ||
       (checkedO[4] && checkedO[5] && checkedO[6]) ||
       (checkedO[7] && checkedO[8] && checkedO[9]) ||
       (checkedO[1] && checkedO[5] && checkedO[9]) ||
       (checkedO[3] && checkedO[5] && checkedO[7]) ||
       (checkedO[1] && checkedO[4] && checkedO[7]) ||
       (checkedO[2] && checkedO[5] && checkedO[8]) ||
       (checkedO[3] && checkedO[6] && checkedO[9])) {
        alert("Wygrywa kółko!");
        return true;
    } else if((checkedX[1] && checkedX[2] && checkedX[3]) ||
              (checkedX[4] && checkedX[5] && checkedX[6]) ||
              (checkedX[7] && checkedX[8] && checkedX[9]) ||
              (checkedX[1] && checkedX[5] && checkedX[9]) ||
              (checkedX[3] && checkedX[5] && checkedX[7]) ||
              (checkedX[1] && checkedX[4] && checkedX[7]) ||
              (checkedX[2] && checkedX[5] && checkedX[8]) ||
              (checkedX[3] && checkedX[6] && checkedX[9])) {
        alert("Wygrywa krzyżyk!")
        return true;
    } else {
        return false;
    }
}

function resetBoard() {
    location.reload();
}