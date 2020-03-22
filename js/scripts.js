var modal = document.querySelectorAll(".modal");
var buyButton = document.querySelectorAll(".button-buy");
var modalCart = document.querySelector(".modal-cart");
var closeButton = document.querySelectorAll(".modal-close");
var mapButton = document.querySelector(".map-button img");
var modalMap = document.querySelector(".modal-map");
var feedbackButton = document.querySelector(".button-feedback");
var modalFeedback = document.querySelector(".modal-feedback");
var modalForm = document.querySelector(".modal-feedback form");
var modalFormName = modalForm.querySelector("[name=name]");
var modalFormEmail = modalForm.querySelector("[name=email]");
var serviceBtns = document.querySelectorAll(".index-services-buttons button");
var serviceItems = document.querySelectorAll(".index-services-item");

serviceBtns.forEach(btn => {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();

    serviceBtns.forEach(btn => {
      btn.classList.remove("active");
    });
    
    btn.classList.add("active");

    for (let i = 1; i <= 3; i++) {
      var currentBtn = document.querySelector(".index-services-buttons button:nth-child(" + i + ")");
      // console.log(i);
      if (btn == currentBtn) {
        serviceItems.forEach(item => {
          item.classList.remove("active");
        });
        document.querySelector(".index-services-item:nth-child(" + i + ")").classList.add("active");
      }
    }
  })
});

if (buyButton) {
  buyButton.forEach(btn => {
    btn.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalCart.classList.add("modal-show");
    })
  });  
};

if (mapButton) {
  mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
  })  
};

if (feedbackButton) {
  feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-show");
  })
};

modalForm.querySelector("[type=submit").addEventListener("click", function (evt) {
  if (!modalFormName.value || !modalFormEmail.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  }
})

closeButton.forEach(btn => {
  btn.addEventListener("click", function (evt) {
    modal.forEach(modal => {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    });
  })
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.forEach(modal => {
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
        modal.classList.remove("modal-error");
      }
    });
  }
});
