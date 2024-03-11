

const formLogin = document.querySelector('.login-form');



formLogin.addEventListener('submit', handleSubmit);



function handleSubmit(e) {
    
    e.preventDefault();
    const element = e.currentTarget.elements;

    
    const info = {
        email: element.email.value,
        password: element.password.value
    }


    if (element.email.value.trim() === '' || element.password.value.trim() ==='') {
        alert('All form fields must be filled in')
    } else {
        console.log(info);
    }
    
    e.currentTarget.reset();

}








