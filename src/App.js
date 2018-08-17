import React from 'react';
import styled from 'react-emotion';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

const Heading = styled.h1`
  font-size: 60px;
  color: white;
`;

export default function App() {
  return (
    <AppWrapper>
      <Heading>Hi!</Heading>
    </AppWrapper>
  );
}
