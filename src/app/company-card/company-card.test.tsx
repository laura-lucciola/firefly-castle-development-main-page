import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { CompanyCard } from './company-card';

// Mock modules
vi.mock('../color-theme/theme-context', () => ({
    useTheme: () => ({ theme: 'dark' }),
}));

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string, options?: any) => key,
    }),
}));

vi.mock('../../assets/company-logo.svg', () => ({
    default: 'logo.svg',
}));

describe('CompanyCard Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<CompanyCard />);
        expect(container.querySelector('#company-card')).toBeInTheDocument();
    });

    it('displays company card header', () => {
        render(<CompanyCard />);
        expect(screen.getByText('companyCard.header')).toBeInTheDocument();
    });

    it('displays company logo', () => {
        render(<CompanyCard />);
        const image = screen.getByAltText('common.logoAlt');
        expect(image).toBeInTheDocument();
    });

    it('renders social links', () => {
        const { container } = render(<CompanyCard />);
        const links = container.querySelectorAll('a');
        expect(links.length).toBeGreaterThan(0);
    });
});
