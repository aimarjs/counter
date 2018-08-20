import React from 'react';
import styled from 'styled-components';

const CounterValue = props => (
  <Value>{props.value}</Value>
);

const Value = styled.h2`
  font-size: 64px;
`;

export default CounterValue;
