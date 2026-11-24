const loaderScreen = document.getElementById("loaderScreen");

window.addEventListener("load", function () {
  setTimeout(function () {
    loaderScreen.classList.add("hide");
    showVisibleSections();
  }, 600);
});

const header = document.querySelector(".header");
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu.querySelectorAll("a");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  showVisibleSections();
});

burgerBtn.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navMenu.classList.remove("open");
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll("#menu .dish-card");

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");

    const selectedCategory = this.getAttribute("data-category");

    for (let k = 0; k < menuCards.length; k++) {
      const cardCategory = menuCards[k].getAttribute("data-category");
      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        menuCards[k].style.display = "block";
      } else {
        menuCards[k].style.display = "none";
      }
    }
  });
}

const toggleExtraBtn = document.getElementById("toggleExtraBtn");
const extraMenu = document.getElementById("extraMenu");

toggleExtraBtn.addEventListener("click", function () {
  const isHidden = extraMenu.classList.contains("hidden");
  if (isHidden) {
    extraMenu.classList.remove("hidden");
    toggleExtraBtn.innerHTML = 'HIDE EXTRA MENU <i class="fa-solid fa-arrow-up"></i>';
  } else {
    extraMenu.classList.add("hidden");
    toggleExtraBtn.innerHTML = 'VIEW FULL MENU <i class="fa-solid fa-arrow-down"></i>';
  }
});

const dishModal = document.getElementById("dishModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalImg = document.getElementById("modalImg");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalReserveBtn = document.getElementById("modalReserveBtn");
const viewDishButtons = document.querySelectorAll(".view-dish-btn");

for (let i = 0; i < viewDishButtons.length; i++) {
  viewDishButtons[i].addEventListener("click", function () {
    const card = this.closest(".dish-card");
    const cardImg = card.querySelector("img");

    modalImg.src = cardImg.getAttribute("src");
    modalTag.textContent = card.getAttribute("data-category").toUpperCase();
    modalTitle.textContent = card.getAttribute("data-title");
    modalPrice.textContent = card.getAttribute("data-price");
    modalDesc.textContent = card.getAttribute("data-desc");

    dishModal.classList.remove("hidden");
  });
}

closeModalBtn.addEventListener("click", function () {
  dishModal.classList.add("hidden");
});

dishModal.addEventListener("click", function (event) {
  if (event.target === dishModal) {
    dishModal.classList.add("hidden");
  }
});

modalReserveBtn.addEventListener("click", function () {
  dishModal.classList.add("hidden");
});

const reserveForm = document.getElementById("reserveForm");
const formMessage = document.getElementById("formMessage");

reserveForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value;

  formMessage.classList.remove("hidden");
  formMessage.textContent =
    "Thank you, " + firstName + "! Your table for " + guests + " on " + date + " is confirmed.";

  reserveForm.reset();
});

const revealElements = document.querySelectorAll(".reveal");

function showVisibleSections() {
  const triggerHeight = window.innerHeight * 0.88;
  for (let i = 0; i < revealElements.length; i++) {
    const topPos = revealElements[i].getBoundingClientRect().top;
    if (topPos < triggerHeight) {
      revealElements[i].classList.add("visible");
    }
  }
}

showVisibleSections();