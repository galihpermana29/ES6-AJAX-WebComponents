import {articles} from './articles.js';
import './article-list.js';

//* sekarang kita buat elemen article-listnya
const articleListElement = document.createElement('article-list');

//* lalu set method setArticles dengan variabel articles
articleListElement.setArticles = articles;

//* jangan lupa Append ke body
document.body.appendChild(articleListElement);