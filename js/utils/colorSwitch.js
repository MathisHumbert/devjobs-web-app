const slideBtn = document.querySelector('.toggle-slide');
const html = document.querySelector('html');

function slideBtnAndColor(e) {
  if (slideBtn.classList.contains('active')) {
    slideBtn.classList.remove('active');
    html.classList.remove('dark');
  } else {
    slideBtn.classList.add('active');
    html.classList.add('dark');
  }
}

export default slideBtnAndColor;
