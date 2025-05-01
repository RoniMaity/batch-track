"use client"

import dynamic from 'next/dynamic';
import { use } from 'react';
import students from "../../../data/students.js";
import Profile from "../../../components/Profile.js";
import { Flex } from "antd";


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
    <Flex justify="center" wrap="wrap" style={{ padding: 40, gap: 40 }}>
      <Profile student={student} />
      <PerformanceRadar student={student} />
    </Flex>
  );
}
