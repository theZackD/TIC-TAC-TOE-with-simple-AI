// Declaring Variables:--------------------------------------------------------------------------------------//

const FullHTML = document.querySelector('html')

if (localStorage.getItem('PageState') != null){
    FullHTML.innerHTML = '<!DOCTYPE html>' + localStorage.getItem('PageState')
}

const Game_container = document.querySelector('.game-container')
const Main_container = document.querySelector('.main-container')

let board = document.querySelector('.gameboard')
let squares = document.querySelectorAll('.square')
const Restart_Menu = document.querySelector('.overlay')
const Reset_Menu = document.querySelector('.overlay-2')

const X_outline = '<img src="images/icon-x-outline.svg" alt="" class="x-outline">'
const O_outline = '<img src="images/icon-o-outline.svg" alt="" class="x-outline">'

const WinBanner = document.querySelector('.winner')

const Xwin = '<img id="X" src="images/icon-x.svg" alt=""><p id="TAKESX">TAKES THE ROUND</p>'
const Owin = '<img id="O" src="images/icon-o.svg" alt=""><p id="TAKESO">TAKES THE ROUND</p>'

let WIN_LOSS = document.getElementById('WON-LOST')

const O = '<img id="O" src="images/icon-o.svg" alt=""></img>'
const X = '<img id="X" src="images/icon-x.svg" alt=""></img>'

const WinX = '<img src="images/icon-x-neg.svg" alt=""></img>'
const WinO = '<img src="images/icon-o-neg.svg" alt=""></img>'

const Xturn = '<img src="images/icon-x-3rd.svg" alt="" width="20" height="20"></img>'
const Oturn = '<img src="images/icon-o-3rd.svg" alt="" width="20" height="20"></img>'

const XscoreDisp = document.querySelector('#Xscore')
const OscoreDisp = document.querySelector('#Oscore')
const TiescoreDisp = document.querySelector('#TiesScore')

const Quit = document.querySelector('#QUIT')
const Next_Round = document.querySelector('#NEXT')

const Cancel = document.getElementById('CANCEL')
const Restart_conf = document.getElementById('RESTART-CONF')

const X_Player = document.querySelector('#X-Player')
const O_Player = document.querySelector('#O-Player')

let Xscore = 0
let Oscore = 0
let Tiescore = 0

const TURN = document.getElementById('JSTurn')

let GameBoard = [['','',''],
                 ['','',''],
                 ['','','']];

const Mark_Choice = document.getElementById('CheckBox')


//New Game:-------------------------------------------

const New_CPU = document.getElementById('btn-1')
const New_Human = document.getElementById('btn-2')

let WinnerX = ''
let WinnerO = ''
let WinnerTie = ''

function New_Game(){
    Game_container.classList.remove('OFF');
    Main_container.classList.add('OFF');
    if(Mark_Choice.checked){
        WinnerX = 'YOU WON!'
        WinnerO = 'OH NO, YOU LOST...'
    } else {
        WinnerX = 'OH NO, YOU LOST...'
        WinnerO = 'YOU WON!'
    }
}

function New_Game_Human(){

    New_Game();
    CPU_var = false
    if(Mark_Choice.checked){
        X_Player.innerHTML = 'X (P1)'
        O_Player.innerHTML = 'O (P2)'
    } else{
        X_Player.innerHTML = 'X (P2)'
        O_Player.innerHTML = 'O (P1)'
    }
}
New_Human.addEventListener('click', New_Game_Human)

//Functions:-------------------------------------------------------------------------------------------------//

function Play(element) {
    let ID = element.id
    element.classList.add("red")
}

let c = 0
  
function transpose(matrix) {
    return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
  }


// function sumArray(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++ ) {
//     sum += arr[i];
//     }

//     return sum
// }

function sumArray(arr){
    const initialValue = '';
    const sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return sumWithInitial;
}

function sumMatrix(Mat){
    sum = ''
    for (i = 0; i <= Mat.length; i++){
        linesum = sumArray(Mat[i]);
        sum += linesum
    }
    return sum
}

function Xbanner(){

}

function AddSymbol(event) {

    if(event.target.innerHTML != X_outline && event.target.innerHTML != O_outline){

        return;

    } else if(c%2 == 0){
        event.target.innerHTML = X;
        c++;

        let Row = +event.target.id[2] - 1;
        let Column = +event.target.id[3] - 1;

        GameBoard[Row][Column] = "X";
        TURN.innerHTML = Oturn;

        squares.forEach(function(square){
            if (square.innerHTML == X_outline){
                square.innerHTML = O_outline
            }
        })

        
    } else {
        event.target.innerHTML = O;
        c++;

        let Row = +event.target.id[2] - 1;
        let Column = +event.target.id[3] - 1;

        GameBoard[Row][Column] = "O";
        TURN.innerHTML = Xturn;

        squares.forEach(function(square){
            if (square.innerHTML == O_outline){
                square.innerHTML = X_outline
            }
        })
    }
}

