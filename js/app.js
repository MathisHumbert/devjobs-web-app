// import
import slideBtnAndColor from './utils/colorSwitch.js';
import { displayFilter } from './utils/toggleFilter.js';
import { filterInputValue, fullTimeDisplay } from './utils/filtersFunction.js';
import getData from './utils/displayData.js';

// get elements
const slideBtn = document.querySelector('.toggle-slide');
const filterBtn = document.querySelector('.filter-btn');
const jobsContainer = document.querySelector('.jobs');
const loadMore = document.querySelector('.load-more');
const mainForm = document.querySelector('.main-form');
const titleInput = document.querySelector('.filter-title');
const locationInput = document.querySelector('.filter-location');
const fullTimeInput = document.querySelector('.checkbox');

// events
slideBtn.addEventListener('click', slideBtnAndColor);
filterBtn.addEventListener('click', displayFilter);
// loadMore.addEventListener('click', () => {
//   if (!jobsContainer.classList.contains('open')) {
//     jobsContainer.style.height = '100%';
//     loadMore.textContent = 'Load Less';
//     jobsContainer.classList.add('open');
//   } else {
//     jobsContainer.style.height = '108rem';
//     loadMore.textContent = 'Load More';
//     jobsContainer.classList.remove('open');
//   }
// });

const URL = '../starter-code/data.json';

let storedFilter = JSON.parse(localStorage.getItem('devjobs-filter'));
console.log(storedFilter);

window.addEventListener('DOMContentLoaded', () => {
  getData(
    URL,
    storedFilter[0] || '',
    storedFilter[1] || '',
    storedFilter[2] || ''
  );

  titleInput.value = storedFilter[0];
  locationInput.value = storedFilter[1];
  fullTimeInput.checked = storedFilter[2];
});

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  filterInputValue();
});

fullTimeInput.addEventListener('click', fullTimeDisplay);
