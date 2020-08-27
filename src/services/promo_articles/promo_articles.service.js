// Initializes the `promo_articles` service on path `/promo-articles`
const { PromoArticles } = require('./promo_articles.class');
const createModel = require('../../models/promo_articles.model');
const hooks = require('./promo_articles.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/promo-articles', new PromoArticles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('promo-articles');

  service.hooks(hooks);
};
