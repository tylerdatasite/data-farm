import React from 'react';
import './topnav.scss';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import { GiComputerFan } from 'react-icons/gi';
import { DiDatabase } from 'react-icons/di';
import { MdOutlineFence } from 'react-icons/md';

const TopNav = () => {
	return (
		<div id='topnav'>
			<Navbar expand='lg'>
				<Container>
					<Navbar.Brand href='/'><DiDatabase className='topnav_icons' /><MdOutlineFence className='topnav_icons' /> Data Farm</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='/'>Home</Nav.Link>
							<Nav.Link href='/data'>Data</Nav.Link>
							<NavDropdown
								title='Central'
								id='basic-nav-dropdown'>
								<NavDropdown.Item href='/central'>
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href='/central'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='/central'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='/central'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
                            <Nav.Link href='/case_studies'>Case Studies</Nav.Link>
                            <Nav.Link href='/testing'>Testing</Nav.Link>
                            <Nav.Link href='/articles'>Articles</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default TopNav;
