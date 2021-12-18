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

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const addData = (id, credentials, first_name, last_name, email, job_title, company, services, region) => {
    return { id, credentials, first_name, last_name, email, job_title, company, services, region };
};

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const data_rows = data.map((item) => {
    return addData(item.id, item.credentials, item.first_name, item.last_name, item.email, item.job_title, item.company, item.services, item.region);
});

// const allData = data.map((item) => {
//     return (
//         <TableRow key={item.id}>
//             <TableCell>{item.id}</TableCell>
//         </TableRow>
//     );
// });

const Data = () => {
	console.log(data);
	const classes = useStyles();

	return (
		<div id='data'>
			<div id='box'>
				<h1>Company Data</h1>
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
							<TableCell align='right'>
								Protein&nbsp;(g)
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.name}>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>
									{row.calories}
								</TableCell>
								<TableCell align='right'>{row.fat}</TableCell>
								<TableCell align='right'>{row.carbs}</TableCell>
								<TableCell align='right'>
									{row.protein}
								</TableCell>
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
