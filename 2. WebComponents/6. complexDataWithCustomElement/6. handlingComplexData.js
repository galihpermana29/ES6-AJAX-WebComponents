//! import variabel article 1 dan article 2 dari berkas 6.1
import {article1, article2} from './6.1 exportVariabel.js';

//! membuat class custom elemen
class ArticleItem extends HTMLElement {
    //! dengan menggunakan setter kita bisa membuat fungsi set setArticle(article) yang didalamnya kita jalankan fungsi render()
    set setArticle(article) {
        //! parameter article, nantinya akan berisi objek dari variabel article 1 dan 2
        this.article = article;
        this.render();
    }

    render() {
        this.innerHTML = 
        `<img class="featured-image" src="${this.article.featuredImage}">
        <div class="article-info">
            <h2>
                <a href="#${this.article.id}">${this.article.title}</a>
            </h2>
            <p>${this.article.description}</p>
        </div>
        `
    }
}

//! pemberian nama tag
customElements.define('article-item', ArticleItem);

//! membuat elemen article-item 1
let articleItemElement1 = document.createElement('article-item');
//! variabel articleItemElement1 kita kenakan propert setArticle yang mana dia merupakan setter, lalu kita isi dia dengan variabel article1 yang nantinya ditangkap oleh parameter article pada fungsi setArticle(article) diatas
articleItemElement1.setArticle = article1;

//! membuat elemen article-item 2
let articleItemElement2 = document.createElement('article-item');
articleItemElement2.setArticle = article2;

//! meng Append kedua articleItem ke dalam container
const container = document.querySelector('.container');
container.appendChild(articleItemElement1)
container.appendChild(articleItemElement2)