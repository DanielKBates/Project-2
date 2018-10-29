module.exports = function(sequelize, DataTypes) {
  var Quote = sequelize.define("Quote", {
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    dayCode: DataTypes.STRING,
    serverTimestamp: DataTypes.STRING,
    mode: DataTypes.STRING,
    lastPrice: DataTypes.DECIMAL,
    tradeTimestamp: DataTypes.STRING,
    netChange: DataTypes.DECIMAL,
    percentChange: DataTypes.DECIMAL,
    unitCode: DataTypes.STRING,
    open: DataTypes.DECIMAL,
    high: DataTypes.DECIMAL,
    low: DataTypes.DECIMAL,
    close: DataTypes.DECIMAL,
    numTrades: DataTypes.INTEGER,
    dollarVolume: DataTypes.DECIMAL,
    flag: DataTypes.STRING,
    volume: DataTypes.INTEGER,
    previousVolume: DataTypes.INTEGER,
    fiftyTwoWkHigh: DataTypes.DECIMAL,
    fiftyTwoWkHighDate: DataTypes.STRING,
    fiftyTwoWkLow: DataTypes.DECIMAL,
    fiftyTwoWkLowDate: DataTypes.STRING
  });
  return Quote;
};
