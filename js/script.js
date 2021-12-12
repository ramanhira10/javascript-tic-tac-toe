console.log('Welcome Tic Tac  Toe')

let winning = new Audio('music/wining.mp3'),
  audioTurn = new Audio('music/click.mp3'),
  gameOver = new Audio('music/gameover.mp3')

let isGameOver = false;

let turn = 'X';

//function to change the turn
const changeTurn = () => {
  return turn === 'X' ? '0' : 'X';
};

//function to check for a win
const checkWin = () => {

  let boxText = document.getElementsByClassName('box-text');
  let wins = [
    // check for - - -
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],

    //check for | | |    
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],

    //check for / \ 
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135]
  ];

  wins.forEach(e => {
    if (
      (boxText[e[0]].innerText === boxText[e[1]].innerText) &&
      (boxText[e[2]].innerText === boxText[e[1]].innerText) &&
      (boxText[e[0]].innerText !== '')
    ) {
      isGameOver = true;
      winning.loop = true;
      winning.play();      
      document.querySelector('.info').innerText = boxText[e[0]].innerText + ' Won';
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '160px';
      document.querySelector('.line').style.width = '20vw';
      document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};

//Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
  let boxText = element.querySelector('.box-text');
  
  element.addEventListener('click', () => {
    if(boxText.innerText === '') {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`;
      }
    }
  });
});

// Add onclick listener to reset

reset.addEventListener('click', () => {
  let boxTexts = document.querySelectorAll('.box-text');
  Array.from(boxTexts).forEach(element => {
    element.innerText = "";
  });
  isGameOver = false;
  if (winning.loop) {
    winning.loop = false;
  }
  turn = 'X';
  document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`;
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0';
  document.querySelector('.line').style.width = '0';
})


