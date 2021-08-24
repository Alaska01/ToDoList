const render = (callback) => {
  callback();
};

test('Show render to be called without arguments', () => {
  const mockCallback = jest.fn();
  render(mockCallback);
  expect(mockCallback).toHaveBeenCalledWith();
});

const save = (callback) => {
  callback();
};

test('Show render to be called without arguments', () => {
  const mockCallback = jest.fn();
  save(mockCallback);
  expect(mockCallback).toHaveBeenCalledWith();
});

const saveAndrender = (callback) => {
  callback();
};

test('Show render to be called without arguments', () => {
  const mockCallback = jest.fn();
  saveAndrender(mockCallback);
  expect(mockCallback).toHaveBeenCalledWith();
});