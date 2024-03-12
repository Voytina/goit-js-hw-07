
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const buttonChangeColor = document.querySelector('.change-color');




buttonChangeColor.addEventListener('click',changeColor)


const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
let colorChange = '';

function changeColor() {
  
  colorChange = getRandomHexColor();

  body.style.backgroundColor = colorChange;
  colorSpan.textContent = colorChange;

  console.log(colorChange);

}
