import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import AccountSettings from './components/AccountSettings';
import CustomNavigation from './components/CustomNavigation';

function App() {
  return (
    <Router>
      <div>
        <CustomNavigation />
          <Route exact path ="/" component={Home} />
          <Route path ="/createrecipe" component={CreateRecipe} />
          <Route exact path ="/accountsettings" component={AccountSettings} />
      </div>
    </Router>
  );
}

export default App;
