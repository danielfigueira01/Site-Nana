const fs = require('fs');
const path = require('path');

// Read app.js
const appJsPath = path.join(__dirname, '..', 'app.js');
const appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Extract PRODUCTS_DATA array
// We find const PRODUCTS_DATA = [ and read until we find the matching closing bracket
const startIndex = appJsContent.indexOf('const PRODUCTS_DATA = [');
if (startIndex === -1) {
    console.error('Could not find PRODUCTS_DATA in app.js');
    process.exit(1);
}

// Find matching bracket
let bracketCount = 1;
let currentIndex = appJsContent.indexOf('[', startIndex) + 1;
let arrayContent = '[';

while (bracketCount > 0 && currentIndex < appJsContent.length) {
    const char = appJsContent[currentIndex];
    arrayContent += char;
    if (char === '[') {
        bracketCount++;
    } else if (char === ']') {
        bracketCount--;
    }
    currentIndex++;
}

// Evaluate PRODUCTS_DATA in a safe sandbox
let products = [];
try {
    // Basic clean to avoid variables or functions references in PRODUCTS_DATA (should be static JSON anyway)
    // eval the arrayContent
    products = eval(arrayContent);
} catch (e) {
    console.error('Error evaluating PRODUCTS_DATA:', e);
    process.exit(1);
}

console.log(`Successfully loaded ${products.length} products.`);

function parseSizesFromDescription(description) {
    if (!description || typeof description !== 'string') return null;
    
    // Find text after "tamanhos:" or "tamanho:"
    const match = description.match(/(?:tamanhos|tamanho):\s*([^.\r\n]+)/i);
    if (!match) return null;
    
    const rawSizes = match[1].trim();
    if (!rawSizes) return null;
    
    let list = [];
    if (rawSizes.includes('/')) {
        list = rawSizes.split('/').map(s => s.trim()).filter(Boolean);
    } else if (rawSizes.includes(',')) {
        list = rawSizes.split(',').map(s => s.trim()).filter(Boolean);
    } else {
        list = [rawSizes];
    }
    return list.length > 0 ? list : null;
}

// Test parsing
let parsedCount = 0;
let failedCount = 0;

products.forEach(p => {
    const sizes = parseSizesFromDescription(p.description);
    if (sizes) {
        parsedCount++;
        console.log(`Product ID ${p.id} ("${p.name}"): [${sizes.join(', ')}]`);
    } else {
        failedCount++;
        console.log(`FAILED Product ID ${p.id} ("${p.name}"): Description = "${p.description}"`);
    }
});

console.log(`\nSummary:`);
console.log(`Total: ${products.length}`);
console.log(`Parsed: ${parsedCount}`);
console.log(`Failed: ${failedCount}`);
