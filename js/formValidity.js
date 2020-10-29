"use strict";
const adForm = document.querySelector(`.ad-form`);
const typeSelect = adForm.querySelector(`#type`);
const priceValue = adForm.querySelector(`#price`);
const checkIn = adForm.querySelector(`#timein`);
const checkOut = adForm.querySelector(`#timeout`);
const roomNumber = adForm.querySelector(`#room_number`);
const roomCapacity = adForm.querySelector(`#capacity`);

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
  roomCapacity.options[0].disabled = true;
  roomCapacity.options[1].disabled = true;
  roomCapacity.options[2].disabled = true;
  roomCapacity.options[3].disabled = true;
  if (roomNumberValue === `1`) {
    roomCapacity.value = `1`;
    roomCapacity.options[2].disabled = false;
  } else if (roomNumberValue === `2`) {
    roomCapacity.value = `2`;
    roomCapacity.options[2].disabled = false;
    roomCapacity.options[1].disabled = false;
  } else if (roomNumberValue === `3`) {
    roomCapacity.value = `3`;
    roomCapacity.options[2].disabled = false;
    roomCapacity.options[1].disabled = false;
    roomCapacity.options[0].disabled = false;
  } else {
    roomCapacity.value = `0`;
    roomCapacity.options[3].disabled = false;
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
roomNumber.addEventListener(`input`, () => {
  setGuestsLimit();
});

document.addEventListener(`DOMContentLoaded`, function () {
  setCheckInLink();
  setGuestsLimit();
  setMinPrice();
});
