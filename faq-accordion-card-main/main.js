const articles = document.querySelectorAll(".article");

articles.forEach((article) => {
	article.addEventListener("click", () => handleArticle(article));
});

function handleArticle(article) {
	if (article.classList[1]) {
		closeArticles();
		return;
	}
	closeArticles();
	article.classList.add("active");
}

function closeArticles() {
	articles.forEach((article) => {
		article.classList.remove("active");
	});
}
