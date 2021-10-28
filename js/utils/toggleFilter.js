const formContainer = document.querySelector('.form-container');

function displayFilter() {
  formContainer.classList.add('open');
  formContainer.addEventListener('click', removeFilter);
}

function removeFilter(e) {
  let arr = [...e.target.classList];

  if (arr.includes('open') || arr.includes('submit-btn')) {
    formContainer.classList.remove('open');
    formContainer.removeEventListener('click', removeFilter);
  }
}

export { displayFilter, removeFilter };
