  var db = require("../models");

  // Able to search name and symbol
  // Highest performer, lowest performer
module.exports = function (app) {
  app.get("/api/stocks", function(req, res) {
    db.Quote.findAll({}).then(function(result) {
      res.json(result)
    })
  })

  app.get("/api/stocks/:symbol", function(req, res) {
    db.Quote.findOne({
      where: {
        symbol : req.params.symbol
      }
    }).then(function(result) {
      res.json(result);
    })
  })
  
  app.get("/api/stocks/:name", function(req, res) {
    db.Quote.findOne({
      where: {
        name : req.params.name
      }
    }).then(function(result) {
      res.json(result)
    })
  })

  app.get("/api/history/fb", function(req, res) {
    db.FB.findAll({}).then(function(result) {
      res.json(result)
    })
  })

  app.get("/api/history/aapl", function(req, res) {
    db.AAPL.findAll({}).then(function(result) {
      res.json(result)
    })
  })

  app.get("/api/history/amzn", function(req, res) {
    db.AMZN.findAll({}).then(function(result) {
      res.json(result)
    })
  })

  app.get("/api/history/goog", function(req, res) {
    db.GOOG.findAll({}).then(function(result) {
      res.json(result)
    })
  })
}