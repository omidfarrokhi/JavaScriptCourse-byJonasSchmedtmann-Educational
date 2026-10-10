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
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://api-bdc.net/data/reverse-geocode?latitude=${lat}.93129&longitude=${lng}&localityLanguage=en&key=bdc_6a5aec4560744674b342fe77df1f8c78`,
  )
    .then(res => {
      if (!res.ok) throw new Error('Problem with geocoding ${res.status}');
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);

      return fetch(
        `https://api.restcountries.com/countries/v5?q=${data.countryName}`,
        {
          headers: {
            Authorization: 'Bearer rc_live_7283c2df233f405bb2a3d7094791719b',
          },
        },
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found 9${res.status}`);
      return res.json();
    })
    .then(dataRaw => {
      console.log(dataRaw);
      const [data] = dataRaw.data.objects;
      console.log(data.names.common);
      renderCountry(data.names.common);
    })
    .catch(err => console.log(`${err.message}💥`));
};

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
