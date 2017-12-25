import React from 'react';

import Counter from './Counter';
import CounterEdit from './CounterEdit';

const Wrapper = props => {
  return (
    <div>
      {props.store.getState().map((val, i) => (
        <Counter
          key={i}
          value={val}
          onIncrement={() =>
            props.store.dispatch({
              type: 'INCREMENT',
              index: i
            })
          }
          onDecrement={() =>
            props.store.dispatch({
              type: 'DECREMENT',
              index: i
            })
          }
        />
      ))}
      <CounterEdit
        addCounter={() =>
          props.store.dispatch({
            type: 'ADD_COUNTER'
          })
        }
        removeCounter={() =>
          props.store.dispatch({
            type: 'REMOVE_COUNTER'
          })
        }
      />
    </div>
  );
};

export default Wrapper;