function CheckForWinner(){

    let TrGB = transpose(GameBoard)


    if((GameBoard[0][0] == GameBoard[1][1]) && (GameBoard[1][1] == GameBoard[2][2]) && (GameBoard[0][0] != '')){

        Restart_Menu.id = "ON";
        
        if (GameBoard[0][0] == 'X'){

            Xscore++;
            XscoreDisp.innerHTML = Xscore;
            OscoreDisp.innerHTML = Oscore;
            WIN_LOSS.innerHTML = WinnerX;

            document.getElementById('sq11').classList.add('Xsquare');
            document.getElementById('sq11').innerHTML = WinX;

            document.getElementById('sq22').classList.add('Xsquare');
            document.getElementById('sq22').innerHTML = WinX;

            document.getElementById('sq33').classList.add('Xsquare');
            document.getElementById('sq33').innerHTML = WinX;

            WinBanner.innerHTML = Xwin;

        }

        else {

            Oscore++;
            XscoreDisp.innerHTML = Xscore;
            OscoreDisp.innerHTML = Oscore;
            WIN_LOSS.innerHTML = WinnerO;

            document.getElementById('sq11').classList.add('Osquare');
            document.getElementById('sq11').innerHTML = WinO;

            document.getElementById('sq22').classList.add('Osquare');
            document.getElementById('sq22').innerHTML = WinO;

            document.getElementById('sq33').classList.add('Osquare');
            document.getElementById('sq33').innerHTML = WinO;

            WinBanner.innerHTML = Owin;

        }

    } else if ((GameBoard[0][2] == GameBoard[1][1]) && (GameBoard[1][1] == GameBoard[2][0]) && (GameBoard[1][1] != '')){

        Restart_Menu.id = "ON"

        if (GameBoard[1][1] == 'X'){

            Xscore++;
            XscoreDisp.innerHTML = Xscore;
            OscoreDisp.innerHTML = Oscore;
            WIN_LOSS.innerHTML = WinnerX;

            document.getElementById('sq13').classList.add('Xsquare');
            document.getElementById('sq13').innerHTML = WinX;

            document.getElementById('sq22').classList.add('Xsquare');
            document.getElementById('sq22').innerHTML = WinX;

            document.getElementById('sq31').classList.add('Xsquare');
            document.getElementById('sq31').innerHTML = WinX;


            WinBanner.innerHTML = Xwin;

        }

        else {

            Oscore++;
            XscoreDisp.innerHTML = Xscore;
            OscoreDisp.innerHTML = Oscore;
            WIN_LOSS.innerHTML = WinnerO;

            document.getElementById('sq13').classList.add('Osquare');
            document.getElementById('sq13').innerHTML = WinO;

            document.getElementById('sq22').classList.add('Osquare');
            document.getElementById('sq22').innerHTML = WinO;

            document.getElementById('sq31').classList.add('Osquare');
            document.getElementById('sq31').innerHTML = WinO;

            WinBanner.innerHTML = Owin;

        }

    }

    if (sumArray(GameBoard[0]).length + sumArray(GameBoard[1]).length + sumArray(GameBoard[2]).length == 9){

        Restart_Menu.id = "ON";

        Tiescore++;
        TiescoreDisp.innerHTML = Tiescore;
        WinBanner.innerHTML = '<p id="NoTAKES">ROUND TIED</p>';
        WIN_LOSS.innerHTML = ''
    }

    for (let i = 0; i < GameBoard.length; i++ ){
        
        if (sumArray(GameBoard[i]) === 'XXX' || sumArray(GameBoard[i]) === 'OOO'){

            Restart_Menu.id = "ON";

            const ID1 = 'sq' + (i+1) + 1;
            const ID2 = 'sq' + (i+1) + 2;
            const ID3 = 'sq' + (i+1) + 3;

            if (GameBoard[i][0] == "X"){

                Xscore++;
                XscoreDisp.innerHTML = Xscore;
                OscoreDisp.innerHTML = Oscore;
                WIN_LOSS.innerHTML = WinnerX;

                document.getElementById(ID1).classList.add('Xsquare');
                document.getElementById(ID1).innerHTML = WinX;

                document.getElementById(ID2).classList.add('Xsquare');
                document.getElementById(ID2).innerHTML = WinX;

                document.getElementById(ID3).classList.add('Xsquare');
                document.getElementById(ID3).innerHTML = WinX;

                WinBanner.innerHTML = Xwin;
                            
            }

            else {

                Oscore++;
                XscoreDisp.innerHTML = Xscore;
                OscoreDisp.innerHTML = Oscore;
                WIN_LOSS.innerHTML = WinnerO;

                document.getElementById(ID1).classList.add('Osquare');
                document.getElementById(ID1).innerHTML = WinO;

                document.getElementById(ID2).classList.add('Osquare');
                document.getElementById(ID2).innerHTML = WinO;

                document.getElementById(ID3).classList.add('Osquare');
                document.getElementById(ID3).innerHTML = WinO;

                WinBanner.innerHTML = Owin;

            }
            
        } else if (sumArray(TrGB[i]) === 'XXX' || sumArray(TrGB[i]) === 'OOO'){

            Restart_Menu.id = "ON";

            const ID1 = 'sq' + 1 + (i+1);
            const ID2 = 'sq' + 2 + (i+1);
            const ID3 = 'sq' + 3 + (i+1);

            if (GameBoard[0][i] == "X"){

                Xscore++;
                XscoreDisp.innerHTML = Xscore;
                OscoreDisp.innerHTML = Oscore;
                WIN_LOSS.innerHTML = WinnerX;

                document.getElementById(ID1).classList.add('Xsquare');
                document.getElementById(ID1).innerHTML = WinX;

                document.getElementById(ID2).classList.add('Xsquare');
                document.getElementById(ID2).innerHTML = WinX;

                document.getElementById(ID3).classList.add('Xsquare');
                document.getElementById(ID3).innerHTML = WinX;

                WinBanner.innerHTML = Xwin;
                            
            }

            else {

                Oscore++;
                XscoreDisp.innerHTML = Xscore;
                OscoreDisp.innerHTML = Oscore;
                WIN_LOSS.innerHTML = WinnerO;

                document.getElementById(ID1).classList.add('Osquare');
                document.getElementById(ID1).innerHTML = WinO;

                document.getElementById(ID2).classList.add('Osquare');
                document.getElementById(ID2).innerHTML = WinO;

                document.getElementById(ID3).classList.add('Osquare');
                document.getElementById(ID3).innerHTML = WinO;

                WinBanner.innerHTML = Owin;

            }
        }
    };
}

