describe('Example', () => {
  it('should be able to register successfully', async () => {
    await expect(element(by.id('RegisterEmail'))).toBeVisible();
    await expect(element(by.id('RegisterPassword'))).toBeVisible();
    await expect(element(by.id('RegisterButton'))).toBeVisible();

    await element(by.id('RegisterEmail')).typeText(
      `someone${device.getPlatform()}@test.com`,
    );
    await element(by.id('RegisterPassword')).typeText('password');
    await element(by.id('RegisterButton')).tap();

    await waitFor(element(by.id('LoginScreen')))
      .toExist()
      .withTimeout(2000);
  });

  it('should be able to login successfully', async () => {
    await expect(element(by.id('LoginEmail'))).toBeVisible();
    await expect(element(by.id('LoginPassword'))).toBeVisible();
    await expect(element(by.id('LoginButton'))).toBeVisible();

    await element(by.id('LoginEmail')).typeText(
      `someone${device.getPlatform()}@test.com`,
    );
    await element(by.id('LoginPassword')).typeText('password');
    await element(by.id('LoginButton')).tap();

    await waitFor(element(by.id('FeedScreen')))
      .toExist()
      .withTimeout(10000);
  });
});
