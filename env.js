const environment = process.env.ENVIRONMENT || 'qa'
const config = require(`./test/features/data/${environment}/config`)

module.exports = {
  config,
  environment
}
