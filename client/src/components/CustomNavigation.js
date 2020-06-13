import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './../index.css';

const CustomNavigation = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<div className="topnav">
				<Nav>
					<Nav.Link href="/feed">
						<i>Home</i>
					</Nav.Link>
					<Nav.Link href="/createrecipe">
						<i>Create Recipe</i>
					</Nav.Link>
					<Nav.Link href="/managerecipes">
						<i>Manage Recipes</i>
					</Nav.Link>
					<Nav.Link href="/myprofile">
						<FontAwesomeIcon icon="coffee" /> <i>Profile</i>
					</Nav.Link>
					<Nav.Link href="/accountsettings">
						<i>Account Setting</i>
					</Nav.Link>
					<Nav.Link onClick={logout} href="/FormLogin">
						<FontAwesomeIcon icon="sign-out-alt" />
						<i>Logout</i>
					</Nav.Link>
				</Nav>
			</div>
		</ul>
	);

	const guestLinks = (
		<ul>
			<Nav>
				<Nav.Link href="/CreateAccount">
					<i>Create Account</i>
				</Nav.Link>
				<Nav.Link href="/FormLogin">
					<i>Login</i>
				</Nav.Link>
			</Nav>
		</ul>
	);

	return (
		<Navbar bg="light" expand="lg" className="navb">
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
