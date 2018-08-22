import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../store/actions';

// import Counter from './Counter';
import Input from './Input';
import EntryList from './EntryList'

// const App = ({
//   addNew,
//   list,
//   // onAdd, onRemove, onReset, counter,
// }) => (

// );

class App extends Component {
  componentDidMount() {
    const { getList } = this.props;
    getList();
  }

  render() {
    const { list } = this.props;
    return (
      <AppWrapper>
        <BodyWrapper>
          <Input />
          <EntryList list={list} />
          {/* <Counter
            onAdd={onAdd}
            onRemove={onRemove}
            onReset={onReset}
            value={counter.value}
          /> */}
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
  list: state.cards.entries,
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(actions.getAllEntries()),
  // onAdd: () => dispatch(actions.addHandler()),
  // onRemove: () => dispatch(actions.removeHandler()),
  // onReset: () => dispatch(actions.resetHandler()),
});

App.defaultProps = {
  getList: () => {},
};

App.propTypes = {
  getList: PropTypes.func,
  // addNew: PropTypes.func.isRequired,
  // onAdd: PropTypes.func.isRequired,
  // onRemove: PropTypes.func.isRequired,
  // onReset: PropTypes.func.isRequired,
  // counter: PropTypes.shape({
  //   value: PropTypes.number.isRequired,
  // }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
