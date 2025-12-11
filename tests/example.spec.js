// @ts-check
import { test, expect } from '@playwright/test';


//1) Buscar heladera y abrir producto (No me funcionoa el click en el primer producto)
test('Buscar heladera en MercadoLibre y abrir producto', async ({ page }) => {
  await page.goto('https://mercadolibre.com.ar');

  await page.locator('#cb1-edit').fill('heladera');
  await page.keyboard.press('Enter');

  const primerProducto = page
    .locator('.ui-search-result__wrapper a:has(h2.ui-search-item__title)')
    .first();

  await primerProducto.waitFor();
  await primerProducto.click();
});

// 2) Verificar título de Infobae
test('Título de Infobae contiene "infobae"', async ({ page }) => {
  await page.goto('https://infobae.com');
  const titulo = await page.title();
  expect(titulo.toLowerCase()).toContain('infobae');
});

// 3) Encabezado en Wikipedia Argentina
test('Encabezado visible en Wikipedia Argentina', async ({ page }) => {
  await page.goto('https://es.wikipedia.org/wiki/Argentina');

  const h1 = page.locator('#firstHeading');
  await expect(h1).toBeVisible();
});

// 4) alt del logo de Wikipedia
test('Logo Wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');

  const logo = page.locator('img.central-featured-logo');
  await expect(logo).toBeVisible();
});