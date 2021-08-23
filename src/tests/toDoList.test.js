const { toDoListFactory } = require('../modules/factories');

describe('Todo List Object Factory', () => {
  const expected = toDoListFactory('Times Test');
  it('expects an object to be returned for to Do List Factory', () => {
    expect(typeof (expected)).toBe('object');
  });
});

describe('Todo List Title', () => {
  const expected = toDoListFactory('Jest testing', 'JavaScript', '', 'high');
  it('expects title for To Do Project', () => {
    expect(expected.title).toBe('Jest testing');
  });
});

describe('Todo List Description', () => {
  const expected = toDoListFactory('Jest testing', 'JavaScript', '', 'high');
  it('expects description for To do  Project', () => {
    expect(expected.description).toBe('JavaScript');
  });
});

describe('Todo List Priority', () => {
  const expected = toDoListFactory('Jest testing', 'JavaScript', '', 'high');
  it('expects priority for To do  Project', () => {
    expect(expected.prior).toBe('high');
  });
});

describe('Todo List Object Factory', () => {
  const expected = toDoListFactory('Jest testing', 'JavaScript', '', 'low');
  it('expects priority for To do  Project', () => {
    expect(expected.prior).toBe('low');
  });
});

describe('Todo List Object Factory', () => {
  const expected = toDoListFactory('Jest testing', 'JavaScript', '', 'high');
  it('expects Due date to be an empty String for testing purpose', () => {
    expect(expected.dueDate).toBe('');
  });
});
