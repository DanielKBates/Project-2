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

  // Load quotes page and pass in an example by id
  app.get("/:symbol", function (req, res) {
    db.Quote.findOne({
      where: {
         name: req.params.symbol 
      }
    }).then(function (result) {
      res.render("quote", {
        quotes: result
      });
    });
  });

  // Load page with top 20 gainers
  app.get("/gainers", function(req, res) {
    db.Quote.findAll({}).then(function(result) {
      res.render("gainers", {
        quotes: result.slice(0,20)
      })
    })
  })

  app.get("/losers", function(req, res) {
    db.Quote.findAll({}).then(function(result) {
      res.render("losers", {
        quotes: result.slice(0,20)
      })
    })
  })

  app.get("/ASC", function(req, res) {
    db.Quote.findAll({}).then(function(result) {
      res.render("index", {
        quotes: result
      })
    })
  })

  app.get("/DESC", function(req, res) {
    db.Quote.findAll({}).then(function(result) {
      res.render("index", {
        quotes: result
      })
    })
  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};