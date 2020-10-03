import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
    <Router>
      <switch>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </switch>
    </Router>
  );
}

export default App;
