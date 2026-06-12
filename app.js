/* 
========================================================================
   APLICAÇÃO JAVASCRIPT - NANA MODA ÍNTIMA (REBRANDING PREMIUM)
========================================================================
*/

// --- Banco de Dados Local dos Produtos (22 Itens Oficiais com Textos Elegantes) ---
const PRODUCTS_DATA = [
    {
        "id": 1,
        "name": "Ref. 7014 - Camisola Regata SUEDE",
        "slug": "ref-7014-camisola-regata-suede",
        "price": 25.5,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7014-camisola-regata-suede-ref-7014-camisola-regata-suede-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7014-camisola-regata-suede-ref-7014-camisola-regata-suede-01-4x5.jpg"
        ],
        "description": "O Camisola Regata SUEDE (Ref. 7014) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 2,
        "name": "Ref. 2102 - Calça Rebatida",
        "slug": "ref-2102-calca-rebatida-1837",
        "price": 6.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2102-calca-rebatida-ref-2102-calca-rebatida-1837-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2102-calca-rebatida-ref-2102-calca-rebatida-1837-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2102-calca-rebatida-ref-2102-calca-rebatida-1837-02-4x5.jpg"
        ],
        "description": "A calça Calça Rebatida (Ref. 2102) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 3,
        "name": "Camisete Suede",
        "slug": "camisete-suede-1576",
        "price": 18.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-camisete-suede-camisete-suede-1576-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-camisete-suede-camisete-suede-1576-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-camisete-suede-camisete-suede-1576-02-4x5.jpg"
        ],
        "description": "O Camisete Suede é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 4,
        "name": "Ref. 2136 - Calça Culote (Plus)",
        "slug": "ref-2136-calca-culote-plus-1118",
        "price": 13.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2136-calca-culote-plus-ref-2136-calca-culote-plus-1118-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2136-calca-culote-plus-ref-2136-calca-culote-plus-1118-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2136-calca-culote-plus-ref-2136-calca-culote-plus-1118-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2136-calca-culote-plus-ref-2136-calca-culote-plus-1118-03-4x5.jpg"
        ],
        "description": "A calça Calça Culote (Plus) (Ref. 2136) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: 46 ao 50.",
        "highlight": true,
        "active": true
    },
    {
        "id": 5,
        "name": "Kit Com 3 Pares Meia Cano Curto Feminina",
        "slug": "clone-kit-com-3-pares-meia-esportiva-masculina-5450",
        "price": 15.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-cano-curto-feminina-clone-kit-com-3-pares-meia-esportiva-masculina-5450-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-cano-curto-feminina-clone-kit-com-3-pares-meia-esportiva-masculina-5450-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-cano-curto-feminina-clone-kit-com-3-pares-meia-esportiva-masculina-5450-02-4x5.jpg"
        ],
        "description": "A meia Kit Com 3 Pares Meia Cano Curto Feminina proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 34 a 38.",
        "highlight": false,
        "active": true
    },
    {
        "id": 6,
        "name": "Ref. 2039 - Calça Microfibra Rendada",
        "slug": "ref-2039-calca-microfibra-rendada-plus-5836",
        "price": 8.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2039-calca-microfibra-rendada-ref-2039-calca-microfibra-rendada-plus-5836-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2039-calca-microfibra-rendada-ref-2039-calca-microfibra-rendada-plus-5836-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2039-calca-microfibra-rendada-ref-2039-calca-microfibra-rendada-plus-5836-02-4x5.jpg"
        ],
        "description": "A calça Calça Microfibra Rendada (Ref. 2039) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 7,
        "name": "Ref. 2120 - Bermudinha Sem Renda (Plus)",
        "slug": "ref-2120-bermudinha-sem-renda-plus-7452",
        "price": 9.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2120-bermudinha-sem-renda-plus-ref-2120-bermudinha-sem-renda-plus-7452-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2120-bermudinha-sem-renda-plus-ref-2120-bermudinha-sem-renda-plus-7452-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2120-bermudinha-sem-renda-plus-ref-2120-bermudinha-sem-renda-plus-7452-02-4x5.jpg"
        ],
        "description": "A calça Bermudinha Sem Renda (Plus) (Ref. 2120) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 8,
        "name": "Ref. 3005 - Bustiê Bojo Microfibra",
        "slug": "ref-3005-bustie-bojo-microfibra-2673",
        "price": 19.99,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3005-bustie-bojo-microfibra-ref-3005-bustie-bojo-microfibra-2673-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3005-bustie-bojo-microfibra-ref-3005-bustie-bojo-microfibra-2673-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3005-bustie-bojo-microfibra-ref-3005-bustie-bojo-microfibra-2673-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3005-bustie-bojo-microfibra-ref-3005-bustie-bojo-microfibra-2673-03-4x5.jpg"
        ],
        "description": "O sutiã Bustiê Bojo Microfibra (Ref. 3005) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 9,
        "name": "CALÇA MICROF. LADY",
        "slug": "calca-microf-lady",
        "price": 8.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-microf-lady-calca-microf-lady-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-microf-lady-calca-microf-lady-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-microf-lady-calca-microf-lady-02-4x5.jpg"
        ],
        "description": "A calça CALÇA MICROF. LADY é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 10,
        "name": "Ref. 20990 - Calça Cotton Cinta",
        "slug": "ref-20990-calca-cotton-cinta-5416",
        "price": 10.5,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/20990-calca-cotton-cinta-ref-20990-calca-cotton-cinta-5416-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/20990-calca-cotton-cinta-ref-20990-calca-cotton-cinta-5416-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/20990-calca-cotton-cinta-ref-20990-calca-cotton-cinta-5416-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/20990-calca-cotton-cinta-ref-20990-calca-cotton-cinta-5416-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/20990-calca-cotton-cinta-ref-20990-calca-cotton-cinta-5416-04-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/20990-calca-cotton-cinta-ref-20990-calca-cotton-cinta-5416-05-4x5.jpg"
        ],
        "description": "A calça Calça Cotton Cinta (Ref. 20990) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 11,
        "name": "Ref. 2079 - Short Conforto",
        "slug": "ref-2079-short-conforto-5219",
        "price": 6.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2079-short-conforto-ref-2079-short-conforto-5219-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2079-short-conforto-ref-2079-short-conforto-5219-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2079-short-conforto-ref-2079-short-conforto-5219-02-4x5.jpg"
        ],
        "description": "A calça Short Conforto (Ref. 2079) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 12,
        "name": "Ref. 3066 - Topper Canelado",
        "slug": "topper-canelado-3725",
        "price": 14.99,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3066-topper-canelado-topper-canelado-3725-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3066-topper-canelado-topper-canelado-3725-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3066-topper-canelado-topper-canelado-3725-02-4x5.jpg"
        ],
        "description": "O sutiã Topper Canelado (Ref. 3066) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 13,
        "name": "PIJAMA MASCULINO LIGANETE",
        "slug": "pijama-masculino-liganete",
        "price": 34.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-masculino-liganete-pijama-masculino-liganete-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-masculino-liganete-pijama-masculino-liganete-01-4x5.jpg"
        ],
        "description": "O PIJAMA MASCULINO LIGANETE é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 14,
        "name": "REF.1122 - TANGA ARIANA",
        "slug": "tanga-ariana-1122-6525",
        "price": 7.5,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1122-tanga-ariana-tanga-ariana-1122-6525-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1122-tanga-ariana-tanga-ariana-1122-6525-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1122-tanga-ariana-tanga-ariana-1122-6525-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1122-tanga-ariana-tanga-ariana-1122-6525-03-4x5.jpg"
        ],
        "description": "A calcinha TANGA ARIANA (Ref. 1122) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 15,
        "name": "CALÇA REGINA COTTON",
        "slug": "calca-regina-cotton",
        "price": 7.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-regina-cotton-calca-regina-cotton-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-regina-cotton-calca-regina-cotton-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-regina-cotton-calca-regina-cotton-02-4x5.jpg"
        ],
        "description": "A calça CALÇA REGINA COTTON é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 16,
        "name": "CONJ. MENINA MOÇA",
        "slug": "conj-menina-moca-6800",
        "price": 9.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-conj-menina-moca-conj-menina-moca-6800-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-conj-menina-moca-conj-menina-moca-6800-01-4x5.jpg"
        ],
        "description": "A peça infantil CONJ. MENINA MOÇA foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 17,
        "name": "Ref. 8003 - Body Anita",
        "slug": "ref-8003-body-anita-2494",
        "price": 19.9,
        "category": "conjuntos",
        "categoryName": "Conjuntos",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/8003-body-anita-ref-8003-body-anita-2494-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/8003-body-anita-ref-8003-body-anita-2494-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/8003-body-anita-ref-8003-body-anita-2494-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/8003-body-anita-ref-8003-body-anita-2494-03-4x5.jpg"
        ],
        "description": "O conjunto Body Anita (Ref. 8003) reúne sofisticação, delicadeza e conforto em uma única proposta. Traz peças coordenadas com acabamento em renda macia ou detalhes sofisticados que se ajustam harmoniosamente às curvas do corpo. Perfeito para momentos especiais ou para se sentir autoconfiante e elegante no dia a dia. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 18,
        "name": "TANGA ÍSIS",
        "slug": "tanga-isis",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-isis-tanga-isis-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-isis-tanga-isis-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-isis-tanga-isis-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-isis-tanga-isis-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-isis-tanga-isis-04-4x5.jpg"
        ],
        "description": "A calcinha TANGA ÍSIS combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 19,
        "name": "Ref. 7082 - Baby Doll Josi Plus",
        "slug": "ref-7082-baby-doll-josi-plus-1883",
        "price": 28.9,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7082-baby-doll-josi-plus-ref-7082-baby-doll-josi-plus-1883-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7082-baby-doll-josi-plus-ref-7082-baby-doll-josi-plus-1883-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7082-baby-doll-josi-plus-ref-7082-baby-doll-josi-plus-1883-02-4x5.jpg"
        ],
        "description": "O Baby Doll Josi Plus (Ref. 7082) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 20,
        "name": "Ref. 4015 - Cueca Infantil Comum Kit c/ 6",
        "slug": "ref-4015-cueca-infantil-comum-cos-kit-c-6-7773",
        "price": 25.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/4015-cueca-infantil-comum-kit-c-6-ref-4015-cueca-infantil-comum-cos-kit-c-6-7773-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/4015-cueca-infantil-comum-kit-c-6-ref-4015-cueca-infantil-comum-cos-kit-c-6-7773-01-4x5.jpg"
        ],
        "description": "A peça infantil Cueca Infantil Comum Kit c/ 6 (Ref. 4015) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 21,
        "name": "Ref. 9009 - Bermudinha Com Renda",
        "slug": "ref-9009-bermudinha-com-renda-4874",
        "price": 10.5,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/9009-bermudinha-com-renda-ref-9009-bermudinha-com-renda-4874-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/9009-bermudinha-com-renda-ref-9009-bermudinha-com-renda-4874-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/9009-bermudinha-com-renda-ref-9009-bermudinha-com-renda-4874-02-4x5.jpg"
        ],
        "description": "A calça Bermudinha Com Renda (Ref. 9009) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 22,
        "name": "Ref. 1130 - Tanga Alice Brilho",
        "slug": "ref-1130-tanga-alice-brilho-8483",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1130-tanga-alice-brilho-ref-1130-tanga-alice-brilho-8483-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1130-tanga-alice-brilho-ref-1130-tanga-alice-brilho-8483-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1130-tanga-alice-brilho-ref-1130-tanga-alice-brilho-8483-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1130-tanga-alice-brilho-ref-1130-tanga-alice-brilho-8483-03-4x5.jpg"
        ],
        "description": "A calcinha Tanga Alice Brilho (Ref. 1130) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 23,
        "name": "SOUTIEN ATENA",
        "slug": "soutien-atena",
        "price": 12.9,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-atena-soutien-atena-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-atena-soutien-atena-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-atena-soutien-atena-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-atena-soutien-atena-03-4x5.jpg"
        ],
        "description": "O sutiã SOUTIEN ATENA foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 24,
        "name": "Ref. 1140 - Tanga Alexia",
        "slug": "ref-1140-tanga-alexia-6417",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1140-tanga-alexia-ref-1140-tanga-alexia-6417-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1140-tanga-alexia-ref-1140-tanga-alexia-6417-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1140-tanga-alexia-ref-1140-tanga-alexia-6417-02-4x5.jpg"
        ],
        "description": "A calcinha Tanga Alexia (Ref. 1140) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: M/G.",
        "highlight": false,
        "active": true
    },
    {
        "id": 25,
        "name": "CAMISOLA PLUS SUEDE",
        "slug": "camisola-plus-suede",
        "price": 29.99,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-camisola-plus-suede-camisola-plus-suede-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-camisola-plus-suede-camisola-plus-suede-01-4x5.jpg"
        ],
        "description": "O CAMISOLA PLUS SUEDE foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 26,
        "name": "Ref. 3044 - Soutien Menina Moça Bojo",
        "slug": "soutien-menina-moca-bojo-5442",
        "price": 10.9,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3044-soutien-menina-moca-bojo-soutien-menina-moca-bojo-5442-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3044-soutien-menina-moca-bojo-soutien-menina-moca-bojo-5442-01-4x5.jpg"
        ],
        "description": "O sutiã Soutien Menina Moça Bojo (Ref. 3044) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 27,
        "name": "KIT COM 3 PARES SOCIAL CLÁSSICA",
        "slug": "kit-com-3-pares-social-classica",
        "price": 15.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-social-classica-kit-com-3-pares-social-classica-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-social-classica-kit-com-3-pares-social-classica-01-4x5.jpg"
        ],
        "description": "O KIT COM 3 PARES SOCIAL CLÁSSICA é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 28,
        "name": "Kit Com 3 Pares Curta Estampada",
        "slug": "clone-kit-com-3-pares-meia-invisivel-masculina-7732",
        "price": 15.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-curta-estampada-clone-kit-com-3-pares-meia-invisivel-masculina-7732-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-curta-estampada-clone-kit-com-3-pares-meia-invisivel-masculina-7732-01-4x5.jpg"
        ],
        "description": "A meia Kit Com 3 Pares Curta Estampada proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 34 a 38.",
        "highlight": false,
        "active": true
    },
    {
        "id": 29,
        "name": "SOUTIEN ALINE",
        "slug": "soutien-aline-2086",
        "price": 12.9,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-aline-soutien-aline-2086-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-aline-soutien-aline-2086-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-aline-soutien-aline-2086-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-aline-soutien-aline-2086-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-aline-soutien-aline-2086-04-4x5.jpg"
        ],
        "description": "O sutiã SOUTIEN ALINE foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 30,
        "name": "Calça Charlote Fio Duplo PLUS - 2028",
        "slug": "calca-charlote-fio-duplo-6936",
        "price": 10.5,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-charlote-fio-duplo-plus-2028-calca-charlote-fio-duplo-6936-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-charlote-fio-duplo-plus-2028-calca-charlote-fio-duplo-6936-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-charlote-fio-duplo-plus-2028-calca-charlote-fio-duplo-6936-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-charlote-fio-duplo-plus-2028-calca-charlote-fio-duplo-6936-03-4x5.jpg"
        ],
        "description": "A calça Calça Charlote Fio Duplo PLUS - 2028 é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 31,
        "name": "TANGA BRILHO",
        "slug": "tanga-brilho",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-brilho-tanga-brilho-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-brilho-tanga-brilho-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-brilho-tanga-brilho-02-4x5.jpg"
        ],
        "description": "A calcinha TANGA BRILHO combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 32,
        "name": "CUECA BOX FEMININA CÓS EMBUTIDO",
        "slug": "cueca-box-feminina-cos-embutido",
        "price": 10.5,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-box-feminina-cos-embutido-cueca-box-feminina-cos-embutido-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-box-feminina-cos-embutido-cueca-box-feminina-cos-embutido-01-4x5.jpg"
        ],
        "description": "A calça CUECA BOX FEMININA CÓS EMBUTIDO é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 33,
        "name": "Ref. 2044 - Calça Isabella (Juvenil)",
        "slug": "ref-2044-calca-isabella-juvenil-1082",
        "price": 5.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2044-calca-isabella-juvenil-ref-2044-calca-isabella-juvenil-1082-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2044-calca-isabella-juvenil-ref-2044-calca-isabella-juvenil-1082-01-4x5.jpg"
        ],
        "description": "A peça infantil Calça Isabella (Juvenil) (Ref. 2044) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 34,
        "name": "PIJAMA FEMININO SUEDE",
        "slug": "pijama-feminino-suede",
        "price": 44.9,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-1-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-1-02-4x5.jpg"
        ],
        "description": "O PIJAMA FEMININO SUEDE é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 35,
        "name": "Pijama Infantil Suede Curto",
        "slug": "pijama-infantil-suede-curto",
        "price": 21,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-infantil-suede-curto-pijama-infantil-suede-curto-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-infantil-suede-curto-pijama-infantil-suede-curto-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-infantil-suede-curto-pijama-infantil-suede-curto-02-4x5.jpg"
        ],
        "description": "A peça infantil Pijama Infantil Suede Curto foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 36,
        "name": "Ref. 7020 - Pijama Infantil Masculino",
        "slug": "ref-7020-pijama-infantil-masculino-3635",
        "price": 26.9,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7020-pijama-infantil-masculino-ref-7020-pijama-infantil-masculino-3635-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7020-pijama-infantil-masculino-ref-7020-pijama-infantil-masculino-3635-01-4x5.jpg"
        ],
        "description": "A peça infantil Pijama Infantil Masculino (Ref. 7020) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: PP/P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 37,
        "name": "Ref. 9009 - Bermudinha Com Renda",
        "slug": "ref-9009-bermudinha-com-renda-3348",
        "price": 10.5,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/9009-bermudinha-com-renda-ref-9009-bermudinha-com-renda-3348-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/9009-bermudinha-com-renda-ref-9009-bermudinha-com-renda-3348-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/9009-bermudinha-com-renda-ref-9009-bermudinha-com-renda-3348-02-4x5.jpg"
        ],
        "description": "O Bermudinha Com Renda (Ref. 9009) foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 38,
        "name": "Ref. 7041 - Pijama Masculino Curto (Liso)",
        "slug": "ref-7041-pijama-masculino-curto-liso-7749",
        "price": 32.96,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7041-pijama-masculino-curto-liso-ref-7041-pijama-masculino-curto-liso-7749-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7041-pijama-masculino-curto-liso-ref-7041-pijama-masculino-curto-liso-7749-01-4x5.jpg"
        ],
        "description": "A peça Pijama Masculino Curto (Liso) (Ref. 7041) oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 39,
        "name": "Ref. 4023 - Cueca Box Infantil Listrada",
        "slug": "ref-4023-cueca-box-infantil-listrada-4588",
        "price": 5.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/4023-cueca-box-infantil-listrada-ref-4023-cueca-box-infantil-listrada-4588-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/4023-cueca-box-infantil-listrada-ref-4023-cueca-box-infantil-listrada-4588-01-4x5.jpg"
        ],
        "description": "A peça infantil Cueca Box Infantil Listrada (Ref. 4023) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 40,
        "name": "Ref. 3048 - Bustie Bojo Renda",
        "slug": "ref-3048-bustie-bojo-renda-3051",
        "price": 18.99,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3048-bustie-bojo-renda-ref-3048-bustie-bojo-renda-3051-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3048-bustie-bojo-renda-ref-3048-bustie-bojo-renda-3051-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3048-bustie-bojo-renda-ref-3048-bustie-bojo-renda-3051-02-4x5.jpg"
        ],
        "description": "O sutiã Bustie Bojo Renda (Ref. 3048) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 41,
        "name": "Ref. 1040 - Tanga Coração Fio Duplo (Regulagem)",
        "slug": "ref-1040-tanga-coracao-fio-duplo-regulagem-1612",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1040-tanga-coracao-fio-duplo-regulagem-ref-1040-tanga-coracao-fio-duplo-regulagem-1612-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1040-tanga-coracao-fio-duplo-regulagem-ref-1040-tanga-coracao-fio-duplo-regulagem-1612-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1040-tanga-coracao-fio-duplo-regulagem-ref-1040-tanga-coracao-fio-duplo-regulagem-1612-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1040-tanga-coracao-fio-duplo-regulagem-ref-1040-tanga-coracao-fio-duplo-regulagem-1612-03-4x5.jpg"
        ],
        "description": "A calcinha Tanga Coração Fio Duplo (Regulagem) (Ref. 1040) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 42,
        "name": "Ref. 4013 - Cueca Malha Sem Cós",
        "slug": "ref-4013-cueca-malha-sem-cos-2596",
        "price": 6.5,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/4013-cueca-malha-sem-cos-ref-4013-cueca-malha-sem-cos-2596-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/4013-cueca-malha-sem-cos-ref-4013-cueca-malha-sem-cos-2596-01-4x5.jpg"
        ],
        "description": "A peça Cueca Malha Sem Cós (Ref. 4013) oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 43,
        "name": "Ref. 2011 - Calçola Malha Lisa P/M/G/GG",
        "slug": "ref-2011-calcola-malha-lisa-pmggg-5232",
        "price": 7.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2011-calcola-malha-lisa-p-m-g-gg-ref-2011-calcola-malha-lisa-pmggg-5232-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2011-calcola-malha-lisa-p-m-g-gg-ref-2011-calcola-malha-lisa-pmggg-5232-01-4x5.jpg"
        ],
        "description": "A calça Calçola Malha Lisa P/M/G/GG (Ref. 2011) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 44,
        "name": "TANGA GENY",
        "slug": "tanga-geny",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-geny-tanga-geny-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-geny-tanga-geny-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-geny-tanga-geny-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-geny-tanga-geny-03-4x5.jpg"
        ],
        "description": "A calcinha TANGA GENY combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 45,
        "name": "BABY DOLL SUEDE C/ MANGA",
        "slug": "baby-doll-suede-manga",
        "price": 26.9,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-baby-doll-suede-c-manga-baby-doll-suede-manga-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-baby-doll-suede-c-manga-baby-doll-suede-manga-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-baby-doll-suede-c-manga-baby-doll-suede-manga-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-baby-doll-suede-c-manga-baby-doll-suede-manga-03-4x5.jpg"
        ],
        "description": "O BABY DOLL SUEDE C/ MANGA é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 46,
        "name": "TANGA CORAÇÃO RENDA",
        "slug": "tanga-coracao-renda",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-coracao-renda-tanga-coracao-renda-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-coracao-renda-tanga-coracao-renda-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-coracao-renda-tanga-coracao-renda-02-4x5.jpg"
        ],
        "description": "A calcinha TANGA CORAÇÃO RENDA combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 47,
        "name": "TANGA SECRET",
        "slug": "tanga-secret",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-secret-tanga-secret-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-secret-tanga-secret-01-4x5.jpg"
        ],
        "description": "A calcinha TANGA SECRET combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 48,
        "name": "Ref. 4030 -Samba-Canção Liganete",
        "slug": "ref-4030-samba-cancao-liganete-3090",
        "price": 13.5,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/4030-samba-cancao-liganete-ref-4030-samba-cancao-liganete-3090-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/4030-samba-cancao-liganete-ref-4030-samba-cancao-liganete-3090-01-4x5.jpg"
        ],
        "description": "A peça Samba-Canção Liganete (Ref. 4030) oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 49,
        "name": "Kit Com 3 Pares Meia Canoa Feminina",
        "slug": "kit-com-3-pares-meia-canoa-feminina-4914",
        "price": 14.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-canoa-feminina-kit-com-3-pares-meia-canoa-feminina-4914-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-canoa-feminina-kit-com-3-pares-meia-canoa-feminina-4914-01-4x5.jpg"
        ],
        "description": "A meia Kit Com 3 Pares Meia Canoa Feminina proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 34 a 38.",
        "highlight": false,
        "active": true
    },
    {
        "id": 50,
        "name": "Samba Canção Infantil",
        "slug": "samba-cancao-infantil-7261",
        "price": 8.9,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-samba-cancao-infantil-samba-cancao-infantil-7261-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-samba-cancao-infantil-samba-cancao-infantil-7261-01-4x5.jpg"
        ],
        "description": "A peça infantil Samba Canção Infantil foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 51,
        "name": "REF.: 7035 - BABY DOLL JOANA PLUS",
        "slug": "baby-doll-joana-2047",
        "price": 27.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7035-baby-doll-joana-plus-baby-doll-joana-2047-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7035-baby-doll-joana-plus-baby-doll-joana-2047-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7035-baby-doll-joana-plus-baby-doll-joana-2047-02-4x5.jpg"
        ],
        "description": "O BABY DOLL JOANA PLUS (Ref. 7035) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 52,
        "name": "TOPER RENDADO",
        "slug": "toper-rendado",
        "price": 9.99,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-toper-rendado-toper-rendado-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-toper-rendado-toper-rendado-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-toper-rendado-toper-rendado-02-4x5.jpg"
        ],
        "description": "O sutiã TOPER RENDADO foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 53,
        "name": "Ref. 3096 - Soutien Amamentacao Renda",
        "slug": "ref-3096-soutien-amamentacao-renda-3892",
        "price": 17.9,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3096-soutien-amamentacao-renda-ref-3096-soutien-amamentacao-renda-3892-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3096-soutien-amamentacao-renda-ref-3096-soutien-amamentacao-renda-3892-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3096-soutien-amamentacao-renda-ref-3096-soutien-amamentacao-renda-3892-02-4x5.jpg"
        ],
        "description": "O Soutien Amamentacao Renda (Ref. 3096) foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 54,
        "name": "SAMBA CANÇÃO SUEDE",
        "slug": "samba-cancao-suede",
        "price": 13.5,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-samba-cancao-suede-samba-cancao-suede-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-samba-cancao-suede-samba-cancao-suede-01-4x5.jpg"
        ],
        "description": "A peça SAMBA CANÇÃO SUEDE oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 55,
        "name": "Ref. 2038 - Calça Charlote",
        "slug": "ref-2038-calca-charlote-4863",
        "price": 8.5,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2038-calca-charlote-ref-2038-calca-charlote-4863-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2038-calca-charlote-ref-2038-calca-charlote-4863-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2038-calca-charlote-ref-2038-calca-charlote-4863-02-4x5.jpg"
        ],
        "description": "A calça Calça Charlote (Ref. 2038) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 56,
        "name": "CALÇA MIDI ALGODÃO OXIGÊNIO",
        "slug": "calca-midi-algodao-oxigenio",
        "price": 8.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-midi-algodao-oxigenio-calca-midi-algodao-oxigenio-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-midi-algodao-oxigenio-calca-midi-algodao-oxigenio-01-4x5.jpg"
        ],
        "description": "A calça CALÇA MIDI ALGODÃO OXIGÊNIO é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 57,
        "name": "SOUTIEN CAMISETA S/BOJO - REF. 3015",
        "slug": "soutien-camiseta-sbojo-ref-3015-2659",
        "price": 12.5,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3015-soutien-camiseta-s-bojo-soutien-camiseta-sbojo-ref-3015-2659-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3015-soutien-camiseta-s-bojo-soutien-camiseta-sbojo-ref-3015-2659-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3015-soutien-camiseta-s-bojo-soutien-camiseta-sbojo-ref-3015-2659-02-4x5.jpg"
        ],
        "description": "O sutiã SOUTIEN CAMISETA S/BOJO - REF. 3015 (Ref. 3015) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 58,
        "name": "Ref. 2142 - Tanga Nébia s/ Renda",
        "slug": "ref-2142-tanga-nebia-s-renda-8654",
        "price": 8.9,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2142-tanga-nebia-s-renda-ref-2142-tanga-nebia-s-renda-8654-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2142-tanga-nebia-s-renda-ref-2142-tanga-nebia-s-renda-8654-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2142-tanga-nebia-s-renda-ref-2142-tanga-nebia-s-renda-8654-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2142-tanga-nebia-s-renda-ref-2142-tanga-nebia-s-renda-8654-03-4x5.jpg"
        ],
        "description": "A calcinha Tanga Nébia s/ Renda (Ref. 2142) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 59,
        "name": "Pijama Infantil Masculino Suede",
        "slug": "pijama-infantil-masculino-suede-5016",
        "price": 26.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-infantil-masculino-suede-pijama-infantil-masculino-suede-5016-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-infantil-masculino-suede-pijama-infantil-masculino-suede-5016-01-4x5.jpg"
        ],
        "description": "A peça infantil Pijama Infantil Masculino Suede foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 60,
        "name": "Ref. 2072 - Calça Algodão",
        "slug": "ref-2072-calca-algodao-6675",
        "price": 6.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2072-calca-algodao-ref-2072-calca-algodao-6675-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2072-calca-algodao-ref-2072-calca-algodao-6675-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2072-calca-algodao-ref-2072-calca-algodao-6675-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2072-calca-algodao-ref-2072-calca-algodao-6675-03-4x5.jpg"
        ],
        "description": "A calça Calça Algodão (Ref. 2072) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 61,
        "name": "TANGA ATENA",
        "slug": "tanga-atena",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-atena-tanga-atena-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-atena-tanga-atena-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-atena-tanga-atena-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-atena-tanga-atena-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-atena-tanga-atena-04-4x5.jpg"
        ],
        "description": "A calcinha TANGA ATENA combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 62,
        "name": "Ref. 7067 - Camisola Amamentaçao",
        "slug": "ref-7067-camisola-amamentacao-1005",
        "price": 28.9,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7067-camisola-amamentacao-ref-7067-camisola-amamentacao-1005-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7067-camisola-amamentacao-ref-7067-camisola-amamentacao-1005-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7067-camisola-amamentacao-ref-7067-camisola-amamentacao-1005-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7067-camisola-amamentacao-ref-7067-camisola-amamentacao-1005-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7067-camisola-amamentacao-ref-7067-camisola-amamentacao-1005-04-4x5.jpg"
        ],
        "description": "O Camisola Amamentaçao (Ref. 7067) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 63,
        "name": "Ref. 2087 - Calça Rajada",
        "slug": "ref-2087-calca-rajada-5505",
        "price": 8.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2087-calca-rajada-ref-2087-calca-rajada-5505-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2087-calca-rajada-ref-2087-calca-rajada-5505-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2087-calca-rajada-ref-2087-calca-rajada-5505-02-4x5.jpg"
        ],
        "description": "A calça Calça Rajada (Ref. 2087) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 64,
        "name": "Ref. 7065 - Baby Doll Liganete Renda",
        "slug": "ref-7065-baby-doll-liganete-renda-5138",
        "price": 22.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7065-baby-doll-liganete-renda-ref-7065-baby-doll-liganete-renda-5138-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7065-baby-doll-liganete-renda-ref-7065-baby-doll-liganete-renda-5138-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7065-baby-doll-liganete-renda-ref-7065-baby-doll-liganete-renda-5138-02-4x5.jpg"
        ],
        "description": "O Baby Doll Liganete Renda (Ref. 7065) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 65,
        "name": "TANGA MAISA - REF. 1166",
        "slug": "tanga-maisa-ref-1166-6007",
        "price": 8.5,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1166-tanga-maisa-tanga-maisa-ref-1166-6007-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1166-tanga-maisa-tanga-maisa-ref-1166-6007-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1166-tanga-maisa-tanga-maisa-ref-1166-6007-02-4x5.jpg"
        ],
        "description": "A calcinha TANGA MAISA - REF. 1166 (Ref. 1166) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 66,
        "name": "Ref. 3032 - Soutien Reforçado Espuma",
        "slug": "ref-3032-soutien-reforcado-espuma-8044",
        "price": 14.99,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3032-soutien-reforcado-espuma-ref-3032-soutien-reforcado-espuma-8044-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3032-soutien-reforcado-espuma-ref-3032-soutien-reforcado-espuma-8044-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3032-soutien-reforcado-espuma-ref-3032-soutien-reforcado-espuma-8044-02-4x5.jpg"
        ],
        "description": "O Soutien Reforçado Espuma (Ref. 3032) foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 67,
        "name": "REF.3003 - SOUTIEN REFORÇADO MICROFIBRA",
        "slug": "soutien-reforcado-microfibra-3003-5605",
        "price": 16.5,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3003-soutien-reforcado-microfibra-soutien-reforcado-microfibra-3003-5605-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3003-soutien-reforcado-microfibra-soutien-reforcado-microfibra-3003-5605-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3003-soutien-reforcado-microfibra-soutien-reforcado-microfibra-3003-5605-02-4x5.jpg"
        ],
        "description": "O sutiã SOUTIEN REFORÇADO MICROFIBRA (Ref. 3003) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 68,
        "name": "MEIA SOCIAL",
        "slug": "meia-social",
        "price": 5.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-meia-social-meia-social-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-meia-social-meia-social-01-4x5.jpg"
        ],
        "description": "O MEIA SOCIAL é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 69,
        "name": "BABY DOLL CANELADO - REF 7047",
        "slug": "baby-doll-canelado-ref-7047",
        "price": 20.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7047-baby-doll-canelado-baby-doll-canelado-ref-7047-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7047-baby-doll-canelado-baby-doll-canelado-ref-7047-01-4x5.jpg"
        ],
        "description": "O BABY DOLL CANELADO - REF 7047 (Ref. 7047) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 70,
        "name": "Kit Com 3 Pares Meia Cano Curto Feminina",
        "slug": "clone-kit-com-3-pares-meia-cano-curto-feminina-6776",
        "price": 15.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-cano-curto-feminina-clone-kit-com-3-pares-meia-cano-curto-feminina-6776-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-cano-curto-feminina-clone-kit-com-3-pares-meia-cano-curto-feminina-6776-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-cano-curto-feminina-clone-kit-com-3-pares-meia-cano-curto-feminina-6776-02-4x5.jpg"
        ],
        "description": "A meia Kit Com 3 Pares Meia Cano Curto Feminina proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 34 a 38.",
        "highlight": false,
        "active": true
    },
    {
        "id": 71,
        "name": "Ref. 3038 - Bustiê de Renda",
        "slug": "ref-3038-bustie-de-renda-1303",
        "price": 8.99,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3038-bustie-de-renda-ref-3038-bustie-de-renda-1303-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3038-bustie-de-renda-ref-3038-bustie-de-renda-1303-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3038-bustie-de-renda-ref-3038-bustie-de-renda-1303-02-4x5.jpg"
        ],
        "description": "O sutiã Bustiê de Renda (Ref. 3038) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 72,
        "name": "Tanga Asa Delta",
        "slug": "tanga-asa-delta-1582",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-asa-delta-tanga-asa-delta-1582-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-asa-delta-tanga-asa-delta-1582-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-asa-delta-tanga-asa-delta-1582-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-asa-delta-tanga-asa-delta-1582-03-4x5.jpg"
        ],
        "description": "A calcinha Tanga Asa Delta combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 73,
        "name": "Kit com 3 Pares de Meia Canoa Masculina",
        "slug": "kit-com-3-pares-de-meia-canoa-masculina-5252",
        "price": 14.99,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-de-meia-canoa-masculina-kit-com-3-pares-de-meia-canoa-masculina-5252-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-de-meia-canoa-masculina-kit-com-3-pares-de-meia-canoa-masculina-5252-01-4x5.jpg"
        ],
        "description": "A peça Kit com 3 Pares de Meia Canoa Masculina oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: 39 a 43.",
        "highlight": false,
        "active": true
    },
    {
        "id": 74,
        "name": "Ref. 4010 - Cueca Malha Com Cós",
        "slug": "ref-4010-cueca-malha-com-cos-2287",
        "price": 6.99,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/4010-cueca-malha-com-cos-ref-4010-cueca-malha-com-cos-2287-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/4010-cueca-malha-com-cos-ref-4010-cueca-malha-com-cos-2287-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/4010-cueca-malha-com-cos-ref-4010-cueca-malha-com-cos-2287-02-4x5.jpg"
        ],
        "description": "A peça Cueca Malha Com Cós (Ref. 4010) oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 75,
        "name": "TANGA ALINE FIO DUPLO",
        "slug": "tanga-aline-fio-duplo",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-aline-fio-duplo-tanga-aline-fio-duplo-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-aline-fio-duplo-tanga-aline-fio-duplo-01-4x5.jpg"
        ],
        "description": "A calcinha TANGA ALINE FIO DUPLO combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 76,
        "name": "Ref. 7045 - Baby Doll Blogueirinha",
        "slug": "ref-7045-baby-doll-blogueirinha-2537",
        "price": 34.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7045-baby-doll-blogueirinha-ref-7045-baby-doll-blogueirinha-2537-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7045-baby-doll-blogueirinha-ref-7045-baby-doll-blogueirinha-2537-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7045-baby-doll-blogueirinha-ref-7045-baby-doll-blogueirinha-2537-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7045-baby-doll-blogueirinha-ref-7045-baby-doll-blogueirinha-2537-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7045-baby-doll-blogueirinha-ref-7045-baby-doll-blogueirinha-2537-04-4x5.jpg"
        ],
        "description": "O Baby Doll Blogueirinha (Ref. 7045) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 77,
        "name": "Ref. 1098 - Tanga Fio Plus",
        "slug": "ref-1098-tanga-fio-plus-3617",
        "price": 9.99,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1098-tanga-fio-plus-ref-1098-tanga-fio-plus-3617-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1098-tanga-fio-plus-ref-1098-tanga-fio-plus-3617-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1098-tanga-fio-plus-ref-1098-tanga-fio-plus-3617-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1098-tanga-fio-plus-ref-1098-tanga-fio-plus-3617-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1098-tanga-fio-plus-ref-1098-tanga-fio-plus-3617-04-4x5.jpg"
        ],
        "description": "O Tanga Fio Plus (Ref. 1098) foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 78,
        "name": "Kit Com 3 Pares Meia Tênis Masculina",
        "slug": "kit-com-3-pares-meia-cano-curto-masculina-3081",
        "price": 15.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-tenis-masculina-kit-com-3-pares-meia-cano-curto-masculina-3081-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-tenis-masculina-kit-com-3-pares-meia-cano-curto-masculina-3081-01-4x5.jpg"
        ],
        "description": "A meia Kit Com 3 Pares Meia Tênis Masculina proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 39 a 44.",
        "highlight": false,
        "active": true
    },
    {
        "id": 79,
        "name": "Camisola de Amamentar",
        "slug": "camisola-de-amamentar-3000",
        "price": 28.9,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-camisola-de-amamentar-camisola-de-amamentar-3000-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-camisola-de-amamentar-camisola-de-amamentar-3000-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-camisola-de-amamentar-camisola-de-amamentar-3000-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-camisola-de-amamentar-camisola-de-amamentar-3000-03-4x5.jpg"
        ],
        "description": "O Camisola de Amamentar é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 80,
        "name": "Ref. 7046- Pijama Infantil Manga",
        "slug": "ref-7046-pijama-infantil-manga-2061",
        "price": 18.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7046-pijama-infantil-manga-ref-7046-pijama-infantil-manga-2061-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7046-pijama-infantil-manga-ref-7046-pijama-infantil-manga-2061-01-4x5.jpg"
        ],
        "description": "A peça infantil Pijama Infantil Manga (Ref. 7046) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: PP/P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 81,
        "name": "Ref.3075 - Soutien Reforçado Madá",
        "slug": "soutien-reforcado-mada-4799",
        "price": 19.99,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3075-soutien-reforcado-mada-soutien-reforcado-mada-4799-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3075-soutien-reforcado-mada-soutien-reforcado-mada-4799-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3075-soutien-reforcado-mada-soutien-reforcado-mada-4799-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3075-soutien-reforcado-mada-soutien-reforcado-mada-4799-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3075-soutien-reforcado-mada-soutien-reforcado-mada-4799-04-4x5.jpg"
        ],
        "description": "O sutiã Soutien Reforçado Madá (Ref. 3075) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 82,
        "name": "Pijama Infantil Feminino e Masculino Flanelado",
        "slug": "pijama-infantil-feminino-e-masculino-flanelado-1472",
        "price": 39.9,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-infantil-feminino-e-masculino-flanelado-pijama-infantil-feminino-e-masculino-flanelado-1472-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-infantil-feminino-e-masculino-flanelado-pijama-infantil-feminino-e-masculino-flanelado-1472-01-4x5.jpg"
        ],
        "description": "A peça infantil Pijama Infantil Feminino e Masculino Flanelado foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 83,
        "name": "Ref. 7090 - Hobby de Tule",
        "slug": "ref-7090-hobby-de-tule-2318",
        "price": 39.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7090-hobby-de-tule-ref-7090-hobby-de-tule-2318-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7090-hobby-de-tule-ref-7090-hobby-de-tule-2318-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7090-hobby-de-tule-ref-7090-hobby-de-tule-2318-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7090-hobby-de-tule-ref-7090-hobby-de-tule-2318-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7090-hobby-de-tule-ref-7090-hobby-de-tule-2318-04-4x5.jpg"
        ],
        "description": "O Hobby de Tule (Ref. 7090) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 84,
        "name": "TANGA FIO DUPLO RENDA - REF.1069",
        "slug": "tanga-fio-duplo-renda-ref1069-8207",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1069-tanga-fio-duplo-renda-tanga-fio-duplo-renda-ref1069-8207-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1069-tanga-fio-duplo-renda-tanga-fio-duplo-renda-ref1069-8207-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1069-tanga-fio-duplo-renda-tanga-fio-duplo-renda-ref1069-8207-02-4x5.jpg"
        ],
        "description": "A calcinha TANGA FIO DUPLO RENDA - REF.1069 (Ref. 1069) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 85,
        "name": "Ref. 3016 - Bustiê Microfibra",
        "slug": "ref-3016-bustie-microfibra-3099",
        "price": 8.99,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3016-bustie-microfibra-ref-3016-bustie-microfibra-3099-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3016-bustie-microfibra-ref-3016-bustie-microfibra-3099-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3016-bustie-microfibra-ref-3016-bustie-microfibra-3099-02-4x5.jpg"
        ],
        "description": "O sutiã Bustiê Microfibra (Ref. 3016) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 86,
        "name": "Kit Com 3 Pares Meia Aeróbica",
        "slug": "kit-com-3-pares-meia-aerobica-7959",
        "price": 14.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-aerobica-kit-com-3-pares-meia-aerobica-7959-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-aerobica-kit-com-3-pares-meia-aerobica-7959-01-4x5.jpg"
        ],
        "description": "A meia Kit Com 3 Pares Meia Aeróbica proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 34 a 38.",
        "highlight": false,
        "active": true
    },
    {
        "id": 87,
        "name": "Ref. 2125 - Calça Verônica",
        "slug": "ref-2125-calca-veronica-6286",
        "price": 13.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2125-calca-veronica-ref-2125-calca-veronica-6286-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2125-calca-veronica-ref-2125-calca-veronica-6286-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2125-calca-veronica-ref-2125-calca-veronica-6286-02-4x5.jpg"
        ],
        "description": "A calça Calça Verônica (Ref. 2125) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: 48 ao 50.",
        "highlight": false,
        "active": true
    },
    {
        "id": 88,
        "name": "REF. 2049 - CALÇA INFANTO JUVENIL DIVERSOS",
        "slug": "ref-2049-calca-infanto-juvenil-diversos-2022",
        "price": 5.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2049-calca-infanto-juvenil-diversos-ref-2049-calca-infanto-juvenil-diversos-2022-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2049-calca-infanto-juvenil-diversos-ref-2049-calca-infanto-juvenil-diversos-2022-01-4x5.jpg"
        ],
        "description": "A peça infantil CALÇA INFANTO JUVENIL DIVERSOS (Ref. 2049) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 89,
        "name": "Ref. 7026 - Pijama Masculino Longo",
        "slug": "ref-7026-pijama-masculino-longo-6732",
        "price": 44.99,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7026-pijama-masculino-longo-ref-7026-pijama-masculino-longo-6732-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7026-pijama-masculino-longo-ref-7026-pijama-masculino-longo-6732-01-4x5.jpg"
        ],
        "description": "A peça Pijama Masculino Longo (Ref. 7026) oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 90,
        "name": "Ref. 7027 -Pijama Masculino Regata",
        "slug": "ref-7027-pijama-masculino-regata-4513",
        "price": 32.99,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7027-pijama-masculino-regata-ref-7027-pijama-masculino-regata-4513-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7027-pijama-masculino-regata-ref-7027-pijama-masculino-regata-4513-01-4x5.jpg"
        ],
        "description": "A peça Pijama Masculino Regata (Ref. 7027) oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 91,
        "name": "TOPER VIRGÍNIA",
        "slug": "toper-virginia",
        "price": 16.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-toper-virginia-toper-virginia-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-toper-virginia-toper-virginia-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-toper-virginia-toper-virginia-02-4x5.jpg"
        ],
        "description": "O TOPER VIRGÍNIA é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 92,
        "name": "Kit Calcinhas (Com 6 unidades)",
        "slug": "kit-calcinhas-com-6-unidades-3695",
        "price": 25.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-calcinhas-com-6-unidades-kit-calcinhas-com-6-unidades-3695-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-calcinhas-com-6-unidades-kit-calcinhas-com-6-unidades-3695-01-4x5.jpg"
        ],
        "description": "A peça infantil Kit Calcinhas (Com 6 unidades) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 93,
        "name": "Ref. 7073 - Camisola Drapeada",
        "slug": "ref-7073-camisola-drapeada-4125",
        "price": 19.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7073-camisola-drapeada-ref-7073-camisola-drapeada-4125-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7073-camisola-drapeada-ref-7073-camisola-drapeada-4125-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7073-camisola-drapeada-ref-7073-camisola-drapeada-4125-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7073-camisola-drapeada-ref-7073-camisola-drapeada-4125-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7073-camisola-drapeada-ref-7073-camisola-drapeada-4125-04-4x5.jpg"
        ],
        "description": "O Camisola Drapeada (Ref. 7073) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 94,
        "name": "Ref. 3084 - Soutien Bojo Sem Aro Liso",
        "slug": "ref-3084-soutien-bojo-sem-aro-liso-1465",
        "price": 18.9,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3084-soutien-bojo-sem-aro-liso-ref-3084-soutien-bojo-sem-aro-liso-1465-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3084-soutien-bojo-sem-aro-liso-ref-3084-soutien-bojo-sem-aro-liso-1465-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3084-soutien-bojo-sem-aro-liso-ref-3084-soutien-bojo-sem-aro-liso-1465-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3084-soutien-bojo-sem-aro-liso-ref-3084-soutien-bojo-sem-aro-liso-1465-03-4x5.jpg"
        ],
        "description": "O sutiã Soutien Bojo Sem Aro Liso (Ref. 3084) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 95,
        "name": "Ref. 2063 - Calça Microf. Cós",
        "slug": "ref-2063-calca-microf-cos-7531",
        "price": 8.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2063-calca-microf-cos-ref-2063-calca-microf-cos-7531-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2063-calca-microf-cos-ref-2063-calca-microf-cos-7531-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2063-calca-microf-cos-ref-2063-calca-microf-cos-7531-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2063-calca-microf-cos-ref-2063-calca-microf-cos-7531-03-4x5.jpg"
        ],
        "description": "A calça Calça Microf. Cós (Ref. 2063) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 96,
        "name": "Ref. 3034 - Soutien Meia Taça",
        "slug": "ref-3034-soutien-meia-taca-4238",
        "price": 10.9,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3034-soutien-meia-taca-ref-3034-soutien-meia-taca-4238-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3034-soutien-meia-taca-ref-3034-soutien-meia-taca-4238-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3034-soutien-meia-taca-ref-3034-soutien-meia-taca-4238-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3034-soutien-meia-taca-ref-3034-soutien-meia-taca-4238-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3034-soutien-meia-taca-ref-3034-soutien-meia-taca-4238-04-4x5.jpg"
        ],
        "description": "O Soutien Meia Taça (Ref. 3034) foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 97,
        "name": "CUECA BOX EXG",
        "slug": "cueca-box-xg",
        "price": 12.9,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-box-exg-cueca-box-xg-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-box-exg-cueca-box-xg-01-4x5.jpg"
        ],
        "description": "A peça CUECA BOX EXG oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 98,
        "name": "Calça Infantil Sublimada",
        "slug": "calca-infantil-sublimada-7650",
        "price": 4.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-infantil-sublimada-calca-infantil-sublimada-7650-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-infantil-sublimada-calca-infantil-sublimada-7650-01-4x5.jpg"
        ],
        "description": "A peça infantil Calça Infantil Sublimada foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 99,
        "name": "Ref. 8087 - Baby Doll Malha Plus",
        "slug": "ref-8087-baby-doll-malha-plus-8780",
        "price": 24.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/8087-baby-doll-malha-plus-ref-8087-baby-doll-malha-plus-8780-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/8087-baby-doll-malha-plus-ref-8087-baby-doll-malha-plus-8780-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/8087-baby-doll-malha-plus-ref-8087-baby-doll-malha-plus-8780-02-4x5.jpg"
        ],
        "description": "O Baby Doll Malha Plus (Ref. 8087) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: Xgg/G1/G2.",
        "highlight": false,
        "active": true
    },
    {
        "id": 100,
        "name": "BABY DOLL SUEDE REGATA",
        "slug": "baby-doll-suede-regata",
        "price": 25.9,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-baby-doll-suede-regata-baby-doll-suede-regata-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-baby-doll-suede-regata-baby-doll-suede-regata-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-baby-doll-suede-regata-baby-doll-suede-regata-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-baby-doll-suede-regata-baby-doll-suede-regata-03-4x5.jpg"
        ],
        "description": "O BABY DOLL SUEDE REGATA é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 101,
        "name": "TANGA ISABEL",
        "slug": "tanga-isabel",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-isabel-tanga-isabel-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-isabel-tanga-isabel-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-isabel-tanga-isabel-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-isabel-tanga-isabel-03-4x5.jpg"
        ],
        "description": "A calcinha TANGA ISABEL combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 102,
        "name": "Ref. 4006 - Cueca Box Romantic",
        "slug": "ref-4006-cueca-box-romantic-4050",
        "price": 9.5,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/4006-cueca-box-romantic-ref-4006-cueca-box-romantic-4050-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/4006-cueca-box-romantic-ref-4006-cueca-box-romantic-4050-01-4x5.jpg"
        ],
        "description": "A peça Cueca Box Romantic (Ref. 4006) oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 103,
        "name": "Ref. 7045 - Baby Doll Blogueirinha",
        "slug": "ref-7045-baby-doll-blogueirinha-3492",
        "price": 34.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7045-baby-doll-blogueirinha-ref-7045-baby-doll-blogueirinha-3492-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7045-baby-doll-blogueirinha-ref-7045-baby-doll-blogueirinha-3492-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7045-baby-doll-blogueirinha-ref-7045-baby-doll-blogueirinha-3492-02-4x5.jpg"
        ],
        "description": "O Baby Doll Blogueirinha (Ref. 7045) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 104,
        "name": "TANGA REBECA",
        "slug": "tanga-rebeca",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-rebeca-tanga-rebeca-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-rebeca-tanga-rebeca-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-rebeca-tanga-rebeca-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-rebeca-tanga-rebeca-03-4x5.jpg"
        ],
        "description": "A calcinha TANGA REBECA combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 105,
        "name": "CALÇA LILA",
        "slug": "calca-lila",
        "price": 8.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-lila-calca-lila-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-lila-calca-lila-01-4x5.jpg"
        ],
        "description": "A calça CALÇA LILA é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 106,
        "name": "CROPPED BLOGUEIRINHA",
        "slug": "cropped-blogueirinha",
        "price": 25.99,
        "category": "conjuntos",
        "categoryName": "Conjuntos",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-cropped-blogueirinha-cropped-blogueirinha-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-cropped-blogueirinha-cropped-blogueirinha-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-cropped-blogueirinha-cropped-blogueirinha-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-cropped-blogueirinha-cropped-blogueirinha-03-4x5.jpg"
        ],
        "description": "O conjunto CROPPED BLOGUEIRINHA reúne sofisticação, delicadeza e conforto em uma única proposta. Traz peças coordenadas com acabamento em renda macia ou detalhes sofisticados que se ajustam harmoniosamente às curvas do corpo. Perfeito para momentos especiais ou para se sentir autoconfiante e elegante no dia a dia. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 107,
        "name": "TANGA ALGODÃO PALA",
        "slug": "tanga-algodao-pala",
        "price": 8.5,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-algodao-pala-tanga-algodao-pala-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-algodao-pala-tanga-algodao-pala-01-4x5.jpg"
        ],
        "description": "A calcinha TANGA ALGODÃO PALA combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 108,
        "name": "Ref. 1039 - Tanga Diva",
        "slug": "ref-1039-tanga-diva-2176",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1039-tanga-diva-ref-1039-tanga-diva-2176-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1039-tanga-diva-ref-1039-tanga-diva-2176-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1039-tanga-diva-ref-1039-tanga-diva-2176-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1039-tanga-diva-ref-1039-tanga-diva-2176-03-4x5.jpg"
        ],
        "description": "A calcinha Tanga Diva (Ref. 1039) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 109,
        "name": "TANGA SARA",
        "slug": "tanga-sara",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-sara-tanga-sara-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-sara-tanga-sara-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-sara-tanga-sara-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-sara-tanga-sara-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-sara-tanga-sara-04-4x5.jpg"
        ],
        "description": "A calcinha TANGA SARA combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 110,
        "name": "Ref. 7029 - Baby Doll Blogueirinha",
        "slug": "ref-7029-baby-doll-blogueirinha-8479",
        "price": 29.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7029-baby-doll-blogueirinha-ref-7029-baby-doll-blogueirinha-8479-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7029-baby-doll-blogueirinha-ref-7029-baby-doll-blogueirinha-8479-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7029-baby-doll-blogueirinha-ref-7029-baby-doll-blogueirinha-8479-02-4x5.jpg"
        ],
        "description": "O Baby Doll Blogueirinha (Ref. 7029) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 111,
        "name": "Ref. 3018 - Soutien Microfibra",
        "slug": "ref-3018-soutien-microfibra-3748",
        "price": 10.9,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3018-soutien-microfibra-ref-3018-soutien-microfibra-3748-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3018-soutien-microfibra-ref-3018-soutien-microfibra-3748-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3018-soutien-microfibra-ref-3018-soutien-microfibra-3748-02-4x5.jpg"
        ],
        "description": "O sutiã Soutien Microfibra (Ref. 3018) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 112,
        "name": "Ref. 2035 - Calça Cotton com Renda",
        "slug": "ref-2035-calca-cotton-com-renda-2732",
        "price": 6.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2035-calca-cotton-com-renda-ref-2035-calca-cotton-com-renda-2732-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2035-calca-cotton-com-renda-ref-2035-calca-cotton-com-renda-2732-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2035-calca-cotton-com-renda-ref-2035-calca-cotton-com-renda-2732-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2035-calca-cotton-com-renda-ref-2035-calca-cotton-com-renda-2732-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2035-calca-cotton-com-renda-ref-2035-calca-cotton-com-renda-2732-04-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2035-calca-cotton-com-renda-ref-2035-calca-cotton-com-renda-2732-05-4x5.jpg"
        ],
        "description": "A calça Calça Cotton com Renda (Ref. 2035) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 113,
        "name": "TANGA FIO DUPLO MICROFIBRA",
        "slug": "tanga-fio-duplo-microfibra",
        "price": 7.5,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-fio-duplo-microfibra-tanga-fio-duplo-microfibra-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-fio-duplo-microfibra-tanga-fio-duplo-microfibra-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-fio-duplo-microfibra-tanga-fio-duplo-microfibra-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-fio-duplo-microfibra-tanga-fio-duplo-microfibra-03-4x5.jpg"
        ],
        "description": "A calcinha TANGA FIO DUPLO MICROFIBRA combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 114,
        "name": "Tanga Cotton",
        "slug": "tanga-cotton-4255",
        "price": 5.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-cotton-tanga-cotton-4255-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-cotton-tanga-cotton-4255-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-cotton-tanga-cotton-4255-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-cotton-tanga-cotton-4255-03-4x5.jpg"
        ],
        "description": "A calcinha Tanga Cotton combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 115,
        "name": "Ref. 3078 - Top Reforçado Nadador",
        "slug": "ref-3078-top-reforcado-nadador-5698",
        "price": 13.5,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3078-top-reforcado-nadador-ref-3078-top-reforcado-nadador-5698-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3078-top-reforcado-nadador-ref-3078-top-reforcado-nadador-5698-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3078-top-reforcado-nadador-ref-3078-top-reforcado-nadador-5698-02-4x5.jpg"
        ],
        "description": "O sutiã Top Reforçado Nadador (Ref. 3078) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 116,
        "name": "Ref. 4002 - Cueca Helanca com Cós",
        "slug": "ref-4002-cueca-helanca-com-cos-8024",
        "price": 6.6,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/4002-cueca-helanca-com-cos-ref-4002-cueca-helanca-com-cos-8024-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/4002-cueca-helanca-com-cos-ref-4002-cueca-helanca-com-cos-8024-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/4002-cueca-helanca-com-cos-ref-4002-cueca-helanca-com-cos-8024-02-4x5.jpg"
        ],
        "description": "A peça Cueca Helanca com Cós (Ref. 4002) oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 117,
        "name": "PIJAMA SUEDE FEMININO",
        "slug": "pijama-suede-feminino",
        "price": 44.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-suede-feminino-pijama-suede-feminino-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-suede-feminino-pijama-suede-feminino-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-suede-feminino-pijama-suede-feminino-02-4x5.jpg"
        ],
        "description": "O PIJAMA SUEDE FEMININO é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 118,
        "name": "calça charlote algodão",
        "slug": "calca-charlote-algodao",
        "price": 9.5,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-charlote-algodao-calca-charlote-algodao-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-charlote-algodao-calca-charlote-algodao-01-4x5.jpg"
        ],
        "description": "A calça calça charlote algodão é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 119,
        "name": "TANGA CONFORTO REF. 1084",
        "slug": "tanga-conforto-ref-1084-3370",
        "price": 6.5,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1084-tanga-conforto-tanga-conforto-ref-1084-3370-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1084-tanga-conforto-tanga-conforto-ref-1084-3370-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1084-tanga-conforto-tanga-conforto-ref-1084-3370-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1084-tanga-conforto-tanga-conforto-ref-1084-3370-03-4x5.jpg"
        ],
        "description": "A calcinha TANGA CONFORTO REF. 1084 (Ref. 1084) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 120,
        "name": "SUNGUETE MICROFIBRA",
        "slug": "sunguete-microfibra",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-sunguete-microfibra-sunguete-microfibra-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-sunguete-microfibra-sunguete-microfibra-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-sunguete-microfibra-sunguete-microfibra-02-4x5.jpg"
        ],
        "description": "A calcinha SUNGUETE MICROFIBRA combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 121,
        "name": "Ref. 3059 - Soutien Reforçado Rendado",
        "slug": "ref-3059-soutien-reforcado-rendado-5502",
        "price": 15.99,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3059-soutien-reforcado-rendado-ref-3059-soutien-reforcado-rendado-5502-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3059-soutien-reforcado-rendado-ref-3059-soutien-reforcado-rendado-5502-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3059-soutien-reforcado-rendado-ref-3059-soutien-reforcado-rendado-5502-02-4x5.jpg"
        ],
        "description": "O sutiã Soutien Reforçado Rendado (Ref. 3059) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 122,
        "name": "soutien ref amamentação",
        "slug": "soutien-ref-amamentacao",
        "price": 13.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/amamenta-soutien-cao-soutien-ref-amamentacao-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/amamenta-soutien-cao-soutien-ref-amamentacao-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/amamenta-soutien-cao-soutien-ref-amamentacao-02-4x5.jpg"
        ],
        "description": "O soutien ref amamentação é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 123,
        "name": "Ref. 1162 - Tanga Fio Mescla",
        "slug": "ref-1162-tanga-fio-mescla-5782",
        "price": 8.5,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1162-tanga-fio-mescla-ref-1162-tanga-fio-mescla-5782-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1162-tanga-fio-mescla-ref-1162-tanga-fio-mescla-5782-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1162-tanga-fio-mescla-ref-1162-tanga-fio-mescla-5782-02-4x5.jpg"
        ],
        "description": "O Tanga Fio Mescla (Ref. 1162) foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 124,
        "name": "Kit Com 3 Pares De Meia Sapatilha Invisível Feminina",
        "slug": "kit-com-3-pares-de-meia-sapatilha-invisivel-feminina-5896",
        "price": 15.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-de-meia-sapatilha-invisivel-feminina-kit-com-3-pares-de-meia-sapatilha-invisivel-feminina-5896-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-de-meia-sapatilha-invisivel-feminina-kit-com-3-pares-de-meia-sapatilha-invisivel-feminina-5896-01-4x5.jpg"
        ],
        "description": "A meia Kit Com 3 Pares De Meia Sapatilha Invisível Feminina proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 34 a 38.",
        "highlight": false,
        "active": true
    },
    {
        "id": 125,
        "name": "Ref. 7021 - Pijama Infantil Regata",
        "slug": "ref-7021-pijama-infantil-regata-5919",
        "price": 17.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7021-pijama-infantil-regata-ref-7021-pijama-infantil-regata-5919-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7021-pijama-infantil-regata-ref-7021-pijama-infantil-regata-5919-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7021-pijama-infantil-regata-ref-7021-pijama-infantil-regata-5919-02-4x5.jpg"
        ],
        "description": "A peça infantil Pijama Infantil Regata (Ref. 7021) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: PP/P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 126,
        "name": "CALÇA CINTURA ALTA OXIGÊNIO",
        "slug": "calca-cintura-alta-oxigenio",
        "price": 9.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-cintura-alta-oxigenio-calca-cintura-alta-oxigenio-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-cintura-alta-oxigenio-calca-cintura-alta-oxigenio-01-4x5.jpg"
        ],
        "description": "A calça CALÇA CINTURA ALTA OXIGÊNIO é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 127,
        "name": "CALÇA MICROF. E RENDA",
        "slug": "calca-microf-e-renda",
        "price": 9.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-microf-e-renda-calca-microf-e-renda-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-microf-e-renda-calca-microf-e-renda-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-microf-e-renda-calca-microf-e-renda-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-microf-e-renda-calca-microf-e-renda-03-4x5.jpg"
        ],
        "description": "A calça CALÇA MICROF. E RENDA é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 128,
        "name": "Ref. 1162 - Tanga Fio Mescla",
        "slug": "ref-1162-tanga-fio-mescla-4751",
        "price": 8.5,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1162-tanga-fio-mescla-ref-1162-tanga-fio-mescla-4751-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1162-tanga-fio-mescla-ref-1162-tanga-fio-mescla-4751-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1162-tanga-fio-mescla-ref-1162-tanga-fio-mescla-4751-02-4x5.jpg"
        ],
        "description": "A calcinha Tanga Fio Mescla (Ref. 1162) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 129,
        "name": "REF. 0081 - CALÇA INFANTIL SUBLIMADA",
        "slug": "ref-0081-calca-infantil-sublimada-6640",
        "price": 4.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/0081-calca-infantil-sublimada-ref-0081-calca-infantil-sublimada-6640-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/0081-calca-infantil-sublimada-ref-0081-calca-infantil-sublimada-6640-01-4x5.jpg"
        ],
        "description": "A peça infantil CALÇA INFANTIL SUBLIMADA (Ref. 0081) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 130,
        "name": "Ref. 3082 - Soutien Bojo Flex (Sem Aro)",
        "slug": "ref-3082-soutien-bojo-flex-sem-aro-6187",
        "price": 17.9,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3082-soutien-bojo-flex-sem-aro-ref-3082-soutien-bojo-flex-sem-aro-6187-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3082-soutien-bojo-flex-sem-aro-ref-3082-soutien-bojo-flex-sem-aro-6187-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3082-soutien-bojo-flex-sem-aro-ref-3082-soutien-bojo-flex-sem-aro-6187-02-4x5.jpg"
        ],
        "description": "O sutiã Soutien Bojo Flex (Sem Aro) (Ref. 3082) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 131,
        "name": "TANGA CHARLOTE FIO DUPLO",
        "slug": "tanga-charlote-fio-duplo",
        "price": 8.5,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-charlote-fio-duplo-tanga-charlote-fio-duplo-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-charlote-fio-duplo-tanga-charlote-fio-duplo-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-charlote-fio-duplo-tanga-charlote-fio-duplo-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-charlote-fio-duplo-tanga-charlote-fio-duplo-03-4x5.jpg"
        ],
        "description": "A calcinha TANGA CHARLOTE FIO DUPLO combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 132,
        "name": "Ref. 4016 - Cueca Infantil Cós Kit c/ 3",
        "slug": "ref-4016-cueca-infantil-cos-kit-c-3-4391",
        "price": 11.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/4016-cueca-infantil-cos-kit-c-3-ref-4016-cueca-infantil-cos-kit-c-3-4391-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/4016-cueca-infantil-cos-kit-c-3-ref-4016-cueca-infantil-cos-kit-c-3-4391-01-4x5.jpg"
        ],
        "description": "A peça infantil Cueca Infantil Cós Kit c/ 3 (Ref. 4016) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G.",
        "highlight": false,
        "active": true
    },
    {
        "id": 133,
        "name": "CUECA BOX TEEN",
        "slug": "cueca-box-teen",
        "price": 7.5,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-box-teen-cueca-box-teen-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-box-teen-cueca-box-teen-01-4x5.jpg"
        ],
        "description": "A peça CUECA BOX TEEN oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 134,
        "name": "Ref. 3022 - Soutien Microfibra Silicone (Alças removíveis)",
        "slug": "ref-3022-soutien-microfibra-silicone-2647",
        "price": 9.9,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3022-soutien-microfibra-silicone-alcas-removiveis-ref-3022-soutien-microfibra-silicone-2647-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3022-soutien-microfibra-silicone-alcas-removiveis-ref-3022-soutien-microfibra-silicone-2647-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3022-soutien-microfibra-silicone-alcas-removiveis-ref-3022-soutien-microfibra-silicone-2647-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3022-soutien-microfibra-silicone-alcas-removiveis-ref-3022-soutien-microfibra-silicone-2647-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3022-soutien-microfibra-silicone-alcas-removiveis-ref-3022-soutien-microfibra-silicone-2647-04-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3022-soutien-microfibra-silicone-alcas-removiveis-ref-3022-soutien-microfibra-silicone-2647-05-4x5.jpg"
        ],
        "description": "O sutiã Soutien Microfibra Silicone (Alças removíveis) (Ref. 3022) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 135,
        "name": "Ref. 1133- Tanga Ritinha",
        "slug": "ref-1127-tanga-ritinha-1113",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1133-tanga-ritinha-ref-1127-tanga-ritinha-1113-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1133-tanga-ritinha-ref-1127-tanga-ritinha-1113-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1133-tanga-ritinha-ref-1127-tanga-ritinha-1113-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1133-tanga-ritinha-ref-1127-tanga-ritinha-1113-03-4x5.jpg"
        ],
        "description": "A calcinha Tanga Ritinha (Ref. 1133) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 136,
        "name": "REF. 2135 - CALÇA MICROFIBRA CINTA",
        "slug": "calca-microf-cinta-2135-3745",
        "price": 11.9,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2135-calca-microfibra-cinta-calca-microf-cinta-2135-3745-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2135-calca-microfibra-cinta-calca-microf-cinta-2135-3745-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2135-calca-microfibra-cinta-calca-microf-cinta-2135-3745-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2135-calca-microfibra-cinta-calca-microf-cinta-2135-3745-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2135-calca-microfibra-cinta-calca-microf-cinta-2135-3745-04-4x5.jpg"
        ],
        "description": "A calça CALÇA MICROFIBRA CINTA (Ref. 2135) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 137,
        "name": "Ref. 2011 - Calçola Malha Lisa",
        "slug": "ref-2011-calcola-malha-lisa-4322",
        "price": 8.99,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2011-calcola-malha-lisa-ref-2011-calcola-malha-lisa-4322-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2011-calcola-malha-lisa-ref-2011-calcola-malha-lisa-4322-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2011-calcola-malha-lisa-ref-2011-calcola-malha-lisa-4322-02-4x5.jpg"
        ],
        "description": "O Calçola Malha Lisa (Ref. 2011) foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: XGG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 138,
        "name": "Ref. 7071 - Baby Doll Vivi",
        "slug": "ref-7071-baby-doll-vivi-2304",
        "price": 23.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7071-baby-doll-vivi-ref-7071-baby-doll-vivi-2304-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7071-baby-doll-vivi-ref-7071-baby-doll-vivi-2304-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7071-baby-doll-vivi-ref-7071-baby-doll-vivi-2304-02-4x5.jpg"
        ],
        "description": "O Baby Doll Vivi (Ref. 7071) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 139,
        "name": "Ref. 1021 - Tanga Priscila",
        "slug": "ref-1021-tanga-priscila-8279",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1021-tanga-priscila-ref-1021-tanga-priscila-8279-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1021-tanga-priscila-ref-1021-tanga-priscila-8279-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1021-tanga-priscila-ref-1021-tanga-priscila-8279-02-4x5.jpg"
        ],
        "description": "A calcinha Tanga Priscila (Ref. 1021) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 140,
        "name": "Ref. 1004 - Tangão Su",
        "slug": "ref-1004-tangao-su-6034",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1004-tangao-su-ref-1004-tangao-su-6034-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1004-tangao-su-ref-1004-tangao-su-6034-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1004-tangao-su-ref-1004-tangao-su-6034-02-4x5.jpg"
        ],
        "description": "A calcinha Tangão Su (Ref. 1004) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 141,
        "name": "SOUTIEN REF ARO",
        "slug": "soutien-ref-aro",
        "price": 17.86,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/aro-soutien-soutien-ref-aro-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/aro-soutien-soutien-ref-aro-01-4x5.jpg"
        ],
        "description": "O SOUTIEN REF ARO foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 142,
        "name": "SHORT ESTAMPADO ALGODÃO",
        "slug": "short-estampado-algodao",
        "price": 7.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-short-estampado-algodao-short-estampado-algodao-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-short-estampado-algodao-short-estampado-algodao-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-short-estampado-algodao-short-estampado-algodao-02-4x5.jpg"
        ],
        "description": "A calça SHORT ESTAMPADO ALGODÃO é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 143,
        "name": "Ref. 3021 - Soutien Microfibra e Renda",
        "slug": "ref-3021-soutien-microfibra-e-renda-2736",
        "price": 8.99,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3021-soutien-microfibra-e-renda-ref-3021-soutien-microfibra-e-renda-2736-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3021-soutien-microfibra-e-renda-ref-3021-soutien-microfibra-e-renda-2736-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3021-soutien-microfibra-e-renda-ref-3021-soutien-microfibra-e-renda-2736-02-4x5.jpg"
        ],
        "description": "O sutiã Soutien Microfibra e Renda (Ref. 3021) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 144,
        "name": "CUECA BOXER INFANTIL",
        "slug": "cueca-boxer-infantil",
        "price": 6.5,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-boxer-infantil-cueca-boxer-infantil-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-boxer-infantil-cueca-boxer-infantil-01-4x5.jpg"
        ],
        "description": "A peça CUECA BOXER INFANTIL oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": true,
        "active": true
    },
    {
        "id": 145,
        "name": "CALÇA NICOLE ALGODÃO",
        "slug": "calca-nicole-algodao",
        "price": 7.5,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-nicole-algodao-calca-nicole-algodao-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-nicole-algodao-calca-nicole-algodao-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-nicole-algodao-calca-nicole-algodao-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-nicole-algodao-calca-nicole-algodao-03-4x5.jpg"
        ],
        "description": "A calça CALÇA NICOLE ALGODÃO é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 146,
        "name": "REF. 2008 - CALÇA MICROF. CONFORTO",
        "slug": "calca-microf-conforto-2008-7634",
        "price": 6.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2008-calca-microf-conforto-calca-microf-conforto-2008-7634-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2008-calca-microf-conforto-calca-microf-conforto-2008-7634-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2008-calca-microf-conforto-calca-microf-conforto-2008-7634-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2008-calca-microf-conforto-calca-microf-conforto-2008-7634-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2008-calca-microf-conforto-calca-microf-conforto-2008-7634-04-4x5.jpg"
        ],
        "description": "A calça CALÇA MICROF. CONFORTO (Ref. 2008) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 147,
        "name": "Ref. 4007 - Cueca Box Ciclista",
        "slug": "ref-4007-cueca-box-ciclista-1443",
        "price": 12.5,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/4007-cueca-box-ciclista-ref-4007-cueca-box-ciclista-1443-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/4007-cueca-box-ciclista-ref-4007-cueca-box-ciclista-1443-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/4007-cueca-box-ciclista-ref-4007-cueca-box-ciclista-1443-02-4x5.jpg"
        ],
        "description": "A peça Cueca Box Ciclista (Ref. 4007) oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 148,
        "name": "TANGÃO MICROF. PLUS",
        "slug": "tangao-microf-plus",
        "price": 10.9,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tangao-microf-plus-tangao-microf-plus-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tangao-microf-plus-tangao-microf-plus-01-4x5.jpg"
        ],
        "description": "O TANGÃO MICROF. PLUS foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 149,
        "name": "Ref. 7070 - Baby Doll Liganete Plus",
        "slug": "ref-7070-baby-doll-liganete-plus-7608",
        "price": 28.9,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7070-baby-doll-liganete-plus-ref-7070-baby-doll-liganete-plus-7608-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7070-baby-doll-liganete-plus-ref-7070-baby-doll-liganete-plus-7608-01-4x5.jpg"
        ],
        "description": "O Baby Doll Liganete Plus (Ref. 7070) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 150,
        "name": "Kit Com 3 Pares Meia Curta Invisível",
        "slug": "clone-kit-com-3-pares-curta-estampada-3239",
        "price": 15.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-curta-invisivel-clone-kit-com-3-pares-curta-estampada-3239-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-curta-invisivel-clone-kit-com-3-pares-curta-estampada-3239-01-4x5.jpg"
        ],
        "description": "A meia Kit Com 3 Pares Meia Curta Invisível proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 34 a 38.",
        "highlight": false,
        "active": true
    },
    {
        "id": 151,
        "name": "Meia Aeróbica Longa 3/4",
        "slug": "meia-aerobica-longa-34-4627",
        "price": 5.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-meia-aerobica-longa-3-4-meia-aerobica-longa-34-4627-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-meia-aerobica-longa-3-4-meia-aerobica-longa-34-4627-01-4x5.jpg"
        ],
        "description": "A meia Meia Aeróbica Longa 3/4 proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 34 a 38.",
        "highlight": false,
        "active": true
    },
    {
        "id": 152,
        "name": "CUECA BOX PRIME",
        "slug": "cueca-box-prime",
        "price": 7.99,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-box-prime-cueca-box-prime-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-box-prime-cueca-box-prime-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-cueca-box-prime-cueca-box-prime-02-4x5.jpg"
        ],
        "description": "A peça CUECA BOX PRIME oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 153,
        "name": "BABY DOLL INFANTIL MALHA",
        "slug": "baby-doll-infantil-malha",
        "price": 11.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-baby-doll-infantil-malha-baby-doll-infantil-malha-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-baby-doll-infantil-malha-baby-doll-infantil-malha-01-4x5.jpg"
        ],
        "description": "A peça infantil BABY DOLL INFANTIL MALHA foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 154,
        "name": "Kit Com 3 Pares Meia Cano Curto Masculina",
        "slug": "kit-com-3-pares-meia-canoa-feminina-7951",
        "price": 15.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-cano-curto-masculina-kit-com-3-pares-meia-canoa-feminina-7951-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-cano-curto-masculina-kit-com-3-pares-meia-canoa-feminina-7951-01-4x5.jpg"
        ],
        "description": "A meia Kit Com 3 Pares Meia Cano Curto Masculina proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 39 a 43.",
        "highlight": false,
        "active": true
    },
    {
        "id": 155,
        "name": "Ref. 7017 - Baby Doll Malha",
        "slug": "ref-7017-baby-doll-malha-3382",
        "price": 16.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7017-baby-doll-malha-ref-7017-baby-doll-malha-3382-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7017-baby-doll-malha-ref-7017-baby-doll-malha-3382-01-4x5.jpg"
        ],
        "description": "O Baby Doll Malha (Ref. 7017) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 156,
        "name": "Ref. 4001 - Cueca Helanca Sem Cós",
        "slug": "ref-4001-cueca-helanca-sem-cos-6865",
        "price": 5.99,
        "category": "masculino",
        "categoryName": "Masculino",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/4001-cueca-helanca-sem-cos-ref-4001-cueca-helanca-sem-cos-6865-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/4001-cueca-helanca-sem-cos-ref-4001-cueca-helanca-sem-cos-6865-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/4001-cueca-helanca-sem-cos-ref-4001-cueca-helanca-sem-cos-6865-02-4x5.jpg"
        ],
        "description": "A peça Cueca Helanca Sem Cós (Ref. 4001) oferece o ajuste perfeito e conforto absoluto para o homem moderno. Confeccionado em materiais de alta durabilidade e respirabilidade, possui modelagem anatômica e cós elástico macio que não aperta. Essencial para quem busca praticidade, frescor e total liberdade de movimento. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 157,
        "name": "Ref. 1115 - Tanga Mescla",
        "slug": "ref-1115-tanga-mescla-6506",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1115-tanga-mescla-ref-1115-tanga-mescla-6506-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1115-tanga-mescla-ref-1115-tanga-mescla-6506-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1115-tanga-mescla-ref-1115-tanga-mescla-6506-02-4x5.jpg"
        ],
        "description": "A calcinha Tanga Mescla (Ref. 1115) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 158,
        "name": "Ref. 009161 - Conjunto Infantil Sublimado",
        "slug": "ref-009161-conjunto-infantil-sublimado-2613",
        "price": 7.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "logo.jpg",
        "images": [
            "logo.jpg"
        ],
        "description": "A peça infantil Conjunto Infantil Sublimado (Ref. 009161) foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 159,
        "name": "Ref. 1005 - Tanga Fio Duplo Conforto",
        "slug": "ref-1005-tanga-fio-duplo-conforto-5401",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1005-tanga-fio-duplo-conforto-ref-1005-tanga-fio-duplo-conforto-5401-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1005-tanga-fio-duplo-conforto-ref-1005-tanga-fio-duplo-conforto-5401-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1005-tanga-fio-duplo-conforto-ref-1005-tanga-fio-duplo-conforto-5401-02-4x5.jpg"
        ],
        "description": "A calcinha Tanga Fio Duplo Conforto (Ref. 1005) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 160,
        "name": "Ref. 3091 - Soutien Pós Cirúrgico",
        "slug": "ref-3091-soutien-pos-cirurgico-6821",
        "price": 17.9,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3091-soutien-pos-cirurgico-ref-3091-soutien-pos-cirurgico-6821-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3091-soutien-pos-cirurgico-ref-3091-soutien-pos-cirurgico-6821-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3091-soutien-pos-cirurgico-ref-3091-soutien-pos-cirurgico-6821-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3091-soutien-pos-cirurgico-ref-3091-soutien-pos-cirurgico-6821-03-4x5.jpg"
        ],
        "description": "O Soutien Pós Cirúrgico (Ref. 3091) foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: M.",
        "highlight": false,
        "active": true
    },
    {
        "id": 161,
        "name": "CALÇA LORENA",
        "slug": "calca-lorena",
        "price": 7.5,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-lorena-calca-lorena-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-lorena-calca-lorena-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-lorena-calca-lorena-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calca-lorena-calca-lorena-03-4x5.jpg"
        ],
        "description": "A calça CALÇA LORENA é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 162,
        "name": "Pijama Infantil Feminino Suede",
        "slug": "pijama-infantil-feminino-suede-4155",
        "price": 28.9,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-infantil-feminino-suede-pijama-infantil-feminino-suede-4155-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-infantil-feminino-suede-pijama-infantil-feminino-suede-4155-01-4x5.jpg"
        ],
        "description": "A peça infantil Pijama Infantil Feminino Suede foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 163,
        "name": "Ref. 7073 - Camisola Drapeada",
        "slug": "ref-7073-camisola-drapeada-8772",
        "price": 19.99,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7073-camisola-drapeada-ref-7073-camisola-drapeada-8772-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7073-camisola-drapeada-ref-7073-camisola-drapeada-8772-01-4x5.jpg"
        ],
        "description": "O Camisola Drapeada (Ref. 7073) foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 164,
        "name": "Ref. 2092 - Calça Modeladora Fio Duplo",
        "slug": "ref-2092-calca-modeladora-fio-duplo-1156",
        "price": 9.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2092-calca-modeladora-fio-duplo-ref-2092-calca-modeladora-fio-duplo-1156-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2092-calca-modeladora-fio-duplo-ref-2092-calca-modeladora-fio-duplo-1156-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2092-calca-modeladora-fio-duplo-ref-2092-calca-modeladora-fio-duplo-1156-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2092-calca-modeladora-fio-duplo-ref-2092-calca-modeladora-fio-duplo-1156-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2092-calca-modeladora-fio-duplo-ref-2092-calca-modeladora-fio-duplo-1156-04-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2092-calca-modeladora-fio-duplo-ref-2092-calca-modeladora-fio-duplo-1156-05-4x5.jpg"
        ],
        "description": "A calça Calça Modeladora Fio Duplo (Ref. 2092) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 165,
        "name": "Ref. 1070 - Tanga Borboleta",
        "slug": "ref-1070-tanga-borboleta-5118",
        "price": 8.5,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1070-tanga-borboleta-ref-1070-tanga-borboleta-5118-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1070-tanga-borboleta-ref-1070-tanga-borboleta-5118-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1070-tanga-borboleta-ref-1070-tanga-borboleta-5118-02-4x5.jpg"
        ],
        "description": "A calcinha Tanga Borboleta (Ref. 1070) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 166,
        "name": "TANGA FIO DUPLO FERNANDA",
        "slug": "tanga-fio-duplo-fernanda",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-fio-duplo-fernanda-tanga-fio-duplo-fernanda-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-tanga-fio-duplo-fernanda-tanga-fio-duplo-fernanda-01-4x5.jpg"
        ],
        "description": "A calcinha TANGA FIO DUPLO FERNANDA combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 167,
        "name": "Ref. 3096 - Soutien Amamentaçao Renda",
        "slug": "ref-3096-soutien-amamentacao-renda-2538",
        "price": 18.9,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3096-soutien-amamentacao-renda-ref-3096-soutien-amamentacao-renda-2538-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3096-soutien-amamentacao-renda-ref-3096-soutien-amamentacao-renda-2538-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3096-soutien-amamentacao-renda-ref-3096-soutien-amamentacao-renda-2538-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3096-soutien-amamentacao-renda-ref-3096-soutien-amamentacao-renda-2538-03-4x5.jpg"
        ],
        "description": "O sutiã Soutien Amamentaçao Renda (Ref. 3096) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 168,
        "name": "Ref. 1118 - Tanga Vivi Algodão",
        "slug": "ref-1118-tanga-vivi-algodao-6440",
        "price": 6.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1118-tanga-vivi-algodao-ref-1118-tanga-vivi-algodao-6440-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1118-tanga-vivi-algodao-ref-1118-tanga-vivi-algodao-6440-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/1118-tanga-vivi-algodao-ref-1118-tanga-vivi-algodao-6440-02-4x5.jpg"
        ],
        "description": "A calcinha Tanga Vivi Algodão (Ref. 1118) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 169,
        "name": "Ref. 1158 - Tanga Fio Janaina",
        "slug": "ref-1158-tanga-fio-janaina-6647",
        "price": 7.99,
        "category": "tangas",
        "categoryName": "Calcinhas",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/1158-tanga-fio-janaina-ref-1158-tanga-fio-janaina-6647-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/1158-tanga-fio-janaina-ref-1158-tanga-fio-janaina-6647-01-4x5.jpg"
        ],
        "description": "A calcinha Tanga Fio Janaina (Ref. 1158) combina conforto diário com um design moderno e discreto. Desenvolvida em material de alta qualidade e toque suave, possui costuras delicadas que não marcam sob a roupa e proporcionam liberdade de movimento. Perfeita para todas as ocasiões, garantindo suavidade e bem-estar para o dia a todo. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 170,
        "name": "Ref. 2027 - Calça Microfibra Inteira",
        "slug": "ref-2027-calca-microfibra-inteira-2141",
        "price": 8.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2027-calca-microfibra-inteira-ref-2027-calca-microfibra-inteira-2141-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2027-calca-microfibra-inteira-ref-2027-calca-microfibra-inteira-2141-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2027-calca-microfibra-inteira-ref-2027-calca-microfibra-inteira-2141-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2027-calca-microfibra-inteira-ref-2027-calca-microfibra-inteira-2141-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2027-calca-microfibra-inteira-ref-2027-calca-microfibra-inteira-2141-04-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2027-calca-microfibra-inteira-ref-2027-calca-microfibra-inteira-2141-05-4x5.jpg"
        ],
        "description": "A calça Calça Microfibra Inteira (Ref. 2027) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 171,
        "name": "Ref. 7067 - Camisola Amamentação",
        "slug": "ref-7067-camisola-amamentacao-1760",
        "price": 28.9,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7067-camisola-amamentacao-ref-7067-camisola-amamentacao-1760-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7067-camisola-amamentacao-ref-7067-camisola-amamentacao-1760-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7067-camisola-amamentacao-ref-7067-camisola-amamentacao-1760-02-4x5.jpg"
        ],
        "description": "O Camisola Amamentação (Ref. 7067) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 172,
        "name": "KIT COM 3 CALÇA INFANTIL BUNDA RICA",
        "slug": "kit-com-3-calca-infantil-bunda-rica",
        "price": 10.99,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-calca-infantil-bunda-rica-kit-com-3-calca-infantil-bunda-rica-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-calca-infantil-bunda-rica-kit-com-3-calca-infantil-bunda-rica-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-calca-infantil-bunda-rica-kit-com-3-calca-infantil-bunda-rica-02-4x5.jpg"
        ],
        "description": "A peça infantil KIT COM 3 CALÇA INFANTIL BUNDA RICA foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 173,
        "name": "Ref. 2005 - Calça Microf. Júlia",
        "slug": "ref-2005-calca-microf-julia-7685",
        "price": 6.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2005-calca-microf-julia-ref-2005-calca-microf-julia-7685-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2005-calca-microf-julia-ref-2005-calca-microf-julia-7685-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2005-calca-microf-julia-ref-2005-calca-microf-julia-7685-02-4x5.jpg"
        ],
        "description": "A calça Calça Microf. Júlia (Ref. 2005) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 174,
        "name": "Ref.2026 - Calça Cotton Recorte",
        "slug": "calca-cotton-lisa-2920",
        "price": 7.5,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2026-calca-cotton-recorte-calca-cotton-lisa-2920-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2026-calca-cotton-recorte-calca-cotton-lisa-2920-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2026-calca-cotton-recorte-calca-cotton-lisa-2920-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2026-calca-cotton-recorte-calca-cotton-lisa-2920-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2026-calca-cotton-recorte-calca-cotton-lisa-2920-04-4x5.jpg"
        ],
        "description": "A calça Calça Cotton Recorte (Ref. 2026) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 175,
        "name": "Ref. 2120 - Bermudinha sem Renda",
        "slug": "ref-2120-bermudinha-sem-renda-5409",
        "price": 9.99,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/2120-bermudinha-sem-renda-ref-2120-bermudinha-sem-renda-5409-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/2120-bermudinha-sem-renda-ref-2120-bermudinha-sem-renda-5409-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/2120-bermudinha-sem-renda-ref-2120-bermudinha-sem-renda-5409-02-4x5.jpg"
        ],
        "description": "A calça Bermudinha sem Renda (Ref. 2120) é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 176,
        "name": "CALÇOLA COTTON",
        "slug": "calcola-cotton",
        "price": 7.8,
        "category": "calcas",
        "categoryName": "Calças",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-calcola-cotton-calcola-cotton-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-calcola-cotton-calcola-cotton-01-4x5.jpg"
        ],
        "description": "A calça CALÇOLA COTTON é um item indispensável para quem prioriza conforto absoluto no dia a dia. Com modelagem anatômica que se adapta perfeitamente ao corpo, ela oferece excelente cobertura e suavidade ao toque. Desenvolvida com tecidos respiráveis e costuras macias que não marcam, é ideal para uso diário. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 177,
        "name": "Ref. 3012 - Soutien Bojão Liso",
        "slug": "ref-3012-soutien-bojao-liso-2288",
        "price": 20.99,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3012-soutien-bojao-liso-ref-3012-soutien-bojao-liso-2288-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3012-soutien-bojao-liso-ref-3012-soutien-bojao-liso-2288-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3012-soutien-bojao-liso-ref-3012-soutien-bojao-liso-2288-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3012-soutien-bojao-liso-ref-3012-soutien-bojao-liso-2288-03-4x5.jpg"
        ],
        "description": "O Soutien Bojão Liso (Ref. 3012) foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: 44/46/48.",
        "highlight": false,
        "active": true
    },
    {
        "id": 178,
        "name": "PIJAMA FEMININO SUEDE",
        "slug": "pijama-feminino-suede-1",
        "price": 41.99,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-1-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-1-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-1-02-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-1-03-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/sem-ref-pijama-feminino-suede-pijama-feminino-suede-1-04-4x5.jpg"
        ],
        "description": "O PIJAMA FEMININO SUEDE é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 179,
        "name": "Soutien Menina Moça Bojo",
        "slug": "soutien-menina-moca-bojo-7389",
        "price": 10.9,
        "category": "infantil",
        "categoryName": "Infantil",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-menina-moca-bojo-soutien-menina-moca-bojo-7389-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-soutien-menina-moca-bojo-soutien-menina-moca-bojo-7389-01-4x5.jpg"
        ],
        "description": "A peça infantil Soutien Menina Moça Bojo foi pensada especialmente para a pele delicada das crianças. Confeccionada com materiais hipoalergênicos e algodão de toque super macio, garante leveza, frescor e total liberdade de movimento para brincar. Peças alegres e confortáveis que os pequenos vão amar vestir! Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 180,
        "name": "SOUTIEN REF RENDA",
        "slug": "soutien-ref-renda",
        "price": 15.99,
        "category": "plus-size",
        "categoryName": "Plus Size",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/renda-soutien-soutien-ref-renda-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/renda-soutien-soutien-ref-renda-01-4x5.jpg"
        ],
        "description": "O SOUTIEN REF RENDA foi especialmente desenvolvido para celebrar e valorizar as curvas plus size com muito estilo, segurança e sustentação. Confeccionado com tecidos reforçados de alta elasticidade e toque macio, ele garante um ajuste anatômico perfeito e extremo conforto. Uma peça essencial que promove autoconfiança e liberdade para todas as horas. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 181,
        "name": "Kit Com 3 Pares Meia Invisível Masculina",
        "slug": "clone-kit-com-3-pares-meia-cano-curto-feminina-8023",
        "price": 15.99,
        "category": "meias",
        "categoryName": "Meias",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-invisivel-masculina-clone-kit-com-3-pares-meia-cano-curto-feminina-8023-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/sem-ref-kit-com-3-pares-meia-invisivel-masculina-clone-kit-com-3-pares-meia-cano-curto-feminina-8023-01-4x5.jpg"
        ],
        "description": "A meia Kit Com 3 Pares Meia Invisível Masculina proporciona conforto térmico e proteção ideal para os seus pés. Com costuras reforçadas e toque macio, ajusta-se perfeitamente sem escorregar dentro do sapato. Ideal para a prática de esportes ou para uso casual diário, mantendo a sensação de frescor por muito mais tempo. Disponível nos tamanhos: 39 a 43.",
        "highlight": false,
        "active": true
    },
    {
        "id": 182,
        "name": "Ref. 7056 - Baby Doll Regulagem",
        "slug": "ref-7056-baby-doll-regulagem-5328",
        "price": 18.9,
        "category": "linha-noite",
        "categoryName": "Linha Noite",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/7056-baby-doll-regulagem-ref-7056-baby-doll-regulagem-5328-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/7056-baby-doll-regulagem-ref-7056-baby-doll-regulagem-5328-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/7056-baby-doll-regulagem-ref-7056-baby-doll-regulagem-5328-02-4x5.jpg"
        ],
        "description": "O Baby Doll Regulagem (Ref. 7056) é a escolha perfeita para noites de sono tranquilas e confortáveis. Confeccionado em tecido leve e extremamente macio ao toque (como suede ou liganete), oferece um ajuste impecável que valoriza a silhueta com elegância. Uma peça charmosa e delicada, ideal para quem não abre mão do bem-estar e da beleza na hora do descanso. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    },
    {
        "id": 183,
        "name": "Ref. 3083 - Soutien Meia Taça Renda",
        "slug": "ref-3083-soutien-meia-taca-renda-1360",
        "price": 11.9,
        "category": "soutiens",
        "categoryName": "Sutiãs",
        "imageUrl": "imagens-produtos-nana-4x5-cortadas/3083-soutien-meia-taca-renda-ref-3083-soutien-meia-taca-renda-1360-01-4x5.jpg",
        "images": [
            "imagens-produtos-nana-4x5-cortadas/3083-soutien-meia-taca-renda-ref-3083-soutien-meia-taca-renda-1360-01-4x5.jpg",
            "imagens-produtos-nana-4x5-cortadas/3083-soutien-meia-taca-renda-ref-3083-soutien-meia-taca-renda-1360-02-4x5.jpg"
        ],
        "description": "O sutiã Soutien Meia Taça Renda (Ref. 3083) foi projetado para oferecer o suporte ideal com máximo conforto. Com acabamento refinado, alças reguláveis e excelente sustentação, adapta-se de forma suave ao corpo. Uma peça essencial no guarda-roupa feminino que alia funcionalidade, segurança e estilo para valorizar o colo com naturalidade. Disponível nos tamanhos: P/M/G/GG.",
        "highlight": false,
        "active": true
    }
];

