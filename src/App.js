import React from 'react';
import styled from 'react-emotion';
import Placeholder from './components/Placeholder';

const Heading = styled.h1`
  font-size: 50px;
  color: white;
`;

export default function App() {
  return (
    <Placeholder>
      <Heading>A change is coming</Heading>
    </Placeholder>
  );
}
