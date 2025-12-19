export class TagPage {
  constructor(page) {
    this.page = page;
    this.articleList = '.article-preview';
  }

  async isFilteredArticlesVisible() {
    return await this.page.isVisible(this.articleList);
  }
}