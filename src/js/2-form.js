const formData = { email: '', message: '' };
const formEl = document.querySelector('.feedback-form');

checkLocalStorage();
formEl.addEventListener('input', saveToLocalStorage);
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const emailValue = form.elements.email.value;
  const messageValue = form.elements.message.value;
  if (emailValue === '' || messageValue === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}

function saveToLocalStorage(event) {
  const form = event.currentTarget;
  const emailValue = form.elements.email.value;
  const messageValue = form.elements.message.value;
  formData.email = emailValue;
  formData.message = messageValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function checkLocalStorage() {
  const localStorageData = localStorage.getItem('feedback-form-state');
  if (localStorageData === null) {
    return;
  }
  const data = JSON.parse(localStorageData);
  formEl.elements.email.value = data.email;
  formEl.elements.message.value = data.message;
}
