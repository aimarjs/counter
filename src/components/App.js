import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../store/actions'

import Button from './Button'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <HeaderWrapper>
          <Counter>{this.props.counter.value}</Counter>
        </HeaderWrapper>
        <BodyWrapper>
          <Controls>
            <Button title="Add" clickHandler={this.props.onAdd} />
            <Button title="Reset" clickHandler={this.props.onReset} />
            <Button title="Remove" clickHandler={this.props.onRemove} />
          </Controls>
        </BodyWrapper>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`

const HeaderWrapper = styled.div`
  text-align: center;
`

const BodyWrapper = styled.div`
  text-align: center;
`

const Controls = styled.div`
  margin: 0 auto;
  max-width: 300px;
`

const Counter = styled.h2`
  font-size: 64px;
`

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
    return {
        onAdd: () => dispatch(actions.addHandler()),
        onRemove: () => dispatch(actions.removeHandler()),
        onReset: () => dispatch(actions.resetHandler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
