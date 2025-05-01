import students from "../data/students";

let totalmarksforMidsem = 0;
students.forEach((obj) => {
  totalmarksforMidsem += obj.subjects["Web Application"].mod_sem_marks;
});

let totalmarksforContest1 = 0;
students.forEach((obj) => {
  totalmarksforContest1 += obj.subjects["Web Application"]["contest_marks"][0];
});
let totalmarksforContest2 = 0;
students.forEach((obj) => {
  totalmarksforContest2 += obj.subjects["Web Application"]["contest_marks"][1];
});
let totalmarksforContest3 = 0;
students.forEach((obj) => {
  totalmarksforContest3 += obj.subjects["Web Application"]["contest_marks"][2];
});
let totalmarksforContest4 = 0;
students.forEach((obj) => {
  totalmarksforContest4 += obj.subjects["Web Application"]["contest_marks"][3];
});

const batchAverageWAPContest1 = totalmarksforContest1 / 40;
const batchAverageWAPContest2 = totalmarksforContest2 / 40;
const batchAverageWAPContest3 = totalmarksforContest3 / 40;
const batchAverageWAPContest4 = totalmarksforContest4 / 40;
const batchAverageWAPMidsem = totalmarksforMidsem / 40;

const batchAverageWAPContest = (batchAverageWAPContest1+batchAverageWAPContest2+batchAverageWAPContest3+batchAverageWAPContest4)/4

const dataForAvgContestMarksInWAP = [
  {
    name: "Contest1",
    Average_score: batchAverageWAPContest1,
  },
  {
    name: "Contest2",
    Average_score: batchAverageWAPContest2,
  },
  {
    name: "MidSems",
    Average_score: batchAverageWAPMidsem,
  },
  {
    name: "Contest3",
    Average_score: batchAverageWAPContest3,
  },
  {
    name: "Contest4",
    Average_score: batchAverageWAPContest4,
  },
];

export{batchAverageWAPContest}
export default dataForAvgContestMarksInWAP;
