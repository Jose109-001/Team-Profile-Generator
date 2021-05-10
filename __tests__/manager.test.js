const Manager = require('../lib/Manager');

describe('Manager constructor', () => {
  test('Can set school via constructor arguments', () => {
    const officeNumber = '1235813';
    const employee = new Manager(null, null, null, officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test('getRole() should return "Manager"', () => {
    const employee = new Manager();
    expect(employee.getRole()).toBe('Manager');
  });

  test('Can get office number via getOfficeNumber()', () => {
    const officeNumber = '4445566';
    const employee = new Manager(null, null, null, officeNumber);
    expect(employee.getOfficeNumber()).toBe(officeNumber);
  });
});