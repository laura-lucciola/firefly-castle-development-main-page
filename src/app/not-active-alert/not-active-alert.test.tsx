import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { NotActiveAlert } from './not-active-alert';

// Mock modules
vi.mock('../color-theme/theme-context', () => ({
    useTheme: () => ({ theme: 'dark' }),
}));

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string, options?: any) => key,
    }),
}));

describe('NotActiveAlert Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<NotActiveAlert />);
        expect(container).toBeInTheDocument();
    });

    it('shows alert when company is active', () => {
        const { container } = render(<NotActiveAlert />);
        // setupTests and vite.config.ts set VITE_COMPANY_IS_ACTIVE to 'true'
        const alert = container.querySelector('#not-active-alert');
        expect(alert).toBeInTheDocument();
    });

    it('renders NotActiveAlert component', () => {
        const { container } = render(<NotActiveAlert />);
        const alertDiv = container.querySelector('#not-active-alert');
        expect(alertDiv).toBeInTheDocument();
    });
});
