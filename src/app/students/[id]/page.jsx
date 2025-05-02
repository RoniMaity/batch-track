"use client"

import dynamic from 'next/dynamic';
import { use } from 'react';
import students from "../../../data/students.js";
import Profile from "../../../components/Profile.js";
import { Flex } from "antd";

const AttendenceChart = dynamic(
  () => import('../../../components/AttendenceChart.js'), {
  ssr: false,
  loading: () => <div>Loading charts...</div>
}
)

const PerformanceRadar = dynamic(
  () => import('../../../components/PerformanceRadar.js'),
  {
    ssr: false,
    loading: () => <div>Loading chart...</div>
  }
);

export default function StudentDetailPage({ params }) {
  const resolvedParams = use(params);
  const student = students.find((s) => s.id === resolvedParams.id);

  if (!student) {
    return <div style={{ padding: 24 }}>Student not found.</div>;
  }

  return (
    <div>
      <Flex vertical>

        <div>
          <Flex
            justify="space-between"
            align="flex-start"
            style={{
              padding: '24px',
              maxWidth: '1200px',
              margin: '0 auto',
              gap: '48px'
            }}
          >
            <div style={{ flex: '0 0 auto' }}>
              <Profile student={student} />
            </div>
            <div style={{ flex: '1 1 auto', minWidth: '500px' }}>
              <PerformanceRadar student={student} />
            </div>
          </Flex>
        </div>
        <div style={{ textAlign: "center" }} >
          <AttendenceChart student={student} />
        </div>
      </Flex>
    </div>
  );
}
