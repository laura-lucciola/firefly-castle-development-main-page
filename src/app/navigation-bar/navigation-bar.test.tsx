import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from './navigation-bar';
import { BrowserRouter } from 'react-router-dom';

// Mock modules
jest.mock('../color-theme/theme-context', () => ({
    useTheme: () => ({ theme: 'dark', toggleTheme: jest.fn() }),
}));

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string, options?: any) => key,
        i18n: {
            language: 'en-GB',
            resolvedLanguage: 'en-GB',
            changeLanguage: jest.fn(),
        },
    }),
}));

jest.mock('../../locales/locale-flag', () => ({
    'en-GB': { flag: '🇬🇧', nativeName: 'English' },
    'pt-BR': { flag: '🇧🇷', nativeName: 'Português' },
}));

describe('NavigationBar Component', () => {
    beforeEach(() => {
        delete (process.env as any).REACT_APP_COMPANY_NAME;
    });

    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <NavigationBar />
            </BrowserRouter>
        );
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders home link', () => {
        render(
            <BrowserRouter>
                <NavigationBar />
            </BrowserRouter>
        );
        const homeLink = screen.getByText('navigationBar.home');
        expect(homeLink).toBeInTheDocument();
    });

    it('renders feedback link', () => {
        render(
            <BrowserRouter>
                <NavigationBar />
            </BrowserRouter>
        );
        const feedbackLink = screen.getByText('navigationBar.feedback');
        expect(feedbackLink).toBeInTheDocument();
    });

    it('renders contact link', () => {
        render(
            <BrowserRouter>
                <NavigationBar />
            </BrowserRouter>
        );
        const contactLink = screen.getByText('navigationBar.contact');
        expect(contactLink).toBeInTheDocument();
    });
});
