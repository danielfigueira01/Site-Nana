/* 
========================================================================
   APLICAÇÃO ADMINISTRATIVA (ADMIN JS) - NANA MODA ÍNTIMA
========================================================================
*/

// --- Banco de Dados Local dos Produtos para Reset de Fábrica ---
const FACTORY_PRODUCTS_DATA = [
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

// --- Configurações de Estado Admin ---
let products = [];
let adminSortColumn = 'name'; 
let adminSortDirection = 'asc';
let users = [];
let currentUser = null;
let tempImages = []; 
const localImagesMap = {}; 

// --- Configurações de Banners ---
const BANNERS_DATA = [
    {
        id: 1,
        title: "Nana Moda Íntima",
        text: "Conforto, beleza e elegância para todos os momentos. Escolha suas peças favoritas e finalize seu pedido pelo WhatsApp de forma simples, rápida e segura.",
        image: "banner_generico.webp"
    }
];
let banners = [];
let tempBannerImage = '';

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
    },
    save(id, dataUrl) {
        return new Promise((resolve) => {
            if (!this.db) return resolve();
            const transaction = this.db.transaction('images', 'readwrite');
            const store = transaction.objectStore('images');
            const request = store.put({ id, dataUrl });
            request.onsuccess = () => resolve();
            request.onerror = () => resolve();
        });
    },
    delete(id) {
        return new Promise((resolve) => {
            if (!this.db) return resolve();
            const transaction = this.db.transaction('images', 'readwrite');
            const store = transaction.objectStore('images');
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = () => resolve();
        });
    }
};

// --- Seletores DOM Admin ---
const DOMAdmin = {
    get productsTableBody() { return document.getElementById('admin-products-table-body'); },
    get adminSearchInput() { return document.getElementById('admin-search-input'); },
    get productForm() { return document.getElementById('admin-product-form'); },
    get productIdInput() { return document.getElementById('admin-product-id'); },
    get nameInput() { return document.getElementById('admin-name'); },
    get categorySelect() { return document.getElementById('admin-category'); },
    get priceInput() { return document.getElementById('admin-price'); },
    get descriptionInput() { return document.getElementById('admin-description'); },
    get formSubmitBtn() { return document.getElementById('admin-form-submit-btn'); },
    get imagePreviewsContainer() { return document.getElementById('image-previews-container'); },
    get imageUrlAddInput() { return document.getElementById('admin-image-url-add'); },
    get highlightCheckbox() { return document.getElementById('admin-highlight'); },
    get activeCheckbox() { return document.getElementById('admin-active'); },
    get sizeCheckboxes() { return document.querySelectorAll('.admin-size-checkbox'); },
    get customSizesInput() { return document.getElementById('admin-custom-sizes'); },
    
    // Banners
    get bannerForm() { return document.getElementById('admin-banner-form'); },
    get bannerFileInput() { return document.getElementById('admin-banner-file'); },
    get bannerUrlAddInput() { return document.getElementById('admin-banner-url-add'); },
    get bannerTitleInput() { return document.getElementById('admin-banner-title'); },
    get bannerTextInput() { return document.getElementById('admin-banner-text'); },
    get bannersTableBody() { return document.getElementById('admin-banners-table-body'); },
    get bannersCountBadge() { return document.getElementById('admin-banners-count-badge'); },
    get bannerFormContainer() { return document.getElementById('admin-banner-form-container'); },
    get bannerLimitMsg() { return document.getElementById('admin-banner-limit-msg'); },
    get bannerImagePreviewBox() { return document.getElementById('banner-image-preview-box'); },
    get bannerImagePreviewImg() { return document.getElementById('banner-image-preview-img'); },
    
    // Login & Setup
    get loginScreen() { return document.getElementById('admin-login-screen'); },
    get dashboardLayout() { return document.getElementById('admin-dashboard-layout'); },
    get loginForm() { return document.getElementById('admin-login-form'); },
    get loginUsername() { return document.getElementById('login-username'); },
    get loginPassword() { return document.getElementById('login-password'); },
    get loginErrorMsg() { return document.getElementById('login-error-msg'); },
    get loginWelcomeMsg() { return document.getElementById('login-welcome-msg'); },
    get adminSetupMsg() { return document.getElementById('admin-setup-msg'); },
    get btnLoginSubmit() { return document.getElementById('btn-login-submit'); },
    get btnLogout() { return document.getElementById('btn-logout'); },
    
    // Aba de Usuários
    get usersTableBody() { return document.getElementById('admin-users-table-body'); },
    get tabBtnUsers() { return document.getElementById('tab-btn-users'); },
    get userModal() { return document.getElementById('admin-user-modal'); },
    get userForm() { return document.getElementById('admin-user-form'); },
    get userPasswordGroup() { return document.getElementById('user-password-group'); },
    get userPasswordInput() { return document.getElementById('user-password'); },
    
    // Alteração de Senha (Configurações)
    get changePasswordForm() { return document.getElementById('change-password-form'); }
};

// --- Resolver Fonte de Imagem (Cache ou URL) ---
function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function escapeAttribute(value) {
    return escapeHtml(value);
}

function getProductImageSrc(url) {
    if (url && url.startsWith('local-img-')) {
        return localImagesMap[url] || 'logo.jpg';
    }
    return url || 'logo.jpg';
}

// --- Formatação de Moeda ---
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

// --- Carregar e Salvar Usuários ---
function loadUsers() {
    try {
        const storedUsers = localStorage.getItem('nana_admin_users');
        if (storedUsers) {
            users = JSON.parse(storedUsers);
            if (!Array.isArray(users)) users = [];
            const hasLegacyDefault = users.length === 1 && users[0]?.email === 'admin' && users[0]?.password === 'nana';
            if (hasLegacyDefault) {
                users = [];
                saveUsers();
            }
        } else {
            users = [];
        }
    } catch (e) {
        console.error("Erro ao carregar usuários:", e);
        users = [];
    }
}

