import { expect } from '@playwright/test';

export const API_BASE_URL = 'https://demoqa.com';

export function createUserCredentials() {
  const uniqueId = `${Date.now()}${Math.random().toString(36).slice(2, 8)}`;

  return {
    userName: `qa${uniqueId}`,
    password: 'QaApi!2026Secure',
  };
}

export async function getUserToken(request, credentials) {
  const tokenResponse = await request.post(`${API_BASE_URL}/Account/v1/GenerateToken`, {
    data: credentials,
  });

  expect(tokenResponse.status()).toBe(200);
  expect(tokenResponse.ok()).toBeTruthy();

  const token = await tokenResponse.json();
  expect(token.token).toBeTruthy();

  return token.token;
}

export async function deleteUser(request, userID, token) {
  return request.delete(`${API_BASE_URL}/Account/v1/User/${userID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function createAuthenticatedUser(request) {
  const credentials = createUserCredentials();
  const createResponse = await request.post(`${API_BASE_URL}/Account/v1/User`, {
    data: credentials,
  });

  expect(createResponse.status()).toBe(201);
  expect(createResponse.ok()).toBeTruthy();

  const user = await createResponse.json();
  expect(user.userID).toBeTruthy();
  expect(user.username).toBe(credentials.userName);

  return {
    ...credentials,
    userID: user.userID,
    token: await getUserToken(request, credentials),
  };
}
