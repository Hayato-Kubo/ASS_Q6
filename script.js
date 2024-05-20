'use strict';
// please do not delete the 'use strict' line above
const body = document.body
const button = document.getElementById('color-button')
let clickCount = 0;

button.addEventListener('click', changeBgColor)
button.addEventListener('click', changeColor)
button.addEventListener('click', addClass)
button.addEventListener('click', crocodileMove)

function changeBgColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  for (let count = color.length; count < 6; count++) {
  color = "0" + color;
  }
  let randomColor = "#" + color;
  body.style.backgroundColor = randomColor;
  // feel free to change/delete this line
}

function changeColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  for (let count = color.length; count < 6; count++) {
  color = "0" + color;
  }
  let randomColor = "#" + color;
  button.style.color = randomColor;
  // feel free to change/delete this line
}

function addClass() {
  let start = document.getElementsByClassName('finish-line');
  start[0].classList.add('start');
}

function crocodileMove() {
  const crocodile = document.getElementsByClassName('crocodile');
  const container = document.getElementsByClassName('container');
  const leftPar = parseFloat(crocodile[0].style.left)
  const finish = document.getElementsByClassName('finish');

  clickCount++;
  if (clickCount === 1) {
    button.textContent = "もう一回 Click!!";
  } else if (clickCount === 2) {
    crocodile[0].style.left = '-45%';
    button.textContent = "Click! Click! Click!!!!";
  } else if (clickCount > 2) {
    console.log(leftPar)
    crocodile[0].style.left = (parseInt(crocodile[0].style.left, 10) + 10) + '%';
    };
  if (leftPar > 40) {
    container[0].classList.add('animate-slide-up');
    finish[0].classList.add('animate-fade-in');
  };
}