function saveUsers() {
    try {
        localStorage.setItem('nana_admin_users', JSON.stringify(users));
    } catch (e) {
        console.error("Erro ao salvar usuários:", e);
    }
}

// --- Handlers de Autenticação ---
function checkAuth() {
    loadUsers();
    
    // Recupera sessão ativa
    const activeSession = sessionStorage.getItem('nana_admin_user_session');
    if (activeSession) {
        try {
            const parsedSession = JSON.parse(activeSession);
            currentUser = users.find(user => user.id === parsedSession.id) || null;
            if (!currentUser) sessionStorage.removeItem('nana_admin_user_session');
        } catch (_) {
            currentUser = null;
            sessionStorage.removeItem('nana_admin_user_session');
        }
    } else {
        currentUser = null;
    }
    
    if (currentUser) {
        if (DOMAdmin.loginScreen) DOMAdmin.loginScreen.style.display = 'none';
        if (DOMAdmin.dashboardLayout) DOMAdmin.dashboardLayout.style.display = 'block';
        
        // Exibe ou oculta a aba de usuários baseando-se no papel (role)
        if (currentUser.role === 'admin') {
            if (DOMAdmin.tabBtnUsers) DOMAdmin.tabBtnUsers.style.display = 'block';
        } else {
            if (DOMAdmin.tabBtnUsers) DOMAdmin.tabBtnUsers.style.display = 'none';
        }
        
        // Exibe/oculta a área de troca de senha se for login por credenciais locais
        const pwdForm = document.getElementById('change-password-form');
        if (pwdForm) {
            pwdForm.style.display = currentUser.type === 'credentials' ? 'block' : 'none';
            const pwdTitle = pwdForm.previousElementSibling;
            const pwdDesc = pwdTitle ? pwdTitle.previousElementSibling : null;
            if (pwdTitle) pwdTitle.style.display = currentUser.type === 'credentials' ? 'block' : 'none';
            if (pwdDesc) pwdDesc.style.display = currentUser.type === 'credentials' ? 'block' : 'none';
        }
        
        loadProducts();
        renderAdminProductsTable();
    } else {
        if (DOMAdmin.loginScreen) DOMAdmin.loginScreen.style.display = 'flex';
        if (DOMAdmin.dashboardLayout) DOMAdmin.dashboardLayout.style.display = 'none';
        
        const needsSetup = users.length === 0;
        if (DOMAdmin.adminSetupMsg) DOMAdmin.adminSetupMsg.style.display = needsSetup ? 'block' : 'none';
        if (DOMAdmin.loginWelcomeMsg) DOMAdmin.loginWelcomeMsg.textContent = needsSetup ? "Configure o editor neste navegador." : "Faça login para editar o catálogo local.";
        if (DOMAdmin.btnLoginSubmit) DOMAdmin.btnLoginSubmit.textContent = needsSetup ? "Criar administrador local" : "Entrar no editor local";
    }
}

// Login por Usuário/Senha locais
function handleCredentialsLogin(e) {
    e.preventDefault();
    let usernameInput = DOMAdmin.loginUsername.value.trim().toLowerCase();
    const pwdInput = DOMAdmin.loginPassword.value;
    
    if (usernameInput === 'adm') {
        usernameInput = 'admin';
    }
    
    loadUsers();

    if (users.length === 0) {
        if (usernameInput.length < 3) {
            showLoginError("Use um nome de usuário com pelo menos 3 caracteres.");
            return;
        }
        if (pwdInput.length < 8) {
            showLoginError("Use uma senha com pelo menos 8 caracteres.");
            return;
        }

        currentUser = {
            id: `u-${Date.now()}`,
            type: 'credentials',
            name: usernameInput.toUpperCase(),
            email: usernameInput,
            role: 'admin',
            password: pwdInput
        };
        users = [currentUser];
        saveUsers();
        sessionStorage.setItem('nana_admin_user_session', JSON.stringify(currentUser));
        DOMAdmin.loginPassword.value = '';
        checkAuth();
        return;
    }
    
    // Procura usuário credentials
    const found = users.find(u => u.email === usernameInput && u.type === 'credentials');
    if (found && found.password === pwdInput) {
        currentUser = found;
        sessionStorage.setItem('nana_admin_user_session', JSON.stringify(currentUser));
        if (DOMAdmin.loginErrorMsg) DOMAdmin.loginErrorMsg.style.display = 'none';
        DOMAdmin.loginPassword.value = '';
        checkAuth();
    } else {
        showLoginError("Acesso negado: Usuário ou senha incorretos.");
    }
}

function handleLogout() {
    sessionStorage.removeItem('nana_admin_user_session');
    currentUser = null;
    checkAuth();
}

function showLoginError(msg) {
    if (DOMAdmin.loginErrorMsg) {
        DOMAdmin.loginErrorMsg.textContent = msg;
        DOMAdmin.loginErrorMsg.style.display = 'block';
    }
}

// Alteração de Senha (apenas para tipo credentials)
function handlePasswordChange(e) {
    e.preventDefault();
    if (!currentUser || currentUser.type !== 'credentials') return;
    
    const current = document.getElementById('pwd-current').value;
    const newPwd = document.getElementById('pwd-new').value;
    const confirmPwd = document.getElementById('pwd-confirm').value;
    
    loadUsers();
    const userInDb = users.find(u => u.id === currentUser.id);
    
    if (!userInDb || userInDb.password !== current) {
        alert("Senha atual incorreta.");
        return;
    }
    
    if (newPwd.length < 8) {
        alert("A nova senha deve ter pelo menos 8 caracteres.");
        return;
    }
    
    if (newPwd !== confirmPwd) {
        alert("A nova senha e a confirmação não coincidem.");
        return;
    }
    
    userInDb.password = newPwd;
    saveUsers();
    
    // Atualiza sessão ativa
    currentUser.password = newPwd;
    sessionStorage.setItem('nana_admin_user_session', JSON.stringify(currentUser));
    
    DOMAdmin.changePasswordForm.reset();
    alert("Senha alterada com sucesso!");
}

