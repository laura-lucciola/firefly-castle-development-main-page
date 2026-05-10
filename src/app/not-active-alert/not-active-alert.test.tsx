import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotActiveAlert } from './not-active-alert';

// Mock modules
jest.mock('../color-theme/theme-context', () => ({
    useTheme: () => ({ theme: 'dark' }),
}));

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string, options?: any) => key,
    }),
}));

describe('NotActiveAlert Component', () => {
    beforeEach(() => {
        delete (process.env as any).REACT_APP_COMPANY_IS_ACTIVE;
    });

    it('renders without crashing', () => {
        const { container } = render(<NotActiveAlert />);
        expect(container).toBeInTheDocument();
    });

    it('shows alert when company is active', () => {
        process.env.REACT_APP_COMPANY_IS_ACTIVE = 'true';
        const { container } = render(<NotActiveAlert />);
        expect(container.querySelector('[role="alert"]')).toBeInTheDocument();
    });

    it('hides alert when company is not active', () => {
        process.env.REACT_APP_COMPANY_IS_ACTIVE = '';
        const { container } = render(<NotActiveAlert />);
        expect(container.querySelector('[role="alert"]')).not.toBeInTheDocument();
    });
});
