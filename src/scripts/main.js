const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    },
];
class User {
    constructor({firstName, lastName}) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const user1 = new User({
    firstName: 'Mariya',
    lastName: 'Hurlenia',
});

console.log(user1);


class Student extends User{
    constructor({admissionYear, courseName, ...props }) {
        super(props);
        this.admissionYear = admissionYear;
        this.courseName=courseName;
    }
    get course(){
        return 2024-this.admissionYear;
    }
}

const student = new Student({
    firstName: 'Maria',
    lastName: 'Hurlen',
    admissionYear: 2021,
    courseName:'JavaScript',
});
console.log(student);


class Students{
    constructor(students) {
        this.students = students;
    }
    sortArr(){
        return this.students.sort((a, b) => b.admissionYear-a.admissionYear)
            .map(student => `${student.firstName} ${student.lastName} - ${student.courseName}, ${student.course =2024-student.admissionYear} курс`);
    }

    // sortArr(){
    //     return this.students.sort((a, b) => b.admissionYear-a.admissionYear)
    //      .map(student => `${user1.fullName} - ${student.courseName}, ${student.course} курс`);
    // }

}

const students = new Students(studentsData);

console.log(students.sortArr());










