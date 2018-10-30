var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res, next) {
    db.Quote.findAll({}).then(function (result) {
      res.render("index", {
        quotes: result.slice(0, 19)
      }
      );
    });
  });

  // Load quote page and pass in a quote by symbol
  app.get("/quote/:symbol", function (req, res) {
    db.Quote.findOne({
      where: { symbol: req.params.symbol }
    }).then(function (result) {
      db.Quote.findAll({}).then(function (result2) {
        res.render("quote", {
          quote: result,
          quotes: result2
        });
      })

    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
