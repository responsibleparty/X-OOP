
class Employee{
    //constructor needed to add properties
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){ //getter methods, to retrieve property of class
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

// Export the class so it could be used
module.exports = Employee;