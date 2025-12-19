export class ArticlePage {
  constructor(page) {
    this.page = page;
    this.title = 'h1';
    this.articleContent = '.article-content';
  }

  async isArticleOpened() {
    return await this.page.isVisible(this.title);
  }

  async hasContent() {
    return await this.page.isVisible(this.articleContent);
  }
}