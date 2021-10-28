const slideBtn = document.querySelector('.toggle-slide');
const html = document.querySelector('html');

slideBtn.addEventListener('click', slideBtnAndColor);

function slideBtnAndColor(e) {
  if (slideBtn.classList.contains('active')) {
    slideBtn.classList.remove('active');
    html.classList.remove('dark');
  } else {
    slideBtn.classList.add('active');
    html.classList.add('dark');
  }
}
