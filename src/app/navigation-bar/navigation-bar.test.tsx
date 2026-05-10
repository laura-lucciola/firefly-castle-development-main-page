import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import NavigationBar from './navigation-bar';
import { BrowserRouter } from 'react-router-dom';

// Mock modules
vi.mock('../color-theme/theme-context', () => ({
    useTheme: () => ({ theme: 'dark', toggleTheme: vi.fn() }),
}));

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string, options?: any) => key,
        i18n: {
            language: 'en-GB',
            resolvedLanguage: 'en-GB',
            changeLanguage: vi.fn(),
        },
    }),
}));

vi.mock('../../locales/locale-flag', () => ({
    default: {
        'en-GB': { flag: '🇬🇧', nativeName: 'English' },
        'pt-BR': { flag: '🇧🇷', nativeName: 'Português' },
    },
}));

describe('NavigationBar Component', () => {
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
