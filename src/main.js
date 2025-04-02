const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("svg");
const navsearch = document.getElementById("nav-search-2");
const products_container = document.querySelector("#product-grid");
const swiper_wrapper = document.querySelector(".swiper-wrapper");

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 900,
};
import { getData_products, getData_users } from "./services/getData";
import show_products from "./components/products";
import user from "./components/users";

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.innerHTML = isOpen
    ? `<svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06Z" fill="currentColor" fillRule="evenodd"/>
  </svg>`
    : `<svg
            height="20"
            width="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.75 4.75h18.5M2.75 12h18.5m-18.5 7.25h18.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>`;
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.innerHTML = `<svg
            height="20"
            width="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.75 4.75h18.5M2.75 12h18.5m-18.5 7.25h18.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>`;
});
navsearch.addEventListener("click", (e) => {
  e.stopPropagation();
  navsearch.classList.toggle("open");
  navsearch.querySelector("input").focus();
});
document.addEventListener("click", (e) => {
  if (!navsearch.contains(e.target)) {
    navsearch.classList.remove("open");
  }
});
getData_products().then((data) => {
  products_container.innerHTML = data
    .map((p) => {
      return show_products(p);
    })
    .join("");
});
getData_users().then((data) => {
  if (!swiper_wrapper || !data || data.length < 1) return;
  if (data.length > 1) {
    swiper_wrapper.innerHTML = data.map((u) => user(u)).join("");
  }
  new Swiper(".swiper", {
    loop: data.length > 1,
    autoplay: {
      delay: 3000, // Time between slides (in ms)
      disableOnInteraction: false, // Keep autoplay running even after user swipes
    },
  });
});
ScrollReveal().reveal("#image-header img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal("#header-content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal("#header-content h1", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal("#header-content p", {
  ...scrollRevealOption,
  delay: 1200,
});
ScrollReveal().reveal("#deal-card", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal("#about-img img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal("#about-card", {
  duration: 1000,
  interval: 500,
  delay: 200,
});
