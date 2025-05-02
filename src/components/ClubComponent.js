import React from 'react';
import { Card, List, Tag, Typography, Alert } from 'antd';

const { Title } = Typography;

const ClubComponent = ({ student }) => {
  const getPositionColor = (position) => {
    switch (position) {
      case 'President':
        return 'gold';
      case 'Vice President':
        return 'blue';
      case 'Secretary':
        return 'green';
      default:
        return 'default';
    }
  };

  return (
    <Card 
      title={<Title level={4}>Extra-Curricular Activities</Title>}
      style={{ 
        width: '100%',
        maxWidth: 400,
        marginTop: 20
      }}
    >
      {student.clubs && student.clubs.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={student.clubs}
          renderItem={(club) => (
            <List.Item>
              <List.Item.Meta
                title={club.name}
                description={
                  <Tag color={getPositionColor(club.position)}>
                    {club.position}
                  </Tag>
                }
              />
            </List.Item>
          )}
        />
      ) : (
        <Alert 
          message="No club activities" 
          type="info" 
          showIcon 
        />
      )}

      {(student.ufm_violations.attendance_offenses > 0 || 
        student.ufm_violations.contest_offenses > 0) && (
        <div style={{ marginTop: 16 }}>
          <Title level={5} style={{ color: '#cf1322' }}>Violations</Title>
          <List>
            {student.ufm_violations.attendance_offenses > 0 && (
              <List.Item>
                <Tag color="red">
                  Attendance Violations: {student.ufm_violations.attendance_offenses}
                </Tag>
              </List.Item>
            )}
            {student.ufm_violations.contest_offenses > 0 && (
              <List.Item>
                <Tag color="red">
                  Contest Violations: {student.ufm_violations.contest_offenses}
                </Tag>
              </List.Item>
            )}
          </List>
        </div>
      )}

      {student.interview.applied && (
        <div style={{ marginTop: 16 }}>
          <Title level={5}>Interviews Applied</Title>
          <List
            dataSource={student.interview.companies}
            renderItem={(company) => (
              <List.Item>
                <Tag color="processing">{company}</Tag>
              </List.Item>
            )}
          />
        </div>
      )}
    </Card>
  );
};

export default ClubComponent;