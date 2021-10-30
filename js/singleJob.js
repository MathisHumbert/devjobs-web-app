// import
import { slideBtnAndColor, darkMode, lightMode } from './utils/colorSwitch.js';

// get elements
const singleJob = document.querySelector('.single-job');
const slideBtn = document.querySelector('.toggle-slide');

// fetch and get data
async function fetcData(URL) {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}
async function getData(URL) {
  let data = await fetcData(URL);
  data = data.filter((item) => item.id == jobIndex);
  displayData(data);
}

// API
const URL = '../starter-code/data.json';
const jobIndex = localStorage.getItem('single-job-id');

// page load
window.addEventListener('DOMContentLoaded', () => {
  getData(URL);

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) darkMode();

  if (window.matchMedia('(prefers-color-scheme: light)').matches) lightMode();
});

// dakr / light switch
slideBtn.addEventListener('click', slideBtnAndColor);

// display the html
function displayData(data) {
  // destrucutring
  let {
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
    description,
    requirements,
    role,
  } = data[0];

  const requirementsText = requirements.content;
  const requirementsArr = requirements.items
    .map((item) => `<li>${item}</li>`)
    .join('');
  const roleText = role.content;
  const roleArr = role.items
    .map((item, idx) => `<li><p>${idx + 1}</p>${item}</li>`)
    .join('');

  singleJob.innerHTML = `
  <header class="single-job-header">
  <div class="single-job-header-img" style="background: ${logoBackground}">
    <img
      src="${logo}"
      alt="company-logo"
    />
  </div>
  <div class="single-job-header-info">
    <h3>${company}</h3>
    <p>${company.toLowerCase()}.com</p>
  </div>
  <button class="company-site-btn">Company Site</button>
</header>

<article class="single-job-content">
  <div class="single-job-content-header">
    <div class="single-job-content-header-info">
      <p>${postedAt} <span class="span-circle"></span> ${contract}</p>
      <h3>${position}</h3>
      <h4>${location}</h4>
    </div>
    <button class="apply-now">Apply Now</button>
  </div>
  <p class="text">${description}</p>
  <div class="requirements">
    <h3>Requirements</h3>
    <p class="text">${requirementsText}</p>
    <ul>${requirementsArr}</ul>
  </div>
  <div class="description">
    <h3>What You Will Do</h3>
    <p class="text">${roleText}</p>
    <ol>${roleArr}</ol>
  </div>
</article>

<footer class="single-job-footer">
  <div class="container">
  <div class="single-job-footer-info">
    <h3>${position}</h3>
    <p>Mathis Humbert Inc.</p>
  </div>
  <button class="apply-now">Apply Now</button>
  </div>
</footer>
  `;
}
