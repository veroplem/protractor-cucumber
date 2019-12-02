const { When } = require('cucumber')
const _ = require('lodash')
const login = require('../page_objects/login_page')
const config = require('../../../env').config

When(/^I enter username and password for "([^"]*)"$/, async function (name) {
  const userDetails = await _.find(config.users, function (user) {
    return user.name === name
  })
  await login.setLogInEmail(userDetails.email)
  return login.setLogInPassword(userDetails.pwd)
})

When(/^I click the Sign In button$/, async function () {
  return login.clickSignInButton()
})
