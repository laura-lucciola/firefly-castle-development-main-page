import { vi } from 'vitest';
import reportWebVitals from './reportWebVitals';

describe('reportWebVitals', () => {
    it('should not error if callback is provided', () => {
        const mockCallback = vi.fn();
        expect(() => reportWebVitals(mockCallback)).not.toThrow();
    });

    it('should not error if callback is undefined', () => {
        expect(() => reportWebVitals(undefined)).not.toThrow();
    });

    it('should not error if callback is not a function', () => {
        expect(() => reportWebVitals('not a function' as any)).not.toThrow();
    });

    it('should be a function that accepts a callback', () => {
        expect(typeof reportWebVitals).toBe('function');
    });
});
