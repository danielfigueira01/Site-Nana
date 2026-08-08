(function configureOnlineAdmin() {
    const AUTHORIZED_ADMIN_EMAIL = 'danielfigueira01@gmail.com';
    const PRODUCT_BUCKET = 'product-images';
    let onlineCategories = new Map();
    let passwordRecoveryMode = false;

    function showLoginFeedback(message, isError = true) {
        if (!DOMAdmin.loginErrorMsg) return;
        DOMAdmin.loginErrorMsg.textContent = message;
        DOMAdmin.loginErrorMsg.style.color = isError ? '#dc3545' : '#2f7d4a';
        DOMAdmin.loginErrorMsg.style.display = 'block';
    }

    function setLoginBusy(isBusy) {
        if (DOMAdmin.btnLoginSubmit) DOMAdmin.btnLoginSubmit.disabled = isBusy;
        const resetButton = document.getElementById('btn-reset-password');
        if (resetButton) resetButton.disabled = isBusy;
    }

    function getPasswordRecoveryUrl() {
        const recoveryUrl = new URL(window.location.pathname, window.location.origin);
        recoveryUrl.searchParams.set('recovery', '1');
        return recoveryUrl.toString();
    }

    function isPasswordRecoveryUrl() {
        const query = new URLSearchParams(window.location.search);
        const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
        return hash.get('type') === 'recovery' || (query.get('recovery') === '1' && query.has('code'));
    }

    function showPasswordRecoveryForm() {
        passwordRecoveryMode = true;
        showOnlineLogin();
        const emailGroup = DOMAdmin.loginUsername?.closest('.form-group');
        const resetButton = document.getElementById('btn-reset-password');
        if (emailGroup) emailGroup.style.display = 'none';
        if (resetButton) resetButton.style.display = 'none';
        if (DOMAdmin.loginWelcomeMsg) DOMAdmin.loginWelcomeMsg.textContent = 'Digite e salve sua nova senha.';
        if (DOMAdmin.adminSetupMsg) {
            DOMAdmin.adminSetupMsg.textContent = 'NOVA SENHA: use pelo menos 10 caracteres, com letra maiúscula, minúscula, número e símbolo.';
            DOMAdmin.adminSetupMsg.style.display = 'block';
        }
        if (DOMAdmin.loginPassword) {
            DOMAdmin.loginPassword.value = '';
            DOMAdmin.loginPassword.autocomplete = 'new-password';
            DOMAdmin.loginPassword.placeholder = 'Crie uma nova senha';
        }
        if (DOMAdmin.btnLoginSubmit) DOMAdmin.btnLoginSubmit.textContent = 'Salvar nova senha';
        showLoginFeedback('Link confirmado. Agora escolha sua nova senha.', false);
    }

    function showOnlineLogin() {
        currentUser = null;
        if (DOMAdmin.loginScreen) DOMAdmin.loginScreen.style.display = 'flex';
        if (DOMAdmin.dashboardLayout) DOMAdmin.dashboardLayout.style.display = 'none';
        if (DOMAdmin.adminSetupMsg) DOMAdmin.adminSetupMsg.style.display = 'block';
        if (DOMAdmin.loginWelcomeMsg) DOMAdmin.loginWelcomeMsg.textContent = 'Entre para editar os produtos exibidos na loja.';
    }

    function mapOnlineProduct(row) {
        const category = Array.isArray(row.categories) ? row.categories[0] : row.categories;
        return {
            id: Number(row.legacy_id),
            dbId: row.id,
            name: formatProductName(row.name),
            slug: row.slug,
            price: Number(row.price),
            category: category?.slug || 'outros',
            categoryName: category?.name || 'Outros',
            imageUrl: row.image_url,
            images: Array.isArray(row.image_urls) ? row.image_urls.slice(0, 5) : [row.image_url],
            description: row.description || '',
            highlight: !!row.featured,
            active: row.active !== false,
            sizes: Array.isArray(row.sizes) && row.sizes.length ? row.sizes : ['P', 'M', 'G', 'GG'],
            sortOrder: Number(row.sort_order || 0)
        };
    }

    async function loadOnlineCategories() {
        const { data, error } = await window.nanaSupabase
            .from('categories')
            .select('id,name,slug')
            .eq('active', true)
            .order('sort_order', { ascending: true });
        if (error) throw error;
        onlineCategories = new Map(data.map(category => [category.slug, category]));
    }

    async function loadOnlineProducts() {
        const { data, error } = await window.nanaSupabase
            .from('products')
            .select('id,legacy_id,name,slug,price,description,image_url,image_urls,sizes,featured,active,sort_order,categories!products_category_id_fkey(name,slug)')
            .order('sort_order', { ascending: true })
            .order('legacy_id', { ascending: true });
        if (error) throw error;
        products = data.map(mapOnlineProduct).filter(product => Number.isFinite(product.id));
        renderAdminProductsTable();
    }

    async function showOnlineDashboard(user) {
        currentUser = {
            id: user.id,
            email: user.email,
            name: user.email,
            role: 'admin',
            type: 'supabase'
        };
        if (DOMAdmin.loginScreen) DOMAdmin.loginScreen.style.display = 'none';
        if (DOMAdmin.dashboardLayout) DOMAdmin.dashboardLayout.style.display = 'block';
        if (DOMAdmin.tabBtnUsers) DOMAdmin.tabBtnUsers.style.display = 'none';
        await loadOnlineCategories();
        await loadOnlineProducts();
    }

    async function checkOnlineAuth() {
        const { data: userData, error: userError } = await window.nanaSupabase.auth.getUser();
        if (userError || !userData?.user) {
            showOnlineLogin();
            return;
        }

        const { data: isAdmin, error: permissionError } = await window.nanaSupabase.rpc('is_catalog_admin');
        if (permissionError || isAdmin !== true) {
            await window.nanaSupabase.auth.signOut();
            showOnlineLogin();
            showLoginFeedback('Este e-mail não tem permissão para administrar a loja.');
            return;
        }

        await showOnlineDashboard(userData.user);
    }

    async function handleOnlineLogin(event) {
        event.preventDefault();
        const email = DOMAdmin.loginUsername.value.trim().toLowerCase();
        const password = DOMAdmin.loginPassword.value;
        if (passwordRecoveryMode) {
            const hasStrongPassword = password.length >= 10 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password);
            if (!hasStrongPassword) {
                showLoginFeedback('Use pelo menos 10 caracteres, com letra maiúscula, minúscula, número e símbolo.');
                return;
            }
            setLoginBusy(true);
            try {
                const { error } = await window.nanaSupabase.auth.updateUser({ password });
                if (error) throw error;
                passwordRecoveryMode = false;
                DOMAdmin.loginPassword.value = '';
                window.history.replaceState({}, document.title, window.location.pathname);
                showLoginFeedback('Senha atualizada com sucesso. Entrando no painel...', false);
                await checkOnlineAuth();
            } catch (error) {
                showLoginFeedback('Não foi possível atualizar a senha. Solicite um novo link e tente novamente.');
                console.error('Falha ao atualizar senha administrativa:', error);
            } finally {
                setLoginBusy(false);
            }
            return;
        }
        setLoginBusy(true);
        try {
            const { error } = await window.nanaSupabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            DOMAdmin.loginPassword.value = '';
            await checkOnlineAuth();
        } catch (error) {
            showLoginFeedback('Não foi possível entrar. Confira o e-mail, a senha e a confirmação do cadastro.');
            console.error('Falha no login administrativo:', error);
        } finally {
            setLoginBusy(false);
        }
    }

    async function handleForgotPassword() {
        const email = DOMAdmin.loginUsername.value.trim().toLowerCase();
        if (email !== AUTHORIZED_ADMIN_EMAIL) {
            showLoginFeedback('Informe o e-mail autorizado para recuperar a senha.');
            return;
        }

        setLoginBusy(true);
        try {
            const { error } = await window.nanaSupabase.auth.resetPasswordForEmail(email, {
                redirectTo: getPasswordRecoveryUrl()
            });
            if (error) throw error;
            showLoginFeedback('Enviamos um link para criar uma nova senha. Confira também a pasta de spam.', false);
        } catch (error) {
            const isEmailRateLimit = error?.code === 'over_email_send_rate_limit' || error?.status === 429;
            showLoginFeedback(isEmailRateLimit
                ? 'O limite temporário de e-mails foi atingido. Aguarde cerca de 1 hora e clique somente uma vez.'
                : 'Não foi possível enviar o link agora. Aguarde alguns minutos e tente novamente.');
            console.error('Falha ao solicitar recuperação de senha:', error);
        } finally {
            setLoginBusy(false);
        }
    }

    async function handleOnlineLogout() {
        await window.nanaSupabase.auth.signOut();
        showOnlineLogin();
    }

    function slugifyProductName(name) {
        return name.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }

    async function uploadLocalProductImage(imageId) {
        const dataUrl = localImagesMap[imageId];
        if (!dataUrl) throw new Error('Imagem local não encontrada. Selecione o arquivo novamente.');
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        if (blob.size > 5 * 1024 * 1024) throw new Error('Cada imagem deve ter no máximo 5 MB.');
        const extensionByType = {
            'image/jpeg': 'jpg',
            'image/png': 'png',
            'image/webp': 'webp',
            'image/gif': 'gif'
        };
        const extension = extensionByType[blob.type];
        if (!extension) throw new Error('Use imagens JPG, PNG, WebP ou GIF.');
        const randomPart = window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
        const storagePath = `products/${randomPart}.${extension}`;
        const { error } = await window.nanaSupabase.storage
            .from(PRODUCT_BUCKET)
            .upload(storagePath, blob, { contentType: blob.type, upsert: false });
        if (error) throw error;
        const { data } = window.nanaSupabase.storage.from(PRODUCT_BUCKET).getPublicUrl(storagePath);
        return data.publicUrl;
    }

    function getStoragePath(imageUrl) {
        const marker = `/storage/v1/object/public/${PRODUCT_BUCKET}/`;
        const markerIndex = String(imageUrl || '').indexOf(marker);
        return markerIndex === -1 ? null : decodeURIComponent(String(imageUrl).slice(markerIndex + marker.length));
    }

    async function removeStorageImages(imageUrls) {
        const paths = imageUrls.map(getStoragePath).filter(Boolean);
        if (!paths.length) return;
        const { error } = await window.nanaSupabase.storage.from(PRODUCT_BUCKET).remove(paths);
        if (error) console.error('Não foi possível limpar algumas imagens antigas:', error);
    }

    async function resolveProductImages() {
        const resolved = [];
        for (const image of tempImages.slice(0, 5)) {
            resolved.push(String(image).startsWith('local-img-') ? await uploadLocalProductImage(image) : image);
        }
        return resolved;
    }

    function collectSelectedSizes() {
        const selected = [];
        DOMAdmin.sizeCheckboxes.forEach(checkbox => {
            if (checkbox.checked) selected.push(checkbox.value);
        });
        const custom = DOMAdmin.customSizesInput?.value.trim();
        if (custom) selected.push(...custom.split(',').map(size => size.trim()).filter(Boolean));
        return [...new Set(selected)];
    }

    async function handleOnlineProductSubmit(event) {
        event.preventDefault();
        const legacyId = Number(DOMAdmin.productIdInput.value || 0);
        const existing = legacyId ? products.find(product => product.id === legacyId) : null;
        const name = formatProductName(DOMAdmin.nameInput.value.trim());
        const categorySlug = DOMAdmin.categorySelect.value;
        const category = onlineCategories.get(categorySlug);
        const price = Number(DOMAdmin.priceInput.value);
        const sizes = collectSelectedSizes();

        if (!name || !category || !Number.isFinite(price) || price < 0) {
            alert('Preencha nome, categoria e preço corretamente.');
            return;
        }
        if (!tempImages.length) {
            alert('Adicione pelo menos uma imagem ao produto.');
            return;
        }
        if (!sizes.length) {
            alert('Selecione pelo menos um tamanho.');
            return;
        }

        const submitButton = DOMAdmin.formSubmitBtn;
        const originalLabel = submitButton.textContent;
        let saveSucceeded = false;
        submitButton.disabled = true;
        submitButton.textContent = 'Salvando...';

        try {
            const finalImages = await resolveProductImages();
            const row = {
                category_id: category.id,
                name,
                slug: existing?.slug || `${slugifyProductName(name)}-${Date.now()}`,
                description: DOMAdmin.descriptionInput.value.trim() || 'Peça selecionada pela Nana Moda Íntima. Consulte tamanhos, cores e disponibilidade pelo WhatsApp.',
                price,
                image_url: finalImages[0],
                image_urls: finalImages,
                sizes,
                featured: !!DOMAdmin.highlightCheckbox?.checked,
                active: DOMAdmin.activeCheckbox?.checked !== false,
                sort_order: existing?.sortOrder || (products.length ? Math.max(...products.map(product => product.sortOrder || 0)) + 1 : 1),
                updated_at: new Date().toISOString()
            };

            let saveError;
            if (existing) {
                ({ error: saveError } = await window.nanaSupabase.from('products').update(row).eq('id', existing.dbId));
            } else {
                ({ error: saveError } = await window.nanaSupabase.from('products').insert(row));
            }
            if (saveError) throw saveError;

            if (existing) {
                const removedImages = existing.images.filter(image => !finalImages.includes(image));
                await removeStorageImages(removedImages);
            }
            for (const image of tempImages.filter(image => String(image).startsWith('local-img-'))) {
                await ImageStore.delete(image).catch(() => undefined);
                delete localImagesMap[image];
            }

            await loadOnlineProducts();
            resetAdminForm();
            switchAdminTab('list');
            saveSucceeded = true;
            alert('Produto salvo no catálogo online com sucesso!');
        } catch (error) {
            alert(error?.message || 'Não foi possível salvar o produto. Tente novamente.');
            console.error('Falha ao salvar produto online:', error);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = saveSucceeded ? 'Salvar Produto' : originalLabel;
        }
    }

    async function deleteOnlineProduct(productId) {
        const product = products.find(item => item.id === productId);
        if (!product || !confirm(`Excluir o produto "${product.name}" do catálogo?`)) return;
        const { error } = await window.nanaSupabase.from('products').delete().eq('id', product.dbId);
        if (error) {
            alert('Não foi possível excluir o produto.');
            console.error('Falha ao excluir produto online:', error);
            return;
        }
        await removeStorageImages(product.images);
        await loadOnlineProducts();
    }

    window.initializeSupabaseAdmin = async function initializeSupabaseAdmin() {
        if (DOMAdmin.loginForm) DOMAdmin.loginForm.addEventListener('submit', handleOnlineLogin);
        document.getElementById('btn-reset-password')?.addEventListener('click', handleForgotPassword);
        DOMAdmin.btnLogout?.addEventListener('click', handleOnlineLogout);
        DOMAdmin.productForm?.addEventListener('submit', handleOnlineProductSubmit);
        if (DOMAdmin.adminSearchInput) DOMAdmin.adminSearchInput.addEventListener('input', renderAdminProductsTable);
        window.deleteProduct = deleteOnlineProduct;

        try {
            await ImageStore.init();
            const storedImages = await ImageStore.getAll();
            storedImages.forEach(image => { localImagesMap[image.id] = image.dataUrl; });
        } catch (error) {
            console.error('Falha ao preparar imagens locais:', error);
        }

        window.nanaSupabase.auth.onAuthStateChange((event) => {
            if (event === 'PASSWORD_RECOVERY') showPasswordRecoveryForm();
        });

        try {
            if (isPasswordRecoveryUrl()) {
                showPasswordRecoveryForm();
            } else {
                await checkOnlineAuth();
            }
        } catch (error) {
            console.error('Falha ao iniciar o painel online:', error);
            showOnlineLogin();
            showLoginFeedback('Não foi possível conectar ao painel. Atualize a página e tente novamente.');
        }
    };
})();
