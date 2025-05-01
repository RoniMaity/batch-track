"use client";
import BatchAverageMarksForEachContest from "../components/BatchAverageMarksForEachContest";
import BatchAverageAttendence from "../components/BatchAverageAttendence";

export default function Dashbored() {
  return (
    <div>
    <BatchAverageMarksForEachContest/>
    <BatchAverageAttendence/>
    </div>
  );
}
