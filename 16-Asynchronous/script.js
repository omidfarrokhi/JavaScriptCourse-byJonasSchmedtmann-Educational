'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag.url_png}" />
    <div class="country__data">
    <h3 class="country__name">${data.names.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGeo = await fetch(
    `https://api-bdc.net/data/reverse-geocode?latitude=${lat}.93129&longitude=${lng}&localityLanguage=en&key=bdc_6a5aec4560744674b342fe77df1f8c78`,
  );
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // Country data
  const res = await fetch(
    `https://api.restcountries.com/countries/v5?q=${dataGeo.countryName}`,
    {
      headers: {
        Authorization: 'Bearer rc_live_7283c2df233f405bb2a3d7094791719b',
      },
    },
  );
  const { data } = await res.json();
  renderCountry(data.objects[0]);
  console.log(data.objects[0]);
};

whereAmI();
console.log('First');

try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  alert(err.message);
}
