import getData from './displayData.js';

// get items
const titleInput = document.querySelector('.filter-title');
const locationInput = document.querySelector('.filter-location');
const fullTimeInput = document.querySelector('.checkbox');
const URL = '../starter-code/data.json';
let storedFilter = JSON.parse(localStorage.getItem('devjobs-filter'));

function fullTimeDisplay() {
  getData(
    URL,
    storedFilter[0] || '',
    storedFilter[1] || '',
    fullTimeInput.checked
  );
}

function filterInputValue() {
  const titleValue = titleInput.value;
  const locationValue = locationInput.value;
  const fullTimeValue = fullTimeInput.checked;

  localStorage.setItem(
    'devjobs-filter',
    JSON.stringify([titleValue, locationValue, fullTimeValue])
  );

  getData(URL, titleValue, locationValue, fullTimeValue);
}

function filterDataByTitle(data, value) {
  data = data.filter((item) => item.position.toLowerCase().includes(value));
  return data;
}

function filterDataByLocation(data, value) {
  data = data.filter((item) => item.location.toLowerCase().includes(value));
  return data;
}

function filterDataByTime(data) {
  data = data.filter((item) => item.contract.includes('Full Time'));
  return data;
}

export {
  fullTimeDisplay,
  filterDataByLocation,
  filterDataByTitle,
  filterDataByTime,
  filterInputValue,
};
