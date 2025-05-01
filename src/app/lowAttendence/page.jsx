"use client";

import React from "react";
import { useRouter } from "next/navigation";

import {
  mathsLowAttendence,
  DsaLowAttendence,
  WapLowAttendence,
} from "../../util/LowAttendence";
import { Card, Flex, Table } from "antd";

const LowAttendence = () => {
  const router = useRouter();
  const columnsMaths = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Roll No",
      dataIndex: "roll_no",
      key: "roll_no",
    },
    {
      title: "Attendance",
      key: "attendance",
      render: (_, record) => {
        const subjects = record.subjects;
        const firstSubject = Object.keys(subjects)[2];
        return subjects[firstSubject]?.attendance ?? "N/A";
      },
    },
  ];
  const columnsDSA = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Roll No",
      dataIndex: "roll_no",
      key: "roll_no",
    },
    {
      title: "Attendance",
      key: "attendance",
      render: (_, record) => {
        const subjects = record.subjects;
        const firstSubject = Object.keys(subjects)[1];
        return subjects[firstSubject]?.attendance ?? "N/A";
      },
    },
  ];
  const columnsWAP = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Roll No",
      dataIndex: "roll_no",
      key: "roll_no",
    },
    {
      title: "Attendance",
      key: "attendance",
      render: (_, record) => {
        const subjects = record.subjects;
        const firstSubject = Object.keys(subjects)[0];
        return subjects[firstSubject]?.attendance ?? "N/A";
      },
    },
  ];
  return (
    <div>
      <Flex vertical>
        <h1
          style={{
            textAlign: "center",
            padding: "25px",
            border: "1px solid grey",
            margin: "10px",
          }}
        >
          Students with Low Attendance
        </h1>
        <div>
          <Flex vertical>
            <div style={{ textAlign: "center", padding: "50px" }}>
              <Card>
                <h2>Mathematics II</h2>
              </Card>
            </div>
            <div>
              <Table
                rowKey="id"
                columns={columnsMaths}
                dataSource={mathsLowAttendence}
                onRow={(record) => ({
                  onClick: () => router.push(`/students/${record.id}`),
                })}
              />
            </div>
          </Flex>
        </div>
        <div>
          <Flex vertical>
            <div style={{ textAlign: "center", padding: "50px" }}>
              <Card>
                <h2>Data Structures and Algorithm</h2>
              </Card>
            </div>
            <div>
              <Table
                rowKey="id"
                columns={columnsDSA}
                dataSource={DsaLowAttendence}
                onRow={(record) => ({
                  onClick: () => router.push(`/students/${record.id}`),
                })}
              />
            </div>
          </Flex>
        </div>
        <div>
          <Flex vertical>
            <div style={{ textAlign: "center", padding: "50px" }}>
              <Card>
                <h2>Web Applications</h2>
              </Card>
            </div>
            <div>
              <Table
                rowKey="id"
                columns={columnsWAP}
                dataSource={WapLowAttendence}
                onRow={(record) => ({
                  onClick: () => router.push(`/students/${record.id}`),
                })}
              />
            </div>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default LowAttendence;
