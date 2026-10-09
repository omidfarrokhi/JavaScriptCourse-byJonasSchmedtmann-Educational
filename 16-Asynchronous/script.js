'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://api.restcountries.com/countries/v5/names.common/${country}`,
  );

  // Set the authorization header separately
  request.setRequestHeader(
    'Authorization',
    'Bearer rc_live_7283c2df233f405bb2a3d7094791719b',
  );

  request.send();

  request.addEventListener('load', function () {
    const result = JSON.parse(this.responseText);
    const [data] = result.data.objects;
    console.log(data);

    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag.url_png}" />
    <div class="country__data">
    <h3 class="country__name">${data.names.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>

    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('spain');
getCountryData('palestine');
