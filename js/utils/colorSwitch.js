const slideBtn = document.querySelector('.toggle-slide');
const html = document.querySelector('html');
const jobsContainer = document.querySelector('.jobs');

function slideBtnAndColor() {
  if (slideBtn.classList.contains('active')) {
    lightMode();
  } else {
    darkMode();
  }
}

function jobContainerTransition() {
  jobsContainer.classList.add('animate');
  setTimeout(() => {
    jobsContainer.classList.remove('animate');
  }, 1500);
}

function darkMode() {
  slideBtn.classList.add('active');
  html.classList.add('dark');
  html.classList.remove('light');
}

function lightMode() {
  slideBtn.classList.remove('active');
  html.classList.remove('dark');
  html.classList.add('light');
}

export { slideBtnAndColor, jobContainerTransition, darkMode, lightMode };
