import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
import { ArticlePage } from '../src/pages/article.page';
import { TagPage } from '../src/pages/tag.page';

test.describe('RealWorld functional tests', () => {
    
    test('1.Отображается имя профиля в хедере', async ({ page }) => {
    const homePage = new HomePage(page);

    await page.goto('https://realworld.qa.guru/');

    const profileName = await homePage.getProfileName();

    expect(profileName).not.toBeNull();
    expect(profileName.length).toBeGreaterThan(0);
});
  test('2. Отображается список статей', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.open();

    expect(await mainPage.isArticleListVisible()).toBeTruthy();
  });
  test('3. Переход на страницу статьи', async ({ page }) => {
    const mainPage = new MainPage(page);
    const articlePage = new ArticlePage(page);

    await mainPage.open();
    await mainPage.openFirstArticle();

    expect(await articlePage.isArticleOpened()).toBeTruthy();
    expect(await articlePage.hasContent()).toBeTruthy();
  });
  test('4. Фильтрация статей по тегу', async ({ page }) => {
    const mainPage = new MainPage(page);
    const tagPage = new TagPage(page);

    await mainPage.open();
    await mainPage.clickFirstTag();

    expect(await tagPage.isFilteredArticlesVisible()).toBeTruthy();
  });
  test('5. Переход в Global Feed', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.open();
    await mainPage.openGlobalFeed();

    expect(await mainPage.isArticleListVisible()).toBeTruthy();
  });

});
