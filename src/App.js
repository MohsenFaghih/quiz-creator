import React from 'react';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Questions from './pages/Questions';
import ResultPage from './pages/ResultPage';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Settings />
        </Route>
        <Route path='/questions'>
          <Questions />
        </Route>
        <Route path='score'>
          <ResultPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
