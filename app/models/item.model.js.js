module.exports = (sequelize, Sequelize) => {
  const ItemMaster = sequelize.define("itemmaster", {
    itemid: {
      type: Sequelize.BIGINT
    },
    itemname: {
      type: Sequelize.STRING
    },
    unitprice: {
      type: Sequelize.REAL
    },
    itemcategory: {
     type: Sequelize.STRING
    }
  });

  return ItemMaster;

};