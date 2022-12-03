import './css/styles.css';
import API from './fetchCountries';
import getRefs from './get-refs';

// const debounce = require('lodash.debounce');
import debounce from 'lodash.debounce';

const refs = getRefs();
console.log(refs.input);

const DEBOUNCE_DELAY = 300;

API.fetchCountries().then(country => {
  console.log(country[0].flags.svg);
});

refs.input.addEventListener('input', debounce(pushData, DEBOUNCE_DELAY));

function pushData(event) {
  console.log(event.target.value);
}
