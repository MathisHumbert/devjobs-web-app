const formContainer = document.querySelector('.form-container');
const jobsContainer = document.querySelector('.jobs');
const loadMore = document.querySelector('.load-more');

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

function heightBtn() {
  if (!jobsContainer.classList.contains('open')) {
    jobsContainer.style.maxHeight = '100%';
    loadMore.textContent = 'Load Less';
    jobsContainer.classList.add('open');
  } else {
    console.log(window.innerWidth);
    jobsContainer.style.maxHeight = `${
      window.innerWidth < 768 ? 196 : window.innerWidth < 1440 ? 98 : 65
    }rem`;
    loadMore.textContent = 'Load More';
    jobsContainer.classList.remove('open');
  }
}

export { displayFilter, removeFilter, heightBtn };
