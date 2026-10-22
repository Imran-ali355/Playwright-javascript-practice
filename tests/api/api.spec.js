import { test, expect } from '@playwright/test';

test('Validate Book API Response', async ({ request }) => {
  const response = await request.get('https://demoqa.com/BookStore/v1/Books');
  expect(response.status()).toBe(200);
  //print reponse body in console
  const responseBody = await response.json();
  console.log('Response Body:', responseBody);
  
});