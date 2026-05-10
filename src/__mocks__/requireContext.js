/* Manual mock for require.context */
module.exports = jest.fn((dir, useSubdirs, pattern) => {
  return (filename) => filename;
});
