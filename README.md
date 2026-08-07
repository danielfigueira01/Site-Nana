# Nana Moda Íntima

Catálogo estático da Nana Moda Íntima, publicado em `nanamodaintima.com.br`. O cliente escolhe produtos e tamanhos, monta a sacola e envia o pedido pelo WhatsApp.

## Desenvolvimento

O projeto não exige instalação de dependências para funcionar. Sirva a pasta com um servidor HTTP local e abra `index.html` no navegador.

Para executar as verificações automatizadas:

```bash
npm test
```

## Administração

O link **Painel administrativo** no rodapé abre `admin.html`. O painel usa autenticação, banco de dados e armazenamento de imagens do Supabase; somente a conta administrativa autorizada pode alterar o catálogo. As alterações salvas aparecem na loja online em qualquer dispositivo.

No primeiro acesso, a administradora informa o e-mail autorizado, cria uma senha com pelo menos oito caracteres e confirma o e-mail recebido. Depois disso, basta entrar normalmente no painel.

## Estrutura principal

- `index.html`, `index.css` e `app.js`: catálogo público conectado ao Supabase, com fallback estático.
- `admin.html`, `admin.js` e `admin-supabase.js`: painel autenticado e gestão online de produtos.
- `supabase-config.js`: conexão pública com o projeto Supabase (sem chaves administrativas).
- `vendor/supabase.min.js`: cliente oficial Supabase 2.112.2 servido pelo próprio site.
- `termos-de-uso.html`: trocas, devoluções e atendimento.
- `politica-de-privacidade.html`: tratamento dos dados enviados no pedido.
- `robots.txt` e `sitemap.xml`: indexação.
- `tests/site.test.mjs`: verificações de regressão do fluxo principal.
