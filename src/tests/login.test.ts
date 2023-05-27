import LoginPage from "../pages/login.page.ts";
import SecurePage from "../pages/secure.page.ts";

describe("Login application", () => {
  it("should login with valid credentials", () => {
    LoginPage.open();

    LoginPage.login("tomsmith", "SuperSecretPassword!");
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
});
