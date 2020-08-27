const users = require('./users/users.service.js');
const authors = require('./authors/authors.service.js');
const issues = require('./issues/issues.service.js');
const articles = require('./articles/articles.service.js');
const promoArticles = require('./promo_articles/promo_articles.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(authors);
  app.configure(issues);
  app.configure(articles);
  app.configure(promoArticles);
};
