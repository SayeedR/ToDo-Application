const myForm =  document.querySelector('#my-form');
const inputName =  document.querySelector('#name');
const inputEmail =  document.querySelector('#email');
const msg =  document.querySelector('.msg');

const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(inputName.value === '' || inputEmail.value === ''){
       
        msg.classList.add('error');
        msg.innerHTML = 'Please enter the field';
        setTimeout(() => msg.remove(),3000);
    }
    else{
        const li = document.createElement('li');
        
       
        li.appendChild(document.createTextNode(` ${inputName.value }  :  ${inputEmail.value} `));
        userList.appendChild(li);
        //clear

        inputEmail.value = '';
        inputName.value = '';
    }
}