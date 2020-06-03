import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './../actions/auth';

const CustomNavigation = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<a onClick={logout} href="/">
					<i classname="fas fa-sign-out-alt" />
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to="/CreateAccount">Create Account</Link>
			</li>
			<li>
				<Link to="/FormLogin">Login</Link>
			</li>
		</ul>
	);

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">Tasty Byte</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/createrecipe">Create Recipe</Nav.Link>
					<Nav.Link href="/managerecipes">Manage Recipes</Nav.Link>
					<Nav.Link href="/accountsettings">Account Settings</Nav.Link>
				</Nav>
				{!loading && <Fragment> {isAuthenticated ? authLinks : guestLinks}</Fragment>}
			</Navbar.Collapse>
		</Navbar>
	);
};

CustomNavigation.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(CustomNavigation);
