/*
 * @file  truffle-config.js
 * @desc  Configuration for truffle
 * @note  See `trufflesuite.com/docs/advanced/configuration` to configure
 */

module.exports = {

  // Networks
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8000,
      network_id: "15",
      gas: 6721975
    },
  },

  // Mocha
  mocha: { },

  // Compiler
  compilers: {
    solc: {
      version: "0.4.24",
    }
  },

  // DB
  db: {
    enabled: false
  }

};
