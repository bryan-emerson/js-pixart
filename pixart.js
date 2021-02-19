
let button = document.querySelector("button");
console.log(button);
let brush = document.querySelector(".brush");
console.log(brush.style);
let input = document.querySelector('input');
console.log(input);

function handler(e) {
  console.log(e);
  e.preventDefault();
  brush.style.backgroundColor = input.value;
}

button.addEventListener('click', handler);
