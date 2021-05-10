const Engineer = require('../lib/Engineer');

describe('Engineer constructor', () => {
  test('Can set github via constructor arguments', () => {
    const github = 'turuturutu';
    const employee = new Engineer(null, null, null, github);
    expect(employee.github).toBe(github);
  });

  test('getRole() should return "Engineer"', () => {
    const employee = new Engineer();
    expect(employee.getRole()).toBe('Engineer');
  });

  test('Can get github via getGithub()', () => {
    const github = 'dm1234';
    const employee = new Engineer(null, null, null, github);
    expect(employee.getGithub()).toBe(github);
  });
});