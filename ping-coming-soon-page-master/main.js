const input = document.querySelector(".form__input");
const btn = document.querySelector(".form__btn");
const form = document.querySelector(".ping__form");
const error_span = document.querySelector(".error");
const REGEXP = /^[\w-.]+@[\w-_]+(\.[a-zA-z]{2,4}){1,2}$/gm;

function validateEmail(input_value) {
	if (!REGEXP.test(input_value)) {
		form.classList.add("invalid");
		error_span.innerHTML = "Please provide a valid email adress";
	} else {
		form.classList.remove("invalid");
		error_span.innerHTML = "";
	}
}

input.addEventListener("keydown", (e) => {
	let input_value = e.target.value;
	validateEmail(input_value);
});

btn.addEventListener("click", () => {
	if (!form.classList.contains("invalid")) {
		input.value = "";
	}
});
