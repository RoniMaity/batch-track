import students from "../data/students";

let mathsMidSemLowScore = []
let DSAMidSemLowScore = []
let WapMidSemLowScore = []
let mathsLowScore = [];
let DsaLowScore = [];
let WapLowScore = [];

students.forEach((obj) => {
    let MathsMidSemScore = Number(obj.subjects["Mathematics II"].mod_sem_marks);
    let DSAMidSemScore = Number(
        obj.subjects["Data Structures and Algorithms"].mod_sem_marks
    );
    let WAPMidSemScore = Number(obj.subjects["Web Application"].mod_sem_marks);

    let avgMathContestScore =
        Number(
            obj.subjects["Mathematics II"].contest_marks.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            )
        ) / 4;

    let avgDSAContestScore =
        Number(
            obj.subjects["Data Structures and Algorithms"].contest_marks.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            )
        ) / 4;

    let avgWAPContestScore =
        Number(
            obj.subjects["Web Application"].contest_marks.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            )
        ) / 4;
    if (MathsMidSemScore <= 50) {
        mathsMidSemLowScore.push(obj)
    }
    if (DSAMidSemScore <= 50) {
        DSAMidSemLowScore.push(obj)
    }
    if (WAPMidSemScore <= 50) {
        WapMidSemLowScore.push(obj)
    }
    if (avgMathContestScore <= 50) {
        obj['mathsavgContestScore'] = avgMathContestScore
        mathsLowScore.push(obj);
    }
    if (avgDSAContestScore <= 50) {
        obj['DSAavgContestScore'] = avgDSAContestScore
        DsaLowScore.push(obj);
    }
    if (avgWAPContestScore <= 50) {
        obj['WAPavgContestScore'] = avgWAPContestScore
        WapLowScore.push(obj);
    }
});

export {
    mathsLowScore,
    DsaLowScore,
    WapLowScore,
    mathsMidSemLowScore,
    DSAMidSemLowScore,
    WapMidSemLowScore
};
