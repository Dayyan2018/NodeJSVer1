module.exports = {
  HOST: "DB-SRV10",
  USER: "postgres",
  PASSWORD: "Idd@4883",
  DB: "OnlineShopping",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};