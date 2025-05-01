'use client'

import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts'
import { batchAverageMathsContest } from '../util/MathsContestBatchAvg';
import { batchAverageWAPContest } from '../util/WAPContestBatchAvg';
import { batchAverageDSAContest } from '../util/DSAContestBatchAvg';


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
            <h1>Overall Performance</h1>
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart outerRadius={90} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name={student.name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Average Score" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PerformanceRadar