function MakeMove(event){
    AddSymbol(event);
    CheckForWinner();
}

function FirstMoveCPU_X(){

    let i = TwoArray[Math.floor(Math.random()*2)];
    let j = TwoArray[Math.floor(Math.random()*2)];

    const ID1 = 'sq' + (i+1) + (j+1)

    document.getElementById(ID1).innerHTML = X
    GameBoard[i][j] = 'X'
    c = 1;

    TURN.innerHTML = Oturn;

    squares.forEach(function(square){
        if (square.innerHTML == X_outline){
            square.innerHTML = O_outline
        }
    });

}

const TwoArray = [0,2]

function Inverse_Index(k){
    if (k > 0){
        k -=2
    } else {
        k += 2
    }

    return k
}

function Trans_Index(k){
    if (k == 0){
        k += 1
    } else {
        k -= 1
    }
}

function CPU_MakeMove_X(){

    X_indexes_rows = []
    X_indexes_cols = []
    O_indexes_rows = []
    O_indexes_cols = []
    Available_rows = []
    Available_cols = []

    for (n = 0; n < GameBoard.length; n++){
        for (m = 0; m < GameBoard.length; m++){
            if (GameBoard[n][m] == 'X'){
                X_indexes_rows.push(n)
                X_indexes_cols.push(m)
            } else if (GameBoard[n][m] == 'O'){
                O_indexes_rows.push(n)
                O_indexes_cols.push(m)
            } else {
                Available_rows.push(n)
                Available_cols.push(m)
            }
        }
    };

    if((+sumArray(GameBoard[0]) + +sumArray(GameBoard[1]) + +sumArray(GameBoard[2])) == 2){

        if(GameBoard[1][1] == 'O'){

            let r = Inverse_Index(X_indexes_rows[0]);
            let col = Inverse_Index(X_indexes_cols[0]);

            const ID1 = 'sq' + (r+1) + (col+1);
            document.getElementById(ID1).innerHTML = X;
            GameBoard[r][col] = 'X';

            c++;

            TURN.innerHTML = Oturn;

            squares.forEach(function(square){
                if (square.innerHTML == X_outline){
                    square.innerHTML = O_outline
                }
            });

        } else if(GameBoard[0][0] == 'O' || GameBoard[0][2] == 'O' || GameBoard[2][0] == 'O' || GameBoard[2][2] == 'O'){

            if(GameBoard[0][0] == ''){

                document.getElementById('sq11').innerHTML = X
                GameBoard[0][0] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            } else if(GameBoard[0][2] == ''){

                document.getElementById('sq13').innerHTML = X
                GameBoard[0][2] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            } else if(GameBoard[2][0] == ''){

                document.getElementById('sq31').innerHTML = X
                GameBoard[2][0] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            } else if(GameBoard[2][2] == ''){

                document.getElementById('sq33').innerHTML = X
                GameBoard[2][2] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            }

        } else if(GameBoard[1][0] == 'O' || GameBoard[1][2] == 'O' || GameBoard[0][1] == 'O' || GameBoard[2][1] == 'O'){

            if(GameBoard[X_indexes_rows[0]][Trans_Index(X_indexes_cols[0])] == ''){

                
                const ID1 = 'sq' + (X_indexes_rows[0]+1) + (Inverse_Index(X_indexes_cols[0])+1);
                document.getElementById(ID1).innerHTML = X
                GameBoard[X_indexes_rows[0]][Inverse_Index(X_indexes_cols[0])] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            } else {

                const ID1 = 'sq' + (Inverse_Index(X_indexes_rows[0])+1) + (X_indexes_cols[0]+1);
                document.getElementById(ID1).innerHTML = X
                GameBoard[Inverse_Index(X_indexes_rows[0])][X_indexes_cols[0]] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            }

        }

    }

    else if((+sumArray(GameBoard[0]) + +sumArray(GameBoard[1]) + +sumArray(GameBoard[2])) == 4){
        
        Consecutive_O = []


        for (k = 0; k < GameBoard.length; k++){
            for (l = 0; l < GameBoard.length; l++){

                if(GameBoard[k][l] == GameBoard[k][(l+1) % 3] && GameBoard[k][l] == 'O' && GameBoard[k][(l+2) % 3 == '']){

                    Consecutive_O.push([[k,l],[k, (l+1) % 3]])

                } else if(GameBoard[k][l] == GameBoard[(k+1) % 3][l] && GameBoard[k][l] == 'O' && GameBoard[(k+2) % 3][l] == ''){

                    Consecutive_O.push([[k,l],[(k+1) % 3, l]])

                }
            }
        };

        Consecutive_Corner = []

        for (k = 0; k < 2; k++){

            if(GameBoard[k*2][0] == GameBoard[Inverse_Index(k*2)][Inverse_Index(0)] && GameBoard[k*2][0] != ''){

                Consecutive_Corner.push([[k*2, 0],[Inverse_Index(k*2), Inverse_Index(0)]])

            }

        }

        Consecutive_X = []

        for (k = 0; k < GameBoard.length; k++){
            for (l = 0; l < GameBoard.length; l++){

                if(GameBoard[k][l] == GameBoard[k][(l+1) % 3] && GameBoard[k][l] == 'X' && GameBoard[k][(l+2) % 3] == ''){

                    Consecutive_X.push([[k,l],[k, (l+1) % 3]])

                } else if(GameBoard[k][l] == GameBoard[(k+1) % 3][l] && GameBoard[k][l] == 'X' && GameBoard[(k+2) % 3][l] == ''){

                    Consecutive_X.push([[k,l],[(k+1) % 3, l]])

                }
            }
        };

        if(Consecutive_Corner.length > 0 && GameBoard[1][1] == ''){

            document.getElementById('sq22').innerHTML = X
            GameBoard[1][1] = 'X'
            c++;
    
            TURN.innerHTML = Oturn;
    
            squares.forEach(function(square){
                if (square.innerHTML == X_outline){
                    square.innerHTML = O_outline
                }
            });

        }

        else if(Consecutive_X.length > 0){

            next_move = Consecutive_X[0][0]
            next_2 = Consecutive_X[0][1]

            if(next_move[0] == next_2[0]){

                const ID1 = 'sq' + (Consecutive_X[0][0][0]+1) + ((Consecutive_X[0][0][1] + 2) % 3+1)

                document.getElementById(ID1).innerHTML = X
                GameBoard[Consecutive_X[0][0][0]][(Consecutive_X[0][0][1] + 2) % 3] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            } else {

                const ID1 = 'sq' + ((Consecutive_X[0][0][0] + 2) % 3+1) + (Consecutive_X[0][0][1]+1)

                document.getElementById(ID1).innerHTML = X
                GameBoard[(Consecutive_X[0][0][0] + 2) % 3][Consecutive_X[0][0][1]] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            }
        }
        
        else if(Consecutive_O.length > 0){

            let next_move = Consecutive_O[0][0]
            let next_2 = Consecutive_O[0][1]

            if(Consecutive_O[0][0][0] == Consecutive_O[0][1][0]){

                let next_row = Consecutive_O[0][0][0];
                let next_col = (Consecutive_O[0][0][1] + 2) % 3;

                const ID1 = 'sq' + (Consecutive_O[0][0][0] + 1) + ((Consecutive_O[0][0][1] + 2) % 3 + 1)

                document.getElementById(ID1).innerHTML = X
                GameBoard[Consecutive_O[0][0][0]][(Consecutive_O[0][0][1] + 2) % 3] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            } else {

                let next_row = (Consecutive_O[0][0][0] + 2) % 3;
                let next_col = Consecutive_O[0][0][1];

                const ID1 = 'sq' + ((Consecutive_O[0][0][0] + 2) % 3 + 1) + (Consecutive_O[0][0][1]+1)

                document.getElementById(ID1).innerHTML = X
                GameBoard[(Consecutive_O[0][0][0] + 2) % 3][Consecutive_O[0][0][1]] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            }

                            
        }

        else {

            if (GameBoard[0][0] == 'X' && GameBoard[0][1] == 'O' && GameBoard[1][0] == 'O' && GameBoard[2][2] == ''){

                document.getElementById('sq33').innerHTML = X;
                GameBoard[2][2] = 'X';
                c++;

                TURN.innerHTML = Oturn;
    
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            }

            else if (GameBoard[0][2] == 'X' && GameBoard[0][1] == 'O' && GameBoard[1][2] == 'O' && GameBoard[2][0] == ''){

                document.getElementById('sq31').innerHTML = X;
                GameBoard[2][0] = 'X';
                c++;

                TURN.innerHTML = Oturn;
    
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });


            }

            else if (GameBoard[2][0] == 'X' && GameBoard[1][0] == 'O' && GameBoard[2][1] == 'O' && GameBoard[0][2] == ''){

                document.getElementById('sq13').innerHTML = X;
                GameBoard[0][2] = 'X';
                c++;

                TURN.innerHTML = Oturn;
    
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });


            }
            else if (GameBoard[2][2] == 'X' && GameBoard[1][2] == 'O' && GameBoard[2][1] == 'O' && GameBoard[0][0] == ''){

                document.getElementById('sq11').innerHTML = X;
                GameBoard[0][0] = 'X';
                c++;

                TURN.innerHTML = Oturn;
    
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });


            }

            else {

                let Index = Math.floor(Math.random()*Available_rows.length);

                let row = Available_rows[Index];
                let col = Available_cols[Index];

                const ID1 = 'sq' + (row+1) + (col+1)

                document.getElementById(ID1).innerHTML = X
                GameBoard[row][col] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            }
        }
            
    }

    else {


        Consecutive_O = []


        for (k = 0; k < GameBoard.length; k++){
            for (l = 0; l < GameBoard.length; l++){

                if(GameBoard[k][l] == GameBoard[k][(l+1) % 3] && GameBoard[k][l] == 'O' && GameBoard[k][(l+2) % 3 == '']){

                    Consecutive_O.push([[k,l],[k, (l+1) % 3]])

                } else if(GameBoard[k][l] == GameBoard[(k+1) % 3][l] && GameBoard[k][l] == 'O' && GameBoard[(k+2) % 3][l] == ''){

                    Consecutive_O.push([[k,l],[(k+1) % 3, l]])

                }
            }
        };

        Consecutive_Corner = []

        for (k = 0; k < 2; k++){

            if(GameBoard[k*2][0] == GameBoard[Inverse_Index(k*2)][Inverse_Index(0)] && GameBoard[k*2][0] != ''){

                Consecutive_Corner.push([[k*2, 0],[Inverse_Index(k*2), Inverse_Index(0)]])

            }

        }

        Consecutive_X = []

        for (k = 0; k < GameBoard.length; k++){
            for (l = 0; l < GameBoard.length; l++){

                if(GameBoard[k][l] == GameBoard[k][(l+1) % 3] && GameBoard[k][l] == 'X' && GameBoard[k][(l+2) % 3] == ''){

                    Consecutive_X.push([[k,l],[k, (l+1) % 3]])

                } else if(GameBoard[k][l] == GameBoard[(k+1) % 3][l] && GameBoard[k][l] == 'X' && GameBoard[(k+2) % 3][l] == ''){

                    Consecutive_X.push([[k,l],[(k+1) % 3, l]])

                }
            }
        };

        if(Consecutive_Corner.length > 0 && GameBoard[1][1] == ''){

            document.getElementById('sq22').innerHTML = X
            GameBoard[1][1] = 'X'
            c++;
    
            TURN.innerHTML = Oturn;
    
            squares.forEach(function(square){
                if (square.innerHTML == X_outline){
                    square.innerHTML = O_outline
                }
            });

        }

        else if(Consecutive_X.length > 0){

            next_move = Consecutive_X[0][0]
            next_2 = Consecutive_X[0][1]

            if(next_move[0] == next_2[0]){

                const ID1 = 'sq' + (Consecutive_X[0][0][0]+1) + ((Consecutive_X[0][0][1] + 2) % 3+1)

                document.getElementById(ID1).innerHTML = X
                GameBoard[Consecutive_X[0][0][0]][(Consecutive_X[0][0][1] + 2) % 3] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            } else {

                const ID1 = 'sq' + ((Consecutive_X[0][0][0] + 2) % 3+1) + (Consecutive_X[0][0][1]+1)

                document.getElementById(ID1).innerHTML = X
                GameBoard[(Consecutive_X[0][0][0] + 2) % 3][Consecutive_X[0][0][1]] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            }
        }
        
        else if(Consecutive_O.length > 0){

            let next_move = Consecutive_O[0][0]
            let next_2 = Consecutive_O[0][1]

            if(Consecutive_O[0][0][0] == Consecutive_O[0][1][0]){

                let next_row = Consecutive_O[0][0][0];
                let next_col = (Consecutive_O[0][0][1] + 2) % 3;

                const ID1 = 'sq' + (Consecutive_O[0][0][0] + 1) + ((Consecutive_O[0][0][1] + 2) % 3 + 1)

                document.getElementById(ID1).innerHTML = X
                GameBoard[Consecutive_O[0][0][0]][(Consecutive_O[0][0][1] + 2) % 3] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            } else {

                let next_row = (Consecutive_O[0][0][0] + 2) % 3;
                let next_col = Consecutive_O[0][0][1];

                const ID1 = 'sq' + ((Consecutive_O[0][0][0] + 2) % 3 + 1) + (Consecutive_O[0][0][1]+1)

                document.getElementById(ID1).innerHTML = X
                GameBoard[(Consecutive_O[0][0][0] + 2) % 3][Consecutive_O[0][0][1]] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            }

                            
        }

        else {

            if (GameBoard[0][0] == 'X' && GameBoard[0][1] == 'O' && GameBoard[1][0] == 'O' && GameBoard[2][2] == ''){

                document.getElementById('sq33').innerHTML = X;
                GameBoard[2][2] = 'X';
                c++;

                TURN.innerHTML = Oturn;
    
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            }

            else if (GameBoard[0][2] == 'X' && GameBoard[0][1] == 'O' && GameBoard[1][2] == 'O' && GameBoard[2][0] == ''){

                document.getElementById('sq31').innerHTML = X;
                GameBoard[2][0] = 'X';
                c++;

                TURN.innerHTML = Oturn;
    
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });


            }

            else if (GameBoard[2][0] == 'X' && GameBoard[1][0] == 'O' && GameBoard[2][1] == 'O' && GameBoard[0][2] == ''){

                document.getElementById('sq13').innerHTML = X;
                GameBoard[0][2] = 'X';
                c++;

                TURN.innerHTML = Oturn;
    
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });


            }
            else if (GameBoard[2][2] == 'X' && GameBoard[1][2] == 'O' && GameBoard[2][1] == 'O' && GameBoard[0][0] == ''){

                document.getElementById('sq11').innerHTML = X;
                GameBoard[0][0] = 'X';
                c++;

                TURN.innerHTML = Oturn;
    
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });


            }

            else {

                let Index = Math.floor(Math.random()*Available_rows.length);

                let row = Available_rows[Index];
                let col = Available_cols[Index];

                const ID1 = 'sq' + (row+1) + (col+1)

                document.getElementById(ID1).innerHTML = X
                GameBoard[row][col] = 'X'
                c++;
        
                TURN.innerHTML = Oturn;
        
                squares.forEach(function(square){
                    if (square.innerHTML == X_outline){
                        square.innerHTML = O_outline
                    }
                });

            }
        }
    }

    }

