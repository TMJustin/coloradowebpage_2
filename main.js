let pass1 = document.querySelector('#pass1');
let pass2 = document.querySelector('#pass2');
let result = document.querySelector('#confirmemail');

function validateEmail () {
  result.innerText = pass1.value == pass2.value ? '' : 'Sorry! Emails need to be matching';
}

pass1.addEventListener('keyup', () => {
  if (pass2.value.length != 0) validateEmail();
})

pass2.addEventListener('keyup', validateEmail);
