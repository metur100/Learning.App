import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, '.', '');
    return {
        // Use a repo-specific base path in CI so GitHub Pages serves assets correctly.
        base: env.VITE_BASE_PATH || '/',
        plugins: [react()],
    };
});
