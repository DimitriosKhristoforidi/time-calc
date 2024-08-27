import React, { useState } from "react";
import { Space, Card, Typography, Button } from "antd";

import { CopyOutlined, CheckOutlined } from "@ant-design/icons";

import styled from "styled-components";

const StyledCardHeader = styled(Typography.Title)`
  color: rgba(0, 0, 0, 0.45) !important;
  font-size: 16px !important;
  font-weight: 400 !important;
`;

const StyledCardTime = styled(Typography.Title)`
  margin-top: 10px !important;
  margin: 0 !important;
  font-size: 24px !important;
`;

const StyledButton = styled(Button)`
  padding: 0;
  height: auto;
`;

export const TimeCard = ({ data }) => {
  const { id, name, time } = data;
  const [icon, setIcon] = useState(<CopyOutlined />);

  const handleCopy = (time) => {
    navigator.clipboard.writeText(time);
    setIcon(<CheckOutlined />);
    setTimeout(() => {
      setIcon(<CopyOutlined />);
    }, 1000);
  };

  return (
    <Card type="inner" key={id}>
      <StyledCardHeader>{name}</StyledCardHeader>
      <Space align="center">
        <StyledCardTime>{time}</StyledCardTime>
        <StyledButton
          size="large"
          icon={icon}
          type="secondary"
          onClick={() => handleCopy(time)}
        />
      </Space>
    </Card>
  );
};
