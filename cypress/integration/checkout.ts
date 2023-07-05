import { LoginPage } from "./pages/login_page"
import { DashboardPage } from "./pages/dashboard_page"
import { CheckoutPage } from "./pages/checkout_page"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

it('Test Checkout Process', () => {
  loginPage.login(URL, 'standard_user', 'secret_sauce')
  loginPage.assertLogin()
  dashboardPage.sauceLabsBackpack()
  dashboardPage.addToCart()
  checkoutPage.goToCart()
  checkoutPage.verifyCartPage()
  checkoutPage.clickCheckout()
  checkoutPage.fillFirstName('Irene')
  checkoutPage.fillLastName('Cindy')
  checkoutPage.fillPostalCode('16913')
  checkoutPage.clickContinue()
  checkoutPage.verifyCheckoutOverview()
  checkoutPage.clickFinish()
  checkoutPage.verifyOrderConfirmation()
})