import { test, expect } from '@playwright/test';

test('GET books returns the catalog', async ({ request }) => {
  const response = await request.get('https://demoqa.com/BookStore/v1/Books');

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.books).toBeInstanceOf(Array);
  expect(body.books[0].title).toBe('Git Pocket Guide');
});
