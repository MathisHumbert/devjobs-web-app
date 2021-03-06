import getData from './displayData.js';

// get items
const titleInput = document.querySelector('.filter-title');
const locationInput = document.querySelector('.filter-location');
const fullTimeInput = document.querySelector('.checkbox');

const URL = '../starter-code/data.json';

function fullTimeDisplay() {
  let storedFilter = JSON.parse(localStorage.getItem('devjobs-filter'));
  getData(
    URL,
    storedFilter[0] || '',
    storedFilter[1] || '',
    fullTimeInput.checked
  );
}

function filterInputValue() {
  let titleValue = titleInput.value;
  let locationValue = locationInput.value;
  const fullTimeValue = fullTimeInput.checked;

  localStorage.setItem(
    'devjobs-filter',
    JSON.stringify([titleValue, locationValue, fullTimeValue])
  );

  console.log(titleValue);
  getData(URL, titleValue, locationValue, fullTimeValue);
}

function filterDataByTitle(data, value) {
  return data.filter((item) => item.position.toLowerCase().includes(value));
}

function filterDataByLocation(data, value) {
  return data.filter((item) => item.location.toLowerCase().includes(value));
}

function filterDataByTime(data) {
  return data.filter((item) => item.contract.includes('Full Time'));
}

export {
  fullTimeDisplay,
  filterDataByLocation,
  filterDataByTitle,
  filterDataByTime,
  filterInputValue,
};
