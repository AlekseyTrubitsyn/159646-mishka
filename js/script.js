var orderPopup = document.querySelector('.order-popup');
var popupBackground = document.querySelector('.popup-background');
var popupDoneButton = document.querySelector('.order-popup__done');

var orderLink = document.querySelector('.catalog-item__order-button');
var catalogItemLink = document.querySelectorAll('.catalog-item__link--order');

if (orderLink) {
  orderLink.addEventListener("click", function(event) {
    event.preventDefault();
    openPopup();
  });
}

if (popupBackground) {
  popupBackground.addEventListener("click", function(event) {
  event.preventDefault();
  closePopup();
  });
}

if (popupDoneButton) {
  popupDoneButton.addEventListener("click", function(event) {
    event.preventDefault();
    closePopup();
  });
}

if (catalogItemLink) {
  catalogItemLink.forEach(function(div) {
    div.addEventListener("click", function(event) {
      event.preventDefault();
      openPopup();
    });
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    closePopup();
  }
});

function closePopup() {
  orderPopup.classList.add("hide-that");
  popupBackground.classList.add("hide-that");
}

function openPopup() {
  orderPopup.classList.remove("hide-that");
  popupBackground.classList.remove("hide-that");
}
