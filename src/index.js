import './css/styles.css';
const debounce = require('lodash.debounce');
// import debounce from 'lodash.debounce';

const refs = {
  input: document.querySelector('#search-box'),
};

console.log(refs.input);

const DEBOUNCE_DELAY = 300;

// const URL = 'https://restcountries.com/v2/name/poland';
// prettier-ignore
const URL = 'https://restcountries.com/v2/name/poland?fields=name,capital,population,flags,languages';

fetchCountriesByName();

function fetchCountriesByName() {
  fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(country => {
      console.log(country[0].flags.svg);
    });
}

refs.input.addEventListener('input', debounce(pushData, DEBOUNCE_DELAY));

function pushData(event) {
  console.log(event.target.value);
}
