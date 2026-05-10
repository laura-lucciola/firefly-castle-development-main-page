// This file must run BEFORE modules are loaded to mock require.context
(require as any).context = jest.fn((dir: string, useSubdirs: boolean, pattern: RegExp) => {
    return (filename: string) => filename;
});
