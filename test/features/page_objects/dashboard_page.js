const { element, by } = require('protractor')
const helper = require('../support/helper')

const dashboardPage = function () {
  this.elements = {
    dashboardMenu: element(by.xpath('//span[@class="site-menu-title ng-binding" and contains(text(),\'Dashboard\')]')),
    jobsMenu: element(by.xpath('//span[@class="site-menu-title ng-binding" and contains(text(),\'Jobs\')]')),
    topNavigaionBar: element(by.id('toggleMenubar'))
  }

  this.generalMenuElementsExist = async () => {
    await browser.waitForAngularEnabled(false)
    await helper.waitForElementToBePresented(this.elements.dashboardMenu)
    await helper.waitForElementToBePresented(this.elements.jobsMenu)
    await helper.waitForElementToBeVisible(this.elements.dashboardMenu)
    await helper.waitForElementToBeVisible(this.elements.jobsMenu)
    return browser.waitForAngularEnabled(true)
  }
  this.generalTopNavigaionBarExist = async () => {
    await browser.waitForAngularEnabled(false)
    await helper.waitForElementToBePresented(this.elements.topNavigaionBar)
    await helper.waitForElementToBeVisible(this.elements.topNavigaionBar)
    return browser.waitForAngularEnabled(true)
  }
}

module.exports = new dashboardPage() // eslint-disable-line
