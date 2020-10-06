"use strict";
const PIN_X_OFFSET = 25;
const PIN_Y_OFFSET = 70;
const TITLE = [`дворец1`, `дворец2`, `квартира1`, `квартира2`, `дом1`, `дом2`, `бунгало1`, `бунгало2`];
const CHECKIN = [`12:00`, `13:00`, `14:00`];
const CHECKOUT = [`12:00`, `13:00`, `14:00`];
const FEATURES = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
const PHOTOS = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`,
];


const mapPinsList = document.querySelector(`.map__pins`);


const createMapContent = () => {
  const mapsContent = [];

  for (let i = 1; i <= 8; i++) {
    const locations = {
      x: getRandomFromInterval(0, 1200),
      y: getRandomFromInterval(0, 630),
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
        title: TITLE[getRandomFromInterval(0, 7)],
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
  mapPinElement.style.left = content.location.x + PIN_X_OFFSET + `px`;
  mapPinElement.style.top = content.location.y + PIN_Y_OFFSET + `px`;
  return mapPinElement;
};

const generateMapPins = (mapsContent) => {
  const fragment = document.createDocumentFragment();
  const mapPinTemplate = document.querySelector(`#pin`).content.querySelector(`.map__pin`);
  mapsContent.forEach((item) => {
    fragment.appendChild(createMapPin(mapPinTemplate, item));
  });
  mapPinsList.appendChild(fragment);
};

generateMapPins(createMapContent());
