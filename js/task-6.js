const controls = document.querySelector('#controls');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxesEl = document.getElementById('boxes');


boxesEl.style.marginTop = '20px';

 



buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', deleteBox);




function createBoxes() {

  
  const value = input.value;
  
  const array = [];

  let boxSize = 30;

  if (value >= 1 && value <= 100) {
    
    for (let i = 1; i <= value; i++) {

    

    let newDiv = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"> </div>
    </div>`
      
      
    boxSize += 10;

    array.push(newDiv);  
  }

  } else {
      return alert('Amount is not correct')
  }

  input.value = '';
  boxesEl.textContent = '';

  boxesEl.insertAdjacentHTML('afterbegin',array.join(''))
  
}


function deleteBox() {

  boxesEl.textContent = '';
  input.value = '';

  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}







