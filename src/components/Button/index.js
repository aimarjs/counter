import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ disable, title, clickHandler }) => (
  <StyledButton type="button" onClick={clickHandler} disabled={disable}>{title}</StyledButton>
);


const StyledButton = styled.button`
  padding: 8px;
  font-size: 18px;
  font-weight: 500;
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
