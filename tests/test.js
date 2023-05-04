import { expect, test } from '@playwright/test';

test('about page has expected button', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Animal Test App');
});
