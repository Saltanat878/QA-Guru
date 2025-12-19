export class HomePage {
    constructor(page) {
        this.page = page;
        this.profileName = page.locator('.dropdown-toggle');
    }

    async getProfileName() {
        return await this.profileName.textContent();
    }
}