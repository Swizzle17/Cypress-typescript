import { LoginPage } from "./pages/login_page"
import { DashboardPage } from "./pages/dashboard_page"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('Test Add Item to Cart', () => {
  loginPage.login(URL, 'standard_user', 'secret_sauce')
  loginPage.assertLogin()
  dashboardPage.sauceLabsBackpack()
  dashboardPage.addToCart()
})