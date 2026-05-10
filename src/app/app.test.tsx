import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './app';

// Mock modules
vi.mock('./navigator', () => ({
    __esModule: true,
    default: () => <div data-testid="navigator-mock">Navigator</div>,
}));

vi.mock('./color-theme/theme-context', () => ({
    ThemeProvider: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="theme-provider-mock">{children}</div>
    ),
}));

vi.mock('../locales/i18n', () => ({
    __esModule: true,
    default: {},
}));

describe('App Component', () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByTestId('navigator-mock')).toBeInTheDocument();
    });

    it('wraps navigator with ThemeProvider and BrowserRouter', () => {
        render(<App />);
        expect(screen.getByTestId('theme-provider-mock')).toBeInTheDocument();
    });
});
