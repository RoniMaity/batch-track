'use client'

import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts'
import { ComposedChart,XAxis,YAxis,Tooltip,Bar,Line,CartesianGrid } from 'recharts';
import { batchAverageMathsContest } from '../util/MathsContestBatchAvg';
import { batchAverageWAPContest } from '../util/WAPContestBatchAvg';
import { batchAverageDSAContest } from '../util/DSAContestBatchAvg';
import { Flex } from 'antd';


const PerformanceRadar = ({ student }) => {
    console.log(student)
    console.log(batchAverageMathsContest)
    const mean = arr => arr.reduce((sum, val) => sum + val, 0) / arr.length;

    let data = [
        {
            subject: "Mathematics II",
            A: mean(student.subjects["Mathematics II"].contest_marks),
            B: batchAverageMathsContest
        },
        {
            subject: "Web Applications",
            A: mean(student.subjects["Web Application"].contest_marks),
            B: batchAverageWAPContest
        },
        {
            subject: "Data Structures and Algorithms",
            A: mean(student.subjects["Data Structures and Algorithms"].contest_marks),
            B: batchAverageDSAContest
        }
    ]
    return (
        <div>
            <Flex vertical>
                <h1 style={{textAlign:"center",padding:"10px",border:"1px solid grey",marginBottom:"15px"}} >Overall Contest Stats</h1>
                <ResponsiveContainer width="100%" height={350} style={{marginBottom:"25px"}} >
                    <RadarChart outerRadius={150} data={data}>
                        <Legend />
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={45} domain={[0, 100]} stroke="rgb(5, 24, 82)" />
                        <Radar name={student.name} dataKey="A" stroke="rgb(5, 24, 82)" fill=" rgb(5, 24, 82)" fillOpacity={0.8} />
                        <Radar name="Average Score" dataKey="B" stroke="#ff7300" fill="#ff7300" fillOpacity={0.3} />
                    </RadarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width='100%' height={350}>
                    <ComposedChart width={730} height={250} data={data}>
                        <XAxis dataKey="subject" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Bar name={student.name}  dataKey="A" barSize={20} fill="rgb(5, 24, 82)" />
                        <Line name='Average Score' type="monotone" dataKey="B" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </Flex>
        </div >
    )
}

export default PerformanceRadar