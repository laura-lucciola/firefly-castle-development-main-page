import { ThemeProvider, useTheme } from './theme-context';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

describe('ThemeContext', () => {
    const TestComponent = () => {
        const { theme, toggleTheme } = useTheme();
        return (
            <div>
                <p data-testid="theme-value">{theme}</p>
                <button onClick={toggleTheme} data-testid="toggle-button">
                    Toggle Theme
                </button>
            </div>
        );
    };

    it('provides default theme value', () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );
        expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    });

    it('toggles theme between light and dark', () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );
        const toggleButton = screen.getByTestId('toggle-button');
        const themeValue = screen.getByTestId('theme-value');

        expect(themeValue).toHaveTextContent('dark');

        fireEvent.click(toggleButton);
        expect(themeValue).toHaveTextContent('light');

        fireEvent.click(toggleButton);
        expect(themeValue).toHaveTextContent('dark');
    });

    it('useTheme hook works correctly', () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );
        expect(screen.getByTestId('theme-value')).toBeInTheDocument();
    });
});
