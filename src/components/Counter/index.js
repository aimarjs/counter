import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import CounterValue from './CounterValue';

const Counter = ({
  value, onAdd, onReset, onRemove,
}) => (
  <Wrapper>
    <CounterValue id="value" value={value} />
    <Controls>
      <Button title="+" id="add" clickHandler={onAdd} />
      <Button title="Reset" id="remove" clickHandler={onReset} disable={value === 0} />
      <Button title="-" id="reset" clickHandler={onRemove} disable={value === 0} />
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

Counter.defaultProps = {
  value: 0,
};

Counter.propTypes = {
  value: PropTypes.number,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Counter;
