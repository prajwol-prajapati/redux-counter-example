import React from 'react';

const CounterEdit = ({ addCounter, removeCounter }) => (
  <div>
    <button onClick={addCounter}>Add Counter</button>
    <button onClick={removeCounter}>Delete Counter</button>
  </div>
);

export default CounterEdit;