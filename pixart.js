//one
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
//skip two per Teo

//three four five & six
for (i = 0; i < 8000; i ++) {
  let square = document.createElement('div');
  square.classList.add('square');
  body.appendChild(square);
  square.addEventListener("mouseover", function(){
    square.style.background = input.value
  })
}


