'use strict'

module.exports = {
  'db': {
    'name': 'db',
    'connector': 'mongodb',
    'host': process.env.MONGODB_HOST,
    'port': process.env.MONGODB_PORT,
    'database': process.env.MONGODB_DATABASE,
    'username': process.env.MONGODB_USER,
    'password': process.env.MONGODB_PASSWORD,
    'debug': true,
    'server': {
      'auto_reconnect': true,
      'reconnectTries': 100,
      'reconnectInterval': 1000
    }
  },
  'memory': {
    'name': 'db',
    'connector': 'memory'
  }
}
