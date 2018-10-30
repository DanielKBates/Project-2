module.exports = function(sequelize, DataTypes) {
    var AMZN = sequelize.define("AMZN", {
        symbol: DataTypes.STRING,
        timestamp: DataTypes.STRING,
        tradingDay: DataTypes.STRING,
        open: DataTypes.DECIMAL(10,4),
        high: DataTypes.DECIMAL(10,4),
        low: DataTypes.DECIMAL(10,4),
        close: DataTypes.DECIMAL(10,4),
        volume: DataTypes.INTEGER,
        
    });

    return AMZN;
  };
 