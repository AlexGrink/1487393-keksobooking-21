// Этот скрипт буду переделывать позже, здесь смотреть нечего.
"use strict";
(() => {
  /* const TITLE = [`дворец1`, `дворец2`, `квартира1`, `квартира2`, `дом1`, `дом2`, `бунгало1`, `бунгало2`];
  const CHECKIN = [`12:00`, `13:00`, `14:00`];
  const CHECKOUT = [`12:00`, `13:00`, `14:00`];
  const FEATURES = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
  const PHOTOS = [
    `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
    `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
    `http://o0.github.io/assets/images/tokyo/hotel3.jpg`,
  ]; */

  /* const createMapContent = (count) => {
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
  }; */
})();
