import React, { useContext } from 'react';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { GlobalContext } from '../../App';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(props) {
	return (
		<Navbar collapseOnSelect expand='md'>
			<LinkContainer to='/'>
				<Navbar.Brand href='/'>
					<i className='fas fa-mountain'></i> Climb Time!
				</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<LinkContainer to='/signup'>
						<Nav.Link>Sign Up/Log In</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/map'>
						<Nav.Link>Map</Nav.Link>
					</LinkContainer>
					<NavDropdown title='Dropdown' id='collapsible-nav-dropdown'>
						<LinkContainer to='/climblist'>
							<NavDropdown.Item>Climb List</NavDropdown.Item>
						</LinkContainer>
						<LinkContainer to='/routes'>
							<NavDropdown.Item>Routes</NavDropdown.Item>
						</LinkContainer>
						<NavDropdown.Divider />
						<LinkContainer to='/about'>
							<NavDropdown.Item>About Me</NavDropdown.Item>
						</LinkContainer>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
