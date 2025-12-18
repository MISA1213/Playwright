// @ts-check
import { test, expect } from '@playwright/test';


//1) Buscar heladera y abrir producto (No me funcionoa el click en el primer producto)
test('Buscar heladera en MercadoLibre y abrir producto', async ({ page }) => {
  await page.goto('https://mercadolibre.com.ar');

  await page.locator('#cb1-edit').fill('heladera');
  await page.keyboard.press('Enter');

  await page.locator('#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords.ui-search-main--4x > section > ol > li:nth-child(2) > div').click();

   await page.waitForTimeout(5000);
   await page.locator('#price > div > div.ui-pdp-price__main-container > div.ui-pdp-price__second-line > span.ui-pdp-price__part__container > span').waitFor();

   const precio = await page.locator('#price > div > div.ui-pdp-price__main-container > div.ui-pdp-price__second-line > span.ui-pdp-price__part__container > span').innerText();
   console.log('El precio de la heladera es:', precio);
   await page.waitForTimeout(5000);
   await page.locator('#price > div > div.ui-pdp-price__main-container > div.ui-pdp-price__second-line > span.ui-pdp-price__second-line__label.ui-pdp-color--GREEN.ui-pdp-size--MEDIUM.ui-pdp-family--SEMIBOLD').waitFor();

   const descuento = await page.locator('#price > div > div.ui-pdp-price__main-container > div.ui-pdp-price__second-line > span.ui-pdp-price__second-line__label.ui-pdp-color--GREEN.ui-pdp-size--MEDIUM.ui-pdp-family--SEMIBOLD').innerText();
   console.log('El descuento es:', descuento);
   const colorLetra = await page.locator('#price > div > div.ui-pdp-price__main-container > div.ui-pdp-price__second-line > span.ui-pdp-price__second-line__label.ui-pdp-color--GREEN.ui-pdp-size--MEDIUM.ui-pdp-family--SEMIBOLD').evaluate((element) => {
    return window.getComputedStyle(element).color;
  });
  console.log('El color de la letra del descuento es:', colorLetra);
  
});

test('buscar alt', async ({ page }) => { 
  await page.goto('https://www.diariouno.com.ar/',{timeout:10000});
const alt = await page.locator('#main-logo').first().getAttribute('alt');
console.log('El alt es:', alt);

 

 });
  
 test('Rellenar formulario de contacto y verificar mensaje de éxito', async ({ page }) => { 
  await page.goto('https://demoqa.com/text-box'); 

 await page.locator('#userName').fill('Misael');
await page.locator('#userEmail').fill('misael1212xd@gmail.com');
await page.locator('#currentAddress').fill('Calle Pilaga 370');
await page.locator('#permanentAddress').fill('Pilaga 370');

await page.locator('#submit').click();



   });