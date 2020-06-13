import React, { useEffect } from 'react';
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
import Myprofile from './components/Myprofile';

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

//redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<div>
					<CustomNavigation />
					<Route exact path="/" component={Home} />
					<PrivateRoute path="/createrecipe" component={CreateRecipe} />
					<PrivateRoute exact path="/accountsettings" component={AccountSettings} />
					<Alert />
					<Route path="/formlogin" component={FormLogin} />
					<Route path="/createaccount" component={CreateAccount} />
					<Route path="/recoverpassword" component={RecoverPassword} />
					<Route path="/recoverusername" component={RecoverUsername} />
					<PrivateRoute path="/managerecipes" component={ManageRecipes} />
					<PrivateRoute path="/feed" component={Feed} />
					<PrivateRoute path="/Myprofile" component={Myprofile} />
				</div>
			</Router>
		</Provider>
	);
};

library.add(fab, faCheckSquare, faCoffee);

export default App;
