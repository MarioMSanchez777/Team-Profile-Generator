const Employee = require("../lib/Employee");


test("will set a employee name", () => {
    const name = "name";
    const e = new Employee(name);
    expect(e.name).toEqual(name);
});

test("will set a employee id", () => {
    const testValue = 100;
    const e = new Employee("name", testValue);
    expect(e.id).toEqual(testValue);
});

test("will set a employee email", () => {
    const testValue = "test@test.com";
    const e = new Employee("name", 1, testValue);
    expect(e.email).toEqual(testValue);
});

test("will get a name.. getName()", () => {
    const testValue = "name"
    const e = new Employee(testValue);
    expect(e.getName()).toEqual(testValue);
});

test("will get a id.. getId()", () => {
    const testValue = 100;
    const e = new Employee("name", testValue);
    expect(e.getId()).toEqual(testValue);
});

test("will get a email..getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("name", 1, testValue);
    expect(e.getEmail()).toEqual(testValue);
});

test("will return a  employee wtesth getRole()", () => {
    const testValue = "Employee";
    const e = new Employee("name", 1, "test@test.com");
    expect(e.getRole()).toEqual(testValue);
});