function CPU_MakeMove_O(){

    X_indexes_rows = []
    X_indexes_cols = []
    O_indexes_rows = []
    O_indexes_cols = []
    Available_rows = []
    Available_cols = []

    for (n = 0; n < GameBoard.length; n++){
        for (m = 0; m < GameBoard.length; m++){
            if (GameBoard[n][m] == 'X'){
                X_indexes_rows.push(n)
                X_indexes_cols.push(m)
            } else if (GameBoard[n][m] == 'O'){
                O_indexes_rows.push(n)
                O_indexes_cols.push(m)
            } else {
                Available_rows.push(n)
                Available_cols.push(m)
            }
        }
    };

    Consecutive_O = []


    for (k = 0; k < GameBoard.length; k++){
        for (l = 0; l < GameBoard.length; l++){

            if(GameBoard[k][l] == GameBoard[k][(l+1) % 3] && GameBoard[k][l] == 'X' && GameBoard[k][(l+2) % 3 == '']){

                Consecutive_O.push([[k,l],[k, (l+1) % 3]])

            } else if(GameBoard[k][l] == GameBoard[(k+1) % 3][l] && GameBoard[k][l] == 'X' && GameBoard[(k+2) % 3][l] == ''){

                Consecutive_O.push([[k,l],[(k+1) % 3, l]])

            }
        }
    };

    Consecutive_Corner = []

    for (k = 0; k < 2; k++){

        if(GameBoard[k*2][0] == GameBoard[Inverse_Index(k*2)][Inverse_Index(0)] && GameBoard[k*2][0] != ''){

            Consecutive_Corner.push([[k*2, 0],[Inverse_Index(k*2), Inverse_Index(0)]])

        }

    }

    Consecutive_X = []

    for (k = 0; k < GameBoard.length; k++){
        for (l = 0; l < GameBoard.length; l++){

            if(GameBoard[k][l] == GameBoard[k][(l+1) % 3] && GameBoard[k][l] == 'O' && GameBoard[k][(l+2) % 3] == ''){

                Consecutive_X.push([[k,l],[k, (l+1) % 3]])

            } else if(GameBoard[k][l] == GameBoard[(k+1) % 3][l] && GameBoard[k][l] == 'O' && GameBoard[(k+2) % 3][l] == ''){

                Consecutive_X.push([[k,l],[(k+1) % 3, l]])

            }
        }
    };

    if(Consecutive_Corner.length > 0 && GameBoard[1][1] == ''){

        document.getElementById('sq22').innerHTML = O
        GameBoard[1][1] = 'O'
        c++;

        TURN.innerHTML = Xturn;

        squares.forEach(function(square){
            if (square.innerHTML == O_outline){
                square.innerHTML = X_outline
            }
        });

    }

    else if(Consecutive_X.length > 0){

        next_move = Consecutive_X[0][0]
        next_2 = Consecutive_X[0][1]

        if(next_move[0] == next_2[0]){

            const ID1 = 'sq' + (Consecutive_X[0][0][0]+1) + ((Consecutive_X[0][0][1] + 2) % 3+1)

            document.getElementById(ID1).innerHTML = O
            GameBoard[Consecutive_X[0][0][0]][(Consecutive_X[0][0][1] + 2) % 3] = 'O'
            c++;
    
            TURN.innerHTML = Xturn;
    
            squares.forEach(function(square){
                if (square.innerHTML == O_outline){
                    square.innerHTML = X_outline
                }
            });

        } else {

            const ID1 = 'sq' + ((Consecutive_X[0][0][0] + 2) % 3+1) + (Consecutive_X[0][0][1]+1)

            document.getElementById(ID1).innerHTML = O
            GameBoard[(Consecutive_X[0][0][0] + 2) % 3][Consecutive_X[0][0][1]] = 'O'
            c++;
    
            TURN.innerHTML = Xturn;
    
            squares.forEach(function(square){
                if (square.innerHTML == O_outline){
                    square.innerHTML = X_outline
                }
            });

        }
    }
    
    else if(Consecutive_O.length > 0){

        let next_move = Consecutive_O[0][0]
        let next_2 = Consecutive_O[0][1]

        if(Consecutive_O[0][0][0] == Consecutive_O[0][1][0]){

            let next_row = Consecutive_O[0][0][0];
            let next_col = (Consecutive_O[0][0][1] + 2) % 3;

            const ID1 = 'sq' + (Consecutive_O[0][0][0] + 1) + ((Consecutive_O[0][0][1] + 2) % 3 + 1)

            document.getElementById(ID1).innerHTML = O
            GameBoard[Consecutive_O[0][0][0]][(Consecutive_O[0][0][1] + 2) % 3] = 'O'
            c++;
    
            TURN.innerHTML = Xturn;
    
            squares.forEach(function(square){
                if (square.innerHTML == O_outline){
                    square.innerHTML = X_outline
                }
            });

        } else {

            let next_row = (Consecutive_O[0][0][0] + 2) % 3;
            let next_col = Consecutive_O[0][0][1];

            const ID1 = 'sq' + ((Consecutive_O[0][0][0] + 2) % 3 + 1) + (Consecutive_O[0][0][1]+1)

            document.getElementById(ID1).innerHTML = O
            GameBoard[(Consecutive_O[0][0][0] + 2) % 3][Consecutive_O[0][0][1]] = 'O'
            c++;
    
            TURN.innerHTML = Xturn;
    
            squares.forEach(function(square){
                if (square.innerHTML == O_outline){
                    square.innerHTML = X_outline
                }
            });

        }

                        
    }

    else {

        if (GameBoard[0][0] == 'O' && GameBoard[0][1] == 'X' && GameBoard[1][0] == 'X' && GameBoard[2][2] == ''){

            document.getElementById('sq33').innerHTML = O;
            GameBoard[2][2] = 'O';
            c++;

            TURN.innerHTML = Xturn;

            squares.forEach(function(square){
                if (square.innerHTML == O_outline){
                    square.innerHTML = X_outline
                }
            });

        }

        else if (GameBoard[0][2] == 'O' && GameBoard[0][1] == 'X' && GameBoard[1][2] == 'X' && GameBoard[2][0] == ''){

            document.getElementById('sq31').innerHTML = O;
            GameBoard[2][0] = 'O';
            c++;

            TURN.innerHTML = Xturn;

            squares.forEach(function(square){
                if (square.innerHTML == O_outline){
                    square.innerHTML = X_outline
                }
            });


        }

        else if (GameBoard[2][0] == 'O' && GameBoard[1][0] == 'X' && GameBoard[2][1] == 'X' && GameBoard[0][2] == ''){

            document.getElementById('sq13').innerHTML = O;
            GameBoard[0][2] = 'O';
            c++;

            TURN.innerHTML = Xturn;

            squares.forEach(function(square){
                if (square.innerHTML == O_outline){
                    square.innerHTML = X_outline
                }
            });


        }
        else if (GameBoard[2][2] == 'O' && GameBoard[1][2] == 'X' && GameBoard[2][1] == 'X' && GameBoard[0][0] == ''){

            document.getElementById('sq11').innerHTML = O;
            GameBoard[0][0] = 'O';
            c++;

            TURN.innerHTML = Xturn;

            squares.forEach(function(square){
                if (square.innerHTML == O_outline){
                    square.innerHTML = X_outline
                }
            });


        }

        else {

            let Index = Math.floor(Math.random()*Available_rows.length);

            let row = Available_rows[Index];
            let col = Available_cols[Index];

            const ID1 = 'sq' + (row+1) + (col+1)

            document.getElementById(ID1).innerHTML = O
            GameBoard[row][col] = 'O'
            c++;
    
            TURN.innerHTML = Xturn;
    
            squares.forEach(function(square){
                if (square.innerHTML == O_outline){
                    square.innerHTML = X_outline
                }
            });

        }
    }


}

