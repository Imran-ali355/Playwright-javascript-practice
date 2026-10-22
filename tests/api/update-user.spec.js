import { test, expect } from '@playwright/test';
import {
  API_BASE_URL,
  createAuthenticatedUser,
  deleteUser,
} from './api-helpers.js';

test('PUT updates an authenticated account user', async ({ request }) => {
  const user = await createAuthenticatedUser(request);
  const updatedUserName = `${user.userName}Updated`;

  try {
    const response = await request.put(`${API_BASE_URL}/Account/v1/User/${user.userID}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      data: {
        userName: updatedUserName,
        password: user.password,
      },
    });

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  } finally {
    const cleanupResponse = await deleteUser(request, user.userID, user.token);
    expect([200, 204]).toContain(cleanupResponse.status());
    expect(cleanupResponse.ok()).toBeTruthy();
  }
});
