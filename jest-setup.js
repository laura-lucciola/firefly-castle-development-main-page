// Jest setup file - runs before any tests
// Mock require.context for Webpack-specific features
if (typeof require !== 'undefined') {
    require.context = jest.fn((dir, useSubdirs, pattern) => {
        return filename => filename;
    });
}