//--------------------------------------------------------------------------------------------------------

let CPU_var = false

function New_Game_CPU(){

    New_Game();
    CPU_var = true

    if(Mark_Choice.checked){
        X_Player.innerHTML = 'X (YOU)'
        O_Player.innerHTML = 'O (CPU)'
    } else{
        X_Player.innerHTML = 'X (CPU)'
        O_Player.innerHTML = 'O (YOU)'
        FirstMoveCPU_X();
    };

}

function MakeMoveplusCPU_X(event){

    AddSymbol(event);
    CheckForWinner();
    CPU_MakeMove_X();
    CheckForWinner();

}

function MakeMoveplusCPU_O(event){

    AddSymbol(event);
    CheckForWinner();
    CPU_MakeMove_O();
    CheckForWinner();

}

function FullMakeMove(event){

    if(event.target.innerHTML == X_outline || event.target.innerHTML == O_outline){
        if(Mark_Choice.checked){
            if(CPU_var){
                MakeMoveplusCPU_O(event);
            } else {
                MakeMove(event);
            }
        } else {
            if(CPU_var){
                MakeMoveplusCPU_X(event);
            } else {
                MakeMove(event);
            }
        }
        
    }
}

New_CPU.addEventListener('click', New_Game_CPU)

squares.forEach((el => el.addEventListener('click', FullMakeMove)));



