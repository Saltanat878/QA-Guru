import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
import { ArticlePage } from '../src/pages/article.page';
import { TagPage } from '../src/pages/tag.page';

test('Фильтрация статей по тегу (functional)', async ({ page }) => {
  const homePage = new HomePage(page);
  const articlePage = new ArticlePage(page);
  const tagPage = new TagPage(page);

  const uniqueTag = `autotest-${Date.now()}`;
  const articleTitle = `Test article ${Date.now()}`;

  // 1. Открываем главную страницу
  await homePage.open();

  // 2. Создаём новую статью с уникальным тегом
  // (методы предполагаются существующими в ArticlePage)
  await articlePage.openNewArticlePage();
  await articlePage.createArticle({
    title: articleTitle,
    description: 'Test description',
    body: 'Test article body',
    tags: [uniqueTag],
  });

  // 3. Проверяем, что статья успешно открылась
  expect(await articlePage.isArticleOpened()).toBeTruthy();

  // 4. Возвращаемся на главную страницу
  await homePage.open();

  // 5. Фильтруем статьи по тегу, который мы только что создали
  await tagPage.selectTag(uniqueTag);

  // 6. Проверяем, что в списке есть наша статья
  expect(await tagPage.isFilteredArticlesVisible()).toBeTruthy();
  expect(await tagPage.isArticleWithTitleVisible(articleTitle)).toBeTruthy();
});
