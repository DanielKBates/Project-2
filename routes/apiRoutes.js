var db = require("../models");
var rp = require("request-promise");
// var Sequelize = require("sequelize")
// const Op = Sequelize.Op
// Able to search name and symbol
// Highest performer, lowest performer
module.exports = function (app) {
  app.get("/api/stocks", function (req, res) {
    db.Quote.findAll({}).then(function (result) {
      res.json(result)
    })
  })


  app.get("/api/stocks/:symbol", function (req, res) {
    db.Quote.findOne({
      where: {
        symbol: req.params.symbol
      }
    }).then(function (result) {
      res.json(result);
    })
  })


  app.get("/api/stocks/:name", function (req, res) {
    db.Quote.findOne({
      where: {
        name: req.params.name
      }
    }).then(function (result) {
      res.json(result)
    })
  })


  app.get("/api/stocks/asc", function (req, res) {
    db.Quote.findAll({
      where: {
        lastPrice: {
          gte: 0.10
        }
      }, order: [["lastPrice", "ASC"]]
    }).then(function(result) {
      res.json(result)
    })
  })


  app.get("/api/stocks/desc", function (req, res) {
    db.Quote.findAll({
      where: {
        lastPrice: {
          lte: 5000.00
        }
      }, order: [["lastPrice", "DESC"]]
    }).then(function(result) {
      res.json(result)
    })
  })


  app.get("/api/stocks/gainers", function(req, res) {
    Quote.findAll({
      where: {
        percentChange: {
          $gte: "0.001"
        }
      }, order: [["percentChange", "DESC"]]
    }).then(function(result) {
      res.json(result)
    })
  })
  app.get("/api/stocks/losers", function(req, res) {
    db.Quote.findAll({
      where: {
        percentChange : req.body.percentChange
      }, order: [["percentChange", "DESC"]]
    }).then(function(result) {
      res.json(result)
    })
  })


  app.get("/api/history/fb", function (req, res) {
    db.FB.findAll({}).then(function (result) {
      res.json(result)
    })
  })

  app.get("/api/history/aapl", function (req, res) {
    db.AAPL.findAll({}).then(function (result) {
      res.json(result)
    })
  })

  app.get("/api/history/amzn", function (req, res) {
    db.AMZN.findAll({}).then(function (result) {
      res.json(result)
    })
  })

  app.get("/api/history/goog", function (req, res) {
    db.GOOG.findAll({}).then(function (result) {
      res.json(result)
    })
  })
}




//   function createQuotes(arr) {
//     var quote = arr.pop();
//     if (!quote) {
//       return;
//     }
//     db.Quote.create(quote)
//       .then(function (newQuote) {
//         createQuotes(arr);
//       })
//   }
//   rp({
//     url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=AAPL%2CMSFT%2CAMZN%2CBRK.B%2CJNJ%2CFB%2CJPM%2CGOOG%2CXOM%2CGOOGL%2CPFE%2CUNH%2CBAC%2CV%2CVZ%2CWFC%2CPG%2CCVX%2CT%2CINTC%2CCSCO%2CHD%2CBA%2CMRK%2CMA&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//     json: true
//   })
//     .then(function (repos) {
//       console.log(repos.results.length);
//       createQuotes(repos.results.reverse());
//       rp({
//         url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=KO%2CDIS%2CC%2CCMCSA%2CPEP%2CWMT%2CPM%2CMCD%2CORCL%2CNFLX%2CABBV%2CMDT%2CNVDA%2CADBE%2CAMGN%2CDWDP%2CMO%2CABT%2CIBM%2CHON%2CMMM%2CUNP%2CCRM%2CLLY%2CACN&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//         json: true
//       })
//         .then(function (repos) {
//           console.log(repos.results.length);
//           createQuotes(repos.results.reverse());
//           rp({
//             url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=PYPL%2CGE%2CCOST%2CUTX%2CTMO%2CNKE%2CAVGO%2CGILD%2CTXN%2CQCOM%2CBKNG%2CBMY%2CNEE%2CCOP%2CSBUX%2CUSB%2CLOW%2CLMT%2CGS%2CSLB%2CUPS%2CAXP%2CCVS%2CANTM%2CCAT&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//             json: true
//           })
//             .then(function (repos) {
//               console.log(repos.results.length);
//               createQuotes(repos.results.reverse());
//               rp({
//                 url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=TJX%2CAMT%2CWBA%2CAET%2CEOG%2CBDX%2CCME%2CBIIB%2CDHR%2CADP%2CMDLZ%2CDUK%2CMS%2CCB%2CAGN%2CSPG%2CPNC%2CISRG%2CCSX%2CESRX%2CCHTR%2CATVI%2CINTU%2CSCHW%2CCL&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                 json: true
//               })
//                 .then(function (repos) {
//                   console.log(repos.results.length);
//                   createQuotes(repos.results.reverse());
//                   rp({
//                     url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=OXY%2CFDX%2CCELG%2CRTN%2CCI%2CSYK%2CBSX%2CBLK%2CGD%2CFOXA%2CPX%2CD%2CNOC%2CMPC%2CNSC%2CSO%2CHUM%2CTGT%2CVRTX%2CILMN%2CSPGI%2CZTS%2CDE%2CGM%2CCCI&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                     json: true
//                   })
//                     .then(function (repos) {
//                       console.log(repos.results.length);
//                       createQuotes(repos.results.reverse());

