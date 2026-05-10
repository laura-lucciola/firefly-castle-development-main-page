import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./jest-setup.js', './src/setupTests.ts'],
        env: {
            VITE_COMPANY_NAME: 'Test Company',
            VITE_COMPANY_IS_ACTIVE: 'true',
            VITE_EMAIL_SERVICE_ID: 'test-service',
            VITE_EMAIL_TEMPLATE_ID: 'test-template',
            VITE_EMAIL_PUBLIC_KEY: 'test-key',
            VITE_GITHUB_URL: 'https://github.com/test',
            VITE_GITLAB_URL: 'https://gitlab.com/test',
            VITE_LINKEDIN_URL: 'https://linkedin.com/in/test',
            VITE_DEVTO_URL: 'https://dev.to/test',
        },
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html', 'lcov'],
            include: ['src/**/*.{ts,tsx}'],
            exclude: ['src/**/*.d.ts', 'src/index.tsx', 'src/reportWebVitals.tsx'],
        },
    },
});