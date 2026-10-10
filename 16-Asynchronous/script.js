'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
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
};
/*

const getCountryAndNeighbour = function (country) {
  // AJAX call country
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://api.restcountries.com/countries/v5/names.common/${country}`,
  );
  request.setRequestHeader(
    'Authorization',
    'Bearer rc_live_7283c2df233f405bb2a3d7094791719b',
  );
  request.send();

  request.addEventListener('load', function () {
    const result = JSON.parse(this.responseText);
    const [data] = result.data.objects;
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://api.restcountries.com/countries/v5/codes.alpha_3/${neighbour}`,
    );
    request2.setRequestHeader(
      'Authorization',
      'Bearer rc_live_7283c2df233f405bb2a3d7094791719b',
    );
    request2.send();

    request2.addEventListener('load', function () {
      const result2 = JSON.parse(this.responseText);
      const [data2] = result2.data.objects;
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('palestine');
*/

const getCountryData = function (country) {
  fetch(`https://api.restcountries.com/countries/v5?q=${country}`, {
    headers: {
      Authorization: 'Bearer rc_live_7283c2df233f405bb2a3d7094791719b',
    },
  })
    .then(response => response.json())
    .then(result => {
      const [data] = result.data.objects;
      renderCountry(data);
    });
};

getCountryData('portugal');
