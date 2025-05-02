import React from 'react';
import { Flex } from 'antd';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar, Line, Legend } from 'recharts';
import { avgAttendenceforDSA, avgAttendenceforMaths, avgAttendenceforWAP } from '../util/AttendenceBatchAvg';

const AttendenceChart = ({ student }) => {
    // Fix average calculation with proper grouping
    const avgAttendance = (avgAttendenceforDSA + avgAttendenceforMaths + avgAttendenceforWAP) / 3;

    const data = [
        {
            subject: "Web Applications",
            Student: student.subjects["Web Application"].attendance,
            Average: avgAttendenceforWAP
        },
        {
            subject: "Data Structures and Algorithms",
            Student: student.subjects["Data Structures and Algorithms"].attendance,
            Average: avgAttendenceforDSA
        },
        {
            subject: "Mathematics II",
            Student: student.subjects["Mathematics II"].attendance,
            Average: avgAttendenceforMaths
        }
    ];

    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <Flex vertical>
                <h1 style={{ 
                    textAlign: "center", 
                    padding: "10px", 
                    border: "1px solid grey", 
                    marginBottom: "20px",
                    borderRadius: "4px"
                }}>
                    Attendance Statistics
                </h1>
                <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={data}>
                        <XAxis dataKey="subject" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Bar 
                            name={`${student.name}'s Attendance`} 
                            dataKey="Student" 
                            barSize={20} 
                            fill="rgb(5, 24, 82)" 
                        />
                        <Line 
                            name="Batch's Average Attendence" 
                            type="monotone" 
                            dataKey="Average" 
                            stroke="#ff7300" 
                        />
                        <Legend></Legend>
                    </ComposedChart>
                </ResponsiveContainer>
            </Flex>
        </div>
    );
};

export default AttendenceChart;