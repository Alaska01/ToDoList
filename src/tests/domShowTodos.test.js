const task = ['Description', 'DueDate', 'Priority'];
const showTodos = (task, callback) => {
  callback(task);
};

test('Show To Do to be called', () => {
  const mockCallback = jest.fn();
  showTodos(task, mockCallback);
  expect(mockCallback).toHaveBeenCalledWith(task);
});