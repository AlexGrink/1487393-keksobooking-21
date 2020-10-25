"use strict";
const adForm = document.querySelector(`.ad-form`);
const typeSelect = adForm.querySelector(`[id=type]`);
const priceValue = adForm.querySelector(`[id=price]`);
const checkIn = adForm.querySelector(`[id=timein]`);
const checkOut = adForm.querySelector(`[id=timeout]`);
const roomNumber = adForm.querySelector(`[id=room_number]`);
const roomCapacity = adForm.querySelector(`[id=capacity]`);
const livingRules = {
  '1 комната': `для 1 гостя`,
  '2 комнаты': [`для 1 гостя`, `для 2 гостей`],
  '3 комнаты': [`для 1 гостя`, `для 2 гостей`, `для 3 гостей`],
  '100 комнат': `не для гостей`,
};
/* Задаем минимальную цену для выбранного Типа жилья */
const setMinPrice = () => {
  if (typeSelect.value === `bungalow`) {
    priceValue.min = 0;
    priceValue.placeholder = `0+`;
  } else if (typeSelect.value === `flat`) {
    priceValue.min = 1000;
    priceValue.placeholder = `1000+`;
  } else if (typeSelect.value === `house`) {
    priceValue.min = 5000;
    priceValue.placeholder = `5000+`;
  } else {
    priceValue.min = 10000;
    priceValue.placeholder = `10000+`;
  }
};

/* Задаем связь между checkin&checkout */

const setCheckOutLink = () => {
  if (checkIn.value === `12:00`) {
    checkOut.value = `12:00`;
  } else if (checkIn.value === `13:00`) {
    checkOut.value = `13:00`;
  } else {
    checkOut.value = `14:00`;
  }
};

const setCheckInLink = () => {
  if (checkOut.value === `12:00`) {
    checkIn.value = `12:00`;
  } else if (checkOut.value === `13:00`) {
    checkIn.value = `13:00`;
  } else {
    checkIn.value = `14:00`;
  }
};

/* Ограничиваем число гостей */

const setGuestsLimit = () => {
  let roomNumberValue = roomNumber.options[roomNumber.selectedIndex].value;
  let roomCapacityContent = roomCapacity.options[roomCapacity.selectedIndex].textContent;
  if (roomNumberValue === `1`) {
    if (roomCapacityContent === livingRules[`1 комната`]) {
      roomCapacity.setCustomValidity(``);
    } else {
      roomCapacity.setCustomValidity(`Количество гостей не должно превышать количество комнат`);
    }
  } else if (roomNumberValue === `2`) {
    if (livingRules[`2 комнаты`].includes(roomCapacityContent)) {
      roomCapacity.setCustomValidity(``);
    } else {
      roomCapacity.setCustomValidity(`Количество гостей не должно превышать количество комнат`);
    }
  } else if (roomNumberValue === `3`) {
    if (livingRules[`3 комнаты`].includes(roomCapacityContent)) {
      roomCapacity.setCustomValidity(``);
    } else {
      roomCapacity.setCustomValidity(`Количество гостей не должно превышать количество комнат`);
    }
  } else {
    if (roomCapacityContent === livingRules[`100 комнат`]) {
      roomCapacity.setCustomValidity(``);
    } else {
      roomCapacity.setCustomValidity(`только "не для гостей"`);
    }
  }
};

checkIn.addEventListener(`input`, () => {
  setCheckOutLink();
});

checkOut.addEventListener(`input`, () => {
  setCheckInLink();
});

typeSelect.addEventListener(`input`, () => {
  setMinPrice();
});

roomCapacity.addEventListener(`input`, () => {
  setGuestsLimit();
});

document.addEventListener(`DOMContentLoaded`, function () {
  setCheckInLink();
  setGuestsLimit();
  setMinPrice();
});
