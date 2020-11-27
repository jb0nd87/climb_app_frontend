import React, { useContext } from 'react';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { GlobalContext } from '../../App';
import './Header.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header(props) {
	const { gState, setGState } = useContext(GlobalContext);

	const loggedIn = (
		<>
			<Navbar sticky='top' expand='md'>
				<Navbar.Brand href='/'>
					<div id='nav-logo'>
						<i className='fas fa-mountain'></i> Climb Time!
					</div>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					className='navbar-dark'
					id='hamburger'
				/>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link>
							<LogOutBtn />
						</Nav.Link>
						<Nav.Link href='/signup'>Sign Up/Log In</Nav.Link>
						<Nav.Link href='/map'>Map</Nav.Link>
						<Nav.Link href='/climblist'>Climb List</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<p className='welcome-msg'>Welcome!</p>
		</>
	);

	const loggedOut = (
		<>
			<Navbar sticky='top' expand='md'>
				<Navbar.Brand href='/'>
					<div id='nav-logo'>
						<i className='fas fa-mountain'></i> Climb Time!
					</div>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					className='navbar-dark'
					id='hamburger'
				/>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<br></br>
						<Nav.Link href='/signup'>Sign Up/Log In</Nav.Link>
						<Nav.Link href='/map'>Map</Nav.Link>
						<Nav.Link href='/climblist'>Climb List</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
					</Nav>
					<p className='welcome-msg'>
						Welcome <span className='logged-in-email'>to Climb Time!</span>!
						Sign up or Log in today!
					</p>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
	return gState.token ? loggedIn : loggedOut;
}
