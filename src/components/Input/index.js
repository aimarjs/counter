import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../../store/actions';

import Button from '../Button';

const initialState = {
  value: 0,
};

class Input extends Component {
  state = initialState;

  inputChangeHandler = (event) => {
    this.setState({
      value: parseInt(event.target.value, 10)
        ? parseInt(event.target.value, 10)
        : 0,
    });
  }

  resetHandler = () => {
    this.setState(initialState);
  };

  addHandler = () => {
    const { addNew } = this.props;
    const { value } = this.state;

    const newItem = {
      value,
      added: new Date(),
    };

    addNew(newItem);

    this.setState(initialState);
  }

  render() {
    const { value } = this.state;
    return (
      <InputGroup>
        <InputField type="text" onChange={this.inputChangeHandler} value={value} />
        <Button title="Add" clickHandler={this.addHandler} />
        <Button title="Reset" clickHandler={this.resetHandler} />
      </InputGroup>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNew: data => dispatch(actions.addNewEntry(data)),
});

Input.propTypes = {
  addNew: PropTypes.func.isRequired,
};

const InputGroup = styled.div`
  margin: 0;
  padding: 0;
`;

const InputField = styled.input`
  padding: 8px;
  font-size: 18px;
  font-weight: 500;
`;

export default connect(undefined, mapDispatchToProps)(Input);
