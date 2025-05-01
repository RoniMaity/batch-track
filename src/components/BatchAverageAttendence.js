"use client";

import dynamic from "next/dynamic";
import {
  avgAttendenceforDSA,
  avgAttendenceforMaths,
  avgAttendenceforWAP,
  avgAttendence,
} from "../util/AttendenceBatchAvg";
import { Flex } from "antd";

const AverageAttendancePieChart = dynamic(
  () => import("../components/AverageAttendancePieChart"),
  { ssr: false }
);
const BatchAverageAttendence = () => {
  console.log(
    avgAttendence,
    avgAttendenceforDSA,
    avgAttendenceforMaths,
    avgAttendenceforWAP
  );
  return (
    <>
      <div>
        <Flex>
          <div>
            <div style={{ padding: 20 }}>
              <Flex vertical justify="center" align="center">
                <div
                  style={{
                    border: "1px solid grey",
                    padding: "8px",
                    margin: "20px",
                    width: "500px",
                  }}
                >
                  <Flex vertical align="center">
                    <div style={{paddingTop:15}} >
                      <h1>Batch Average Attendance</h1>
                    </div>
                    <div style={{ paddingBottom: 20 }}>
                      <p>For each subject</p>
                    </div>
                  </Flex>
                </div>
                <div>
                  <Flex>
                    <div>
                    <h3>
                      Data Structures and Algorithms
                    </h3>
                      <AverageAttendancePieChart
                        present={avgAttendenceforDSA}
                        width={290}
                        height={300}
                        outerRadius={50}
                      />
                    </div>
                    <div>
                    <Flex vertical align="center" >
                    <h3>
                      Mathematics II
                    </h3>
                      <AverageAttendancePieChart
                        present={avgAttendenceforMaths}
                        width={290}
                        height={300}
                        outerRadius={50}
                      />
                    </Flex>
                    </div>
                    <div>
                    <Flex vertical align="center" >
                    <h3>
                      Web Applications
                    </h3>
                      <AverageAttendancePieChart
                        present={avgAttendenceforWAP}
                        width={290}
                        height={300}
                        outerRadius={50}
                      />
                    </Flex>
                    </div>
                  </Flex>
                </div>
              </Flex>
            </div>
          </div>
          <div style={{
            marginTop:80
          }} >
          <Flex vertical align="center">
          <h2>Overall Batch Attendence</h2>
            <AverageAttendancePieChart
              present={avgAttendence}
              width={350}
              height={400}
              outerRadius={100}
            />
          </Flex>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default BatchAverageAttendence;
