class Student {
  constructor(sId, sName) {
    this.id = sId;
      this.name = sName;
      this.school = "Pilot High School"
  }
}

const student1 = new Student(1212, "faysal");
const student2 = new Student(10101, "shuvo");

console.log(student1.name, student2.name);
