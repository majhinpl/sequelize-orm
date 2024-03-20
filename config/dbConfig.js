module.exports = {
  HOST: "localhost",
  USER: "ROOT",
  PASSWORD: "",
  DB: "sequelize-orm",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
