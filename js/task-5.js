// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }



// const button = document.querySelector('.change-color');
// const span = document.querySelector('.color');




// button.addEventListener('click', () => {
    
//     const body = document.querySelector('body');
//     body.style = `background-color: ${getRandomHexColor()}`


// })



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const buttonChangeColor = document.querySelector('.change-color');




buttonChangeColor.addEventListener('click', () => {
  

  const body = document.querySelector('body');
  const colorSpan = document.querySelector('.color');


  body.style = `background-color: ${getRandomHexColor()}`;
  colorSpan.textContent = `color:${getRandomHexColor()}`




})