// --- Banners Informativos (Atualizados para o novo tom de voz) ---
const BANNERS_DATA = [
    {
        id: 1,
        title: "Moda íntima com conforto, beleza e praticidade",
        text: "Escolha suas peças favoritas e finalize seu pedido pelo WhatsApp de forma simples, rápida e segura.",
        image: "banner01.png"
    }
];

let banners = [];

function loadBanners() {
    try {
        const stored = localStorage.getItem('nana_banners_v1');
        if (stored) {
            banners = JSON.parse(stored);
        } else {
            banners = [...BANNERS_DATA];
            localStorage.setItem('nana_banners_v1', JSON.stringify(banners));
        }
    } catch(e) {
        console.error("Erro ao carregar banners:", e);
        banners = [...BANNERS_DATA];
    }
}

// --- Configurações de Estado ---
let products = [];
let cart = [];
let activeCategory = 'all';
let searchQuery = '';
let minPriceFilter = 0;
let maxPriceFilter = 60;
let sortBy = 'default';
let selectedSize = 'M';
let currentProductInModal = null;
let currentSlideIndex = 0;
let slideInterval = null;

// --- Seletores do DOM ---
const DOM = {
    get productsGrid() { return document.getElementById('products-grid'); },
    get productsCount() { return document.getElementById('products-count'); },
    get cartBadge() { return document.getElementById('cart-badge'); },
    get cartBadgeHeader() { return document.getElementById('cart-badge-header'); },
    get cartOverlay() { return document.getElementById('cart-overlay'); },
    get cartItemsList() { return document.getElementById('cart-items-list'); },
    get cartSubtotal() { return document.getElementById('cart-subtotal'); },
    get cartTotal() { return document.getElementById('cart-total'); },
    get searchInput() { return document.getElementById('search-input'); },
    get sortSelect() { return document.getElementById('sort-select'); },
    get priceSlider() { return document.getElementById('price-slider'); },
    get priceValMin() { return document.getElementById('price-val-min'); },
    get priceValMax() { return document.getElementById('price-val-max'); },
    get sliderContainer() { return document.getElementById('slider-container'); },
    get sliderDots() { return document.getElementById('slider-dots'); },
    
    // Modais
    get productModal() { return document.getElementById('product-detail-modal'); },
    get checkoutModal() { return document.getElementById('checkout-modal'); },
    get checkoutForm() { return document.getElementById('checkout-form'); },
    get howItWorksModal() { return document.getElementById('how-it-works-modal'); },
    get catalogTitle() { return document.getElementById('catalog-title'); },
    
    // Filtros
    get filterItems() { return document.querySelectorAll('.filter-item'); },
    get navLinks() { return document.querySelectorAll('.nav-link'); }
};

