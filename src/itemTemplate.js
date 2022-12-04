function getTemplate(country) {
  return `<li class="country">
      <img
        class="country-flag"
        src="${country.flags.svg}"
        alt="${country.name} flag"
      />
      <p class="country-list-name">${country.name}</p>
    </li>`;
}

export default { getTemplate };
