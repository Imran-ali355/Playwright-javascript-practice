export function getAdactinCredentials() {
  const username = process.env.ADACTIN_USERNAME;
  const password = process.env.ADACTIN_PASSWORD;

  if (!username || !password) {
    throw new Error(
      'Set ADACTIN_USERNAME and ADACTIN_PASSWORD before running UI authentication tests.'
    );
  }

  return { username, password };
}
