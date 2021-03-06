import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../store/actions';

import Counter from './Counter';

const App = ({
  onAdd, onRemove, onReset, counter,
}) => (
  <AppWrapper>
    <BodyWrapper>
      <Counter
        onAdd={onAdd}
        onRemove={onRemove}
        onReset={onReset}
        value={counter.value}
      />
    </BodyWrapper>
  </AppWrapper>
);

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

App.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  counter: PropTypes.shape({
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
