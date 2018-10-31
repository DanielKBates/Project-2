var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res, next) {
    db.Quote.findAll({}).then(function (result) {
      res.render("index", {
        quotes: result.slice(0, 19),
        symbol: result
      });
    });
  });

  // Load quotes page and pass in an example by id
  app.get("/quote/:symbol", function (req, res) {
    db.Quote.findOne({
      where: {
        symbol: req.params.symbol
      }
    }).then(function (result) {
      db.Quote.findAll({}).then(function (result2) {

        res.render("quote", {
          quote: result,
          quotes: result2.slice(0, 19),
        })
      })
    });
  });


  // Load page with top 20 gainers
  app.get("/sorted/gainers", function (req, res) {
    db.Quote.findAll({
      where: {
        percentChange: {
          $gte: "0.001"
        }
      }, order: [["percentChange", "DESC"]]
    }).then(function (result) {
      res.render("gainers", {
        gainers: result.slice(0, 19)
      })
    })
  })

  app.get("/sorted/losers", function (req, res) {
    db.Quote.findAll({
      where: {
        percentChange: {
          $lt: 0.000
        }
      }, order: [["percentChange", "ASC"]]
    }).then(function (result) {
      res.render("losers", {
        losers: result.slice(0, 19)
      })
    })
  })
  app.get("/sorted/asc", function (req, res) {

    db.Quote.findAll({
      where: {
        lastPrice: {
          $gte: 0.10
        }
      }, order: [["lastPrice", "ASC"]]
    }).then(function (result) {
      res.render("asc", {
        asc: result
      })
    })
  })


  app.get("/sorted/desc", function (req, res) {
    db.Quote.findAll({
      where: {
        lastPrice: {
          $lte: 5000.00
        }
      }, order: [["lastPrice", "DESC"]]
    }).then(function (result) {
      res.render("desc", {
        desc: result
      })
    })
  })
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

}
