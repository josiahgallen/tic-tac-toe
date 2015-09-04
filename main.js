var prompt = require('prompt-sync').prompt;
/*-----------------------------------------*/
var move = null;
var player1 = undefined;
var player2 = undefined;
var myTurn = true;
var totalMoves = 0;
var tie = true;
var winner = true;
var forfeit = true;
var no = true;
var tieCheck = [];
var numOnBoard = {
    one: '1 1',
    two: '2 1',
    three: '3 1',
    four: '1 2',
    five: '2 2',
    six: '3 2',
    seven: '1 3',
    eight: '2 3',
    nine: '3 3'
};
var winCheck = {
    col1: '',
    col2: '',
    col3: '',
    row1: '',
    row2: '',
    row3: '',
    diag1: '',
    diag2: ''
};
var gameBoard = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// function howManyPlayers {
//     var players = 0;
//     while (players < )
//     console.log('Please enter the number of players! (1/2)');
//     players = 
// }

function printBoard() {
    console.log('Current Game Board - Total Moves(' + totalMoves + ')');
    console.log('   1   2   3');
    console.log(' ~~~~~~~~~~~~~');
    console.log('1| ' + gameBoard[0][0] + ' | ' + gameBoard[1][0] + ' | ' + gameBoard[2][0] + ' |');
    console.log(' ~~~~~~~~~~~~~');
    console.log('2| ' + gameBoard[0][1] + ' | ' + gameBoard[1][1] + ' | ' + gameBoard[2][1] + ' |');
    console.log(' ~~~~~~~~~~~~~');
    console.log('3| ' + gameBoard[0][2] + ' | ' + gameBoard[1][2] + ' | ' + gameBoard[2][2] + ' |');
    console.log(' ~~~~~~~~~~~~~');
};

function isWin() {
    for (var key in winCheck) {
        if (winCheck[key] === 'XXX') {
            console.log('Congratulations! ' + player1 + ' WINS!')
            winner = !winner;
        } else if (winCheck[key] === 'OOO') {
            console.log('Congratulations! ' + player2 + ' WINS!')
            winner = !winner;
        }
    }
};

function isTie() {
    if (tieCheck.length > 8) {
        console.log('Sorry ' + player1 + ' & ' + player2 + ' we have a tie...');
        tie = !tie;
    }
};

function boardReset() {
    gameBoard = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    totalMoves = 0;
    winner = true;
    tie = true;
    tieCheck = [];
    winCheck = {
    col1: '',
    col2: '',
    col3: '',
    row1: '',
    row2: '',
    row3: '',
    diag1: '',
    diag2: ''
};
}

