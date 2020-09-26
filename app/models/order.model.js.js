module.exports = (sequelize, Sequelize) => {
  const OrderInfo = sequelize.define("orderinfo", {
    orderid: {
      type: Sequelize.BIGINT
    },
    info: {
      type: Sequelize.JSON
    },
    custid: {
      type: Sequelize.STRING
    },
    dot: {
     type: Sequelize.DATE
    }
  });

  return OrderInfo;

};