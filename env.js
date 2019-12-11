const environment = process.env.ENVIRONMENT || 'qa'
const config = require(`./test/features/test_data/${environment}/config`)

module.exports = {
  config,
  environment
}
