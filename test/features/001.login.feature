Feature: Login
 At order to use Tradify
 As an registered user
 I can log in

@Login
@SmokeTest
Scenario: 0001 Login as Registered User
 Given I navigate to Tradify Login Page
 When I enter username and password for "Admin"
 And I click the Sign In button
 Then I should be on my dashboard