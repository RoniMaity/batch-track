import students from "../data/students";
const studentswithUFM = students.filter(student => student.ufm_violations.attendance_offenses > 0 || student.ufm_violations.contest_offenses > 0)
const studentsWithUFMAttendence = students.filter(student => student.ufm_violations.attendance_offenses > 0)
const studentsWithUFMContest = students.filter(student => student.ufm_violations.contest_offenses > 0)
export { studentswithUFM,studentsWithUFMAttendence,studentsWithUFMContest };