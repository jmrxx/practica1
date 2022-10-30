
const btn = document.querySelector("#btn");
	const menu = document.querySelector(".menu");
	const heigth = document.querySelector(".nav");

	btn.addEventListener("click", () => {
		menu.classList.toggle("active");
	});