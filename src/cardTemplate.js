function getTemplate(country) {
  const langs = country.languages.map(language => {
    return language.name;
  });
  return `<div class="country-card">
      <img
        class="country-flag"
        src="${country.flags.svg}"
        alt="${country.name} flag"
      />
      <p class="country-card-name">${country.name}</p>
    </div>

    <div>
      <span style="font-weight: 700">Capital: </span>
      <span>${country.capital}</span>
    </div>

    <div>
      <span style="font-weight: 700">Population: </span>
      <span>${country.population}</span>    
    </div>
        
    <div>
      <span style="font-weight: 700">Languages: </span>
      <span>${langs.join(', ')}</span> 
    </div>`;
}

export default { getTemplate };
