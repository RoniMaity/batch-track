import React from 'react'
import { Card, Descriptions } from 'antd';
import Image from 'next/image';
const { Meta } = Card;
import PerformanceRadar from './PerformanceRadar';

const Profile = ({ student }) => {
  console.log(student)
  return (
    <div style={{ width: 320 }}>
      <Card
        hoverable
        style={{ marginBottom: 16 }}
        cover={
          <Image
            src="/60111.jpg"
            alt={`${student.name}'s profile`}
            width={320}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        }
      >
        <Meta 
          title={student.name}
          description={`Roll No: ${student.id}`}
        />
      </Card>
      
      <Card title="Student Details" style={{
        width:"320px"
      }} >
        <Descriptions column={1}>
          <Descriptions.Item label="Date Of Birth">
            {student.dob}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {student.email}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            {student.phone_no}
          </Descriptions.Item>
          <Descriptions.Item label="Graduation Year">
            {student.graduation_year}
          </Descriptions.Item>
          <Descriptions.Item label="Hostel">
            {student.hostel}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default Profile