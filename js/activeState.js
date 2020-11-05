"use strict";
(() => {
  const addressInput = document.querySelector(`[name = address]`);
  const mapPinMain = document.querySelector(`.map__pin--main`);
  const PIN_X_OFFSET = 25;
  const PIN_Y_OFFSET = 35;
  const mapPinsList = document.querySelector(`.map__pins`);

  const createMapPin = (template, content) => {
    const mapPinElement = template.cloneNode(true);
    mapPinElement.querySelector(`img`).src = content.author.avatar;
    mapPinElement.querySelector(`img`).alt = content.offer.title;
    mapPinElement.style.left = content.location.x + PIN_X_OFFSET + `px`;
    mapPinElement.style.top = content.location.y + PIN_Y_OFFSET + `px`;
    return mapPinElement;
  };

  const successHandler = (mapPins) => {
    const fragment = document.createDocumentFragment();
    const mapPinTemplate = document.querySelector(`#pin`).content.querySelector(`.map__pin`);
    mapPins.forEach((item) => {
      fragment.appendChild(createMapPin(mapPinTemplate, item));
    });
    mapPinsList.appendChild(fragment);
  };

  let errorHandler = function (errorMessage) {
    let node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;
    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  const fieldsets = document.querySelectorAll(`fieldset`);
  fieldsets.forEach((item) => {
    item.setAttribute(`disabled`, `true`);
  });

  const setActiveState = () => {
    document.querySelector(`.ad-form`).classList.remove(`ad-form--disabled`);
    document.querySelector(`.map`).classList.remove(`map--faded`);
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
      window.load(successHandler, errorHandler);
      fillPinPostition(mapPinMain);
    }
  });

  mapPinMain.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === 13) {
      setActiveState();
      window.load(successHandler, errorHandler);
      window.load();
      fillPinPostition(mapPinMain);
    }
  });

})();