function turn() {
    var currentPlayer = '';
        if (!myTurn) {
            currentPlayer = player2;
            move = 'O';
        } else {
            currentPlayer = player1;
            move = 'X';
        }

    console.log(currentPlayer + ' please enter coordinates of for next move... ex:(1 1)');
    var input = prompt().toLowerCase();

    if (input === 'forfeit') {
        input = input;
    } else if (input.charAt(1) !== ' ' || input.length > 3) {
        input = 'nospaces';
    } else if (input !== numOnBoard.one && input !== numOnBoard.two && input !== numOnBoard.three && input !== numOnBoard.four && input !== numOnBoard.five && input !== numOnBoard.six && input !== numOnBoard.seven && input !== numOnBoard.eight && input !== numOnBoard.nine) {
        input = 'outbounds';
    } else {
        input = input;
    }

    switch (input) {
        case '1 1':
            if (gameBoard[0][0] !== ' ') {
                console.log('Invalid input: that space is already taken');
                turn();
            } else {
                gameBoard[0][0] = move;
                myTurn = !myTurn;
                winCheck.col1 += move;
                winCheck.row1 += move;
                winCheck.diag1 += move;
                tieCheck.push('T');
                totalMoves++;
            }
            break;   
        case '2 1':
            if (gameBoard[1][0] !== ' ') {
                console.log('Invalid input: that space is already taken');
                turn();
            } else {
                gameBoard[1][0] = move;
                myTurn = !myTurn;
                winCheck.col2 += move;
                winCheck.row1 += move;
                tieCheck.push('T');
                totalMoves++;
            }
            break;
        case '3 1':
            if (gameBoard[2][0] !== ' ') {
                console.log('Invalid input: that space is already taken');
                turn();
            } else {
                gameBoard[2][0] = move;
                myTurn = !myTurn;
                winCheck.col3 += move;
                winCheck.row1 += move;
                winCheck.diag2 += move;
                tieCheck.push('T');
                totalMoves++;
            }
            break;
        case '1 2':
            if (gameBoard[0][1] !== ' ') {
                console.log('Invalid input: that space is already taken');
                turn();
            } else {
                gameBoard[0][1] = move;
                myTurn = !myTurn;
                winCheck.col1 += move;
                winCheck.row2 += move;
                tieCheck.push('T');
                totalMoves++;
            }
            break;
        case '2 2':
            if (gameBoard[1][1] !== ' ') {
                console.log('Invalid input: that space is already taken');
                turn();
            } else {
                gameBoard[1][1] = move;
                myTurn = !myTurn;
                winCheck.col2 += move;
                winCheck.row2 += move;
                winCheck.diag1 += move;
                winCheck.diag2 += move;
                tieCheck.push('T');
                totalMoves++;
            }
            break;
        case '3 2':
            if (gameBoard[2][1] !== ' ') {
                console.log('Invalid input: that space is already taken');
                turn();
            } else {
                gameBoard[2][1] = move;
                myTurn = !myTurn;
                winCheck.col3 += move;
                winCheck.row2 += move;
                tieCheck.push('T');
                totalMoves++;
            }
            break;
        case '1 3':
            if (gameBoard[0][2] !== ' ') {
                console.log('Invalid input: that space is already taken');
                turn();
            } else {
                gameBoard[0][2] = move;
                myTurn = !myTurn;
                winCheck.col1 += move;
                winCheck.row3 += move;
                winCheck.diag2 += move;
                tieCheck.push('T');
                totalMoves++;
            }
            break;
        case '2 3':
            if (gameBoard[1][2] !== ' ') {
                console.log('Invalid input: that space is already taken');
                turn();
            } else {
                gameBoard[1][2] = move;
                myTurn = !myTurn;
                winCheck.col2 += move;
                winCheck.row3 += move;
                tieCheck.push('T');
                totalMoves++;
            }
            break;
        case '3 3':
            if (gameBoard[2][2] !== ' ') {
                console.log('Invalid input: that space is already taken');
                turn();
            } else {
                gameBoard[2][2] = move;
                myTurn = !myTurn;
                winCheck.col3 += move;
                winCheck.row3 += move;
                winCheck.diag1 += move;
                tieCheck.push('T');
                totalMoves++;
            }
            break;
        case 'outbounds':
            console.log('Input invalid: those coordinates are outside the playable area');
            turn();
            break;
        case 'nospaces':
            console.log('Invalid input: you must enter the x and y coordinates seperated by spaces');
            turn();
            break;
        case 'forfeit':
            if (myTurn === true) {
                console.log(player1 + ' forfeits, ' + player2 + ' Wins!')
                forfeit = !forfeit;
            } else {
                console.log(player2 + ' forfeits, ' + player1 + ' Wins!')
                forfeit = !forfeit;
            }
            break;
        default:
            console.log('Invalid input: you must enter the x and y coordinates seperated by spaces');
            turn();
    }
};

function play(message) {
    var keepPlaying = '';
    if (message !== undefined) {
        playAgain();
    } 

    function playAgain () {
        console.log(message);
        keepPlaying = prompt().toLowerCase();
        if (keepPlaying !== 'y' && keepPlaying !== 'n') {
            console.log('Invalid input:(y/n)?')
            playAgain();
        } else if (keepPlaying === 'y') {
            return;
        } else if (keepPlaying === 'n') {
            console.log('Thanks for playing.')
        }
    }

    if (keepPlaying === 'n') {
        no = !no;
        return;
    }

        console.log('Player 1 enter name please:')
        player1 = prompt().toUpperCase();
        if (player1 === undefined) {
            player1 = 'Player 1';
        } else if (player1 === 'FORFEIT') {
            if (player2 === undefined) {
                player2 = 'Player 2';
            }
            player1 = 'Player 1';
            console.log(player1 + ' forfeits, ' + player2 + ' Wins!');
            forfeit = !forfeit;
        }
        if (forfeit) {
            console.log('Player 2 enter name please:')
            player2 = prompt().toUpperCase();
            if (player2 === undefined) {
                player2 = 'Player 2';
            } else if (player2 === 'FORFEIT') {
                player2 = 'Player 2';
                console.log(player2 + ' forfeits, ' + player1 + ' Wins!')
                forfeit = !forfeit;
            }
            printBoard();
        }

    while (forfeit && winner && tie) {
        turn();
        printBoard();
        isWin();
        isTie();
    };
    boardReset;
    while (forfeit && no) {
        boardReset();
        play('Do you want to play again?(y/n) If you want to end the game enter forfeit at any time.');

    }
};

play();
