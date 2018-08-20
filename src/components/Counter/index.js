import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import CounterValue from './CounterValue';

const Counter = props => (
  <Wrapper>
    <CounterValue value={props.value} />
    <Controls>
      <Button title="Add" clickHandler={props.onAdd} />
      <Button title="Reset" clickHandler={props.onReset} disable={props.value === 0} />
      <Button title="Remove" clickHandler={props.onRemove} disable={props.value === 0} />
    </Controls>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%
`;

const Controls = styled.div`
  margin: 0 auto;
  max-width: 300px;
`;

export default Counter;
