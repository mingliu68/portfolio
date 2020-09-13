import React from 'react';
import './App.css';
import Main from './views/Main'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './css/bootstrap.css';
import './css/style.css';


ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Main />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