//                       rp({
//                         url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=PSX%2CICE%2CEXC%2CBK%2CMMC%2CEMR%2CCTSH%2CCOF%2CMU%2CPLD%2CPGR%2CMET%2CITW%2CPRU%2CECL%2CAON%2CVLO%2CHPQ%2CAIG%2CROST%2CBBT%2CKMB%2CAEP%2CSTZ%2CF&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                         json: true
//                       })
//                         .then(function (repos) {
//                           console.log(repos.results.length);
//                           createQuotes(repos.results.reverse());
//                           rp({
//                             url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=HCA%2CKHC%2CWM%2CDAL%2CFIS%2CSYY%2CBAX%2CTRV%2CAPD%2CMAR%2CALL%2CAFL%2CAMAT%2CFISV%2CETN%2CKMI%2CHAL%2CSRE%2CEQIX%2CSHW%2CAPC%2CPSA%2CWMB%2CEW%2CEA&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                             json: true
//                           })
//                             .then(function (repos) {
//                               console.log(repos.results.length);
//                               createQuotes(repos.results.reverse());
//                               rp({
//                                 url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=ROP%2CADI%2CJCI%2CDG%2CLYB%2CEL%2CSTI%2CYUM%2CPEG%2CADSK%2CCXO%2CORLY%2CADM%2CTEL%2CCNC%2COKE%2CVFC%2CREGN%2CAPH%2CALXN%2CGIS%2CLUV%2CEBAY%2CPXD%2CSTT&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                 json: true
//                               })
//                                 .then(function (repos) {
//                                   console.log(repos.results.length);
//                                   createQuotes(repos.results.reverse());
//                                   rp({
//                                     url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=COL%2CPPL%2CDXC%2CRHT%2CHLT%2CDTE%2CPAYX%2CMNST%2CROK%2CVTR%2CWY%2CA%2CXLNX%2CES%2CNTRS%2CAZO%2CDLTR%2CAPTV%2CUAL%2CPCAR%2CCMI%2CIQV%2CMSI%2CPH%2CSYF&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                     json: true
//                                   })
//                                     .then(function (repos) {
//                                       console.log(repos.results.length);
//                                       createQuotes(repos.results.reverse());
//                                       rp({
//                                         url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=PPG%2CGLW%2CXEL%2CWELL%2CAVB%2CMCK%2CPCG%2CEQR%2CED%2CMCO%2CTWTR%2CZBH%2CIR%2CDFS%2CMTB%2CTROW%2CKR%2CFTV%2CEIX%2CCCL%2CLRCX%2CFOX%2CDLR%2CWEC%2CHPE&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                         json: true
//                                       })
//                                         .then(function (repos) {
//                                           console.log(repos.results.length);
//                                           createQuotes(repos.results.reverse());
//                                           rp({
//                                             url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=HRS%2CCLX%2CVRSK%2CNTAP%2CIP%2CWLTW%2CCBS%2CCTL%2CCERN%2CINFO%2CKEY%2CTSN%2CRF%2CFE%2CGPN%2CNUE%2CBXP%2CIDXX%2CAMP%2CK%2CRCL%2CO%2CSBAC%2CFITB%2CCFG&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                             json: true
//                                           })
//                                             .then(function (repos) {
//                                               console.log(repos.results.length);
//                                               createQuotes(repos.results.reverse());
//                                               rp({
//                                                 url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=SWK%2CALGN%2CFLT%2CBBY%2CFCX%2CCAG%2CMKC%2CDV%2CDVN%2CESS%2CHIG%2COMC%2CMYL%2CLLL%2CNEM%2CMRO%2CULTA%2CLH%2CAWK%2CAEE%2CCAH%2CTDG%2CAME%2CTSS%2CRSG%2CEVRG&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                                 json: true
//                                               })
//                                                 .then(function (repos) {
//                                                   console.log(repos.results.length);
//                                                   createQuotes(repos.results.reverse());
//                                                   rp({
//                                                     url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=AMD%2CBLL%2CVRSN%2CHBAN%2CABMD%2CETR%2CSWKS%2CRMD%2CCTAS%2CEXPE%2CHES%2CMCHP%2CWCG%2CWAT%2CGPC%2CAPA%2CHSY%2CCHD%2CFAST%2CABC%2CIFF%2CMTD%2CCMS%2CTTWO%2CCMA&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                                     json: true
//                                                   })
//                                                     .then(function (repos) {
//                                                       console.log(repos.results.length);
//                                                       createQuotes(repos.results.reverse());
//                                                       rp({
//                                                         url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=NOV%2CHST%2CCA%2CAAL%2CKLAC%2CAJG%2CBR%2CTXT%2CWDC%2CMSCI%2CSNPS%2CIT%2CCTXS%2CCNP%2CARE%2CCDNS%2CMGM%2CDRI%2CL%2CETFC%2CLNC%2CGWW%2CHSIC%2CKMX%2CHCP&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                                         json: true
//                                                       })
//                                                         .then(function (repos) {
//                                                           console.log(repos.results.length);
//                                                           createQuotes(repos.results.reverse());
//                                                           rp({
//                                                             url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=DGX%2CKSS%2CDHI%2CNBL%2CCBRE%2CSIVB%2CLEN%2CPFG%2CDOV%2CAAP%2CCOO%2CANSS%2CCHRW%2CCBOE%2CSJM%2CXYL%2CTPR%2CTIF%2CEFX%2CVMC%2CCINF%2CEXPD%2CVNO%2CSYMC%2CBHGE&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                                             json: true
//                                                           })
//                                                             .then(function (repos) {
//                                                               console.log(repos.results.length);
//                                                               createQuotes(repos.results.reverse());
//                                                               rp({
//                                                                 url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=FTI%2CANET%2CEMN%2CINCY%2CFTNT%2CMAA%2CHRL%2CTSCO%2CEXR%2CREG%2CCMG%2CHAS%2CNRG%2CKSU%2CWRK%2CAKAM%2CHOLX%2CVIAB%2CALB%2CMOS%2CUDR%2CFFIV%2CCOG%2CCF%2CTAP&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                                                 json: true
//                                                               })
//                                                                 .then(function (repos) {
//                                                                   console.log(repos.results.length);
//                                                                   createQuotes(repos.results.reverse());
//                                                                   rp({
//                                                                     url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=VAR%2CSTX%2CUHS%2CFMC%2CHFC%2CDISCK%2CLNT%2CM%2CWYNN%2CDRE%2CJNPR%2CMLM%2CHII%2CNDAQ%2CRJF%2CAES%2CCPRT%2CADS%2CZION%2CNI%2CPNW%2CPKI%2CJBHT%2CPVH%2CURI&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                                                     json: true
//                                                                   })
//                                                                     .then(function (repos) {
//                                                                       console.log(repos.results.length);
//                                                                       createQuotes(repos.results.reverse());
//                                                                       rp({
//                                                                         url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=NCLH%2CBEN%2CFRT%2CIPG%2CPRGO%2CJEC%2CNLSN%2CMAS%2CQRVO%2CIVZ%2CEQT%2CTMK%2CARNC%2CIRM%2CPKG%2CSNA%2CLKQ%2CKORS%2CDVA%2CRE%2CSLG%2CWU%2CBWA%2CXRAY%2CBF.B&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                                                         json: true
//                                                                       })
//                                                                         .then(function (repos) {
//                                                                           console.log(repos.results.length);
//                                                                           createQuotes(repos.results.reverse());
//                                                                           rp({
//                                                                             url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=UNM%2CXEC%2CALLE%2CAVY%2CALK%2CFLIR%2CGRMN%2CRHI%2CMHK%2CRL%2CJWN%2CCPB%2CLB%2CNWL%2CHP%2CWHR%2CAIV%2CKIM%2CAMG%2CPNR%2CDISH%2CPHM%2CNKTR%2CAOS%2CHOG&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                                                             json: true
//                                                                           })
//                                                                             .then(function (repos) {
//                                                                               console.log(repos.results.length);
//                                                                               createQuotes(repos.results.reverse());
//                                                                               rp({
//                                                                                 url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=FBHS%2CFLR%2CJEF%2CXRX%2CHBI%2CGPS%2CFLS%2CROL%2CFL%2CMAC%2CAIZ%2CPBCT%2CSEE%2CHRB%2CIPGP%2CSCG%2CGT%2CTRIP%2CNWSA%2CDISCA%2CCOTY%2CMAT%2CBHF%2CLEG%2CPWR&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//                                                                                 json: true
//                                                                               })
//                                                                                 .then(function (repos) {
//                                                                                   console.log(repos.results.length);
//                                                                                   createQuotes(repos.results.reverse());
//                                                                                 })
//                                                                             })
//                                                                         })
//                                                                     })
//                                                                 })
//                                                             })
//                                                         })
//                                                     })
//                                                 })
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
//   rp({
//     url: "https://marketdata.websol.barchart.com/getHistory.json?apikey=8e4b1fd737d20bf7cf707a1cfdc44e9e&symbol=AAPL&type=daily&startDate=20100101&maxRecords=180&interval=1&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true",
//     json: true
//   }).then(function (repos) {
//     for (var i = 0; i < repos.results.length; i++) {
//       db.AAPL.create({
//         symbol: repos.results[i].symbol,
//         timestamp: repos.results[i].timestamp,
//         tradingDay: repos.results[i].tradingDay,
//         open: repos.results[i].open,
//         high: repos.results[i].high,
//         low: repos.results[i].low,
//         close: repos.results[i].close,
//         volume: repos.results[i].volume,
//       })
//     }
//   })
//   rp({
//     url: "https://marketdata.websol.barchart.com/getHistory.json?apikey=8e4b1fd737d20bf7cf707a1cfdc44e9e&symbol=FB&type=daily&startDate=20100101&maxRecords=180&interval=1&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true",
//     json: true
//   }).then(function (repos) {
//     for (var i = 0; i < repos.results.length; i++) {
//       db.FB.create({
//         symbol: repos.results[i].symbol,
//         timestamp: repos.results[i].timestamp,
//         tradingDay: repos.results[i].tradingDay,
//         open: repos.results[i].open,
//         high: repos.results[i].high,
//         low: repos.results[i].low,
//         close: repos.results[i].close,
//         volume: repos.results[i].volume,
//       })
//     }
//   })
//   rp({
//     url: "https://marketdata.websol.barchart.com/getHistory.json?apikey=8e4b1fd737d20bf7cf707a1cfdc44e9e&symbol=AMZN&type=daily&startDate=20100101&maxRecords=180&interval=1&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true",
//     json: true
//   }).then(function (repos) {
//     for (var i = 0; i < repos.results.length; i++) {
//       db.AMZN.create({
//         symbol: repos.results[i].symbol,
//         timestamp: repos.results[i].timestamp,
//         tradingDay: repos.results[i].tradingDay,
//         open: repos.results[i].open,
//         high: repos.results[i].high,
//         low: repos.results[i].low,
//         close: repos.results[i].close,
//         volume: repos.results[i].volume,
//       })
//     }
//   })
//   rp({
//     url: "https://marketdata.websol.barchart.com/getHistory.json?apikey=8e4b1fd737d20bf7cf707a1cfdc44e9e&symbol=GOOG&type=daily&startDate=20100101&maxRecords=180&interval=1&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true",
//     json: true
//   }).then(function (repos) {
//     for (var i = 0; i < repos.results.length; i++) {
//       db.GOOG.create({
//         symbol: repos.results[i].symbol,
//         timestamp: repos.results[i].timestamp,
//         tradingDay: repos.results[i].tradingDay,
//         open: repos.results[i].open,
//         high: repos.results[i].high,
//         low: repos.results[i].low,
//         close: repos.results[i].close,
//         volume: repos.results[i].volume,
//       })
//     }
//   })

//   rp({
//     url: "https://marketdata.websol.barchart.com/getHistory.json?apikey=8e4b1fd737d20bf7cf707a1cfdc44e9e&symbol=NFLX&type=daily&startDate=20100101&maxRecords=180&interval=1&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true",
//     json: true
//   }).then(function (repos) {
//     for (var i = 0; i < repos.results.length; i++) {
//       db.NFLX.create({
//         symbol: repos.results[i].symbol,
//         timestamp: repos.results[i].timestamp,
//         tradingDay: repos.results[i].tradingDay,
//         open: repos.results[i].open,
//         high: repos.results[i].high,
//         low: repos.results[i].low,
//         close: repos.results[i].close,
//         volume: repos.results[i].volume,
//       })
//     }
//   })




// }

