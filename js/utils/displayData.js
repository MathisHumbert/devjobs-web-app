import {
  filterDataByLocation,
  filterDataByTime,
  filterDataByTitle,
  filterDataByNumbers,
} from './filtersFunction.js';

const jobsContainer = document.querySelector('.jobs');
const loadMore = document.querySelector('.load-more');

async function fetchData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function getData(URL, title, location, fullTime) {
  let data = await fetchData(URL);

  // title filter
  if (title !== undefined) data = filterDataByTitle(data, title);

  // location filter
  if (location !== undefined) data = filterDataByLocation(data, location);

  // fulltime filter
  if (fullTime) data = filterDataByTime(data);

  // if(data.length === 0)

  displayJobs(data);
}

function displayJobs(data) {
  if (data.length >= 12) loadMore.style.display = 'block';
  else loadMore.style.display = 'none';

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

export default getData;
