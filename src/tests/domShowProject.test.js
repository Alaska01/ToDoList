const showProject = (callback) => {
  callback();
};

test('Show project to be called without arguments', () => {
  const mockCallback = jest.fn();
  showProject(mockCallback);
  expect(mockCallback).toHaveBeenCalledWith();
});