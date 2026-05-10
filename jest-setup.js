// Vitest setup file - runs before any tests
// Mock require.context for Webpack-specific features
import { vi } from 'vitest';

if (typeof require !== 'undefined') {
    require.context = vi.fn((dir, useSubdirs, pattern) => {
        return filename => filename;
    });
}
