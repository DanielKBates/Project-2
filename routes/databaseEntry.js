// var db = require("../models");
// var rp = require("request-promise")

// module.exports(repos) {}
// function createQuotes(arr) {
//     var quote = arr.pop();
//     if (!quote) {
//         return;
//     }

//     db.Quote.create(quote)
//         .then(function (newQuote) {
//             createQuotes(arr);
//         })
// }

// rp({
//     url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=LUV%2CGLW%2CPPG%2CDFS%2CXEL%2CZBH%2CMCK%2CWELL%2CPCG%2CAVB%2CEQR%2CDLR%2CED%2CIR%2CFTV%2CTROW%2CTWTR%2CMTB%2CKR%2CCCL%2CEIX%2CLRCX%2CHPE%2CWEC%2CFOX&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//     json: true
// })
//     .then(function (repos) {
//         for (var i = 0; i < repos.results.length; i++) {
//             db.Quote.create({
//                 symbol: repos.results[i].symbol,
//                 name: repos.results[i].name,
//                 dayCode: repos.results[i].dayCode,
//                 serverTimestamp: repos.results[i].serverTimestamp,
//                 mode: repos.results[i].mode,
//                 lastPrice: repos.results[i].lastPrice,
//                 tradeTimestamp: repos.results[i].tradeTimestamp,
//                 netChange: repos.results[i].netChange,
//                 percentChange: repos.results[i].percentChange,
//                 unitCode: repos.results[i].unitCode,
//                 open: repos.results[i].open,
//                 high: repos.results[i].high,
//                 low: repos.results[i].low,
//                 close: repos.results[i].close,
//                 numTrades: repos.results[i].numTrades,
//                 dollarVolume: repos.results[i].dollarVolume,
//                 flag: repos.results[i].flag,
//                 volume: repos.results[i].volume,
//                 previousVolume: repos.results[i].previousVolume,
//                 fiftyTwoWkHigh: repos.results[i].fiftyTwoWkHigh,
//                 fiftyTwoWkHighDate: repos.results[i].fiftyTwoWkHighDate,
//                 fiftyTwoWkLow: repos.results[i].fiftyTwoWkLow,
//                 fiftyTwoWkLowDate: repos.results[i].fiftyTwoWkLowDate
//             });
//         }
//         createQuotes(repos.reverse());

//         rp({
//             url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=WY%2CDXC%2CRHT%2CPPL%2CCOL%2CMNST%2CDTE%2CPAYX%2CCERN%2CVTR%2CHLT%2CES%2CXLNX%2CCTL%2CNTRS%2CA%2CNTAP%2CROK%2CAPTV%2CSYF%2CDLTR%2CAZO%2CMSI%2CUAL%2CCLX&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
//             json: true
//         })
//             .then(function (repos) {
//                 for (var i = 0; i < repos.results.length; i++) {
//                     db.Quote.create({
//                         symbol: repos.results[i].symbol,
//                         name: repos.results[i].name,
//                         dayCode: repos.results[i].dayCode,
//                         serverTimestamp: repos.results[i].serverTimestamp,
//                         mode: repos.results[i].mode,
//                         lastPrice: repos.results[i].lastPrice,
//                         tradeTimestamp: repos.results[i].tradeTimestamp,
//                         netChange: repos.results[i].netChange,
//                         percentChange: repos.results[i].percentChange,
//                         unitCode: repos.results[i].unitCode,
//                         open: repos.results[i].open,
//                         high: repos.results[i].high,
//                         low: repos.results[i].low,
//                         close: repos.results[i].close,
//                         numTrades: repos.results[i].numTrades,
//                         dollarVolume: repos.results[i].dollarVolume,
//                         flag: repos.results[i].flag,
//                         volume: repos.results[i].volume,
//                         previousVolume: repos.results[i].previousVolume,
//                         fiftyTwoWkHigh: repos.results[i].fiftyTwoWkHigh,
//                         fiftyTwoWkHighDate: repos.results[i].fiftyTwoWkHighDate,
//                         fiftyTwoWkLow: repos.results[i].fiftyTwoWkLow,
//                         fiftyTwoWkLowDate: repos.results[i].fiftyTwoWkLowDate
//                     });
//                 }
//                 createQuotes(repos.reverse());



                // rp({
                //     url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=PH%2CPCAR%2CIQV%2CCMI%2CHRS%2CVRSK%2CCBS%2CFE%2CWLTW%2CRCL%2CNUE%2CTSN%2CINFO%2CIDXX%2CAMP%2CGPN%2CIP%2CKEY%2CBXP%2CSBAC%2CK%2CRF%2CSWK%2CO%2CFLT&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
                //     json: true
                // })
                //     .then(function (repos) {
                //         createQuotes(repos.reverse());



                //         rp({
                //             url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=FITB%2CCFG%2CCAG%2CALGN%2CBBY%2CMKC%2CDVN%2CESS%2CAMD%2CFCX%2COMC%2CHIG%2CWDC%2CTDG%2CLLL%2CMRO%2EVRG%2CLH%2CAWK%2CAEE%2CMYL%2CTSS%2CCAH%2CCAH%2CNEM%2CULTA&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
                //             json: true
                //         })
                //             .then(function (repos) {
                //                 createQuotes(repos.reverse());


                //                 rp({
                //                     url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=EVRG%2CAME%2CETR%2CBLL%2CCTAS%2CRSG%2CSWKS%2CHES%2CHBAN%2CWCG%2CGPC%2CMCHP%2CVRSN%2CAPA%2CWAT%2CCHD%2CEXPE%2CHSY%2CCMS%2CFAST%2CNOV%2CABC%2CRMD%2CSIVB%2CCMA%2CHST&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
                //                     json: true
                //                 })
                //                     .then(function (repos) {
                //                         createQuotes(repos.reverse());

                //                         rp({
                //                             url: "https://marketdata.websol.barchart.com/getQuote.json?apikey=9b55a19b06e29916a85af6ee26190f73&symbols=HST%2CMTD&type=minutes&startDate=20100101&endDate=20130101&maxRecords=10&interval=60&order=asc&sessionFilter=EFK&splits=true&dividends=true&volume=sum&nearby=1&jerq=true&exchange=NYSE%2CAMEX%2CNASDAQ&backAdjust=false&daysToExpiration=1&contractRoll=expiration",
                //                             json: true
                //                         })
                //                             .then(function (repos) {
                //                                 createQuotes(repos.reverse());


                //                             })
                //                     })
                //             })
                    })
            })
    // })