# Nana Moda Íntima

Catálogo estático da Nana Moda Íntima, publicado em `nanamodaintima.com.br`. O cliente escolhe produtos e tamanhos, monta a sacola e envia o pedido pelo WhatsApp.

## Desenvolvimento

O projeto não exige instalação de dependências para funcionar. Sirva a pasta com um servidor HTTP local e abra `index.html` no navegador.

Para executar as verificações automatizadas:

```bash
npm test
```

## Administração

O arquivo `admin.html` é somente um editor local de protótipo. Ele não publica alterações para outros dispositivos e fica bloqueado no domínio de produção. Um painel compartilhado exige autenticação e banco de dados no servidor.

## Estrutura principal

- `index.html`, `index.css` e `app.js`: catálogo público.
- `termos-de-uso.html`: trocas, devoluções e atendimento.
- `politica-de-privacidade.html`: tratamento dos dados enviados no pedido.
- `robots.txt` e `sitemap.xml`: indexação.
- `tests/site.test.mjs`: verificações de regressão do fluxo principal.
