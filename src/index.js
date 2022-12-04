import './css/styles.css';
import API from './fetchCountries';
import getRefs from './get-refs';
import getTemp from './temp';

// const debounce = require('lodash.debounce');
import debounce from 'lodash.debounce';
import Handlebars from 'handlebars';

import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const countryCard = getTemp();
const refs = getRefs();

const template = Handlebars.compile(countryCard);
const data = {
  name: 'Alan',
  hometown: 'Somewhere, TX',
  kids: [
    { name: 'Jimmy', age: '12' },
    { name: 'Sally', age: '4' },
  ],
};
const result = template(data);

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Notiflix.Notify.success('Sol lucet omnibus');
// Notiflix.Notify.failure('Qui timide rogat docet negare');
// Notiflix.Notify.warning('Memento te hominem esse');
// Notiflix.Notify.info('Cogito ergo sum');

console.log(refs);
refs.list.innerHTML = result;

// API.fetchCountries().then(country => {
//   console.log(country[0].flags.svg);
// });

refs.input.addEventListener('input', debounce(onUserRequest, DEBOUNCE_DELAY));

function onUserRequest(event) {
  if (event.target.value === '') {
    Notiflix.Notify.failure('Search field is empty');
    return;
  }
  const name = event.target.value.trim().toLowerCase();

  API.fetchCountries(name)
    .then(country => {
      console.log(`this is THEN`);
      console.log(country);
    })
    .catch(error => {
      console.log(`this is CATCH`);
    })
    .finally(() => {
      console.log(`this is FINALLY`);
      refs.input.clear();
    });
}
