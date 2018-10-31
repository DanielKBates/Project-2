
module.exports = function(sequelize, DataTypes) {
  var Quote = sequelize.define("Quote", {
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    dayCode: DataTypes.STRING,
    serverTimestamp: DataTypes.STRING,
    mode: DataTypes.STRING,
    lastPrice: DataTypes.DECIMAL(10,2),
    tradeTimestamp: DataTypes.STRING,
    netChange: DataTypes.DECIMAL(10,2),
    percentChange: DataTypes.DECIMAL(10,2),
    unitCode: DataTypes.STRING,
    open: DataTypes.DECIMAL(10,2),
    high: DataTypes.DECIMAL(10,2),
    low: DataTypes.DECIMAL(10,2),
    close: DataTypes.DECIMAL(10,2),
    numTrades: DataTypes.INTEGER,
    dollarVolume: DataTypes.DECIMAL(10,2),
    flag: DataTypes.STRING,
    volume: DataTypes.INTEGER,
    previousVolume: DataTypes.INTEGER,
    fiftyTwoWkHigh: DataTypes.DECIMAL(10,2),
    fiftyTwoWkHighDate: DataTypes.STRING,
    fiftyTwoWkLow: DataTypes.DECIMAL(10,2),
    fiftyTwoWkLowDate: DataTypes.STRING
  });
  return Quote;
};
