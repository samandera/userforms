import * as React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Users = ({ users }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Fist name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Mobile number</TableCell>
            <TableCell align="right"/>
            <TableCell align="right"/>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(({
            email,
            firstName,
            id,
            lastName,
            mobileNumber,
            title
          }) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {title}
              </TableCell>
              <TableCell>{firstName}</TableCell>
              <TableCell>{lastName}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell align="right">{mobileNumber}</TableCell>
              <TableCell align="right">
                <Button component={Link} to={`editUser/${id}`} variant='outlined'>Edit</Button>
              </TableCell>
              <TableCell align="right">{mobileNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default Users
