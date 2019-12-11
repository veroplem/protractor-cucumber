const { element, by } = require('protractor')
const helper = require('../support/helper')

const loginPage = function () {
  this.elements = {
    logInEmail: element(by.model('vm.userName')),
    logInPassword: element(by.model('vm.password')),
    logInSubmitBtn: element(by.id('login'))
  }

  this.setLogInEmail = async (email) => helper.inputText(this.elements.logInEmail, email)
  this.setLogInPassword = async (pass) => helper.inputText(this.elements.logInPassword, pass)
  this.clickSignInButton = async () => helper.clickBtn(this.elements.logInSubmitBtn)
}

module.exports = new loginPage() // eslint-disable-line
