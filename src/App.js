import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact strict path="/" component={HomePage} />
      </Switch>
    </Router>
  </Provider>
  );
}

export default App;
