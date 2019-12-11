const helper = require('../support/helper')
const { element, by } = require('protractor')

const basePage = function () {
  this.elements = {
    userSettingsDropdown: element(by.css('.dropdown-menu')),
    logOutDropdownItem: element(by.xpath('//ul[@class=\'ics-user-settings-dropdown dropdown-menu\']//a[@data-ng-click="logout()"]'))
  }
  this.pressOnUserSettingsDropdown = async () => helper.clickBtn(this.elements.userSettingsDropdown)
  this.pressOnLogoutDropDownElement = async () => helper.clickBtn(this.elements.logOutDropdownItem)
}

module.exports = new basePage() // eslint-disable-line
