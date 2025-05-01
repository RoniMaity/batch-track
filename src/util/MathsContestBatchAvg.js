import students from "../data/students";

let totalmarksforMidsem = 0;
students.forEach((obj) => {
  totalmarksforMidsem += obj.subjects["Mathematics II"].mod_sem_marks;
});

let totalmarksforContest1 = 0;
students.forEach((obj) => {
  totalmarksforContest1 += obj.subjects["Mathematics II"]["contest_marks"][0];
});
let totalmarksforContest2 = 0;
students.forEach((obj) => {
  totalmarksforContest2 += obj.subjects["Mathematics II"]["contest_marks"][1];
});
let totalmarksforContest3 = 0;
students.forEach((obj) => {
  totalmarksforContest3 += obj.subjects["Mathematics II"]["contest_marks"][2];
});
let totalmarksforContest4 = 0;
students.forEach((obj) => {
  totalmarksforContest4 += obj.subjects["Mathematics II"]["contest_marks"][3];
});

const batchAverageMathsContest1 = totalmarksforContest1 / 40;
const batchAverageMathsContest2 = totalmarksforContest2 / 40;
const batchAverageMathsContest3 = totalmarksforContest3 / 40;
const batchAverageMathsContest4 = totalmarksforContest4 / 40;
const batchAverageMathsMidsem = totalmarksforMidsem / 40;

const dataForAvgContestMarksInMaths = [
  {
    name: "Contest1",
    Average_score: batchAverageMathsContest1,
  },
  {
    name: "Contest2",
    Average_score: batchAverageMathsContest2,
  },
  {
    name: "MidSems",
    Average_score: batchAverageMathsMidsem,
  },
  {
    name: "Contest3",
    Average_score: batchAverageMathsContest3,
  },
  {
    name: "Contest4",
    Average_score: batchAverageMathsContest4,
  },
];

export default dataForAvgContestMarksInMaths;
