var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, rollNumber) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.rollNumber = rollNumber;
        return _this;
    }
    Student.prototype.enrollForCourses = function (course) {
        this.courses.push(course);
    };
    Student.prototype.createPin = function () {
        var pin = Math.round(Math.random() * 1000);
        console.log(pin);
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.salary = salary;
        return _this;
    }
    Teacher.prototype.assignCourse = function (course) {
        this.courses.push(course);
    };
    return Teacher;
}(Person));
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.students = [];
        this.teachers = [];
        this.id = id;
        this.name = name;
    }
    Course.prototype.addStudent = function (student) {
        this.students.push(student);
        student.enrollForCourses(this);
    };
    Course.prototype.setTeacher = function (teacher) {
        this.teachers.push(teacher);
    };
    return Course;
}());
var student1 = new Student("Jazil", 16, 2345);
var student2 = new Student("Sulaiman", 16, 6662);
console.log("your pincode is", student1.createPin());
console.log(student2);
var teacher1 = new Teacher("Zia", 65, 50000);
var teacher2 = new Teacher("Hamza", 22, 30000);
teacher1.assignCourse("Metaverse");
teacher2.assignCourse("AI");
console.log(teacher1);
var course1 = new Course("course1", "AI");
course1.addStudent(student1);
course1.addStudent(student2);
console.log(course1);
