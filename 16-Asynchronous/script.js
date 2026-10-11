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

const getJSON = function (url, errorMsg = 'Somthing went wrong') {
  return fetch(url, {
    headers: {
      Authorization: 'Bearer rc_live_7283c2df233f405bb2a3d7094791719b',
    },
  }).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${lat}.93129&longitude=${lng}&localityLanguage=en&key=bdc_6a5aec4560744674b342fe77df1f8c78`,
    );

    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://api.restcountries.com/countries/v5?q=${dataGeo.countryName}`,
      {
        headers: {
          Authorization: 'Bearer rc_live_7283c2df233f405bb2a3d7094791719b',
        },
      },
    );

    if (!res.ok) throw new Error('Problem getting location data');

    const { data } = await res.json();
    renderCountry(data.objects[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // reject promise returned from async function
    throw err;
  }
};

// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city); // it returns a pending Promise (not fullfiled or rejected at that point)

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: finished getting location'));

// (async params => {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch {
//     console.error(`2: ${err.message}`);
//   }
//   console.log('3: finished getting location');
// })();

const get3Countries = async function (c1, c2, c3) {
  try {
    // const data1 = await getJSON(
    //   `https://api.restcountries.com/countries/v5?q=${c1}`,
    // );
    // const data2 = await getJSON(
    //   `https://api.restcountries.com/countries/v5?q=${c2}`,
    // );
    // const data3 = await getJSON(
    //   `https://api.restcountries.com/countries/v5?q=${c3}`,
    // );

    // const dataObj1 = data1.data.objects[0];
    // const dataObj2 = data2.data.objects[0];
    // const dataObj3 = data3.data.objects[0];

    const data = await Promise.all([
      getJSON(`https://api.restcountries.com/countries/v5?q=${c1}`),
      getJSON(`https://api.restcountries.com/countries/v5?q=${c2}`),
      getJSON(`https://api.restcountries.com/countries/v5?q=${c3}`),
      ,
    ]);

    const dataObjs = data.map(d => {
      d.data.objects[0];
    });

    console.log(dataObjs.map(d => d.capitals[0].name));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
