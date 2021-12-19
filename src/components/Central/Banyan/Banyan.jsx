import React, { useEffect } from 'react';
import './banyan.scss';
import { useSelector, useDispatch } from 'react-redux';
import { loadBanyanData, BANYAN_DATA } from '../../../app/actions';
import { Table } from 'react-bootstrap';

const Banyan = () => {
	const { banyanData, isLoading } = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadBanyanData(BANYAN_DATA));
	}, [dispatch]);

	return (
		<div id='banyan'>
			<h1 className='control'>Central/Banyan</h1>
			{isLoading && <div className='loading'>Data loading...</div>}
			{banyanData.map(data => {
				return (
					// <div key={user.id} className='user'>
					// 	<div className='city'>{user.city}</div>
					// </div>
					<Table striped bordered hover variant='light'>
						<thead>
							<tr>
								<th>ID</th>
                                <th>Server Name</th>
                                <th>Server Type</th>
                                <th>Server Location</th>
                                <th>Server Active</th>
							</tr>
						</thead>
						<tbody key={data.id}>
							<tr>
								<td>{data.id}</td>
                                <td>{data.server_name}</td>
                                <td>{data.server_type}</td>
                                <td>{data.server_location}</td>
                                <td>{data.server_active}</td>
							</tr>
						</tbody>
					</Table>
				);
			})}
		</div>
	);
};

export default Banyan;
