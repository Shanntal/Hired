const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, config)
  
  module.exports = db



users = [
    {
        id: 1,
        fname: 'Shanntal',
        mname: 'Morel',

    },
    {
        id: 2,
        
    }
]