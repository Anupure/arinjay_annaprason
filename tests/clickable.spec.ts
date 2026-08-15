import { test, expect } from '@playwright/test';

/**
 * Click tests for the Annaprashon guest site.
 *
 * NOTE: CSS Modules hash class names at build time, so we must use
 * role-based / text-based locators instead of raw class selectors.
 *
 * The intro animation is ~20s. The site-shell is non-interactive
 * until the intro completes, then it fades in and becomes clickable.
 */

const INTRO_WAIT = 23_000;

test('site starts locked and becomes interactive after intro', async ({ page }) => {
  await page.goto('/');

  const shell = page.locator('.site-shell');
  await expect(shell).not.toHaveClass(/ready/);

  await page.waitForTimeout(INTRO_WAIT);
  await expect(shell).toHaveClass(/ready/);
});

test('menu card hearts are clickable after intro', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(INTRO_WAIT);

  // First dish in the guest food explorer
  const favButton = page.getByRole('button', { name: /Add .* to favorites/ }).first();
  await favButton.click();
  await expect(favButton).toHaveAttribute('aria-pressed', 'true');

  // Floating favorites button should now show a badge count of 1
  const floatingBtn = page.getByRole('button', { name: '❤️' });
  await expect(floatingBtn).toContainText('1');
});

test('search filter narrows dishes after intro', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(INTRO_WAIT);

  const search = page.getByRole('textbox', { name: /Search menu items/ });
  await search.fill('ilish');

  // Only one dish should remain, and it must be ilish bhapa
  await expect(page.getByText('Showing 1 of 19 dishes')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'ইলিশ ভাপা' }).first()).toBeVisible();

  // Clear the search
  await page.getByRole('button', { name: 'Clear' }).click();
  await expect(page.getByText('Showing 19 of 19 dishes')).toBeVisible();
});

test('static menu cards expand on click after intro', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(INTRO_WAIT);

  // Click the first card in the static "Our Menu" grid
  await page.getByRole('heading', { name: 'মিনারেল ওয়াটার' }).first().click();

  // Significance detail should appear
  await expect(page.getByText(/Significance:/)).toBeVisible();
});

test('language toggle switches to Bengali after intro', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(INTRO_WAIT);

  const bnButton = page.getByRole('button', { name: 'বাংলা' });
  await bnButton.click();
  await expect(bnButton).toHaveAttribute('aria-pressed', 'true');

  // Header title should switch to Bengali
  await expect(page.getByRole('heading', { name: 'অন্নপ্রাশন' })).toBeVisible();
});

test('memory game cards flip on click after intro', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(INTRO_WAIT);

  const hiddenCards = page.getByRole('button', { name: 'Hidden card' });
  await expect(hiddenCards.first()).toBeVisible();

  const turns = page.locator('.scoreBox strong');
  const turnsBefore = Number(await turns.innerText());

  await hiddenCards.nth(0).click();
  await hiddenCards.nth(1).click();

  const turnsAfter = Number(await turns.innerText());
  expect(turnsAfter).toBeGreaterThan(turnsBefore);
});

test('review submission works after intro', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(INTRO_WAIT);

  const textarea = page.getByRole('textbox', { name: /Write your review/ }).first();
  await textarea.fill('Delicious test review!');

  await page.getByRole('button', { name: 'Add Review' }).first().click();

  // New review should appear in the review bubbles
  await expect(page.getByText('“Delicious test review!”')).toBeVisible();
});

test('category filter buttons work after intro', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(INTRO_WAIT);

  // Click "Desserts" filter in the guest food explorer
  await page.getByRole('button', { name: 'Desserts' }).last().click();

  // 7 dessert dishes should be shown (mixed fruit chutney, poromanno,
  // komola bhog, sondesh, baked rosogolla, ice cream — 6 items)
  await expect(page.getByText(/Showing 6 of 19 dishes/)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'সন্দেশ' })).toBeVisible();
});