// --- IndexedDB Storage Helper ---
const ImageStore = {
    db: null,
    init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('nana_db', 1);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains('images')) {
                    db.createObjectStore('images', { keyPath: 'id' });
                }
            };
            request.onsuccess = (e) => {
                this.db = e.target.result;
                resolve();
            };
            request.onerror = (e) => reject(e.target.error);
        });
    },
    getAll() {
        return new Promise((resolve) => {
            if (!this.db) return resolve([]);
            const transaction = this.db.transaction('images', 'readonly');
            const store = transaction.objectStore('images');
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => resolve([]);
        });
    }
};

const localImagesMap = {};

function getProductImageSrc(url) {
    if (url && url.startsWith('local-img-')) {
        return localImagesMap[url] || 'logo.jpg';
    }
    return url || 'logo.jpg';
}

window.changeModalMainImage = function(src, element) {
    const mainImg = document.getElementById('modal-main-img');
    if (mainImg) {
        mainImg.src = getProductImageSrc(src);
        // Atualizar também o fundo do zoom
        const result = document.getElementById('zoom-result');
        if (result) {
            result.style.backgroundImage = `url('${mainImg.src}')`;
        }
    }
    const thumbs = document.querySelectorAll('.gallery-thumb, .gallery-photo-card');
    thumbs.forEach(t => t.classList.remove('active'));
    element.classList.add('active');
};

