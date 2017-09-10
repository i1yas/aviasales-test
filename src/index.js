import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import tickets from './tickets.json';

ReactDOM.render(<App data={tickets}/>, document.getElementById('root'));
