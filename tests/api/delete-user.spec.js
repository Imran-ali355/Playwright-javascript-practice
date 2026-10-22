import { test, expect } from '@playwright/test';
import { createAuthenticatedUser, deleteUser } from './api-helpers.js';

test('DELETE removes an authenticated account user', async ({ request }) => {
  const user = await createAuthenticatedUser(request);
  const response = await deleteUser(request, user.userID, user.token);

  expect([200, 204]).toContain(response.status());
  expect(response.ok()).toBeTruthy();
});
