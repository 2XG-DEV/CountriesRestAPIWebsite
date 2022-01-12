let allCountries = [];
let currentAreaCountries = [];

async function fetchCountriesJSON() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const returnedCountries = await response.json();
  allCountries = returnedCountries;
  currentAreaCountries = allCountries;
  return allCountries;
}

const list = document.getElementById("list");

fetchCountriesJSON().then((countries) => {
  list.innerHTML = countries
    .map((country) => {
      return `<a href="./country.html?name=${country.name.common}" class="country-container">
      <div className="country-wrapper">
          <div class="country__img">
            <img src="${country.flags.png}" alt="" />
          </div>
          <div class="country__description">
            <h2 class="country__name">${country.name.common}</h2>
            <p>Population: <span class="value-pop">${country.population}</span></p>
            <p>Region: <span class="value-reg">${country.region}</span></p>
            <p>Capital: <span class="value-cap">${country.capital}</span></p>
          </div>
      </div>
    </a>
    `;
    })
    .join(" ");
});

function changeArea() {
  const val = document.getElementById("continents").value;

  const filteredCountries = allCountries.filter(
    (country) => country.region == val || val == "All"
  );

  currentAreaCountries = filteredCountries;

  list.innerHTML = filteredCountries
    .map((country) => {
      return `<div class="country-container ${country.name.region}">
        <div className="country-wrapper">
            <div class="country__img">
              <img src="${country.flags.png}" alt="" />
            </div>
            <div class="country__description">
              <h2 class="country__name">${country.name.common}</h2>
              <p>Population: <span class="value-pop">${country.population}</span></p>
              <p>Region: <span class="value-reg">${country.region}</span></p>
              <p>Capital: <span class="value-cap">${country.capital}</span></p>
            </div>
        </div>
      </div>
      `;
    })
    .join(" ");
}

const input = document.getElementById("input");
input.onkeyup = function (e) {
  if (e.keyCode == 13) {
    searchCountries();
  }
};

function searchCountries() {
  let searchWord = input.value;
  const filteredCountries = currentAreaCountries.filter((country) =>
    country.name.common.toUpperCase().includes(searchWord.toUpperCase())
  );

  list.innerHTML = filteredCountries
    .map((country) => {
      return `<div class="country-container ${country.name.region}">
            <div className="country-wrapper">
                <div class="country__img">
                  <img src="${country.flags.png}" alt="" />
                </div>
                <div class="country__description">
                  <h2 class="country__name">${country.name.common}</h2>
                  <p>Population: <span class="value-pop">${country.population}</span></p>
                  <p>Region: <span class="value-reg">${country.region}</span></p>
                  <p>Capital: <span class="value-cap">${country.capital}</span></p>
                </div>
            </div>
          </div>
          `;
    })
    .join(" ");
}
