import './css/styles.css';
import API from './fetchCountries';
import getRefs from './get-refs';
import getTemp from './temp';

// const debounce = require('lodash.debounce');
import debounce from 'lodash.debounce';
import Handlebars from 'handlebars';

import Notiflix from 'notiflix';

const countryCard = getTemp();

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

const refs = getRefs();
console.log(refs);
refs.list.innerHTML = result;
const DEBOUNCE_DELAY = 300;

API.fetchCountries().then(country => {
  console.log(country[0].flags.svg);
});

refs.input.addEventListener('input', debounce(pushData, DEBOUNCE_DELAY));

function pushData(event) {
  console.log(event.target.value);
}
