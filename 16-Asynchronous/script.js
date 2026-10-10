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

const whereAmI = async function (country) {
  const res = await fetch(
    `https://api.restcountries.com/countries/v5?q=${country}`,
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

whereAmI('portugal');
console.log('First');
