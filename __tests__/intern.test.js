const Intern = require('../lib/Intern');

describe('Intern constructor', () => {
  test('Can set school via constructor arguments', () => {
    const school = 'High School III';
    const employee = new Intern(null, null, null, school);
    expect(employee.school).toBe(school);
  });

  test('getRole() should return "Intern"', () => {
    const employee = new Intern();
    expect(employee.getRole()).toBe('Intern');
  });

  test('Can get school via getSchool()', () => {
    const school = 'HSM II';
    const employee = new Intern(null, null, null, school);
    expect(employee.getSchool()).toBe(school);
  });
});