import React from 'react';
import './App.css';
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import { HashRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
