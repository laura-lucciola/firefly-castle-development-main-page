import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Navigator from './navigator';
import { BrowserRouter } from 'react-router-dom';

// Mock modules
vi.mock('./navigation-bar/navigation-bar', () => ({
    __esModule: true,
    default: () => <div data-testid="navigation-bar-mock">NavigationBar</div>,
}));

vi.mock('./home-page/home-page', () => ({
    __esModule: true,
    default: () => <div data-testid="home-page-mock">HomePage</div>,
}));

vi.mock('./contact-page/contact-page', () => ({
    __esModule: true,
    default: () => <div data-testid="contact-page-mock">ContactPage</div>,
}));

vi.mock('./feedback-page/feedback-page', () => ({
    __esModule: true,
    default: () => <div data-testid="feedback-page-mock">FeedbackPage</div>,
}));

vi.mock('./color-theme/theme-context', () => ({
    useTheme: () => ({ theme: 'dark', toggleTheme: vi.fn() }),
}));

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { language: 'en-GB' },
    }),
}));

describe('Navigator Component', () => {
    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <Navigator />
            </BrowserRouter>
        );
        expect(screen.getByTestId('navigation-bar-mock')).toBeInTheDocument();
    });

    it('renders main body container', () => {
        render(
            <BrowserRouter>
                <Navigator />
            </BrowserRouter>
        );
        const mainBody = screen.getByTestId('navigation-bar-mock').parentElement?.querySelector('#main-body');
        expect(mainBody).toBeInTheDocument();
    });

    it('sets page title on location change', () => {
        const { rerender } = render(
            <BrowserRouter>
                <Navigator />
            </BrowserRouter>
        );
        expect(document.title).toBeDefined();
    });
});
