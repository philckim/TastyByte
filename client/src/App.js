import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateRecipe from "./components/CreateRecipe";
import AccountSettings from "./components/AccountSettings";
import CustomNavigation from "./components/CustomNavigation";
import FormLogin from "./components/FormLogin";
import FormCreateAccount from "./components/CreateAccount";
import RecoverPassword from "./components/RecoverPassword";
import ManageRecipes from "./components/ManageRecipes";
import RecoverUsername from "./components/RecoverUsername";

function App() {
  return (
    <Router>
      <CustomNavigation />
      <Route exact path="/" component={Home} />
      <Route path="/createrecipe" component={CreateRecipe} />
      <Route exact path="/accountsettings" component={AccountSettings} />
      <Route path="/formlogin" component={FormLogin} />
      <Route path="/createaccount" component={FormCreateAccount} />
      <Route path="/recoverpassword" component={RecoverPassword} />
      <Route path="/recoverusername" component={RecoverUsername} />
      <Route path="/managerecipes" component={ManageRecipes} />
    </Router>
  );
}

export default App;
