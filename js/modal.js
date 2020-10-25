const modalButton = document.querySelector(".modal-button");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalPopup = document.querySelector(".modal");
const searchForm = modalPopup.querySelector(".hotel-search-form");
const arrivalDate = modalPopup.querySelector(".arrival-date");
const leavingDate = modalPopup.querySelector(".leaving-date");
const adultsNumber = modalPopup.querySelector(".adults-number");
const childrenNumber = modalPopup.querySelector(".children-number");

let isStorageSupport = true;
let storageAdults = "";
let storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}


modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (modalPopup.classList.contains("modal-close")) {
    modalPopup.classList.remove("modal-close");
    modalPopup.classList.add("modal-show");

    if (storageAdults) {
    localStorage.value = storageAdults;
    }

    if (storageChildren) {
    localStorage.value = storageChildren;
    }

    arrivalDate.focus();
  } else {
    modalPopup.classList.remove("modal-show");
    modalPopup.classList.add("modal-close");
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !leavingDate.value || !adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
    modalWrapper.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("adults", adultsNumber.value);
    localStorage.setItem("children", childrenNumber.value);
   }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
    }
  }
});
