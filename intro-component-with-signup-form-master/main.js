const form = document.querySelector(".offer__form");

const nameValidation = /^[\w]+$/gm;
const emailValidation = /^[\w-_]+@[\w]+(\.[\w]{2,4}){1,2}$/gm;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateInput(e);
	if (form.querySelectorAll(".invalid").length === 0) {
		location.reload();
	}
});

function validateInput(e) {
	let inputs = e.target.querySelectorAll("input");

	inputs.forEach((element) => {
		nameValidation.lastIndex = 0;
		emailValidation.lastIndex = 0;

		if (element.id === "firstnm" || element.id === "lastnm") {
			if (!nameValidation.test(element.value)) {
				setInvalid(element.parentElement);
				return;
			}
			setInvalid(element.parentElement, "remove");
		}

		switch (element.id) {
			case "email":
				if (!emailValidation.test(element.value)) {
					setInvalid(element.parentElement);
					return;
				}
				setInvalid(element.parentElement, "remove");
				break;
			case "password":
				if (element.value === "") {
					setInvalid(element.parentElement);

					return;
				}
				setInvalid(element.parentElement, "remove");
				break;
			default:
				break;
		}
	});

	function setInvalid(element, action) {
		if (action === "remove") {
			element.classList.remove("invalid");
			return;
		}
		element.classList.add("invalid");
	}
}
