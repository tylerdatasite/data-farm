import React from 'react';
import './data.scss';
import data from '../../data/Company_Data.json';

// Basic Table - MUIv4 Component
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});


const addData = (id, credentials, first_name, last_name, email, job_title, company, services, region) => {
    return { id, credentials, first_name, last_name, email, job_title, company, services, region };
};

const data_rows = data.map((item) => {
    return addData(item.id, item.credentials, item.first_name, item.last_name, item.email, item.job_title, item.company, item.services, item.region);
});

const Data = () => {
	console.log(data);
	const classes = useStyles();

	return (
		<div id='data'>
			<div id='box'>
				<h1 className='control'>Company Data</h1>
			</div>

			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
                            <TableCell align='right'>First Name</TableCell>
							<TableCell align='right'>Last Name</TableCell>
							<TableCell align='right'>Credentials</TableCell>
                            <TableCell align='right'>Email</TableCell>
                            <TableCell align='right'>Job Title</TableCell>
                            <TableCell align='right'>Company</TableCell>
                            <TableCell align='right'>Services</TableCell>
                            <TableCell align='right'>Region</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data_rows.map(row => (
							<TableRow key={row.id}>
								<TableCell component='th' scope='row'>{row.id}</TableCell>
								<TableCell align='right'>{row.first_name}</TableCell>
								<TableCell align='right'>{row.last_name}</TableCell>
								<TableCell align='right'>{row.credentials}</TableCell>
								<TableCell align='right'>{row.email}</TableCell>
								<TableCell align='right'>{row.job_title}</TableCell>
								<TableCell align='right'>{row.company}</TableCell>
								<TableCell align='right'>{row.services}</TableCell>
								<TableCell align='right'>{row.region}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Data;

//<ul key={data.id}>
//	{data.map(item => {
//		return (
//			<li key={item.id}>
//				<h2>{item.company}</h2>
//			</li>
//		);
//	})}
//</ul>;
