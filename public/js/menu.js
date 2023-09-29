/* show menu mobil */
const btn = document.querySelector("#btn");
const menu = document.querySelector(".ul");
const heigth = document.querySelector(".nav");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* current link nav active*/
const navbar = document.querySelector("#menu").querySelectorAll("a");
navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("current"));
    this.classList.add("current");
  });
});
