import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import counter from './Reducers/counter';
import Wrapper from './Components/Wrapper';

const store = createStore(counter);

const render = () => {
  ReactDOM.render(<Wrapper store={store}/>, document.getElementById('root'));
};

store.subscribe(render);
render();