module.exports = function(sequelize, DataTypes) {
  var Quote = sequelize.define("Quote", {
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    dayCode: DataTypes.STRING,
    serverTimestamp: DataTypes.STRING,
    mode: DataTypes.STRING,
    lastPrice: DataTypes.DECIMAL(10,4),
    tradeTimestamp: DataTypes.STRING,
    netChange: DataTypes.DECIMAL(10,4),
    percentChange: DataTypes.DECIMAL(10,4),
    unitCode: DataTypes.STRING,
    open: DataTypes.DECIMAL(10,4),
    high: DataTypes.DECIMAL(10,4),
    low: DataTypes.DECIMAL(10,4),
    close: DataTypes.DECIMAL(10,4),
    numTrades: DataTypes.INTEGER,
    dollarVolume: DataTypes.DECIMAL(10,4),
    flag: DataTypes.STRING,
    volume: DataTypes.INTEGER,
    previousVolume: DataTypes.INTEGER,
    fiftyTwoWkHigh: DataTypes.DECIMAL(10,4),
    fiftyTwoWkHighDate: DataTypes.STRING,
    fiftyTwoWkLow: DataTypes.DECIMAL(10,4),
    fiftyTwoWkLowDate: DataTypes.STRING
  });
  return Quote;
};
