//* membuat custom element article-item nya. 
class ArticleItem extends HTMLElement {
    set setArticle(article) {
        this.article = article;
        this.render();
    }

    render() {
        this.innerHTML = 
        `<img class="featured-image" src="${this.article.featuredImage}">
        <div class="article-info">
            <h2><a href="${this.article.id}">${this.article.title}</a></h2>
            <p>${this.article.description}</p>
        </div>
        `;
    }
}

//* pemberian nama pada tagnya
customElements.define('article-item', ArticleItem);

