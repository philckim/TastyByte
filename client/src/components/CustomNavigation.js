import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './../actions/auth';
import './../index.css';

const CustomNavigation = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<Nav>
				<Nav.Link href="/createrecipe">Create Recipe</Nav.Link>
				<Nav.Link href="/managerecipes">Manage Recipes</Nav.Link>
				<Nav.Link href="/accountsettings">Account Settings</Nav.Link>
				<Nav.Link onClick={logout} href="/FormLogin">
					<i className="fas fa-sign-out-alt" />
					<span className="hide-sm">Logout</span>
				</Nav.Link>
			</Nav>
		</ul>
	);

	const guestLinks = (
		<ul>
			<Nav>
				<Nav.Link href="/CreateAccount">Create Account</Nav.Link>
				<Nav.Link href="/FormLogin">Login</Nav.Link>
			</Nav>
		</ul>
	);

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/" className="tasty">
				Tasty Byte
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" />
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
