import React from 'react';
import styled from 'react-emotion';
import background from '../public/static/images/background.jpg';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  padding: 50px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 50px;
  color: white;
`;

export default function App() {
  return (
    <AppWrapper>
      <Heading>A change is coming</Heading>
    </AppWrapper>
  );
}
