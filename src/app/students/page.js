"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Table, Input } from "antd";
import students from "../../data/students.js";

const { Search } = Input;

export default function StudentsPage() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.roll_no} ${student.email}`
      .toLowerCase()
      .includes(searchText)
  );

  const columns = [
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Graduation Year",
      dataIndex: "graduation_year",
      key: "graduation_year",
    },
    {
      title: "Hostel",
      dataIndex: "hostel",
      key: "hostel",
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        All Students
      </h1>
      <Search
        placeholder="Search by name, roll no, or email"
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: 16, maxWidth: 400 }}
      />
      <Table
        dataSource={filteredStudents}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        onRow={(record) => ({
          onClick: () => router.push(`/students/${record.id}`),
        })}
      />
    </div>
  );
}
