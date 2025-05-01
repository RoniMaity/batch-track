"use client";

import dynamic from "next/dynamic";
import dataForAvgContestMarksInMaths from "../util/MathsContestBatchAvg";
import dataForAvgContestMarksInWAP from "../util/WAPContestBatchAvg.js";
import dataForAvgContestMarksInDSA from "../util/DSAContestBatchAvg";
import { Flex } from "antd";

const AverageMarksLineChart = dynamic(
  () => import("../components/AverageMarksLineChart"),
  { ssr: false } // <-- this disables server-side rendering for this component
);

const BatchAverageMarksForEachContest = () => {
  return (
    <div>
      <div>
        <Flex vertical justify="center" align="center">
          <div
            style={{
              border: "1px solid grey",
              padding: "10px",
              margin: "20px",
              width: "500px",
            }}
          >
            <Flex vertical justify="center" align="center">
              <div style={{ padding: 2, paddingTop: 15 }}>
                <h1>Batch Average Scores</h1>
              </div>
              <div style={{ paddingBottom: 20 }}>
                <p>For each subject in each contest</p>
              </div>
            </Flex>
          </div>
          <div>
            <Flex justify="center" gap="large">
              <AverageMarksLineChart
                data={dataForAvgContestMarksInDSA}
                subject={"Data Structures and Algorithms"}
              />
              <AverageMarksLineChart
                data={dataForAvgContestMarksInMaths}
                subject={"Mathematics II"}
              />
              <AverageMarksLineChart
                data={dataForAvgContestMarksInWAP}
                subject={"Web Applications"}
              />
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default BatchAverageMarksForEachContest;
