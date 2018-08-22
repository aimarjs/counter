import React from 'react';
import _ from 'lodash';

const EntryList = ({ list }) => {
  console.log(list);
  const sorted = _.orderBy(list, ['added'], ['desc']);
  const entries = sorted.map(item => (
    <div key={item.id}>{item.value}</div>
  ));
  return entries;
};

// const EntryList = ({ list }) => list.map(item => (
//   <div key={item.id}>{item.value}</div>
// ));

export default EntryList;
