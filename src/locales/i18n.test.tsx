import i18n from './i18n';

describe('i18n Configuration', () => {
    it('should be initialized', () => {
        expect(i18n).toBeDefined();
    });

    it('should have fallback language set to en-GB', () => {
        expect(i18n.options.fallbackLng).toContain('en-GB');
    });

    it('should have resources configured', () => {
        expect(i18n.options.resources).toBeDefined();
    });

    it('should support en-GB language', () => {
        expect(i18n.options.resources['en-GB']).toBeDefined();
    });

    it('should support pt-BR language', () => {
        expect(i18n.options.resources['pt-BR']).toBeDefined();
    });

    it('should have interpolation configured', () => {
        expect(i18n.options.interpolation).toBeDefined();
        expect(i18n.options.interpolation?.escapeValue).toBe(false);
    });
});