function initImageZoom() {
    const container = document.getElementById('modal-main-img-container');
    const img = document.getElementById('modal-main-img');
    const lens = document.getElementById('zoom-lens');
    const result = document.getElementById('zoom-result');
    
    if (!container || !img || !lens || !result) return;
    
    // Configurações iniciais
    if (window.innerWidth < 992) {
        lens.style.display = 'none';
        result.style.display = 'none';
        container.style.cursor = 'default';
        return;
    }
    
    container.style.cursor = 'crosshair';
    
    function moveLens(e) {
        if (window.innerWidth < 992) return;
        e.preventDefault();
        
        const rect = container.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        const lensWidth = lens.offsetWidth;
        const lensHeight = lens.offsetHeight;
        
        let lensX = x - (lensWidth / 2);
        let lensY = y - (lensHeight / 2);
        
        if (lensX < 0) lensX = 0;
        if (lensY < 0) lensY = 0;
        if (lensX > container.offsetWidth - lensWidth) lensX = container.offsetWidth - lensWidth;
        if (lensY > container.offsetHeight - lensHeight) lensY = container.offsetHeight - lensHeight;
        
        lens.style.left = `${lensX}px`;
        lens.style.top = `${lensY}px`;
        
        const scaleX = result.offsetWidth / lensWidth;
        const scaleY = result.offsetHeight / lensHeight;
        
        result.style.backgroundPosition = `-${lensX * scaleX}px -${lensY * scaleY}px`;
    }
    
    container.addEventListener('mouseenter', () => {
        if (window.innerWidth < 992) return;
        lens.style.display = 'block';
        result.style.display = 'block';
        
        result.style.backgroundImage = `url('${img.src}')`;
        
        const scaleX = result.offsetWidth / lens.offsetWidth;
        const scaleY = result.offsetHeight / lens.offsetHeight;
        
        result.style.backgroundSize = `${container.offsetWidth * scaleX}px ${container.offsetHeight * scaleY}px`;
    });
    
    container.addEventListener('mouseleave', () => {
        lens.style.display = 'none';
        result.style.display = 'none';
    });
    
    container.addEventListener('mousemove', moveLens);
}



