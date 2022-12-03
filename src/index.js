import './css/styles.css';

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
      console.log(country[0].name);
    });
}
