const scope = require('../../support/scope');
const { expect } = require('chai');

const { Then, When, Given } = require('cucumber');



When('Eu acessar o submarino', async function () {
    await scope.page.goto('https://www.submarino.com.br/');
    scope.initialUrl = scope.page.url();
});

When('buscar por {string}',{timeout: 60 * 2000}, async function (string) {    
    const input = await scope.page.$('input[name=q]');
    await input.type('livro', {delay: 100});
    await input.press('Enter');
});



Then('quero clicar no primeiro resultado', async function () {
    
    const firstLink = await scope.page.$('.g a');

    console.log('Click in ', firstLink);
    firstLink.click();
});

Given('que eu estou dentro do primeiro resultado do submarino', {timeout: 60 * 2000}, async function () {
    await scope.page.waitForSelector('body', {
        timeout: 60000
    });
    const currentURL = scope.page.url();
    console.log('URL: ', currentURL);
    expect(scope.initialUrl).not.equals(currentURL);
});

Then('quero recuperar o nome do autor', async function () {
    await scope.page.waitForSelector('TextUI-sc-12tokcy-0 fngVlx');
    const title = await scope.page.$eval('TextUI-sc-12tokcy-0 fngVlx', el => el.textContent);
});






When('Eu acessar a livraria', async function () {
    await scope.page.goto('https://www.americanas.com.br/');
    scope.initialUrl = scope.page.url();
});


When('buscar por {string}',{timeout: 60 * 2000}, async function (string) {    
    const input = await scope.page.$('input[name=q]');
    await input.type('O Julgamento De Sherlock Holmes 1', {delay: 100});
    await input.press('Enter');
});

Then('quero clicar no primeiro resultado', async function () {
    
    const firstLink = await scope.page.$('.g a');

    console.log('Click in ', firstLink);
    firstLink.click();
});

Then('quero conferir o nome do autor', async function () {
    await scope.page.waitForSelector('TextUI-sc-12tokcy-0 bLZSPZ');
    const title = await scope.page.$eval('TextUI-sc-12tokcy-0 bLZSPZ', el => el.textContent);
});




When('Eu acessar o site', async function () {
    await scope.page.goto('https://www.amazon.com.br/');
    scope.initialUrl = scope.page.url();
});

When('buscar por {string}',{timeout: 60 * 2000}, async function (string) {    
    const input = await scope.page.$('input[name=q]');
    await input.type('O Julgamento De Sherlock Holmes 1', {delay: 100});
    await input.press('Enter');
});

Then('confiro o nome do autor', async function () {
    await scope.page.waitForSelector('href="/s/ref=dp_byline_sr_book_1?ie=UTF8&amp;field-author=Leah+Moore+E+John+Reppion&amp;text=Leah+Moore+E+John+Reppion&amp;sort=relevancerank&amp;search-alias=stripbooks">Leah Moore E John Reppion');
    const title = await scope.page.$eval('href="/s/ref=dp_byline_sr_book_1?ie=UTF8&amp;field-author=Leah+Moore+E+John+Reppion&amp;text=Leah+Moore+E+John+Reppion&amp;sort=relevancerank&amp;search-alias=stripbooks">Leah Moore E John Reppion', el => el.textContent);
});


