import { expect, test } from '@playwright/test';

test('about page has expected title and buttons', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Animal Test App');
	expect(await page.textContent('button:nth-child(1)')).toBe('Get Animals');
	expect(await page.textContent('button:nth-child(2)')).toBe('Hide Animals');
});
