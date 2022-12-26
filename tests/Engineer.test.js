const Engineer = require("../lib/Engineer");


test("will set GitHub", () => {
    const testValue = "GitHub  ";
    const e = new Engineer("name", 1, "test@test.com", testValue);
    expect(e.github).toEqual(testValue);
});



test("will return Engineer", () => {
    const testValue = "Engineer"
    const e = new Engineer("name", 1, "test@test.com", "GitHub user");
    expect(e.getRole()).toEqual(testValue);
});
