import './css/styles.css';
import API from './fetchCountries';
import getRefs from './get-refs';
import getTemp from './temp';

// const debounce = require('lodash.debounce');
import debounce from 'lodash.debounce';

import Handlebars from 'handlebars';

import Notiflix from 'notiflix';

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

refs.input.addEventListener('input', debounce(onUserRequest, DEBOUNCE_DELAY));

function onUserRequest(event) {
  if (event.target.value === '') {
    Notiflix.Notify.failure('Search field is empty');
    return;
  }
  const name = event.target.value.trim().toLowerCase();

  API.fetchCountries(name)
    .then(countries => {
      if (countries.length > 10) {
        return Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }

      if (countries.length >= 2 && countries.length <= 10) {
        return countries.forEach(country => {
          console.log(country.name);
        });
      }

      if (countries.length === 1) {
        return console.log(`we find just ${countries[0].name}`);
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('bad search query');
    })
    .finally(() => {
      // console.log(`this is FINALLY`);
      // refs.input.value = '';
    });
}
