const Intern = require("../lib/Intern");


test("will set a school", () => {
    const testValue = "LSU";
    const e = new Intern("name", 1, "test@test.com", testValue);
    expect(e.school).toEqual(testValue);
});

test("will return a school", () => {
    const testValue = "UOA";
    const e = new Intern("name", 1, "test@test.com", testValue);
    expect(e.getSchool()).toEqual(testValue);
});

test("will return Intern", () => {
    const testValue = "Intern"
    const e = new Intern("name", 1, "test@test.com", "UOA");
    expect(e.getRole()).toEqual(testValue);
});