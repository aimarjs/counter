import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button'

const initialState = {
  counter: 0
}

class App extends Component {
  state = initialState

  addHandler = () => {
    const currentState = this.state.counter;

    this.setState({ counter: currentState + 1})
  }

  removeHandler = () => {
    const currentState = this.state.counter;

    if (currentState !== 0) {
      this.setState({ counter: currentState - 1 })
    }
  }

  resetHandler = () => {

    this.setState(initialState)
  }

  render() {
    return (
      <AppWrapper>
        <HeaderWrapper>
          <Counter>{this.state.counter}</Counter>
        </HeaderWrapper>
        <BodyWrapper>
          <Controls>
            <Button title="Add" clickHandler={this.addHandler} />
            <Button title="Reset" clickHandler={this.resetHandler} />
            <Button title="Remove" clickHandler={this.removeHandler} />
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

export default App;
