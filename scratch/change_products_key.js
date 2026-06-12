const fs = require('fs');

// 1. Update app.js
let appCode = fs.readFileSync('app.js', 'utf-8');
appCode = appCode.replace(/nana_products_v3/g, "nana_products_v4");
fs.writeFileSync('app.js', appCode);
console.log('Successfully updated app.js storage key!');

// 2. Update admin.js
let adminCode = fs.readFileSync('admin.js', 'utf-8');
adminCode = adminCode.replace(/nana_products_v3/g, "nana_products_v4");
fs.writeFileSync('admin.js', adminCode);
console.log('Successfully updated admin.js storage key!');
