// import
import {
  slideBtnAndColor,
  jobContainerTransition,
  darkMode,
  lightMode,
} from './utils/colorSwitch.js';
import { displayFilter, heightBtn } from './utils/toggleFilter.js';
import { filterInputValue, fullTimeDisplay } from './utils/filtersFunction.js';
import getAllJobs from './utils/displayData.js';

// get elements
const slideBtn = document.querySelector('.toggle-slide');
const filterBtn = document.querySelector('.filter-btn');
const loadMore = document.querySelector('.load-more');
const mainForm = document.querySelector('.main-form');
const titleInput = document.querySelector('.filter-title');
const locationInput = document.querySelector('.filter-location');
const fullTimeInput = document.querySelector('.checkbox');

// events
slideBtn.addEventListener('click', slideBtnAndColor);
filterBtn.addEventListener('click', displayFilter);
loadMore.addEventListener('click', heightBtn);

// API
const URL = '../starter-code/data.json';
let storedFilter = JSON.parse(localStorage.getItem('devjobs-filter'));

// window loaded
window.addEventListener('DOMContentLoaded', () => {
  getAllJobs(
    URL,
    storedFilter[0] || '',
    storedFilter[1] || '',
    storedFilter[2] || ''
  );

  titleInput.value = storedFilter[0];
  locationInput.value = storedFilter[1];
  fullTimeInput.checked = storedFilter[2];

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) darkMode();

  if (window.matchMedia('(prefers-color-scheme: light)').matches) lightMode();
});

// filter on submit
mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  filterInputValue();
  jobContainerTransition();
});

// filter full time on click
fullTimeInput.addEventListener('click', () => {
  fullTimeDisplay();
  jobContainerTransition();
});
