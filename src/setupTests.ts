import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.stubGlobal('import', {
    meta: {
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
            MODE: 'test',
        },
    },
});
