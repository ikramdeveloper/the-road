document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const openNavbarIcon = document.querySelector(".open-navbar-icon");
  const closeNavbarIcon = document.querySelector(".close-navbar-icon");
  const navLinks = document.querySelectorAll(".nav-link");
  const navigationButtons = document.querySelectorAll(".navigation-button");
  const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

  openNavbarIcon.addEventListener("click", () => {
    container.classList.add("change");
  });

  closeNavbarIcon.addEventListener("click", () => {
    container.classList.remove("change");
  });

  navLinks.forEach((item, index) => {
    item.style.backgroundColor = colors[index % colors.length];
  });

  navigationButtons.forEach(item => {
    item.addEventListener("click", () => {
      item.closest(".container").classList.toggle("change");
    });
  });
});
