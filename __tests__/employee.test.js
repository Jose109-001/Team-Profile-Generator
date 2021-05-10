const Employee = require('../lib/Employee');

describe('Employee constructor', () => {
  test('Can instantiate Employee instance', () => {
    const employee = new Employee();
    expect(employee).toBeInstanceOf(Employee);
  });

  test('Can set name via constructor arguments', () => {
    const name = 'John Doe';
    const employee = new Employee(null, name);
    expect(employee.name).toBe(name);
  });

  test('Can set id via constructor arguments', () => {
    const id = 123456;
    const employee = new Employee(id);
    expect(employee.id).toBe(id);
  });

  test('Can set id email constructor arguments', () => {
    const email = 'test@gmail.com';
    const employee = new Employee(null, null, email);
    expect(employee.email).toBe(email);
  });

  test('Can get name via getName()', () => {
    const name = 'Jane Doe';
    const employee = new Employee(null, name);
    expect(employee.getName()).toBe(name);
  });

  test('Can get id via getId()', () => {
    const id = 77777;
    const employee = new Employee(id);
    expect(employee.getId()).toBe(id);
  });

  test('Can get email via getEmail()', () => {
    const email = 'email@email.com';
    const employee = new Employee(null, null, email);
    expect(employee.getEmail()).toBe(email);
  });

  test('getRole() should return "Employee"', () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe('Employee');
  });
});