// --- CRUD de Usuários Administrativos ---
function renderAdminUsersTable() {
    if (!DOMAdmin.usersTableBody) return;
    
    DOMAdmin.usersTableBody.innerHTML = users.map(u => {
        const typeBadge = u.type === 'google' 
            ? `<span class="user-type-badge google">Google</span>` 
            : `<span class="user-type-badge credentials">Local</span>`;
            
        const roleBadge = u.role === 'admin'
            ? `<span class="user-role-badge admin">Admin</span>`
            : `<span class="user-role-badge collaborator">Colaborador</span>`;
            
        const isSelf = currentUser && u.id === currentUser.id;
        
        return `
            <tr>
                <td style="font-weight: 600; font-size: 0.85rem; color: var(--primary-dark);">${escapeHtml(u.name)}</td>
                <td style="font-size: 0.85rem; color: var(--text-color);">${escapeHtml(u.email)}</td>
                <td>${typeBadge}</td>
                <td>${roleBadge}</td>
                <td>
                    ${isSelf ? `
                        <span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">Você</span>
                    ` : `
                        <button type="button" class="btn-remove-item" data-user-id="${escapeAttribute(u.id)}" onclick="deleteUser(this.dataset.userId)" style="padding: 4px; border: 1px solid var(--border-color); border-radius: 4px; display: flex; align-items: center; justify-content: center; background: none; cursor: pointer; height: 28px; width: 28px;" title="Remover Usuário">
                            <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: var(--text-muted);"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    `}
                </td>
            </tr>
        `;
    }).join('');
}

function openAddUserModal() {
    if (DOMAdmin.userModal) {
        DOMAdmin.userForm.reset();
        toggleUserFormFields('credentials');
        DOMAdmin.userModal.classList.add('open');
    }
}

function closeAddUserModal() {
    if (DOMAdmin.userModal) {
        DOMAdmin.userModal.classList.remove('open');
    }
}

function toggleUserFormFields(type) {
    const identifierLabel = document.getElementById('user-identifier-label');
    const identifierInput = document.getElementById('user-identifier');
    
    if (type === 'google') {
        if (identifierLabel) identifierLabel.textContent = "E-mail do Google *";
        if (identifierInput) identifierInput.placeholder = "Ex: costamariana@gmail.com";
        if (DOMAdmin.userPasswordGroup) DOMAdmin.userPasswordGroup.style.display = 'none';
        if (DOMAdmin.userPasswordInput) DOMAdmin.userPasswordInput.removeAttribute('required');
    } else {
        if (identifierLabel) identifierLabel.textContent = "Nome de Usuário / E-mail *";
        if (identifierInput) identifierInput.placeholder = "Ex: mariana ou mari@hotmail.com";
        if (DOMAdmin.userPasswordGroup) DOMAdmin.userPasswordGroup.style.display = 'block';
        if (DOMAdmin.userPasswordInput) DOMAdmin.userPasswordInput.setAttribute('required', 'true');
    }
}

function handleAddUserSubmit(e) {
    e.preventDefault();
    
    const nameVal = document.getElementById('user-name').value.trim().toUpperCase();
    const typeVal = document.getElementById('user-type').value;
    const identifierVal = document.getElementById('user-identifier').value.trim().toLowerCase();
    const passwordVal = document.getElementById('user-password').value;
    const roleVal = document.getElementById('user-role').value;
    
    if (!nameVal || !identifierVal) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    if (passwordVal.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }
    
    loadUsers();
    
    // Evita duplicados de tipo idêntico
    const exists = users.some(u => u.email === identifierVal && u.type === typeVal);
    if (exists) {
        alert("Este e-mail/usuário já está cadastrado para este tipo de login.");
        return;
    }
    
    const newUser = {
        id: `u-${Date.now()}`,
        type: typeVal,
        name: nameVal,
        email: identifierVal,
        role: roleVal,
        password: typeVal === 'credentials' ? passwordVal : ""
    };
    
    users.push(newUser);
    saveUsers();
    
    closeAddUserModal();
    renderAdminUsersTable();
    alert("Usuário adicionado com sucesso!");
}

function deleteUser(userId) {
    if (currentUser && userId === currentUser.id) {
        alert("Você não pode excluir o seu próprio usuário logado.");
        return;
    }
    
    if (!confirm("Tem certeza que deseja remover o acesso deste usuário?")) return;
    
    loadUsers();
    users = users.filter(u => u.id !== userId);
    saveUsers();
    
    renderAdminUsersTable();
}

// --- Formatar Nome do Produto ---
function formatProductName(name) {
    if (!name || typeof name !== 'string') return name;
    name = name.trim();

    let refNum = null;
    let cleanName = name;

    // 1. Procurar por referências como "ref. 1234", "ref 1234", "r 1234" em qualquer parte do nome
    const refRegex = /\b(?:ref|r)[\s.:#]*(\d+)\b/i;
    const match = name.match(refRegex);

    if (match) {
        refNum = match[1];
        const refIndex = match.index;
        const refLength = match[0].length;
        
        let before = name.substring(0, refIndex);
        let after = name.substring(refIndex + refLength);

        // Limpar hifens, espaços ou pontuações adjacentes
        before = before.replace(/\s*[-\s:#/]+\s*$/, ' ').trim();
        after = after.replace(/^\s*[-\s:#/]+\s*/, ' ').trim();

        cleanName = (before + ' ' + after).trim();
    } else {
        // 2. Caso não tenha palavra "ref", busca número de 3 ou 4 dígitos no início ou no fim do nome
        const numRegexStart = /^\b(\d{3,4})\b/;
        const numRegexEnd = /\b(\d{3,4})\b$/;

        let numMatch = name.match(numRegexStart);
        if (numMatch) {
            refNum = numMatch[1];
            cleanName = name.replace(numRegexStart, '').trim();
        } else {
            numMatch = name.match(numRegexEnd);
            if (numMatch) {
                refNum = numMatch[1];
                cleanName = name.replace(numRegexEnd, '').trim();
            }
        }

        // Limpar separadores no início ou fim
        cleanName = cleanName.replace(/^[-\s:#/]+/, '').replace(/[-\s:#/]+$/, '').trim();
    }

    // Capitalizar a primeira letra de todas as palavras
    let formattedRest = '';
    if (cleanName) {
        formattedRest = cleanName.toLowerCase().replace(/(?:^|[^a-zÀ-ÿ0-9])([a-zÀ-ÿ0-9])/gi, function(match) {
            return match.toUpperCase();
        });
    }

    if (refNum) {
        return `Ref. ${refNum}${formattedRest ? ' - ' + formattedRest : ''}`;
    } else {
        return formattedRest;
    }
}

// --- Ordenação da Tabela de Produtos ---
function toggleAdminSort(column) {
    if (adminSortColumn === column) {
        adminSortDirection = adminSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        adminSortColumn = column;
        adminSortDirection = 'asc';
    }
    renderAdminProductsTable();
}
window.toggleAdminSort = toggleAdminSort;

function updateSortIcons() {
    const columns = ['name', 'category', 'price'];
    columns.forEach(col => {
        const el = document.getElementById(`sort-icon-${col}`);
        if (el) {
            if (adminSortColumn === col) {
                el.innerHTML = adminSortDirection === 'asc' ? '▲' : '▼';
                el.style.color = 'var(--primary-color)';
            } else {
                el.innerHTML = '↕';
                el.style.color = '#ccc';
            }
        }
    });
}

// --- Carregar Produtos do LocalStorage ---
function loadProducts() {
    try {
        const storedProducts = localStorage.getItem('nana_products_v9');
        if (storedProducts) {
            products = JSON.parse(storedProducts);
            let updated = false;
            products.forEach(p => {
                // Se o produto no localStorage tiver apenas imagens da fábrica e a quantidade for menor do que a da fábrica, restaura
                const factoryProd = FACTORY_PRODUCTS_DATA.find(fp => fp.id === p.id || (fp.slug && fp.slug === p.slug));
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

                // Formatar nome do produto para manter o padrão desejado
                const formattedName = formatProductName(p.name);
                if (p.name !== formattedName) {
                    p.name = formattedName;
                    updated = true;
                }
            });
            if (updated) {
                localStorage.setItem('nana_products_v9', JSON.stringify(products));
            }
        } else {
            products = FACTORY_PRODUCTS_DATA.map(p => {
                const copy = { ...p };
                if (copy.images && Array.isArray(copy.images)) {
                    copy.images = copy.images.slice(0, 5);
                } else {
                    copy.images = copy.imageUrl ? [copy.imageUrl] : [];
                }
                if (copy.sizes === undefined || copy.sizes === null) {
                    copy.sizes = parseSizesFromDescription(copy.description) || ['P', 'M', 'G', 'GG'];
                }
                if (copy.category === 'infantil' && (!copy.sizes.includes('PP') && !copy.sizes.includes('pp'))) {
                    copy.sizes.unshift('PP');
                }
                copy.name = formatProductName(copy.name);
                return copy;
            });
            localStorage.setItem('nana_products_v9', JSON.stringify(products));
        }
    } catch (e) {
        console.error("Erro ao ler produtos:", e);
        products = FACTORY_PRODUCTS_DATA.map(p => {
            const copy = { ...p };
            if (copy.images && Array.isArray(copy.images)) {
                copy.images = copy.images.slice(0, 5);
            } else {
                copy.images = copy.imageUrl ? [copy.imageUrl] : [];
            }
            if (copy.sizes === undefined || copy.sizes === null) {
                copy.sizes = parseSizesFromDescription(copy.description) || ['P', 'M', 'G', 'GG'];
            }
            if (copy.category === 'infantil' && (!copy.sizes.includes('PP') && !copy.sizes.includes('pp'))) {
                copy.sizes.unshift('PP');
            }
            copy.name = formatProductName(copy.name);
            return copy;
        });
    }
}

// --- Renderizar Tabela de Produtos ---
function renderAdminProductsTable() {
    if (!DOMAdmin.productsTableBody) return;
    
    let filtered = [...products];
    const searchVal = DOMAdmin.adminSearchInput ? DOMAdmin.adminSearchInput.value.trim().toLowerCase() : '';
    
    if (searchVal) {
        const cleanQuery = searchVal.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        filtered = filtered.filter(prod => {
            const cleanName = (prod.name || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const cleanDesc = (prod.description || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return cleanName.includes(cleanQuery) || cleanDesc.includes(cleanQuery);
        });
    }

    // Lógica de Ordenação
    if (adminSortColumn) {
        filtered.sort((a, b) => {
            let valA, valB;
            if (adminSortColumn === 'name') {
                valA = (a.name || '').toLowerCase();
                valB = (b.name || '').toLowerCase();
                return adminSortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
            } else if (adminSortColumn === 'category') {
                valA = (a.categoryName || '').toLowerCase();
                valB = (b.categoryName || '').toLowerCase();
                return adminSortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
            } else if (adminSortColumn === 'price') {
                valA = Number(a.price) || 0;
                valB = Number(b.price) || 0;
                return adminSortDirection === 'asc' ? valA - valB : valB - valA;
            }
            return 0;
        });
    }
    
    if (filtered.length === 0) {
        DOMAdmin.productsTableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">
                    ${searchVal ? 'Nenhum produto encontrado para a busca realizada.' : 'Nenhum produto cadastrado no catálogo. Vá na aba "Cadastrar Novo Produto" para iniciar.'}
                </td>
            </tr>
        `;
        updateSortIcons();
        return;
    }
    
    DOMAdmin.productsTableBody.innerHTML = filtered.map(prod => `
        <tr>
            <td><img class="admin-table-img" src="${escapeAttribute(getProductImageSrc(prod.imageUrl))}" alt="${escapeAttribute(prod.name)}" onerror="this.src='logo.jpg'"></td>
            <td style="font-weight: 600; font-size: 0.85rem; color: var(--primary-dark);">${escapeHtml(prod.name)}</td>
            <td><span class="product-category" style="font-size: 0.7rem;">${escapeHtml(prod.categoryName)}</span></td>
            <td style="font-weight: 700; color: var(--primary-dark);">${formatCurrency(prod.price)}</td>
            <td>
                <div style="display: flex; gap: 8px;">
                    <button type="button" class="btn-keep-shopping" onclick="startEditProduct(${prod.id})" style="padding: 6px 12px; font-size: 0.75rem; background-color: var(--accent-color); color: #ffffff; border: none; min-width: auto; height: auto; margin: 0;">Editar</button>
                    <button type="button" class="btn-remove-item" onclick="deleteProduct(${prod.id})" style="padding: 4px; border: 1px solid var(--border-color); border-radius: 4px; display: flex; align-items: center; justify-content: center; background: none; cursor: pointer; height: 28px; width: 28px;" title="Excluir Produto">
                        <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: var(--text-muted);"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');

    updateSortIcons();
}

// --- Iniciar Edição de Produto ---
function startEditProduct(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;
    
    DOMAdmin.productIdInput.value = prod.id;
    DOMAdmin.nameInput.value = prod.name;
    DOMAdmin.categorySelect.value = prod.category;
    DOMAdmin.priceInput.value = prod.price;
    DOMAdmin.descriptionInput.value = prod.description || '';
    
    // Checkbox values
    if (DOMAdmin.highlightCheckbox) DOMAdmin.highlightCheckbox.checked = !!prod.highlight;
    if (DOMAdmin.activeCheckbox) DOMAdmin.activeCheckbox.checked = prod.active !== false;
    
    // Populate Sizes
    const standardList = ['PP', 'P', 'M', 'G', 'GG', 'EG', 'EGG', 'Único'];
    const prodSizes = prod.sizes || ['P', 'M', 'G', 'GG'];
    DOMAdmin.sizeCheckboxes.forEach(cb => {
        cb.checked = prodSizes.includes(cb.value);
    });
    const customList = prodSizes.filter(sz => !standardList.includes(sz));
    if (DOMAdmin.customSizesInput) {
        DOMAdmin.customSizesInput.value = customList.join(', ');
    }
    
    tempImages = (prod.images ? [...prod.images] : (prod.imageUrl ? [prod.imageUrl] : [])).slice(0, 5);
    renderImagePreviews();
    
    DOMAdmin.formSubmitBtn.textContent = "Salvar Alterações";
    switchAdminTab('form');
}

// --- Limpar Formulário ---
function resetAdminForm() {
    DOMAdmin.productIdInput.value = '';
    DOMAdmin.productForm.reset();
    if (DOMAdmin.highlightCheckbox) DOMAdmin.highlightCheckbox.checked = false;
    if (DOMAdmin.activeCheckbox) DOMAdmin.activeCheckbox.checked = true;
    
    // Reset Sizes Checkboxes
    DOMAdmin.sizeCheckboxes.forEach(cb => {
        cb.checked = ['P', 'M', 'G', 'GG'].includes(cb.value);
    });
    if (DOMAdmin.customSizesInput) {
        DOMAdmin.customSizesInput.value = '';
    }
    
    tempImages = [];
    renderImagePreviews();
    DOMAdmin.formSubmitBtn.textContent = "Salvar Produto";
}

// --- Alternar Abas no Painel ---
function switchAdminTab(tabName) {
    const buttons = document.querySelectorAll('.admin-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const contents = document.querySelectorAll('.admin-tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    const activeBtn = document.getElementById(`tab-btn-${tabName}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    const activeContent = document.getElementById(`admin-tab-${tabName}`);
    if (activeContent) activeContent.classList.add('active');
    
    if (tabName === 'users') {
        renderAdminUsersTable();
    } else if (tabName === 'banners') {
        renderAdminBanners();
    } else if (tabName === 'list') {
        renderAdminProductsTable();
    }
}

// --- Excluir Produto ---
function deleteProduct(productId) {
    if (!confirm("Tem certeza que deseja excluir este produto do catálogo?")) return;
    
    products = products.filter(p => p.id !== productId);
    localStorage.setItem('nana_products_v9', JSON.stringify(products));
    
    renderAdminProductsTable();
}

// --- Gerenciador de Galeria de Imagens do Formulário ---
function renderImagePreviews() {
    if (!DOMAdmin.imagePreviewsContainer) return;
    
    if (tempImages.length === 0) {
        DOMAdmin.imagePreviewsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-size: 0.8rem; height: 80px; width: 100%;">
                Nenhuma imagem adicionada. Insira ao menos uma foto.
            </div>
        `;
        return;
    }
    
    DOMAdmin.imagePreviewsContainer.innerHTML = tempImages.map((img, idx) => {
        const isFirst = idx === 0;
        const isLast = idx === tempImages.length - 1;
        
        return `
            <div class="image-preview-card">
                <img src="${escapeAttribute(getProductImageSrc(img))}" alt="Miniatura ${idx + 1}" onerror="this.src='logo.jpg'">
                <div class="image-preview-controls">
                    <button type="button" class="image-preview-btn" onclick="moveTempImage(${idx}, -1)" ${isFirst ? 'disabled style="opacity: 0.3; cursor: default;"' : ''} title="Mover para esquerda">
                        <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                    </button>
                    <button type="button" class="image-preview-btn delete-btn" onclick="deleteTempImage(${idx})" title="Excluir imagem">
                        <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </button>
                    <button type="button" class="image-preview-btn" onclick="moveTempImage(${idx}, 1)" ${isLast ? 'disabled style="opacity: 0.3; cursor: default;"' : ''} title="Mover para direita">
                        <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function addImageUrlFromInput() {
    const url = DOMAdmin.imageUrlAddInput.value.trim();
    if (!url) return;
    
    if (tempImages.length >= 5) {
        alert("Limite máximo de 5 imagens por produto atingido.");
        return;
    }
    
    tempImages.push(url);
    DOMAdmin.imageUrlAddInput.value = '';
    renderImagePreviews();
}

function handleImageUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    if (tempImages.length >= 5) {
        alert("Limite máximo de 5 imagens por produto atingido.");
        event.target.value = '';
        return;
    }
    
    const maxAllowed = 5 - tempImages.length;
    const filesToUpload = Array.from(files).slice(0, maxAllowed);
    if (files.length > maxAllowed) {
        alert(`Você só pode enviar mais ${maxAllowed} imagem(ns). Apenas as primeiras ${maxAllowed} foram consideradas.`);
    }
    
    const readPromises = filesToUpload.map(file => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const base64 = e.target.result;
                const localId = `local-img-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
                
                localImagesMap[localId] = base64;
                
                ImageStore.save(localId, base64).then(() => {
                    resolve(localId);
                });
            };
            reader.readAsDataURL(file);
        });
    });
    
    Promise.all(readPromises).then((ids) => {
        tempImages = tempImages.concat(ids);
        renderImagePreviews();
        event.target.value = ''; 
    });
}

function deleteTempImage(idx) {
    tempImages.splice(idx, 1);
    renderImagePreviews();
}

function moveTempImage(idx, direction) {
    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= tempImages.length) return;
    
    const temp = tempImages[idx];
    tempImages[idx] = tempImages[targetIdx];
    tempImages[targetIdx] = temp;
    
    renderImagePreviews();
}

// --- Lógica do Gerenciador de Banners ---
function loadBanners() {
    try {
        const stored = localStorage.getItem('nana_banners_v5') || localStorage.getItem('nana_banners_v4');
        if (stored) {
            banners = JSON.parse(stored);
            const isLegacyDefault = banners.length === 1 && banners[0]?.image === 'banner_generico.png';
            if (isLegacyDefault) banners[0].image = 'banner_generico.webp';
            localStorage.setItem('nana_banners_v5', JSON.stringify(banners));
        } else {
            banners = [...BANNERS_DATA];
            localStorage.setItem('nana_banners_v5', JSON.stringify(banners));
        }
    } catch(e) {
        console.error("Erro ao carregar banners:", e);
        banners = [...BANNERS_DATA];
    }
}

function renderAdminBanners() {
    if (!DOMAdmin.bannersTableBody) return;
    
    // Atualizar contador de banners
    const count = banners.length;
    if (DOMAdmin.bannersCountBadge) {
        DOMAdmin.bannersCountBadge.textContent = `Banners: ${count} / 4`;
    }
    
    // Tratar limite de 4 banners
    if (count >= 4) {
        if (DOMAdmin.bannerFormContainer) DOMAdmin.bannerFormContainer.style.display = 'none';
        if (DOMAdmin.bannerLimitMsg) DOMAdmin.bannerLimitMsg.style.display = 'block';
    } else {
        if (DOMAdmin.bannerFormContainer) DOMAdmin.bannerFormContainer.style.display = 'block';
        if (DOMAdmin.bannerLimitMsg) DOMAdmin.bannerLimitMsg.style.display = 'none';
    }
    
    // Renderizar tabela de banners
    if (banners.length === 0) {
        DOMAdmin.bannersTableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 20px;">Nenhum banner cadastrado.</td>
            </tr>
        `;
    } else {
        DOMAdmin.bannersTableBody.innerHTML = banners.map((banner, index) => `
            <tr>
                <td>
                    <img src="${escapeAttribute(getProductImageSrc(banner.image))}" alt="Banner Mini" style="width: 120px; height: 45px; object-fit: cover; border-radius: 4px; border: 1px solid var(--border-color); background: #eee;">
                </td>
                <td style="font-weight: 600; color: var(--primary-dark); max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${banner.title ? escapeHtml(banner.title) : '<span style="color: var(--text-muted); font-weight: normal; font-style: italic;">Sem título</span>'}
                </td>
                <td style="color: var(--text-muted); max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${banner.text ? escapeHtml(banner.text) : '<span style="color: var(--text-muted); font-style: italic;">Sem texto</span>'}
                </td>
                <td>
                    <button type="button" class="btn-preview-order" onclick="deleteBanner(${banner.id})" style="background-color: #dc3545; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.75rem;">Excluir</button>
                </td>
            </tr>
        `).join('');
    }
}

function handleBannerImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target.result;
        const localId = `local-img-banner-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
        
        localImagesMap[localId] = base64;
        
        ImageStore.save(localId, base64).then(() => {
            tempBannerImage = localId;
            showBannerPreview(localId);
            event.target.value = '';
        });
    };
    reader.readAsDataURL(file);
}

function addBannerUrlFromInput() {
    if (!DOMAdmin.bannerUrlAddInput) return;
    const url = DOMAdmin.bannerUrlAddInput.value.trim();
    if (!url) {
        alert("Por favor, digite ou cole uma URL válida.");
        return;
    }
    
    tempBannerImage = url;
    showBannerPreview(url);
    DOMAdmin.bannerUrlAddInput.value = '';
}

function showBannerPreview(imgSrc) {
    if (DOMAdmin.bannerImagePreviewBox && DOMAdmin.bannerImagePreviewImg) {
        DOMAdmin.bannerImagePreviewImg.src = getProductImageSrc(imgSrc);
        DOMAdmin.bannerImagePreviewBox.style.display = 'block';
    }
}

function removeBannerPreview() {
    tempBannerImage = '';
    if (DOMAdmin.bannerImagePreviewBox) {
        DOMAdmin.bannerImagePreviewBox.style.display = 'none';
    }
}

function deleteBanner(bannerId) {
    if (!confirm("Tem certeza que deseja excluir este banner?")) return;
    
    const bannerToDelete = banners.find(b => b.id === bannerId);
    if (bannerToDelete && bannerToDelete.image && bannerToDelete.image.startsWith('local-img-')) {
        ImageStore.delete(bannerToDelete.image).then(() => {
            delete localImagesMap[bannerToDelete.image];
        });
    }
    
    banners = banners.filter(b => b.id !== bannerId);
    localStorage.setItem('nana_banners_v5', JSON.stringify(banners));
    renderAdminBanners();
}

function resetBannerForm() {
    if (DOMAdmin.bannerForm) DOMAdmin.bannerForm.reset();
    removeBannerPreview();
}

function handleBannerFormSubmit(event) {
    event.preventDefault();
    
    if (banners.length >= 4) {
        alert("Limite máximo de 4 banners atingido.");
        return;
    }
    
    if (!tempBannerImage) {
        alert("Por favor, selecione uma imagem ou cole uma URL de imagem para o banner.");
        return;
    }
    
    const titleVal = DOMAdmin.bannerTitleInput.value.trim();
    const textVal = DOMAdmin.bannerTextInput.value.trim();
    const newId = Date.now();
    
    banners.push({
        id: newId,
        title: titleVal,
        text: textVal,
        image: tempBannerImage
    });
    
    localStorage.setItem('nana_banners_v5', JSON.stringify(banners));
    resetBannerForm();
    renderAdminBanners();
    alert("Banner adicionado com sucesso!");
}

// --- Backup, Restauração e Portabilidade ---
async function exportProductsBackup() {
    const exportedProducts = products.map(prod => {
        const prodCopy = { ...prod };
        
        if (prodCopy.images && Array.isArray(prodCopy.images)) {
            prodCopy.images = prodCopy.images.map(img => {
                if (img.startsWith('local-img-') && localImagesMap[img]) {
                    return localImagesMap[img]; 
                }
                return img;
            });
        }
        
        if (prodCopy.imageUrl && prodCopy.imageUrl.startsWith('local-img-') && localImagesMap[prodCopy.imageUrl]) {
            prodCopy.imageUrl = localImagesMap[prodCopy.imageUrl];
        }
        
        return prodCopy;
    });

    const dataStr = JSON.stringify(exportedProducts, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_produtos_nana_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importProductsBackup(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported) && imported.length > 0 && (imported[0].id || imported[0].name)) {
                if (confirm(`Deseja carregar estes ${imported.length} produtos? Isso substituirá seu catálogo atual.`)) {
                    
                    const processedProducts = [];
                    
                    for (let prod of imported) {
                        const prodCopy = { ...prod };
                        
                        if (prodCopy.images && Array.isArray(prodCopy.images)) {
                            const newImages = [];
                            for (let img of prodCopy.images) {
                                if (img.startsWith('data:image/')) {
                                    const localId = `local-img-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
                                    localImagesMap[localId] = img;
                                    await ImageStore.save(localId, img);
                                    newImages.push(localId);
                                } else {
                                    newImages.push(img);
                                }
                            }
                            prodCopy.images = newImages;
                        }
                        
                        if (prodCopy.imageUrl && prodCopy.imageUrl.startsWith('data:image/')) {
                            const matchingId = prodCopy.images && prodCopy.images.length > 0 ? prodCopy.images[0] : null;
                            if (matchingId) {
                                prodCopy.imageUrl = matchingId;
                            } else {
                                const localId = `local-img-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
                                localImagesMap[localId] = prodCopy.imageUrl;
                                await ImageStore.save(localId, prodCopy.imageUrl);
                                prodCopy.imageUrl = localId;
                            }
                        }
                        
                        processedProducts.push(prodCopy);
                    }
                    
                    products = processedProducts;
                    localStorage.setItem('nana_products_v9', JSON.stringify(products));
                    renderAdminProductsTable();
                    alert("Catálogo importado com sucesso!");
                }
            } else {
                alert("O arquivo de backup selecionado parece inválido.");
            }
        } catch (err) {
            alert("Erro ao ler o arquivo JSON de backup: " + err.message);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function resetToFactorySettings() {
    if (confirm("ATENÇÃO: Isso apagará todas as suas customizações e restaurará o catálogo original de fábrica. Continuar?")) {
        products = FACTORY_PRODUCTS_DATA.map(p => {
            const copy = { ...p };
            if (copy.images && Array.isArray(copy.images)) {
                copy.images = copy.images.slice(0, 5);
            } else {
                copy.images = copy.imageUrl ? [copy.imageUrl] : [];
            }
            if (copy.sizes === undefined || copy.sizes === null) {
                copy.sizes = parseSizesFromDescription(copy.description) || ['P', 'M', 'G', 'GG'];
            }
            if (copy.category === 'infantil' && (!copy.sizes.includes('PP') && !copy.sizes.includes('pp'))) {
                copy.sizes.unshift('PP');
            }
            return copy;
        });
        localStorage.setItem('nana_products_v9', JSON.stringify(products));
        renderAdminProductsTable();
        alert("Configurações de fábrica restauradas com sucesso!");
    }
}

// --- Inicialização da Aplicação Admin ---
document.addEventListener('DOMContentLoaded', () => {
    const isLocalAdminEnvironment = window.location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(window.location.hostname);
    if (!isLocalAdminEnvironment) {
        document.body.innerHTML = `
            <main style="min-height:100vh;display:grid;place-items:center;padding:24px;background:var(--bg-primary);">
                <section style="width:min(560px,100%);padding:36px;background:var(--bg-off-white);border:1px solid var(--border-color);border-radius:var(--border-radius-md);box-shadow:var(--shadow-md);text-align:center;">
                    <img src="logo.jpg" alt="Nana Moda Íntima" style="width:140px;height:auto;margin:0 auto 24px;">
                    <h1 style="color:var(--primary-dark);font-size:1.7rem;margin-bottom:12px;">Painel público desativado</h1>
                    <p style="color:var(--text-color);line-height:1.7;margin-bottom:22px;">Este editor salva informações apenas no navegador e, por segurança, não está disponível no site publicado. A administração compartilhada será ativada quando houver autenticação e banco de dados próprios.</p>
                    <a href="index.html" class="btn-checkout-link" style="display:inline-flex;width:auto;margin:0;padding:11px 24px;">Voltar ao catálogo</a>
                </section>
            </main>`;
        return;
    }

    // 1. Inicializa Conexão IndexedDB e Carrega Imagens em Cache
    ImageStore.init().then(() => {
        return ImageStore.getAll();
    }).then((storedImages) => {
        storedImages.forEach(img => {
            localImagesMap[img.id] = img.dataUrl;
        });
        
        // 2. Verifica Autenticação & Configura UI
        checkAuth();
        loadBanners();
        
    }).catch(err => {
        console.error("Falha ao inicializar banco de imagens:", err);
        checkAuth();
    });
    
    // Configura eventos de formulários
    if (DOMAdmin.loginForm) {
        DOMAdmin.loginForm.addEventListener('submit', handleCredentialsLogin);
    }
    
    if (DOMAdmin.btnLogout) {
        DOMAdmin.btnLogout.addEventListener('click', handleLogout);
    }
    
    if (DOMAdmin.changePasswordForm) {
        DOMAdmin.changePasswordForm.addEventListener('submit', handlePasswordChange);
    }
    
    if (DOMAdmin.userForm) {
        DOMAdmin.userForm.addEventListener('submit', handleAddUserSubmit);
    }
    
    if (DOMAdmin.productForm) {
        DOMAdmin.productForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const idVal = DOMAdmin.productIdInput.value;
            const nameVal = DOMAdmin.nameInput.value.trim().toUpperCase();
            const categoryVal = DOMAdmin.categorySelect.value;
            const categoryNameVal = DOMAdmin.categorySelect.options[DOMAdmin.categorySelect.selectedIndex].text;
            const priceVal = parseFloat(DOMAdmin.priceInput.value);
            const descVal = DOMAdmin.descriptionInput.value.trim();
            
            if (!nameVal || !categoryVal || isNaN(priceVal)) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }
            
            if (tempImages.length === 0) {
                alert("Por favor, adicione pelo menos uma imagem para o produto na galeria.");
                return;
            }
            
            const finalImages = tempImages.slice(0, 5);
            const mainImg = finalImages[0];
            const highlightVal = DOMAdmin.highlightCheckbox ? DOMAdmin.highlightCheckbox.checked : false;
            const activeVal = DOMAdmin.activeCheckbox ? DOMAdmin.activeCheckbox.checked : true;
            
            // Coletar tamanhos selecionados
            const selectedSizes = [];
            DOMAdmin.sizeCheckboxes.forEach(cb => {
                if (cb.checked) selectedSizes.push(cb.value);
            });
            const customVal = DOMAdmin.customSizesInput ? DOMAdmin.customSizesInput.value.trim() : '';
            if (customVal) {
                const customArr = customVal.split(',').map(s => s.trim()).filter(s => s !== '');
                selectedSizes.push(...customArr);
            }
            
            if (idVal) {
                // Edição
                const productId = parseInt(idVal);
                const idx = products.findIndex(p => p.id === productId);
                if (idx !== -1) {
                    products[idx] = {
                        ...products[idx],
                        name: formatProductName(nameVal),
                        category: categoryVal,
                        categoryName: categoryNameVal,
                        price: priceVal,
                        imageUrl: mainImg,
                        images: finalImages,
                        description: descVal,
                        highlight: highlightVal,
                        active: activeVal,
                        sizes: selectedSizes
                    };
                }
            } else {
                // Cadastro
                const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
                const newSlug = nameVal.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                products.push({
                    id: newId,
                    name: formatProductName(nameVal),
                    slug: newSlug,
                    price: priceVal,
                    category: categoryVal,
                    categoryName: categoryNameVal,
                    imageUrl: mainImg,
                    images: finalImages,
                    description: descVal || "Peça selecionada pela Nana Moda Íntima para quem busca conforto, qualidade e ótimo custo-benefício. Consulte disponibilidade de tamanhos e cores pelo WhatsApp.",
                    highlight: highlightVal,
                    active: activeVal,
                    sizes: selectedSizes
                });
            }
            
            localStorage.setItem('nana_products_v9', JSON.stringify(products));
            resetAdminForm();
            switchAdminTab('list');
            alert("Produto salvo com sucesso!");
        });
    }
    
    // Eventos do Gerenciador de Banners
    if (DOMAdmin.bannerForm) {
        DOMAdmin.bannerForm.addEventListener('submit', handleBannerFormSubmit);
    }
    
    if (DOMAdmin.bannerFileInput) {
        DOMAdmin.bannerFileInput.addEventListener('change', handleBannerImageUpload);
    }
    
    const btnBannerUrlAdd = document.getElementById('btn-banner-url-add');
    if (btnBannerUrlAdd) {
        btnBannerUrlAdd.addEventListener('click', addBannerUrlFromInput);
    }
    
    const btnRemoveBannerPreview = document.getElementById('btn-remove-banner-preview');
    if (btnRemoveBannerPreview) {
        btnRemoveBannerPreview.addEventListener('click', removeBannerPreview);
    }
    
    // Filtro de busca de produtos em tempo real
    if (DOMAdmin.adminSearchInput) {
        DOMAdmin.adminSearchInput.addEventListener('input', renderAdminProductsTable);
    }
});

// Declarações globais para uso inline em eventos do admin.html
window.switchAdminTab = switchAdminTab;
window.startEditProduct = startEditProduct;
window.deleteProduct = deleteProduct;
window.deleteBanner = deleteBanner;
window.moveTempImage = moveTempImage;
window.deleteTempImage = deleteTempImage;
window.handleImageUpload = handleImageUpload;
window.addImageUrlFromInput = addImageUrlFromInput;
window.exportProductsBackup = exportProductsBackup;
window.importProductsBackup = importProductsBackup;
window.resetToFactorySettings = resetToFactorySettings;

// Ações de Usuário globais
window.openAddUserModal = openAddUserModal;
window.closeAddUserModal = closeAddUserModal;
window.toggleUserFormFields = toggleUserFormFields;
window.deleteUser = deleteUser;
