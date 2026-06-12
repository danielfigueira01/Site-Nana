const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'products_accurate.json');
const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

let highlightedCount = 0;
products.forEach(p => {
    if (p.highlight) highlightedCount++;
});
console.log('Total highlighted products in original data:', highlightedCount);
