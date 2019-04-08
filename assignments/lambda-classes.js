// CODE here for your Lambda Classes
class Person {
    constructor(atts) {
      this.name = atts.name;
      this.age = atts.age;
      this.location = atts.location;
      this.gender = atts.gender;
    }
    speak() {
      return `Hello my name is ${this.name} and I am from ${this.location}.`;
    }
  }

  class Instructor extends Person {
    constructor(atts) {
      super(atts);
      this.specialty = atts.specialty;
      this.favLanguage = atts.favLanguage;
      this.catchPhrase = atts.catchPhrase;
    }
    demo(subject) {
      return `Today we are learning about ${subject}.`;
    }
  
    grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}!`;
    }
  }

  class Student extends Person {
    constructor(atts) {
      super(atts);
      this.previousBackground = atts.previousBackground;
      this.className = atts.className;
      this.favSubjects = atts.favSubjects;
    }
    listsSubjects() {
      console.log(`My favorite subjects are ${this.favSubjects}`);
    }

  }

  class ProjectManager extends Instructor {
    constructor(atts) {
      super(atts);
      this.gradClassName = atts.gradClassName;
      this.favInstructor = atts.favInstructor;
    }
  }
  