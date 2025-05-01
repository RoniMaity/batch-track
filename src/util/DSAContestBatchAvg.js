import students from "../data/students";

let totalmarksforMidsem = 0;
students.forEach((obj) => {
  totalmarksforMidsem += obj.subjects["Data Structures and Algorithms"].mod_sem_marks;
});
let totalmarksforContest1 = 0;
students.forEach((obj) => {
  totalmarksforContest1 += obj.subjects["Data Structures and Algorithms"]['contest_marks'][0];
});
let totalmarksforContest2 = 0;
students.forEach((obj) => {
  totalmarksforContest2 += obj.subjects["Data Structures and Algorithms"]['contest_marks'][1];
});
let totalmarksforContest3 = 0;
students.forEach((obj) => {
  totalmarksforContest3 += obj.subjects["Data Structures and Algorithms"]['contest_marks'][2];
});
let totalmarksforContest4 = 0;
students.forEach((obj) => {
  totalmarksforContest4 += obj.subjects["Data Structures and Algorithms"]['contest_marks'][3];
});

const batchAverageWAPContest1 = totalmarksforContest1 / 40
const batchAverageWAPContest2 = totalmarksforContest2 / 40
const batchAverageWAPContest3 = totalmarksforContest3 / 40
const batchAverageWAPContest4 = totalmarksforContest4 / 40
const batchAverageMathsMidsem = totalmarksforMidsem / 40;

const dataForAvgContestMarksInDSA = [
  {
    name:'Contest1',
    Average_score:batchAverageWAPContest1
  },
  {
    name:'Contest2',
    Average_score:batchAverageWAPContest2
  },
  {
    name: "MidSems",
    Average_score: batchAverageMathsMidsem,
  },
  {
    name:'Contest3',
    Average_score:batchAverageWAPContest3
  },
  {
    name:'Contest4',
    Average_score:batchAverageWAPContest4
  },
]

export default dataForAvgContestMarksInDSA;