import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Controls = props => (
  <Controls>
    <Button title="Add" clickHandler={props.onAdd} />
    <Button title="Reset" clickHandler={props.onReset} disable={props.value !== 0 ? false : true} />
    <Button title="Remove" clickHandler={props.onRemove} disable={props.value !== 0 ? false : true}/>
  </Controls>
)

const Controls = styled.div`
  margin: 0 auto;
  max-width: 300px;
`

export default Controls;
