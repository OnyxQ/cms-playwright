const BasePage = require("../core/BasePage");

class DashboardPage extends BasePage {
  constructor(page) {
    super(page);

    // ===== Locators =====
    this.pageTitle = "h1";
    this.userProfileIcon = "[data-test='user-profile']";
    this.logoutButton = "[data-test='logout']";

    // Sidebar
    this.sidebar = {
      home: "[data-test='nav-home']",
      users: "[data-test='nav-users']",
      settings: "[data-test='nav-settings']",
    };

    // Dashboard widgets/cards
    this.cards = {
      totalUsers: "[data-test='card-total-users']",
      activeSessions: "[data-test='card-active-sessions']",
      revenue: "[data-test='card-revenue']",
    };
  }

  // ===== Actions =====

  async getTitle() {
    return await this.page.textContent(this.pageTitle);
  }

  async openUserProfile() {
    await this.click(this.userProfileIcon);
  }

  async logout() {
    await this.click(this.userProfileIcon);
    await this.click(this.logoutButton);
  }

  // Sidebar navigation
  async goToUsers() {
    await this.click(this.sidebar.users);
  }

  async goToSettings() {
    await this.click(this.sidebar.settings);
  }

  async goToHome() {
    await this.click(this.sidebar.home);
  }

  // Dashboard data getters
  async getTotalUsers() {
    return await this.page.textContent(this.cards.totalUsers);
  }

  async getActiveSessions() {
    return await this.page.textContent(this.cards.activeSessions);
  }

  async getRevenue() {
    return await this.page.textContent(this.cards.revenue);
  }
}

module.exports = DashboardPage;