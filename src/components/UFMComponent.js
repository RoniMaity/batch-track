import React from 'react';
import { Card, Alert, List, Tag, Typography } from 'antd';

const { Title, Text } = Typography;

const UFMComponent = ({ student }) => {
  if (!student?.ufm_violations) {
    return (
      <Card
        title={<Title level={4}>Disciplinary Record</Title>}
        style={{
          width: '100%',
          maxWidth: 400,
          marginTop: 20,
          marginLeft: 20
        }}
      >
        <Alert
          message="No disciplinary record available"
          type="info"
          showIcon
        />
      </Card>
    );
  }

  const { attendance_offenses = 0, contest_offenses = 0 } = student.ufm_violations;
  const totalViolations = attendance_offenses + contest_offenses;

  const getViolationSeverity = (count) => {
    if (count === 0) return 'success';
    if (count === 1) return 'warning';
    return 'error';
  };

  const getViolationMessage = (count) => {
    if (count === 0) return 'No Violations';
    if (count === 1) return '1 Violation';
    return `${count} Violations`;
  };

  return (
    <Card
      title={<Title level={4}>Disciplinary Record</Title>}
      style={{
        width: '100%',
        maxWidth: 400,
        marginTop: 20,
        marginLeft: 20
      }}
    >
      <Alert
        message={getViolationMessage(totalViolations)}
        type={getViolationSeverity(totalViolations)}
        showIcon
        style={{ marginBottom: 16 }}
      />

      <List>
        <List.Item>
          <Text>Attendance Violations:</Text>
          <Tag color={getViolationSeverity(attendance_offenses)}>
            {attendance_offenses}
          </Tag>
        </List.Item>
        <List.Item>
          <Text>Contest Violations:</Text>
          <Tag color={getViolationSeverity(contest_offenses)}>
            {contest_offenses}
          </Tag>
        </List.Item>
      </List>
    </Card>
  );
};

export default UFMComponent;