const fs = require('fs');
const path = require('path');

const imgDir = 'imagens-produtos-nana-4x5-cortadas';
if (!fs.existsSync(imgDir)) {
    console.error('Image directory not found!');
    process.exit(1);
}

const files = fs.readdirSync(imgDir);

function updateFileProducts(filePath, varName) {
    let code = fs.readFileSync(filePath, 'utf-8');
    
    // Find the products array block
    const regex = new RegExp(`const ${varName} = (\\[[\\s\\S]*?\\n\\s*\\]);`);
    const match = code.match(regex);
    if (!match) {
        console.error(`Could not find ${varName} in ${filePath}`);
        return;
    }
    
    const products = eval(match[1]);
    
    products.forEach(p => {
        if (!p.imageUrl) return;
        const base = path.basename(p.imageUrl);
        const matchIdx = base.match(/(.*)-01-4x5\.jpg/);
        if (matchIdx) {
            const prefix = matchIdx[1].toLowerCase();
            const matched = files.filter(f => f.toLowerCase().startsWith(prefix));
            matched.sort();
            
            // Limit to at most 5 images
            p.images = matched.slice(0, 5).map(f => `imagens-produtos-nana-4x5-cortadas/${f}`);
        } else {
            p.images = [p.imageUrl];
        }
    });
    
    const newProductsCode = `const ${varName} = ${JSON.stringify(products, null, 4)};`;
    
    code = code.replace(regex, newProductsCode);
    fs.writeFileSync(filePath, code, 'utf-8');
    console.log(`Successfully updated ${varName} in ${filePath}`);
}

updateFileProducts('app.js', 'PRODUCTS_DATA');
updateFileProducts('admin.js', 'FACTORY_PRODUCTS_DATA');
console.log('Done!');
