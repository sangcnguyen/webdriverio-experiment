import LoginPage from "../pages/login.page.ts";
import SecurePage from "../pages/secure.page.ts";

describe("Login application", () => {
  it("should login with valid credentials", async () => {
    LoginPage.open();
    LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining("You logged into a secure area!")
    );
  });
});
