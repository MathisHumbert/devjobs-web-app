// import
import slideBtnAndColor from './utils/colorSwitch.js';
import { displayFilter } from './utils/toggleFilter.js';

// get elements
const slideBtn = document.querySelector('.toggle-slide');
const filterBtn = document.querySelector('.filter-btn');
const formContainer = document.querySelector('.form-container');

// events
slideBtn.addEventListener('click', slideBtnAndColor);
filterBtn.addEventListener('click', displayFilter);
