const fs = require('fs');
const path = require('path');

const categoryTemplates = {
    'linha-noite': (name, ref, sizes) => 
        `O ${name}${ref ? ` (Ref. ${ref})` : ''} é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: ${sizes}.`,
        
    'calcas': (name, ref, sizes) => 
        `A calça ${name}${ref ? ` (Ref. ${ref})` : ''} é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: ${sizes}.`,
        
    'plus-size': (name, ref, sizes) => 
        `O ${name}${ref ? ` (Ref. ${ref})` : ''} foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: ${sizes}.`,
        
    'meias': (name, ref, sizes) => 
        `A meia ${name}${ref ? ` (Ref. ${ref})` : ''} proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: ${sizes}.`,
        
    'soutiens': (name, ref, sizes) => 
        `O sutiã ${name}${ref ? ` (Ref. ${ref})` : ''} foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: ${sizes}.`,
        
    'masculino': (name, ref, sizes) => 
        `A peça ${name}${ref ? ` (Ref. ${ref})` : ''} oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: ${sizes}.`,
        
    'tangas': (name, ref, sizes) => 
        `A calcinha ${name}${ref ? ` (Ref. ${ref})` : ''} combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: ${sizes}.`,
        
    'infantil': (name, ref, sizes) => 
        `A peça infantil ${name}${ref ? ` (Ref. ${ref})` : ''} foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: ${sizes}.`,
        
    'conjuntos': (name, ref, sizes) => 
        `O conjunto ${name}${ref ? ` (Ref. ${ref})` : ''} reúne sofisticação, delicadeza e conforto em uma única proposta. Traz peças coordenadas com acabamento em renda macia ou detalhes sofisticados que se ajustam harmoniosamente às curvas do corpo. Perfeito para momentos especiais ou para se sentir autoconfiante e elegante no dia a dia. Disponível nos tamanhos: ${sizes}.`
};

function cleanProductName(fullName) {
    // Remove Ref, REF, Ref.: and SKU suffixes if they match common import patterns
    let clean = fullName.replace(/^Ref\.\s*\d+\s*-\s*/i, '');
    clean = clean.replace(/^REF\.\s*\d+\s*-\s*/i, '');
    clean = clean.replace(/^REF\.:\s*\d+\s*-\s*/i, '');
    clean = clean.replace(/^REF\s*\d+\s*-\s*/i, '');
    return clean.trim();
}

function updateFileProducts(filePath, varName) {
    let code = fs.readFileSync(filePath, 'utf-8');
    
    // Find products array block
    const regex = new RegExp(`const ${varName} = (\\[[\\s\\S]*?\\n\\s*\\]);`);
    const match = code.match(regex);
    if (!match) {
        console.error(`Could not find ${varName} in ${filePath}`);
        return;
    }
    
    const products = eval(match[1]);
    
    products.forEach(p => {
        const fullName = p.name;
        let ref = '';
        let sizes = 'P/M/G/GG';
        
        // Extract ref from name
        const refMatch = fullName.match(/Ref\.\s*(\d+)/i) || fullName.match(/REF\.\s*(\d+)/i) || fullName.match(/REF\s*(\d+)/i) || fullName.match(/REF\.:\s*(\d+)/i);
        if (refMatch) {
            ref = refMatch[1];
        }
        
        // Extract sizes from description if present
        if (p.description) {
            const sizeMatch = p.description.match(/Tamanhos?:\s*([^\n]+)/i);
            if (sizeMatch) {
                sizes = sizeMatch[1].trim();
            } else if (p.description.toLowerCase().includes('tamanhos:')) {
                const parts = p.description.split(/tamanhos:/i);
                if (parts.length > 1) {
                    sizes = parts[1].trim().split('\n')[0].trim();
                }
            } else if (p.description.toLowerCase().includes('tamanho:')) {
                const parts = p.description.split(/tamanho:/i);
                if (parts.length > 1) {
                    sizes = parts[1].trim().split('\n')[0].trim();
                }
            }
        }
        
        const cleanName = cleanProductName(fullName);
        const generator = categoryTemplates[p.category] || categoryTemplates['linha-noite'];
        
        p.description = generator(cleanName, ref, sizes);
    });
    
    const newProductsCode = `const ${varName} = ${JSON.stringify(products, null, 4)};`;
    code = code.replace(regex, newProductsCode);
    
    fs.writeFileSync(filePath, code, 'utf-8');
    console.log(`Successfully generated and updated descriptions for ${varName} in ${filePath}`);
}

updateFileProducts('app.js', 'PRODUCTS_DATA');
updateFileProducts('admin.js', 'FACTORY_PRODUCTS_DATA');
console.log('Descriptions generated successfully!');
