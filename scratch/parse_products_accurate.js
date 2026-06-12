const fs = require('fs');
const https = require('https');

async function fetchPage(page) {
    return new Promise((resolve, reject) => {
        https.get(`https://nanamodaintima.com.br/api/products?page=${page}`, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    resolve(parsed);
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

async function main() {
    let allProducts = [];
    const totalPages = 12;
    console.log(`Starting fetch of ${totalPages} pages...`);
    for (let page = 1; page <= totalPages; page++) {
        try {
            console.log(`Fetching page ${page}...`);
            const res = await fetchPage(page);
            if (res.products && Array.isArray(res.products)) {
                allProducts = allProducts.concat(res.products);
                console.log(`Page ${page} fetched successfully, got ${res.products.length} products.`);
            } else {
                console.log(`Page ${page} failed or returned unexpected format.`);
            }
        } catch (e) {
            console.error(`Error fetching page ${page}:`, e.message);
        }
    }
    console.log(`Finished fetching. Total products collected: ${allProducts.length}`);
    fs.writeFileSync('scratch/products_accurate.json', JSON.stringify(allProducts, null, 2));
    console.log('Saved all products to scratch/products_accurate.json');
}

main();
