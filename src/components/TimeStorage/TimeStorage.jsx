import React from "react";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { TimeCard } from "../TimeCard";

import styled from "styled-components";

const StyledSpace = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledTitle = styled(Typography.Title)`
  color: white !important;
  height: 40px;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: calc(100% - 52px);
  overflow-y: auto;
  -webkit-scrolling: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TimeStorage = () => {
  const items = useSelector((state) => state.timeStorage.list);

  return (
    <StyledSpace>
      <StyledTitle level={3}>Saved Times</StyledTitle>
      <StyledList>
        {items.map((item) => (
          <TimeCard key={item.id} data={item} />
        ))}
      </StyledList>
    </StyledSpace>
  );
};
