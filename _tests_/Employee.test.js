const Employee = require("../lib/Employee");

describe("Employee", () =>{
    test("Getting the correct name", () =>{
        const newEmployee = new Employee("Cecilia", 107, "cc@gmail.com");
        expect (newEmployee.getName()).toBe("Cecilia");
    })
    test("Getting the correct id", () =>{
        const newEmployee = new Employee("Cecilia", 107, "cc@gmail.com");
        expect (newEmployee.getId()).toBe(107);
    })
    test("Getting the correct email", () =>{
        const newEmployee = new Employee("Cecilia", 107, "cc@gmail.com");
        expect (newEmployee.getEmail()).toBe("cc@gmail.com");
    })
    test("Getting the correct Role", () =>{
        const newEmployee = new Employee("Cecilia", 107, "cc@gmail.com");
        expect (newEmployee.getRole()).toBe("Employee");
    })
});