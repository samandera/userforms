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

  const deleteUser = id => {
    const usersWithoutDeletedItem = users.filter(({ id: currentId }) => currentId !== id)
    localStorage.setItem('users', JSON.stringify(usersWithoutDeletedItem))
    setUsers(usersWithoutDeletedItem)
  }
  return (
    <>
      <Box>
        <Button component={Link} to='addUser' variant='contained'>Add User</Button>
      </Box>
      <UsersTable users={users} deleteUser={deleteUser} />
    </>
  )
}

export default Users
