import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import AccountSettings from './components/AccountSettings';
import CustomNavigation from './components/CustomNavigation';
import FormLogin from './components/FormLogin';
import CreateAccount from './components/CreateAccount';
import RecoverPassword from './components/RecoverPassword';
import RecoverUsername from './components/RecoverUsername';
import ManageRecipes from './components/ManageRecipes';
import Feed from './components/Feed';
import Alert from './components/Alert';

//redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
	<Provider store={store}>
		<Router>
			<div>
				<CustomNavigation />
				<Route exact path="/" component={Home} />
				<Route path="/createrecipe" component={CreateRecipe} />
				<Route exact path="/accountsettings" component={AccountSettings} />
				<Alert />
				<Route path="/formlogin" component={FormLogin} />
				<Route path="/createaccount" component={CreateAccount} />
				<Route path="/recoverpassword" component={RecoverPassword} />
				<Route path="/recoverusername" component={RecoverUsername} />
				<Route path="/managerecipes" component={ManageRecipes} />
				<Route path="/feed" component={Feed} />
			</div>
		</Router>
	</Provider>
);

export default App;
