import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { PersonalCard } from './personal-card';

// Mock modules
vi.mock('../color-theme/theme-context', () => ({
    useTheme: () => ({ theme: 'dark' }),
}));

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('PersonalCard Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<PersonalCard />);
        expect(container.querySelector('#who-am-i-card')).toBeInTheDocument();
    });

    it('displays personal card header', () => {
        render(<PersonalCard />);
        expect(screen.getByText('personalCard.header')).toBeInTheDocument();
    });

    it('displays personal card subtitle', () => {
        render(<PersonalCard />);
        expect(screen.getByText('personalCard.subtitle')).toBeInTheDocument();
    });

    it('displays personal card description', () => {
        render(<PersonalCard />);
        expect(screen.getByText('personalCard.description')).toBeInTheDocument();
    });
});
