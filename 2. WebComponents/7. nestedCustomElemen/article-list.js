//* mengimport article-item
import './article-item.js';

//* bikin container untuk membungkus article-item, namanya article-list
class ArticleList extends HTMLElement {
    //* set setArticles ini nantinya akan menerima data berupa array of object dan dittangkap oleh variabel articles
    set setArticles(articles) {
        this.articles = articles;
        this.render();
    }

    render() {
        //* karena berupa array kita bisa lakukan perulangan forEach, untuk setiap article lakukan berikut ini.
        this.articles.forEach((article) => {

            //* bikin articleItem
            const articleItemElement = document.createElement('article-item');

            //* set articleItemElement dengan method pada class ArticleItem yang isinya adalah objek(article) dari array articles
            articleItemElement.setArticle = article;

            //*masukkan atau Append ke this artinya append ke article-list (elemen ini)
            this.appendChild(articleItemElement);
        })
    }
}

// * pemberian tag name
customElements.define('article-list', ArticleList);