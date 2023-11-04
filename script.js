const submitBtn = document.querySelector('.form-container .form button');
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('.form-container .form');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  form.textContent = 'Your response has been successfully submitted!';
  formContainer.style.paddingBottom = '50px';
  formContainer.style.fontSize = '17px';
});