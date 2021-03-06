import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import EventRegistration from './Components/EventRegistration/EventRegistration';
import LatestEvent from './Components/LatestEvent/LatestEvent';
import AddEvents from './Components/AddEvents/AddEvents';
import Admin from './Components/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <PrivateRoute path="/eventRegistration/:_id">
          <EventRegistration />
        </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/latestEvent">
          <LatestEvent></LatestEvent>
        </Route>

        <Route path="/admin">
          <Admin></Admin>
        </Route>

        <Route path="/addEvents">
          <AddEvents></AddEvents>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
