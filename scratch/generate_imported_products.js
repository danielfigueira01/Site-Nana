const fs = require('fs');
const path = require('path');

const imgDir = 'C:\\Users\\User\\Documents\\Site Nana\\imagens-produtos-nana-4x5-cortadas';
const productsFile = 'scratch/products_accurate.json';

const files = fs.readdirSync(imgDir);
const originalProducts = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

const categoryMap = {
    'linha-noite': { slug: 'linha-noite', name: 'Linha Noite' },
    'calcas': { slug: 'calcas', name: 'Calças' },
    'plus-size': { slug: 'plus-size', name: 'Plus Size' },
    'meias': { slug: 'meias', name: 'Meias' },
    'soutiens': { slug: 'soutiens', name: 'Sutiãs' },
    'masculino': { slug: 'masculino', name: 'Masculino' },
    'tangas': { slug: 'tangas', name: 'Calcinhas' },
    'infantil': { slug: 'infantil', name: 'Infantil' },
    'conjuntos': { slug: 'conjuntos', name: 'Conjuntos' }
};

const processedProducts = [];

originalProducts.forEach((p, index) => {
    const slug = p.slug;
    
    // Find matching files
    let matchedFiles = files.filter(f => {
        const normalizedFile = f.toLowerCase();
        const normalizedSlug = slug.toLowerCase();
        if (normalizedFile.includes(normalizedSlug)) return true;
        const slugNoRef = normalizedSlug.replace(/^ref-/, '');
        if (normalizedFile.includes(slugNoRef)) return true;
        return false;
    });
    
    // Sort files alphabetically to ensure image order (01, 02, etc.)
    matchedFiles.sort();
    
    // Build image paths relative to site root
    const images = matchedFiles.map(f => `imagens-produtos-nana-4x5-cortadas/${f}`);
    const imageUrl = images.length > 0 ? images[0] : 'logo.jpg';
    
    // Get category
    const originalCat = p.categories && p.categories.length > 0 ? p.categories[0].slug : 'linha-noite';
    const mappedCat = categoryMap[originalCat] || { slug: 'linha-noite', name: 'Linha Noite' };
    
    processedProducts.push({
        id: index + 1,
        name: p.name,
        slug: p.slug,
        price: p.price,
        category: mappedCat.slug,
        categoryName: mappedCat.name,
        imageUrl: imageUrl,
        images: images,
        description: p.description || `Peça selecionada pela Nana Moda Íntima para quem busca conforto, qualidade e ótimo custo-benefício. Consulte disponibilidade de tamanhos e cores pelo WhatsApp.`,
        highlight: p.highlight || false,
        active: p.active !== false // default true
    });
});

// Let's choose 12 products to highlight by default if there aren't enough
let highlightedCount = processedProducts.filter(p => p.highlight).length;
console.log('Highlighted products from original data:', highlightedCount);

if (highlightedCount < 12) {
    const targetSlugs = [
        'ref-7014-camisola-regata-suede', // Linha Noite
        'tanga-fio-duplo-microfibra-ref-1162', // Calcinhas
        'ref-3078-top-reforcado-nadador-5698', // Sutiãs
        'cropped-blogueirinha', // Conjuntos
        'ref-2136-calca-culote-plus-1118', // Plus Size
        'ref-7026-pijama-masculino-longo-6732', // Masculino
        'cueca-boxer-infantil', // Infantil
        'ref-2102-calca-rebatida-1837', // Calças
        'tanga-isis',
        'baby-doll-suede-manga',
        'toper-virginia',
        'short-estampado-algodao'
    ];
    processedProducts.forEach(p => {
        if (targetSlugs.some(slug => p.slug.includes(slug) || slug.includes(p.slug))) {
            p.highlight = true;
        }
    });
    highlightedCount = processedProducts.filter(p => p.highlight).length;
    console.log('Highlighted products after mapping defaults:', highlightedCount);
}

console.log('Processed products:', processedProducts.length);

// Save to scratch
fs.writeFileSync('scratch/products_imported.json', JSON.stringify(processedProducts, null, 2));
console.log('Saved to scratch/products_imported.json');
