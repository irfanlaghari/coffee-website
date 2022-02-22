/*=============== LOADER ===============*/

/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*============MENU SHOW===========*/

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
/*=============== MIXITUP FILTER PRODUCTS ===============*/

let mixerProduct = mixitup(".products__content", {
  selectors: {
    target: ".products__card",
  },
  animation: {
    duration: 300,
  },
});

/* Default filter products */
mixerProduct.filter(".delicacies");

/* Link active products */
const linkProducts = document.querySelectorAll(".products__item");

function activeProduct() {
  linkProducts.forEach((l) => l.classList.remove("active-product"));
  this.classList.add("active-product");
}

linkProducts.forEach((l) => l.addEventListener("click", activeProduct));

/*=============== SHOW SCROLL UP ===============*/

function scrollup() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 350) {
    scrollup.classList.add("show-scroll");
  } else {
    scrollup.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

const load = document.getElementById("load");

setTimeout(() => {
  load.style.display = "none";
}, 2500);
