import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from './logonobackground.png';

import './../index.css';

const FontAwesome = require('react-fontawesome');

const CustomNavigation = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<div className="topnav">
				<Nav>
					<Nav.Link href="/feed">
						<FontAwesomeIcon icon="home" /> <i>Home</i>
					</Nav.Link>
					<Nav.Link href="/createrecipe">
						<FontAwesomeIcon icon="utensil-spoon" /> <i>Create Recipe</i>
					</Nav.Link>
					<Nav.Link href="/managerecipes">
						<FontAwesomeIcon icon="bread-slice" /> <i>Manage Recipes</i>
					</Nav.Link>
					<Nav.Link href="/myprofile">
						<FontAwesomeIcon icon="coffee" /> <i>Profile</i>
					</Nav.Link>
					<Nav.Link href="/accountsettings">
						<FontAwesomeIcon icon="wrench" /> <i>Account Setting</i>
					</Nav.Link>
					<Nav.Link onClick={logout} href="/FormLogin">
						<FontAwesomeIcon icon="sign-out-alt" /> <i>Logout</i>
					</Nav.Link>
				</Nav>
			</div>
		</ul>
	);

	const guestLinks = (
		<ul className="guestlinksnav">
			<Nav>
				<Nav.Link href="/CreateAccount">
					<FontAwesomeIcon icon="cookie-bite" /> <i>Create Account</i>
				</Nav.Link>
				<Nav.Link href="/FormLogin">
					<FontAwesomeIcon icon="sign-in-alt" /> <i>Login</i>
				</Nav.Link>
			</Nav>
		</ul>
	);

	return (
		<Navbar bg="light" expand="lg" className="navb">
			<Navbar.Brand href="/" className="tasty">
				<Col xs={5} md={2.5}>
					<Image className="tbLOgo2" src={Logo} alt="Tasty Byte Logo" roundedCircle />
				</Col>
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
