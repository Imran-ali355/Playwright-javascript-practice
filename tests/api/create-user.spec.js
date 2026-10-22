import { test, expect } from '@playwright/test';
import {
  API_BASE_URL,
  createUserCredentials,
  deleteUser,
  getUserToken,
} from './api-helpers.js';

test('POST creates an account user', async ({ request }) => {
  const credentials = createUserCredentials();
  const response = await request.post(`${API_BASE_URL}/Account/v1/User`, {
    data: credentials,
  });

  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();

  const user = await response.json();
  expect(user.userID).toBeTruthy();
  expect(user.username).toBe(credentials.userName);

  console.log(`Created userID=${user.userID}, username=${user.username}`);

  const token = await getUserToken(request, credentials);
  const cleanupResponse = await deleteUser(request, user.userID, token);
  expect([200, 204]).toContain(cleanupResponse.status());
  expect(cleanupResponse.ok()).toBeTruthy();
});
