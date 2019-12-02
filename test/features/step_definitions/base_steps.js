const { browser, protractor } = require('protractor')
const EC = protractor.ExpectedConditions
const { Then, Given } = require('cucumber')
const { expect } = require('chai')
const helper = require('../support/helper')
const base = require('../page_objects/base_page')

Given(/^I navigate to Tradify Login Page$/, async function () {
  await browser.driver.manage().deleteAllCookies()
  return helper.openPage(browser.baseUrl)
})

Then(/^Page title should equal to: "([^"]*)"$/, async function (title) {
  await browser.wait(EC.titleContains(title), 10000)
  const result = await helper.getPageTitle()
  return expect(result).to.be.equal(title)
})

Then(/^I should be able to logout$/, async function () {
  await base.pressOnUserSettingsDropdown()
  return base.pressOnLogoutDropDownElement()
})
