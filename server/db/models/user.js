// requiring the data types from sequelize to populate the database
const {STRING, BLOB, DECIMAL, INTEGER, DATE, UUID, UUIDV4, BOOLEAN} = require('sequelize')

const User = db.define('user',{
    username: {
      type: STRING,
  //    primaryKey: true,
      required: true,
      allowNull: false,
      unique: true,
      validate: { notEmpty: true },
    },
    password: {
        type: STRING,
        required: true,
        allowNull: false,
        unique: false,
        validate: { notEmpty: true },
    },
    name: {
      type: STRING,
      required: true,
      allowNull: false,
      unique: false, 
      validate: { notEmpty: true },
    },
    address: {
      type: STRING,
      unique: false,
    },
    city: {
      type: STRING,
      unique: false,
    },
    state: {
      type: STRING,
      unique: false,
    },
    zip: {
      type: STRING,
      unique: false,
    },
    jobDescription: {
        type: BLOB
    },
    workHours: {
        type: STRING
    },
    isAdmin: {
      type: BOOLEAN,
      required: true,
      defaultValue: false,
    }
  })
  
  module.exports = User;