// --- Funções de Formatação ---
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// --- Extrair Tamanhos da Descrição ---
function parseSizesFromDescription(description) {
    if (!description || typeof description !== 'string') return null;
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

// --- Carregar e Salvar Produtos no LocalStorage ---
function loadProducts() {
    try {
        const storedProducts = localStorage.getItem('nana_products_v6');
        if (storedProducts) {
            products = JSON.parse(storedProducts);
            // Garantir lista de imagens e tamanhos
            let updated = false;
            products.forEach(p => {
                // Se o produto no localStorage tiver apenas imagens da fábrica e a quantidade for menor do que a da fábrica, restaura
                const factoryProd = PRODUCTS_DATA.find(fp => fp.id === p.id || (fp.slug && fp.slug === p.slug));
                if (factoryProd && factoryProd.images && factoryProd.images.length > 1) {
                    const onlyFactory = !p.images || p.images.every(img => typeof img === 'string' && img.startsWith('imagens-produtos-nana-4x5-cortadas/'));
                    if (onlyFactory && (!p.images || p.images.length < factoryProd.images.length)) {
                        p.images = [...factoryProd.images];
                        updated = true;
                    }
                }
                
                if (!p.images || !Array.isArray(p.images)) {
                    p.images = p.imageUrl ? [p.imageUrl] : [];
                    updated = true;
                }
                
                // Limitar a no máximo 5 imagens
                if (p.images.length > 5) {
                    p.images = p.images.slice(0, 5);
                    updated = true;
                }

                // Inicializar tamanhos a partir da descrição para compatibilidade retrógrada
                if (p.sizes === undefined || p.sizes === null) {
                    p.sizes = parseSizesFromDescription(p.description) || ['P', 'M', 'G', 'GG'];
                    updated = true;
                }
            });
            if (updated) {
                localStorage.setItem('nana_products_v6', JSON.stringify(products));
            }
        } else {
            products = PRODUCTS_DATA.map(p => {
                const copy = { ...p };
                if (copy.images && Array.isArray(copy.images)) {
                    copy.images = copy.images.slice(0, 5);
                } else {
                    copy.images = copy.imageUrl ? [copy.imageUrl] : [];
                }
                if (copy.sizes === undefined || copy.sizes === null) {
                    copy.sizes = parseSizesFromDescription(copy.description) || ['P', 'M', 'G', 'GG'];
                }
                return copy;
            });
            localStorage.setItem('nana_products_v6', JSON.stringify(products));
        }
    } catch (e) {
        console.error("Erro ao ler produtos do localStorage:", e);
        products = PRODUCTS_DATA.map(p => {
            const copy = { ...p };
            if (copy.images && Array.isArray(copy.images)) {
                copy.images = copy.images.slice(0, 5);
            } else {
                copy.images = copy.imageUrl ? [copy.imageUrl] : [];
            }
            if (copy.sizes === undefined || copy.sizes === null) {
                copy.sizes = parseSizesFromDescription(copy.description) || ['P', 'M', 'G', 'GG'];
            }
            return copy;
        });
    }
}

// --- Lógica do Slider/Banners ---
function initSlider() {
    if (!DOM.sliderContainer) return;
    
    const list = banners.length > 0 ? banners : [...BANNERS_DATA];
    
    DOM.sliderContainer.innerHTML = list.map((banner, index) => `
        <div class="slide ${index === 0 ? 'active' : ''}" data-index="${index}" onclick="scrollToProducts()" style="cursor: pointer;">
            <div class="slide-bg" style="background-image: url('${getProductImageSrc(banner.image)}')"></div>
        </div>
    `).join('');
    
    if (list.length > 1) {
        DOM.sliderDots.style.display = 'flex';
        DOM.sliderDots.innerHTML = list.map((_, index) => `
            <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}" onclick="setSlide(${index})"></span>
        `).join('');
        startSlideTimer();
    } else {
        DOM.sliderDots.style.display = 'none';
        stopSlideTimer();
    }
}

function startSlideTimer() {
    stopSlideTimer();
    slideInterval = setInterval(() => {
        const list = banners.length > 0 ? banners : [...BANNERS_DATA];
        let nextIndex = (currentSlideIndex + 1) % list.length;
        setSlide(nextIndex);
    }, 6000);
}

function stopSlideTimer() {
    if (slideInterval) clearInterval(slideInterval);
}

function setSlide(index) {
    currentSlideIndex = index;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    const activeSlide = document.querySelector(`.slide[data-index="${index}"]`);
    const activeDot = document.querySelector(`.dot[data-index="${index}"]`);
    
    if (activeSlide) activeSlide.classList.add('active');
    if (activeDot) activeDot.classList.add('active');
}

function scrollToProducts() {
    const section = document.getElementById('catalog-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- Renderização de Produtos (Grid) ---
function renderProductsGrid() {
    if (!DOM.productsGrid) return;
    
    // Filtragem
    let filteredProducts = products.filter(prod => {
        // Os inativos não devem aparecer no site
        if (prod.active === false) return false;
        
        const matchCategory = activeCategory === 'all' || prod.category === activeCategory;
        const matchSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            prod.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchPrice = prod.price >= minPriceFilter && prod.price <= maxPriceFilter;
        return matchCategory && matchSearch && matchPrice;
    });
    
    // Se estiver na página inicial (categoria "Todas", sem busca ativa e sem filtros), mostra apenas os destaques e limita a 12
    const isHomePage = activeCategory === 'all' && searchQuery.trim() === '' && minPriceFilter === 0 && maxPriceFilter === 60 && sortBy === 'default';
    if (isHomePage) {
        filteredProducts = filteredProducts.filter(prod => prod.highlight === true);
        filteredProducts = filteredProducts.slice(0, 12);
        
        if (DOM.catalogTitle) DOM.catalogTitle.textContent = "Destaques da Nana";
    } else {
        if (DOM.catalogTitle) {
            if (activeCategory === 'all') {
                DOM.catalogTitle.textContent = searchQuery.trim() !== '' ? "Resultados da Busca" : "Todas as Peças";
            } else {
                const activeLink = document.querySelector(`.nav-link[data-category="${activeCategory}"]`);
                DOM.catalogTitle.textContent = activeLink ? activeLink.textContent : "Produtos";
            }
        }
    }
    
    // Ordenação
    if (sortBy === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    DOM.productsCount.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? 'peça encontrada' : 'peças encontradas'}`;
    
    if (filteredProducts.length === 0) {
        DOM.productsGrid.innerHTML = `
            <div class="no-products">
                <svg viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                <h3>Nenhum produto encontrado</h3>
                <p class="text-muted">Tente ajustar os filtros ou explore outras categorias.</p>
            </div>
        `;
        return;
    }
    
    // Render Grid (Com badges alternados discretos e botão 'Adicionar à sacola')
    DOM.productsGrid.innerHTML = filteredProducts.map((prod, index) => {
        let badgeText = '';
        if (index % 4 === 0) badgeText = 'Mais vendido';
        else if (index % 4 === 1) badgeText = 'Novidade';
        else if (index % 4 === 2 && prod.price < 15) badgeText = 'Oferta';
        
        const badgeHtml = badgeText ? `<span class="product-badge">${badgeText}</span>` : '';
        
        return `
            <article class="product-card">
                <div class="product-img-wrapper" onclick="openProductModal(${prod.id})">
                    ${badgeHtml}
                    <img class="product-img" src="${getProductImageSrc(prod.imageUrl)}" alt="${prod.name}" onerror="this.src='logo.jpg'" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${prod.categoryName}</span>
                    <h3 class="product-name" onclick="openProductModal(${prod.id})">${prod.name}</h3>
                    <div class="product-price-row">
                        <span class="product-price-prefix">Por</span>
                        <span class="product-price">${formatCurrency(prod.price)}</span>
                        ${prod.name.includes('/ Un') || prod.name.includes('RENDA') ? '<span class="product-price-unit">/ Un</span>' : ''}
                    </div>
                    <button class="product-btn-add" onclick="quickAddToCart(${prod.id})">Adicionar à sacola</button>
                </div>
            </article>
        `;
    }).join('');
}

// --- Controle do Carrinho/Sacola (LocalStorage-Backed) ---
function loadCart() {
    try {
        const storedCart = localStorage.getItem('nana_cart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
    } catch (e) {
        console.error("Erro ao ler sacola:", e);
        cart = [];
    }
    updateCartUI();
}

function saveCart() {
    try {
        localStorage.setItem('nana_cart', JSON.stringify(cart));
    } catch (e) {
        console.error("Erro ao salvar sacola:", e);
    }
    updateCartUI();
}

function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    addToCart(product, 'M', 1);
    openCartDrawer();
}

function addToCart(product, size, qty) {
    const cartItemId = `${product.id}-${size}`;
    const existingItem = cart.find(item => item.id === cartItemId);
    
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({
            id: cartItemId,
            product: product,
            size: size,
            quantity: qty
        });
    }
    
    saveCart();
}

function updateCartQuantity(cartItemId, qty) {
    const item = cart.find(item => item.id === cartItemId);
    if (!item) return;
    
    item.quantity = Math.max(1, qty);
    saveCart();
}

function removeCartItem(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

function getCartSubtotal() {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

function getCartItemsCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartUI() {
    const itemsCount = getCartItemsCount();
    
    if (DOM.cartBadge) {
        DOM.cartBadge.textContent = itemsCount;
        DOM.cartBadge.style.display = itemsCount > 0 ? 'flex' : 'none';
    }
    
    if (DOM.cartBadgeHeader) {
        DOM.cartBadgeHeader.textContent = `(${itemsCount})`;
    }
    
    if (!DOM.cartItemsList) return;
    
    if (cart.length === 0) {
        DOM.cartItemsList.innerHTML = `
            <div class="cart-empty-state">
                <svg viewBox="0 0 24 24">
                    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.21 1.79 4 4 4s4-1.79 4-4h-2c0 1.66-1.34 3-3 3z"/>
                </svg>
                <h3 style="font-size: 1rem; font-weight: 700; color: var(--primary-dark); margin-bottom: 6px;">Sua sacola está vazia</h3>
                <p>Escolha seus produtos favoritos e envie seu pedido pelo WhatsApp.</p>
                <button class="btn-shop-now" onclick="closeCartDrawer(); scrollToProducts()" style="margin-top: 15px;">Ver produtos</button>
            </div>
        `;
        DOM.cartSubtotal.textContent = formatCurrency(0);
        DOM.cartTotal.textContent = formatCurrency(0);
        return;
    }
    
    DOM.cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img class="cart-item-img" src="${getProductImageSrc(item.product.imageUrl)}" alt="${item.product.name}" onerror="this.src='logo.jpg'">
            <div class="cart-item-details">
                <div class="cart-item-header">
                    <h4 class="cart-item-title">${item.product.name}</h4>
                    <button class="btn-remove-item" onclick="removeCartItem('${item.id}')" title="Remover item">
                        <svg viewBox="0 0 24 24">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                    </button>
                </div>
                <div class="cart-item-meta">Tamanho: ${item.size}</div>
                <div class="cart-item-footer">
                    <div class="quantity-control">
                        <button onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span class="quantity-val">${item.quantity}</span>
                        <button onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                    <span class="cart-item-price">${formatCurrency(item.product.price * item.quantity)}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    const subtotal = getCartSubtotal();
    DOM.cartSubtotal.textContent = formatCurrency(subtotal);
    DOM.cartTotal.textContent = formatCurrency(subtotal);
}

// --- Gaveta de Compras ---
function openCartDrawer() {
    DOM.cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    DOM.cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

// --- Detalhes do Produto Modal (Revisto com estilo clean) ---
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProductInModal = product;
    
    const availableSizes = product.sizes && Array.isArray(product.sizes) ? product.sizes : (parseSizesFromDescription(product.description) || ['P', 'M', 'G', 'GG']);
    selectedSize = availableSizes.length > 0 ? availableSizes[0] : null;
    const isOutOfStock = availableSizes.length === 0;
    
    const modalContent = document.getElementById('product-detail-modal-body');
    if (!modalContent) return;
    
    let related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    if (related.length === 0) {
        related = products.filter(p => p.id !== product.id).slice(0, 4);
    }
    
    // Garantir lista de imagens (no máximo 5)
    const productImages = (product.images && product.images.length > 0 ? product.images : [product.imageUrl]).slice(0, 5);

    modalContent.innerHTML = `
        <div class="product-detail-layout" style="position: relative;">
            <div class="product-detail-img-area">
                <div class="main-image-container" id="modal-main-img-container" style="position: relative; border: 1px solid var(--border-color); border-radius: var(--border-radius-md); overflow: hidden; background-color: white; aspect-ratio: 4/5; display: flex; align-items: center; justify-content: center;">
                    <img id="modal-main-img" src="${getProductImageSrc(product.imageUrl)}" alt="${product.name}" onerror="this.src='logo.jpg'" style="width: 100%; height: 100%; object-fit: cover;">
                    <div id="zoom-lens" style="display: none; position: absolute; border: 2px solid var(--rose-dark, #ab8f8e); background-color: rgba(255, 255, 255, 0.25); pointer-events: none; width: 120px; height: 150px; box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.08); z-index: 5;"></div>
                </div>
            </div>
            
            <div class="product-detail-info">
                <span class="product-detail-category">${product.categoryName}</span>
                <h3 class="product-detail-title">${product.name}</h3>
                <div class="product-detail-price">${formatCurrency(product.price)}</div>
                
                <h4 class="product-detail-desc-title">Descrição</h4>
                <p class="product-detail-desc">${product.description || "Peça selecionada pela Nana Moda Íntima para quem busca conforto, qualidade e ótimo custo-benefício. Consulte disponibilidade de tamanhos e cores pelo WhatsApp."}</p>
                
                <div class="size-selector-label" style="${isOutOfStock ? 'color: #dc3545; font-weight: 700;' : ''}">${isOutOfStock ? '⚠️ Produto indisponível (Sem estoque)' : 'Selecione o Tamanho'}</div>
                ${isOutOfStock ? '' : `
                <div class="size-options">
                    ${availableSizes.map(size => `
                        <button class="size-btn ${selectedSize === size ? 'selected' : ''}" onclick="selectSize('${size}', this)">${size}</button>
                    `).join('')}
                </div>
                `}
                
                ${isOutOfStock ? `
                <div class="qty-and-cart-row" style="margin-top: 20px;">
                    <button class="btn-add-to-cart-large" disabled style="background-color: var(--text-muted); cursor: not-allowed; opacity: 0.65; width: 100%; justify-content: center; margin: 0;">
                        Sem estoque
                    </button>
                </div>
                ` : `
                <div class="qty-label">Quantidade</div>
                <div class="qty-and-cart-row">
                    <div class="qty-spinner">
                        <button onclick="decrementModalQty()">-</button>
                        <input type="number" id="modal-qty-input" value="1" min="1">
                        <button onclick="incrementModalQty()">+</button>
                    </div>
                    <button class="btn-add-to-cart-large" onclick="addModalProductToCart()">
                        <svg viewBox="0 0 24 24">
                            <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.21 1.79 4 4 4s4-1.79 4-4h-2c0 1.66-1.34 3-3 3z"/>
                        </svg>
                        Adicionar à sacola
                    </button>
                </div>
                `}
            </div>
            <div id="zoom-result" class="zoom-result-box"></div>
        </div>
        
        ${productImages.length > 1 ? `
            <div class="product-images-gallery-section" style="margin-top: 35px; border-top: 1px solid var(--border-color); padding-top: 25px;">
                <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--primary-dark); margin-bottom: 15px; text-transform: uppercase; letter-spacing: 0.5px;">Outras fotos cadastradas</h4>
                <div class="product-gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 15px;">
                    ${productImages.map((img, idx) => `
                        <div class="gallery-photo-card ${idx === 0 ? 'active' : ''}" onclick="changeModalMainImage('${img}', this)">
                            <img src="${getProductImageSrc(img)}" alt="Foto ${idx + 1}" onerror="this.src='logo.jpg'" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    DOM.productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Inicializar o efeito de zoom na imagem
    setTimeout(initImageZoom, 100);
}

function closeProductModal() {
    DOM.productModal.classList.remove('open');
    currentProductInModal = null;
    document.body.style.overflow = '';
}

function selectSize(size, element) {
    selectedSize = size;
    const buttons = document.querySelectorAll('.size-options .size-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
}

function incrementModalQty() {
    const input = document.getElementById('modal-qty-input');
    if (input) input.value = parseInt(input.value) + 1;
}

function decrementModalQty() {
    const input = document.getElementById('modal-qty-input');
    if (input && parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
}

function addModalProductToCart() {
    if (!currentProductInModal || !selectedSize) return;
    
    const qtyInput = document.getElementById('modal-qty-input');
    const qty = qtyInput ? parseInt(qtyInput.value) : 1;
    
    addToCart(currentProductInModal, selectedSize, qty);
    closeProductModal();
    openCartDrawer();
}

// --- Checkout & WhatsApp Integration ---
function openCheckoutModal() {
    if (cart.length === 0) return;
    closeCartDrawer();
    DOM.checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    DOM.checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
}

function submitCheckout(event) {
    event.preventDefault();
    
    const nome = document.getElementById('checkout-name').value;
    const fone = document.getElementById('checkout-phone').value;
    const rua = document.getElementById('checkout-street').value;
    const numero = document.getElementById('checkout-number').value;
    const bairro = document.getElementById('checkout-neighborhood').value;
    const cidade = document.getElementById('checkout-city').value;
    const pagamento = document.getElementById('checkout-payment').value;
    
    if (!nome || !fone || !rua || !numero || !bairro || !cidade || !pagamento) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    
    let message = `*NOVO PEDIDO - NANA MODA ÍNTIMA*\n`;
    message += `-------------------------------------------\n`;
    message += `*Cliente:* ${nome}\n`;
    message += `*WhatsApp:* ${fone}\n`;
    message += `*Endereço:* ${rua}, Nº ${numero} - ${bairro}, ${cidade}\n`;
    message += `*Pagamento:* ${pagamento}\n`;
    message += `-------------------------------------------\n`;
    message += `*ITENS DA SACOLA:*\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.product.name}\n`;
        message += `   └ Tam: *${item.size}* | Qtd: *${item.quantity}* | Preço: ${formatCurrency(item.product.price * item.quantity)}\n`;
    });
    
    message += `-------------------------------------------\n`;
    message += `*Subtotal:* ${formatCurrency(getCartSubtotal())}\n`;
    message += `*Total Geral:* ${formatCurrency(getCartSubtotal())}\n\n`;
    message += `_Obrigado pelo pedido! Aguardo a confirmação dos dados para prosseguir com a entrega._`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5522988524928&text=${encodedMessage}`;
    
    clearCart();
    closeCheckoutModal();
    
    window.open(whatsappUrl, '_blank');
}



// --- Filtros & Navegação ---
function setCategory(categorySlug, event) {
    activeCategory = categorySlug;
    
    DOM.filterItems.forEach(item => {
        const input = item.querySelector('input');
        if (input) {
            input.checked = (input.value === categorySlug);
        }
        item.classList.remove('active');
    });
    
    const activeFilterItem = document.querySelector(`.filter-item input[value="${categorySlug}"]`);
    if (activeFilterItem) {
        activeFilterItem.checked = true;
        activeFilterItem.closest('.filter-item').classList.add('active');
    }
    
    DOM.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === categorySlug) {
            link.classList.add('active');
        }
    });
    
    renderProductsGrid();
}

function initFilters() {
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = link.getAttribute('data-category');
            setCategory(cat, e);
            scrollToProducts();
        });
    });
    
    DOM.filterItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const radio = item.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                setCategory(radio.value, e);
            }
        });
    });
    
    if (DOM.priceSlider) {
        DOM.priceSlider.addEventListener('input', (e) => {
            maxPriceFilter = parseFloat(e.target.value);
            DOM.priceValMax.value = maxPriceFilter;
            renderProductsGrid();
        });
    }
    
    if (DOM.priceValMin) {
        DOM.priceValMin.addEventListener('change', (e) => {
            minPriceFilter = parseFloat(e.target.value) || 0;
            renderProductsGrid();
        });
    }
    
    if (DOM.priceValMax) {
        DOM.priceValMax.addEventListener('change', (e) => {
            maxPriceFilter = parseFloat(e.target.value) || 60;
            if (DOM.priceSlider) DOM.priceSlider.value = maxPriceFilter;
            renderProductsGrid();
        });
    }
    
    if (DOM.searchInput) {
        DOM.searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderProductsGrid();
        });
    }
    
    if (DOM.sortSelect) {
        DOM.sortSelect.addEventListener('change', (e) => {
            sortBy = e.target.value;
            renderProductsGrid();
        });
    }
}

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    ImageStore.init().then(() => {
        return ImageStore.getAll();
    }).then((storedImages) => {
        storedImages.forEach(img => {
            localImagesMap[img.id] = img.dataUrl;
        });
        
        loadProducts();
        loadBanners();
        initSlider();
        loadCart();
        initFilters();
        renderProductsGrid();
    }).catch(err => {
        console.error("Falha ao inicializar banco de imagens:", err);
        loadProducts();
        loadBanners();
        initSlider();
        loadCart();
        initFilters();
        renderProductsGrid();
    });
    
    if (DOM.checkoutForm) {
        DOM.checkoutForm.addEventListener('submit', submitCheckout);
    }
});

// --- Controle do Modal Como Funciona ---
function openHowItWorksModal(event) {
    if (event) event.preventDefault();
    const modal = DOM.howItWorksModal;
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeHowItWorksModal() {
    const modal = DOM.howItWorksModal;
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

window.openHowItWorksModal = openHowItWorksModal;
window.closeHowItWorksModal = closeHowItWorksModal;
