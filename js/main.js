"use strict";
const mapPinsList = document.querySelector(`.map__pins`);
const TOTAL_ADS = 8;
const TITLE = [`дворец1`, `дворец2`, `квартира1`, `квартира2`, `дом1`, `дом2`, `бунгало1`, `бунгало2`];
const CHECKIN = [`12:00`, `13:00`, `14:00`];
const CHECKOUT = [`12:00`, `13:00`, `14:00`];
const FEATURES = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
const PHOTOS = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`,
];

const getRandomFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createMapContent = () => {
  const mapsContent = [];

  for (let i = 1; i <= TOTAL_ADS; i++) {
    const locations = {
      x: getRandomFromInterval(0, 1200),
      y: getRandomFromInterval(130, 630),
    };
    const content = {
      author: {
        avatar: `img/avatars/user0${i}.png`,
      },
      location: {
        x: locations.x,
        y: locations.y,
      },
      offer: {
        title: TITLE[i],
        address: locations.x + `, ` + locations.y,
        price: getRandomFromInterval(1000, 1000000),
        rooms: getRandomFromInterval(1, 5),
        guests: getRandomFromInterval(1, 20),
        checkin: CHECKIN[getRandomFromInterval(0, 2)],
        checkout: CHECKOUT[getRandomFromInterval(0, 2)],
        description: ``,
        features: FEATURES.slice(0, getRandomFromInterval(0, 5)),
        photos: PHOTOS.slice(0, getRandomFromInterval(0, 2)),
      },
    };

    mapsContent.push(content);
  }
  return mapsContent;
};

document.querySelector(`.map`).classList.remove(`map--faded`);

const createMapPin = (template, content) => {
  const mapPinElement = template.cloneNode(true);
  mapPinElement.querySelector(`img`).src = content.author.avatar;
  mapPinElement.querySelector(`img`).alt = content.offer.title;
  mapPinElement.style.left = content.location.x + 25 + `px`;
  mapPinElement.style.top = content.location.y + 70 + `px`;
  return mapPinElement;
};

const generateMapPins = (mapsContent) => {
  const fragment = document.createDocumentFragment();
  const mapPinTemplate = document.querySelector(`#pin`).content.querySelector(`.map__pin`);
  for (let i = 0; i < mapsContent.length; i++) {
    fragment.appendChild(createMapPin(mapPinTemplate, mapsContent[i]));
  }
  mapPinsList.appendChild(fragment);
};

generateMapPins(createMapContent());
