import React from 'react';
import './bottomnav.scss';
import { Navbar, Nav } from 'react-bootstrap';

const BottomNav = () => {
	return (
		<div id='bottomnav'>
			<Navbar expand='lg' fixed='bottom'>
				<Nav className='justify-content-center' activeKey='/home'>
					<Nav.Item>
						<Nav.Link href='/home'>Active</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='link-1'>Link</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='link-2'>Link</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='disabled' disabled>
							Disabled
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		</div>
	);
};

export default BottomNav;
