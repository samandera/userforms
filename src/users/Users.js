import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import UsersTable from './UsersTable'

const Users = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    const storedUsers = localStorage.getItem('users')
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers))
    }
  }, [])

  console.log(users)
  return (
    <>
      <Box>
        <Button component={Link} to='addUser' variant='contained'>Add User</Button>
      </Box>
      <UsersTable users={users} />
    </>
  )
}

export default Users
