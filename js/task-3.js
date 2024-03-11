


const inputUserName = document.getElementById('name-input');




inputUserName.addEventListener('input', () => {
    
    const userName = inputUserName.value;

    const nameOutput = document.getElementById('name-output');

    if (userName.trim() === '') {
        nameOutput.innerHTML = 'Anonymous'
    } else {
        nameOutput.textContent = userName

    }



})













