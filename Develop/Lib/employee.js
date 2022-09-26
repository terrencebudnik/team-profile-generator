class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

class Manager extends Employee {
  constructor(office) {
    this.office = office;
  }
}

class Engineer extends Employee {
  constructor(git) {
    this.git = git;
  }
}

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
}
