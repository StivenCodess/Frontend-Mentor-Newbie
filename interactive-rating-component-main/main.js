const rating_container = document.querySelector(".rating__container");
const rating_list = document.querySelector(".rating__list");
const submit = document.querySelector(".rating__submit");

const ty_container = document.querySelector(".ty__container");
const ty__rating = document.querySelector(".rating__text-value");

let rating = 5;

rating_list.addEventListener("click", (event) => {
	if (event.target.type === "button") {
		rating = event.target.innerHTML;
	}
});

submit.addEventListener("click", () => {
	rating_container.classList.add("hidden");
	ty_container.classList.remove("hidden");
	ty__rating.innerHTML = rating;
});
