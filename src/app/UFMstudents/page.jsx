"use client"
import React from 'react';
import Link from 'next/link';
import { Table, Typography } from 'antd';
import { studentsWithUFMContest, studentsWithUFMAttendence } from '../../util/studentsWithUFM';
const { Title } = Typography;
import "../../app/globals.css"

const UFMStudents = () => {
  // Simple columns setup
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Link href={`/students/${record.id}`} >
          {text}
        </Link>
      )
    },
    {
      title: 'Roll No',
      dataIndex: 'roll_no',
      key: 'roll_no'
    },
    {
      title: 'Violations',
      dataIndex: 'ufm_violations',
      key: 'violations',
      render: (violations, record) => (
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {record.ufm_violations.attendance_offenses || record.ufm_violations.contest_offenses}
        </span>
      )
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 40 }}>
        <Title level={3}>Students with Attendance Violations</Title>
        <Table 
          dataSource={studentsWithUFMAttendence}
          columns={columns}
          pagination={{ pageSize: 10 }}
          rowKey="id"
          className='custom'
        />
      </div>
      <div>
        <Title level={3}>Students with Contest Violations</Title>
        <Table 
          dataSource={studentsWithUFMContest}
          columns={columns}
          pagination={{ pageSize: 10 }}
          rowKey="id"
        />
      </div>
    </div>
  );
};

export default UFMStudents;