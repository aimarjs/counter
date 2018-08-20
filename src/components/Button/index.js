import React from 'react';
import styled from 'styled-components';

const Button = props => (
  <StyledButton type="button" onClick={props.clickHandler} disabled={props.disable}>{props.title}</StyledButton>
);

const StyledButton = styled.button`
  padding: 16px;
  margin: 8px;
  width: 75px;
`;

export default Button;
