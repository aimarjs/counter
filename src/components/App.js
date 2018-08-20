import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../store/actions';

import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <BodyWrapper>
          <Counter
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            onReset={this.props.onReset}
            value={this.props.counter.value}
          />
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
`;

const BodyWrapper = styled.div`
  text-align: center;
`;

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(actions.addHandler()),
  onRemove: () => dispatch(actions.removeHandler()),
  onReset: () => dispatch(actions.resetHandler()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
