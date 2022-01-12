let params = new URLSearchParams(location.search);
const name = params.get("name");

const hook = document.getElementById("hook");

async function fetchCountryJSON() {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await response.json();
  return data;
}

fetchCountryJSON().then((data) => {
  console.log(data);
  hook.innerHTML = `
  
  <div class="data">
    <img src="${data[0].flags.png}" alt="" />
    <h2>${data[0].name.common}</h2>
    <p><span>Native Name: </span> ${data[0].name.common}</p>
    <p><span>Population: </span> ${data[0].population}</p>
    <p><span>Region: </span> ${data[0].region}</p>
    <p><span>Sub Region: </span> ${data[0].subregion}</p>
    <p><span>Capital: </span> ${data[0].capital}</p>
    <p><span>Top Level Domain: </span> ${data[0].tld[0]}</p>
  </div>

  ${
    data[0].borders
      ? ` <div class="border">
    <h3>Border Countries:</h3>
    <ul>
    
      ${
        data[0].borders &&
        data[0].borders.map((border) => `<li>${border}</li>`).join("")
      }
     
    </ul>
  </div>`
      : " <p><span>No Borders</span>"
  }
  `;
});
