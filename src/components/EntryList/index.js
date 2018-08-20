import React from 'react';

const EntryList = ({ list }) => list.map(item => (
  <div key={item.id}>{item.value}</div>
));

export default EntryList;
