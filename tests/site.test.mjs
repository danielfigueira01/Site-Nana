import assert from 'node:assert/strict';
import { access, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFile(path.join(root, file), 'utf8');

test('páginas essenciais e SEO estão presentes', async () => {
  const index = await read('index.html');
  assert.match(index, /<h1\b/i);
  assert.match(index, /rel="canonical"/i);
  assert.match(index, /application\/ld\+json/i);
  assert.match(index, /href="admin\.html"/i);
  await Promise.all([
    access(path.join(root, 'termos-de-uso.html')),
    access(path.join(root, 'politica-de-privacidade.html')),
    access(path.join(root, 'robots.txt')),
    access(path.join(root, 'sitemap.xml'))
  ]);
});

test('links em nova aba usam proteção contra acesso à página de origem', async () => {
  for (const file of ['index.html', 'termos-de-uso.html', 'politica-de-privacidade.html']) {
    const html = await read(file);
    const links = [...html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)].map((match) => match[0]);
    for (const link of links) {
      assert.match(link, /rel="[^"]*noopener[^"]*"/i, `${file}: ${link}`);
      assert.match(link, /rel="[^"]*noreferrer[^"]*"/i, `${file}: ${link}`);
    }
  }
});

test('referências locais de HTML apontam para arquivos existentes', async () => {
  for (const file of ['index.html', 'termos-de-uso.html', 'politica-de-privacidade.html']) {
    const html = await read(file);
    const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/gi)].map((match) => match[1]);
    for (const ref of refs) {
      if (/^(?:https?:|mailto:|tel:|#)/i.test(ref)) continue;
      const cleanRef = ref.split('?')[0].split('#')[0];
      await access(path.resolve(root, path.dirname(file), cleanRef));
    }
  }
});

test('fluxo de compra exige escolha de tamanho e preserva a sacola', async () => {
  const app = await read('app.js');
  const quickAdd = app.match(/function quickAddToCart[\s\S]*?\n}/)?.[0] ?? '';
  const checkout = app.match(/function submitCheckout[\s\S]*?\/\/ --- Filtros/)?.[0] ?? '';
  assert.match(quickAdd, /openProductModal\(productId\)/);
  assert.doesNotMatch(quickAdd, /addToCart\([^)]*['"]M['"]/);
  assert.doesNotMatch(checkout, /clearCart\(\)/);
  assert.match(checkout, /noopener,noreferrer/);
});

test('badges comerciais não são inventados pela posição', async () => {
  const app = await read('app.js');
  assert.doesNotMatch(app, /index % 4/);
  assert.match(app, /typeof prod\.badge === 'string'/);
});

test('menu mobile começa pela primeira categoria', async () => {
  const [css, app] = await Promise.all([read('index.css'), read('app.js')]);
  const navRule = css.match(/\.nav-container\s*\{[^}]+\}/)?.[0] ?? '';
  assert.match(navRule, /justify-content:\s*flex-start/);
  assert.match(app, /if \(!cat\) return;/);
});

test('modais têm semântica e o painel online exige autenticação administrativa', async () => {
  const [index, adminHtml, adminJs, onlineAdmin, config] = await Promise.all([
    read('index.html'),
    read('admin.html'),
    read('admin.js'),
    read('admin-supabase.js'),
    read('supabase-config.js')
  ]);
  assert.equal((index.match(/role="dialog"/g) ?? []).length, 4);
  assert.match(index, /aria-modal="true"/);
  assert.match(adminHtml, /noindex, nofollow/);
  assert.match(adminJs, /initializeSupabaseAdmin/);
  assert.doesNotMatch(adminHtml, /Usuário padrão|Senha padrão/);
  assert.doesNotMatch(adminJs, /placeholder\.apps\.googleusercontent\.com/);
  assert.match(onlineAdmin, /signInWithPassword/);
  assert.match(onlineAdmin, /signUp/);
  assert.match(onlineAdmin, /rpc\('is_catalog_admin'\)/);
  assert.match(onlineAdmin, /from\('products'\)/);
  assert.match(onlineAdmin, /\.from\(PRODUCT_BUCKET\)[\s\S]*?\.upload/);
  assert.match(config, /sb_publishable_/);
  assert.doesNotMatch(`${onlineAdmin}\n${config}`, /service_role|sb_secret_/i);
});

test('banner principal otimizado permanece leve', async () => {
  const banner = await stat(path.join(root, 'banner_generico.webp'));
  assert.ok(banner.size < 250_000, `banner com ${banner.size} bytes`);
});

test('gerenciador de imagens exibe ordem, exclusão e imagem principal', async () => {
  const [adminHtml, adminJs] = await Promise.all([read('admin.html'), read('admin.js')]);
  assert.match(adminHtml, /grid-template-rows:\s*minmax\(0, 1fr\) 40px/);
  assert.match(adminHtml, /\.image-primary-badge/);
  assert.match(adminHtml, /admin\.js\?v=5\.0/);
  assert.match(adminJs, /Principal/);
  assert.match(adminJs, /aria-label="Mover imagem \$\{idx \+ 1\} para a esquerda"/);
  assert.match(adminJs, /aria-label="Mover imagem \$\{idx \+ 1\} para a direita"/);
  assert.match(adminJs, /aria-label="Excluir imagem \$\{idx \+ 1\}"/);
  assert.match(adminJs, /tempImages\[targetIdx\] = temp/);
});

test('catálogo consulta o Supabase com fallback estático', async () => {
  const [index, app] = await Promise.all([read('index.html'), read('app.js')]);
  assert.match(index, /@supabase\/supabase-js@2\.112\.2/);
  assert.match(index, /supabase-config\.js\?v=1\.0/);
  assert.match(app, /window\.nanaSupabase[\s\S]*?\.from\('products'\)/);
  assert.match(app, /function getFactoryProducts/);
  assert.match(app, /await loadProducts\(\)/);
});
