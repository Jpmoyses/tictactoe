const square = document.querySelectorAll(".block");
let playerOScore = document.querySelector(".o");
let playerXScore = document.querySelector(".x");
let players = 1;
let roundWinner = 0;
let round = 0;
let img;
const imgX = new Image();
const imgO = new Image();
imgX.src = './img/x.svg'; 
imgO.src = './img/o.svg';
imgO.classList.add('imageFormat');
imgX.classList.add('imageFormat');
img = imgX;


function Player(name, marker) {
    this.name =  name;
    this.marker = marker;
    this.score = 0;
    this.Win = function(){
        this.score++;
        alert(`The winner is ${this.name}!`);
    }
};
const player1 = new Player('Red', 'X');
const player2 = new Player('Blue', 'O');

let gameBoard = {
    one: "i",
    two: "i",
    three: "i",
    four: "i",
    five: "i",
    six: "i",
    seven: "i",
    eight: "i",
    nine: "i"
};

const gameBoardCopy = {
    one: "i",
    two: "i",
    three: "i",
    four: "i",
    five: "i",
    six: "i",
    seven: "i",
    eight: "i",
    nine: "i"
}

function resetAll(){
    // remove all X and O's
    let images = document.querySelectorAll("img");
    images.forEach((item) => {
        item.remove();
    })

    // remove all classes added to the blocks
    square.forEach((item) => {
       
            item.classList.remove('1');
            item.classList.remove('2');
    })

    // resets the gameboard
    Object.assign(gameBoard, gameBoardCopy);

    // resets round
    round = 0;
    
}

function winCondition(marker){
    let win = 0;
    console.log(marker + ' wincondition');
    // horizontal
    if (gameBoard.one == gameBoard.two && (gameBoard.two == gameBoard.three) && gameBoard.one != 'i'){
        if (player1.marker == marker){player1.Win();} else player2.Win(); win = 1;
    }
    if (gameBoard.four == gameBoard.five && (gameBoard.five == gameBoard.six) && gameBoard.four != 'i'){
        if (player1.marker == marker){player1.Win();} else player2.Win(); win = 1;
    }
    if (gameBoard.seven == gameBoard.eight && (gameBoard.eight == gameBoard.nine) && gameBoard.seven != 'i'){
        if (player1.marker == marker){player1.Win();} else player2.Win(); win = 1;
    }

    // vertical
    if (gameBoard.one == gameBoard.four && (gameBoard.four == gameBoard.seven) && gameBoard.one != 'i'){
        if (player1.marker == marker){player1.Win();} else player2.Win(); win = 1;
    }
    if (gameBoard.two == gameBoard.five && (gameBoard.five == gameBoard.eight) && gameBoard.two != 'i'){
        if (player1.marker == marker){player1.Win();} else player2.Win(); win = 1;
    }
    if (gameBoard.three == gameBoard.six && (gameBoard.six == gameBoard.nine) && gameBoard.three != 'i'){
        if (player1.marker == marker){player1.Win();} else player2.Win(); win = 1;
    }

    // diagonal
    if (gameBoard.one == gameBoard.five && (gameBoard.five == gameBoard.nine) && gameBoard.one != 'i'){
        if (player1.marker == marker){player1.Win();} else player2.Win(); win = 1;
    }
    if (gameBoard.three == gameBoard.five && (gameBoard.five == gameBoard.seven) && gameBoard.three != 'i'){
        if (player1.marker == marker){player1.Win();} else player2.Win(); win = 1;
    }

    if (win == 1){
        // update score
        if (player1.marker == marker){
            playerXScore.innerHTML = player1.score;}
        else playerOScore.innerHTML = player2.score;
        roundWinner = 1;

        // reset board
        resetAll();}
    else if(round == 9){
        alert(`It's a draw!`);
        resetAll();
    }
}

function checkBoard(item){
    let marker;
    if (players == 1){marker = player1.marker} else marker = player2.marker;
    console.log(marker + ' checkboard');
    

    if (item.id =='one'){gameBoard.one = marker}
    if (item.id == 'two'){gameBoard.two = marker}
    if (item.id == 'three'){gameBoard.three = marker}
    if (item.id == 'four'){gameBoard.four = marker}
    if (item.id == 'five'){gameBoard.five = marker}
    if (item.id == 'six'){gameBoard.six = marker}
    if (item.id == 'seven'){gameBoard.seven = marker}
    if (item.id == 'eight'){gameBoard.eight = marker}
    if (item.id == 'nine'){gameBoard.nine = marker}
    
    winCondition(marker);
}

function imageClick(item){
    item.removeChild(img);
    let imgPlay = new Image();
    imgPlay.src = img.src;
    imgPlay.classList.add('imageFormat');

    if (img == imgX)  {img = imgO;} 
    else img = imgX;

    return imgPlay;
}

square.forEach((item) =>{
    
    item.addEventListener("mouseover", ()=>{
        if(item.classList.contains("1") == false && item.classList.contains("2") == false){
        img.classList.add('opacity');
        item.appendChild(img);}
    })

    item.addEventListener("click", ()=>{
        if(item.classList.contains("1") == false && item.classList.contains("2") == false){
            item.appendChild(imageClick(item));
            if(players == 1){item.classList.add('1');}
            else{item.classList.add('2');}
            round++;

            checkBoard(item);
            
            if(players == 1){players = 2}
            else{players = 1}
        }
    })
})