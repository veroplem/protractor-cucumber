const { Then } = require('cucumber')
const dashboard = require('../page_objects/dashboard_page')

Then(/^I should be on my dashboard$/, async function () {
  await dashboard.generalMenuElementsExist()
  return dashboard.generalTopNavigaionBarExist()
})
