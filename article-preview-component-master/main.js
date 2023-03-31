const share_button = document.querySelector(".button__share");
const share_img = document.querySelector(".share__img");
const share_container = document.querySelector(".share__container-sup");
let state = false;

const showShareContainer = () => {
	share_container.classList.toggle("show");
	share_button.classList.toggle("dark-bg");
	share_img.classList.toggle("white");
};

share_button.addEventListener("click", () => {
	showShareContainer();
	state = !state;
	return;
});
