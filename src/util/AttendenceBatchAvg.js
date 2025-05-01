import students from "../data/students";

let totalmarksforMidsem = 0;
students.forEach((obj) => {
  totalmarksforMidsem += obj.subjects["Mathematics II"].mod_sem_marks;
});

let totalAttendenceforMaths = 0;
students.forEach((obj) => {
  totalAttendenceforMaths += obj.subjects["Mathematics II"].attendance;
});
const avgAttendenceforMaths = totalAttendenceforMaths/40

let totalAttendenceforWAP = 0;
students.forEach((obj) => {
    totalAttendenceforWAP += obj.subjects["Web Application"].attendance;
});
const avgAttendenceforWAP = totalAttendenceforWAP/40

let totalAttendenceforDSA = 0;
students.forEach((obj) => {
    totalAttendenceforDSA += obj.subjects["Data Structures and Algorithms"].attendance;
});
const avgAttendenceforDSA = totalAttendenceforDSA/40

let avgAttendence = avgAttendenceforDSA+avgAttendenceforMaths+avgAttendenceforWAP
avgAttendence = Math.round(avgAttendence / 3)

export {avgAttendenceforDSA,avgAttendenceforMaths,avgAttendenceforWAP,avgAttendence}