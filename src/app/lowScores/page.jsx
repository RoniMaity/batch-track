'use client'

import { useRouter } from 'next/navigation'
import {
    mathsLowScore,
    DsaLowScore,
    WapLowScore,
    mathsMidSemLowScore,
    DSAMidSemLowScore,
    WapMidSemLowScore
} from '../../util/LowScores'
import { Card, Flex, Table } from 'antd'

const LowScores = () => {
    const router = useRouter();


    const columnMaths = [
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
            title: "Average Contest Score",
            dataIndex: "mathsavgContestScore",
            key: "mathsavgContestScore"
        }
    ]
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
            title: "Average Contest Score",
            dataIndex: "DSAavgContestScore",
            key: "DSAavgContestScore"
        }
    ]
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
            title: "Average Contest Score",
            dataIndex: "WAPavgContestScore",
            key: "WAPavgContestScore"
        }
    ]

    console.log(mathsLowScore)
    return (
        <div>
            <div>
                <Flex vertical>
                    <div style={{ textAlign: "center" }} >
                        <Card>
                            <h2>
                                Mathematics II
                            </h2>
                        </Card>
                    </div>
                    <div>
                        <Table
                            rowKey='id'
                            columns={columnMaths}
                            dataSource={mathsLowScore}
                            onRow={(record) => ({
                                onClick: () => router.push(`/students/${record.id}`),
                            })}
                        />
                    </div>
                </Flex>
                <div>
                    <Flex vertical>
                        <div style={{ textAlign: "center" }} >
                            <Card>
                                <h2>
                                    Data Structures and Algorithms
                                </h2>
                            </Card>
                        </div>
                        <div>
                            <Table
                                rowKey='id'
                                columns={columnsDSA}
                                dataSource={DsaLowScore}
                                onRow={(record) => ({
                                    onClick: () => router.push(`/students/${record.id}`),
                                })}
                            />
                        </div>
                    </Flex>
                    <div>
                        <Flex vertical>
                            <div style={{ textAlign: "center" }} >
                                <Card>
                                    <h2>
                                        Web Applications
                                    </h2>
                                </Card>
                            </div>
                            <div>
                                <Table
                                    rowKey='id'
                                    columns={columnsWAP}
                                    dataSource={WapLowScore}
                                    onRow={(record) => ({
                                        onClick: () => router.push(`/students/${record.id}`),
                                    })}
                                />
                            </div>
                        </Flex>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LowScores