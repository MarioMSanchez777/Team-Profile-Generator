const Manager = require("../lib/Manager");


test("will set office number", () => {
    const testValue = 1;
    const m = new Manager("name", 1, "test@test.com", testValue);
    expect(m.officeNumber).toEqual(testValue);
});

test("will return office number", () => {
    const testValue = 1;
    const m = new Manager("name", 1, "test@test.com", testValue);
    expect(m.getOfficeNumber()).toEqual(testValue);
});

test("will return Manager", () => {
    const testValue = "Manager"
    const m = new Manager("name", 1, "test@test.com", 1);
    expect(m.getRole()).toEqual(testValue);
});
