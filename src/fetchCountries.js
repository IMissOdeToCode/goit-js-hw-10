function fetchCountries(name) {
  // prettier-ignore
  const URL = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }

    // return new Error(`Houston, we have a ${response.status} problem`);
    return error();
  });
}

export default { fetchCountries };
