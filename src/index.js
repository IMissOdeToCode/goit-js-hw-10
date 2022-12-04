import './css/styles.css';
import API from './fetchCountries';
import getRefs from './get-refs';
import item from './itemTemplate';
import card from './cardTemplate';
// const debounce = require('lodash.debounce');
import debounce from 'lodash.debounce';
import Handlebars from 'handlebars';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();
console.log(refs);

// --- some debug junk -----------------

// const t = {
//   name: 'name',
//   capital: 'capital',
//   population: 777777,
//   languages: [1, 2, 3],
//   flags: {
//     svg: 'https://flagcdn.com/pl.svg',
//   },
// };
// const countryCard = card.getTemplate(t);
// refs.card.innerHTML = countryCard;

// Handlebars
// const template = Handlebars.compile(countryCard);
// const data = {
//   name: 'Alan',
//   hometown: 'Somewhere, TX',
//   kids: [
//     { name: 'Jimmy', age: '12' },
//     { name: 'Sally', age: '4' },
//   ],
// };
// const result = template(data);
// ------------------------------------------

refs.input.addEventListener('input', debounce(onUserRequest, DEBOUNCE_DELAY));

function onUserRequest(event) {
  if (event.target.value === '' || typeof event.target.value === 'number') {
    Notiflix.Notify.failure('Search field is empty');
    refs.list.innerHTML = '';
    refs.card.innerHTML = '';
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
        refs.list.innerHTML = '';
        refs.card.innerHTML = '';
        const text = countries.map(country => {
          return item.getTemplate(country);
        });

        refs.list.insertAdjacentHTML('beforeend', text.join(''));
      }

      if (countries.length === 1) {
        refs.list.innerHTML = '';
        refs.card.innerHTML = card.getTemplate(countries[0]);
        return;
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    })
    .finally(() => {
      // console.log(`this is FINALLY`);
      // refs.input.value = '';
    });
}
