
const feedbackRoutes = require('./feedback_routes');
const newsRoutes = require('./news_routes');
module.exports = function(app, db) {
  feedbackRoutes(app, db);
  newsRoutes(app,db);
};
