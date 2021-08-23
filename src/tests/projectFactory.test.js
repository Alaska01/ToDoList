const { projectFactory } = require('../modules/factories');

describe('Expects Project Object to be returned', () => {
  const expected = projectFactory('Williams');
  it('expects an object to be returned', () => {
    expect(typeof (expected)).toBe('object');
  });
});

describe('Expects name to be Williams', () => {
  const expected = projectFactory('Williams');
  it('expects the returned name to be Williams', () => {
    expect(expected.name).toBe('Williams');
  });
});

describe('Expects To Do Task For Project ID to be Array', () => {
  const expected = projectFactory('Williams');
  it('expects the returned task to be array', () => {
    expect(expected.tasks).toEqual([]);
  });
});
