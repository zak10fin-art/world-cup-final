import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
var __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    root: 'client',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'client/src'),
            '@shared': path.resolve(__dirname, 'shared')
        }
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true
    }
});
