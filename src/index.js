import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';



const counter = (state = [0], action) => {
	switch (action.type){
	  case 'INCREMENT':
      return [
        ...state.slice(0, action.index),
        state[action.index] + 1,
        ...state.slice(action.index + 1)
      ];
    case 'DECREMENT':
      return [
        ...state.slice(0, action.index),
        state[action.index] + 1,
        ...state.slice(action.index + 1)
      ];
		case 'ADD_COUNTER':
			return [...state, 0];
	  case 'REMOVE_COUNTER':
			return [...state.slice(0, -1)];
  
	  default:
		return state;
	}
  }

// const createStore = (reducer) => {
//     let state;
//     let listeners = [];
//     const getState = () => state;

//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener());
//     };

//     const subscribe = (listener) => {
//         listeners.push(listener);
//         return () => {
//             listeners = listeners.filter(l => l !== listener);
//         };
//     };

//     dispatch({});

//     return { getState, dispatch, subscribe };
// }

const store = createStore(counter);

//   console.log(store.getState());

//   store.dispatch({ type: 'INCREMENT' });
//   console.log(store.getState());


// store.subscribe(() =>{
//     document.body.innerText = store.getState();
// });
// document.addEventListener('click', () => {
//     store.dispatch({ type: 'INCREMENT'});
// });

const Counter = ({
	value,
	onIncrement,
	onDecrement
}) => (
	<div>
		<h1>{ value }</h1>
		<button onClick={onIncrement}> + </button>
		<button onClick={onDecrement}> - </button>
	</div>
);

const CounterEdit = ({
	addCounter, removeCounter
}) => (
	<div>
		<button onClick={addCounter}> Add Counter </button>
		<button onClick={removeCounter}> Delete Counter </button>
	</div>
)
console.log(store.getState());
let counters = store.getState().map((val, i) => (
	<Counter
		key={i}
		value={val}
		onIncrement={() =>
			store.dispatch({
				type: 'INCREMENT',
				key: i
			})
		}
		onDecrement={() =>
			store.dispatch({
				type: 'DECREMENT',
				key: i
			})
		}
	/>
		
));

const render = () => (
	ReactDOM.render(
		{counters},
		document.getElementById('root'))
	
)

store.subscribe(render);
render();