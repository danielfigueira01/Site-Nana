const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync('scratch/products_imported.json', 'utf-8'));

// 1. Update app.js
const appPath = 'app.js';
let appCode = fs.readFileSync(appPath, 'utf-8');

const productsDataRegex = /const PRODUCTS_DATA = \[\s*\{[\s\S]*?\}\s*\];/;
const newProductsDataCode = `const PRODUCTS_DATA = ${JSON.stringify(products, null, 4)};`;

if (productsDataRegex.test(appCode)) {
    appCode = appCode.replace(productsDataRegex, newProductsDataCode);
    fs.writeFileSync(appPath, appCode);
    console.log('Successfully updated app.js with 183 products!');
} else {
    console.error('Could not find PRODUCTS_DATA block in app.js');
}

// 2. Update admin.js
const adminPath = 'admin.js';
let adminCode = fs.readFileSync(adminPath, 'utf-8');

const factoryProductsRegex = /const FACTORY_PRODUCTS_DATA = \[\s*\{[\s\S]*?\}\s*\];/;
const newFactoryProductsCode = `const FACTORY_PRODUCTS_DATA = ${JSON.stringify(products, null, 4)};`;

if (factoryProductsRegex.test(adminCode)) {
    adminCode = adminCode.replace(factoryProductsRegex, newFactoryProductsCode);
    fs.writeFileSync(adminPath, adminCode);
    console.log('Successfully updated admin.js with 183 products!');
} else {
    console.error('Could not find FACTORY_PRODUCTS_DATA block in admin.js');
}
