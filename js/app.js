// import
import slideBtnAndColor from './utils/colorSwitch.js';
import { displayFilter } from './utils/toggleFilter.js';

// get elements
const slideBtn = document.querySelector('.toggle-slide');
const filterBtn = document.querySelector('.filter-btn');
const jobsContainer = document.querySelector('.jobs');
const loadMore = document.querySelector('.load-more');

// events
slideBtn.addEventListener('click', slideBtnAndColor);
filterBtn.addEventListener('click', displayFilter);
loadMore.addEventListener('click', () => {
  if (!jobsContainer.classList.contains('open')) {
    jobsContainer.style.height = '100%';
    loadMore.textContent = 'Load Less';
    jobsContainer.classList.add('open');
  } else {
    jobsContainer.style.height = '108rem';
    loadMore.textContent = 'Load More';
    jobsContainer.classList.remove('open');
  }
});

const URL = '../starter-code/data.json';
async function fetchData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function getData(URL) {
  let data = await fetchData(URL);
  displayJobs(data);
}
getData(URL);

function displayJobs(data) {
  // destructuring
  jobsContainer.innerHTML = data
    .map((item) => {
      let {
        company,
        logo,
        logoBackground,
        postedAt,
        contract,
        position,
        location,
        id,
      } = item;

      return `
    <article class="job" data-id="${id}">
        <div class="job-img" style="background: ${logoBackground}">
          <img src="${logo}" alt="company-logo" />
        </div>
        <p>${postedAt} <span class="span-circle"></span> ${contract}</p>
        <h3>${position}</h3>
        <p>${company}</p>
        <h4>${location}</h4>
      </article>
    `;
    })
    .join('');
}
