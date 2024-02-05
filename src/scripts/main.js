
const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    // const text1 = document.getElementById('text1');
    // const text2 = document.getElementById('text2');
    // const text3 = document.getElementById('text3');

    next(){
        if (this.current === undefined){
            this.current = this.data;
        }
        // if (this.current>this.data.length){
        //     return this.data[2];
        // }
        return{
            done:false,
            value:this.current++,
        };
    },
};
console.log(colors);
console.log(colors.next().value);
console.log(colors.next().value);
console.log(colors.next().value);
console.log(colors.next().value);
console.log(colors.next().value);
// for(const value of data) {
//     console.log(value);
// }

const changeStyle = id => event => {
    event.target.style.color = colors.next(id).value;
};
console.log(changeStyle());







// const studentsData = [
//     {
//         firstName: 'Василий',
//         lastName: 'Петров',
//         admissionYear: 2019,
//         courseName: 'Java',
//     },
//     {
//         firstName: 'Иван',
//         lastName: 'Иванов',
//         admissionYear: 2018,
//         courseName: 'JavaScript',
//     },
//     {
//         firstName: 'Александр',
//         lastName: 'Федоров',
//         admissionYear: 2017,
//         courseName: 'Python',
//     },
//     {
//         firstName: 'Николай',
//         lastName: 'Петров',
//         admissionYear: 2019,
//         courseName: 'Android',
//     },
// ];
// class User {
//     constructor({firstName, lastName}) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
//
// const user1 = new User({
//     firstName: 'Mariya',
//     lastName: 'Hurlenia',
// });
//
// console.log(user1);
//
//
// class Student extends User{
//     constructor({admissionYear, courseName, ...props }) {
//         super(props);
//         this.admissionYear = admissionYear;
//         this.courseName=courseName;
//     }
//     get course(){
//         return 2024-this.admissionYear;
//     }
// }
//
// const student = new Student({
//     firstName: 'Maria',
//     lastName: 'Hurlen',
//     admissionYear: 2021,
//     courseName:'JavaScript',
// });
// console.log(student);
//
//
// class Students{
//     constructor(students) {
//         this.students = students;
//     }
//     sortArr(){
//         return this.students.sort((a, b) => b.admissionYear-a.admissionYear)
//             .map(student => `${student.firstName} ${student.lastName} - ${student.courseName}, ${student.course =2024-student.admissionYear} курс`);
//     }
// }
//
// const students = new Students(studentsData);
//
// console.log(students.sortArr());
//
//
//
//
//
//
//
//
//
//
