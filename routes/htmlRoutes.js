var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res, next) {
    db.Quote.findAll({}).then(function (result) {
      res.render("index", {
        quotes: result.slice(0,19)
        }
      );
    });
  });

  // Load example page and pass in an example by id
  app.get("/quote/:symbol", function (req, res) {
    db.Quote.findOne({
      where: { name: req.params.symbol }
    }).then(function (result) {
      res.render("quote", {
        quotes: result
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
