(function initializeNanaSupabase() {
    const SUPABASE_URL = 'https://ofarjltaoohnfyxbnuxx.supabase.co';
    const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_mdKAWCH7l-dwqUdYmbK1Yw_ziDlr89Y';

    if (!window.supabase || typeof window.supabase.createClient !== 'function') {
        console.error('Não foi possível carregar a conexão segura com o catálogo.');
        return;
    }

    window.nanaSupabase = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY,
        {
            auth: {
                persistSession: true,
                autoRefreshToken: true,
                detectSessionInUrl: true
            }
        }
    );
})();
