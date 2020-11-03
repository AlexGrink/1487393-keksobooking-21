"use strict";
(() => {
  const mapPinsList = document.querySelector(`.map__pins`);
  const addressInput = document.querySelector(`[name = address]`);
  const mapPinMain = mapPinsList.querySelector(`.map__pin--main`);
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

  const createMapContent = (count) => {
    const mapsContent = [];
    for (let i = 1; i <= count; i++) {
      const locations = {
        x: window.utils.getRandomFromInterval(0, 1200),
        y: window.utils.getRandomFromInterval(0, 630),
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
          title: TITLE[window.utils.getRandomFromInterval(0, 7)],
          address: locations.x + `, ` + locations.y,
          price: window.utils.getRandomFromInterval(1000, 1000000),
          rooms: window.utils.getRandomFromInterval(1, 5),
          guests: window.utils.getRandomFromInterval(1, 20),
          checkin: CHECKIN[window.utils.getRandomFromInterval(0, 2)],
          checkout: CHECKOUT[window.utils.getRandomFromInterval(0, 2)],
          description: ``,
          features: FEATURES.filter(() => {
            return window.utils.getRandomFromInterval(0, 2);
          }),
          photos: PHOTOS.filter(() => {
            return window.utils.getRandomFromInterval(0, 2);
          })
        }
      };
      mapsContent.push(content);
    }
    return mapsContent;
  };


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


  const fieldsets = document.querySelectorAll(`fieldset`);
  fieldsets.forEach((item) => {
    item.setAttribute(`disabled`, `true`);
  });

  const setActiveState = () => {
    document.querySelector(`.ad-form`).classList.remove(`ad-form--disabled`);
    document.querySelector(`.map`).classList.remove(`map--faded`);
    generateMapPins(createMapContent()); // В таком виде ничего не делает. Временно
    fieldsets.forEach((item) => {
      item.removeAttribute(`disabled`);
    });
  };

  const fillPinPostition = (elem) => {
    let box = elem.getBoundingClientRect();
    addressInput.value = Math.round(box.x + pageXOffset) + PIN_X_OFFSET + `,` + Math.round(box.y + pageYOffset);
  };

  mapPinMain.addEventListener(`mousedown`, (evt) => {
    if (evt.button === 0) {
      setActiveState();
      fillPinPostition(mapPinMain);
    }
  });
  mapPinMain.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === 13) {
      setActiveState();
      fillPinPostition(mapPinMain);
    }
  });

})();
