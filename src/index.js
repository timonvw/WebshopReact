import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { ShowCode } from './components/ShowCode';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/:id" component={ShowCode} />
      </div>
    </Router>
  );

ReactDOM.render(routing, document.getElementById('root'));
//<App />
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
