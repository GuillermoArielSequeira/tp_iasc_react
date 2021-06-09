import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';

import CreateTodoList from './pages/CreateTodoList';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <CreateTodoList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function About() {
  return <h2>About</h2>;
}
