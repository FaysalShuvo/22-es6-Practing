class Parent {
  constructor() {
    this.fatherName = "Schwergnegger";
  }
}

class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
}

const baby = new Child("Arnold");
console.log(baby);
