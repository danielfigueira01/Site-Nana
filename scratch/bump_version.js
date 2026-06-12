const fs = require('fs');

function replaceInFile(filePath, search, replace) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        content = content.split(search).join(replace);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${filePath}`);
    } else {
        console.error(`File ${filePath} not found`);
    }
}

// Bump database key to v6
replaceInFile('app.js', 'nana_products_v5', 'nana_products_v6');
replaceInFile('admin.js', 'nana_products_v5', 'nana_products_v6');

// Bump script version tag to v2.3 for cache-busting
replaceInFile('index.html', 'app.js?v=2.2', 'app.js?v=2.3');
replaceInFile('admin.html', 'admin.js?v=2.2', 'admin.js?v=2.3');

console.log('Bump complete!');
