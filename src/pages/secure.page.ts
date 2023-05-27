import Page from "./page.ts";

class SecurePage extends Page {
  get flashAlert() {
    return $("#flash");
  }
}

export default new SecurePage();
