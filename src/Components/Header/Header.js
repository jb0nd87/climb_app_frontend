import React, { useContext } from 'react';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { GlobalContext } from '../../App';
import './Header.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(props) {
	return (
		<Navbar collapseOnSelect expand='md'>
			<Navbar.Brand href='/'>
				<i className='fas fa-mountain'></i> Climb Time!
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='/signup'>Sign Up/Log In</Nav.Link>
					<Nav.Link href='/map'>Map</Nav.Link>
					<NavDropdown title='Dropdown' id='collapsible-nav-dropdown'>
						<NavDropdown.Item href='/climblist'>Climb List</NavDropdown.Item>
						<NavDropdown.Item href='/parks'>Parks</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='/about'>About Me</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href='#deets'>More deets</Nav.Link>
					<Nav.Link eventKey={2} href='#memes'>
						Dank memes
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
