import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';

const Controls = ({
  onAdd, onReset, onRemove, value,
}) => (
  <Wrapper>
    <Button title="Add" clickHandler={onAdd} />
    <Button title="Reset" clickHandler={onReset} disable={value === 0} />
    <Button title="Remove" clickHandler={onRemove} disable={value === 0} />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 300px;
`;

Controls.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Controls;
