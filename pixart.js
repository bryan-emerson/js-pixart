
let button = document.querySelector("button");
console.log(button);
let brush = document.querySelector(".brush");
console.log(brush.style);
let input = document.querySelector('input');
console.log(input);
let body = document.querySelector('body');

function handler(e) {
  console.log(e);
  e.preventDefault();
  brush.style.backgroundColor = input.value;
}

button.addEventListener('click', handler);


for (i = 0; i < 20; i ++) {
  let square = document.createElement('div');
  square.classList.add('square');
  body.appendChild(square);
}