//------------------------------------------------------------------------------------------------//

function QUIT(){
    GameBoard = [['','',''],
    ['','',''],
    ['','','']];

    squares.forEach(el => el.innerHTML = X_outline);
    squares.forEach(el => el.className = "square");
    TURN.innerHTML = Xturn;
    Restart_Menu.id = "";

    Xscore = 0;
    Oscore = 0;
    Tiescore = 0;
    XscoreDisp.innerHTML = Xscore;
    OscoreDisp.innerHTML = Oscore;
    TiescoreDisp.innerHTML = Tiescore;
    c = 0;
    
    Game_container.classList.add('OFF');
    Main_container.classList.remove('OFF');
    localStorage.clear()
}

function NextRound(){
    GameBoard = [['','',''],
    ['','',''],
    ['','','']];

    squares.forEach(el => el.innerHTML = X_outline);
    squares.forEach(el => el.className = "square");
    TURN.innerHTML = Xturn;
    Restart_Menu.id = "";
    c = 0;

    if(CPU_var && !Mark_Choice.checked){
        FirstMoveCPU_X();
    }

}

Next_Round.addEventListener('click', NextRound);
Quit.addEventListener('click', QUIT);

//---Restart----------------------------------------------------------------------------------------

const Restart_Button = document.getElementById('restart-btn');

Restart_Button.addEventListener('click', e => Reset_Menu.id = 'ON');
Cancel.addEventListener('click', e => Reset_Menu.id = '');

function Restart_Game(){
    GameBoard = [['','',''],
    ['','',''],
    ['','','']];

    squares.forEach(el => el.innerHTML = X_outline);
    squares.forEach(el => el.className = "square");
    TURN.innerHTML = Xturn;
    Reset_Menu.id = '';
    Xscore = 0;
    Oscore = 0;
    Tiescore = 0;
    XscoreDisp.innerHTML = Xscore;
    OscoreDisp.innerHTML = Oscore;
    TiescoreDisp.innerHTML = Tiescore;
    c = 0;
    localStorage.clear()
};

Restart_conf.addEventListener('click', Restart_Game);

function SavePageState() {
    localStorage.setItem('PageState', FullHTML.innerHTML)
}


FullHTML.addEventListener('click', SavePageState)
