import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ disable, title, clickHandler }) => (
  <StyledButton type="button" onClick={clickHandler} disabled={disable}>{title}</StyledButton>
);


const StyledButton = styled.button`
  padding: 16px;
  margin: 8px;
  width: 75px;
`;

Button.defaultProps = {
  disable: false,
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  disable: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Button;
