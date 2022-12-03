function fetchCountries() {
  // prettier-ignore
  const URL = 'https://restcountries.com/v2/name/Poland?fields=name,capital,population,flags,languages';
  // prettier-ignore
  return fetch(URL).then(response => response.json());
}

export default { fetchCountries };
