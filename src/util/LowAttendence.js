import students from "../data/students";

let mathsLowAttendence = [];
let DsaLowAttendence = [];
let WapLowAttendence = [];

students.forEach((obj) => {
  if (Number(obj.subjects["Mathematics II"].attendance) <= 75){
    mathsLowAttendence.push(obj);
  }
  if (obj.subjects["Data Structures and Algorithms"].attendance <= 75) {
    DsaLowAttendence.push(obj);
  }
  if (obj.subjects["Web Application"].attendance <= 75) {
    WapLowAttendence.push(obj);
  }
});

export { mathsLowAttendence, DsaLowAttendence, WapLowAttendence };
