import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CounterValue = ({ value }) => (
  <Value>{value}</Value>
);

const Value = styled.h2`
  font-size: 64px;
`;

CounterValue.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterValue;
