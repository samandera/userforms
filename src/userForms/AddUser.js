import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserForm from './UserForm'

const AddUser = () => {
  const navigate = useNavigate()
  return (
    <>
      <UserForm
        formHeading='Add User'
        onSubmit={values => {
          const users = localStorage.getItem('users')
          const usersToWrite = users ? JSON.parse(users) : []
          const lastUser = usersToWrite[usersToWrite.length - 1]
          usersToWrite.push({
            ...values,
            id: lastUser ? parseInt(lastUser.id) + 1 : 0
          })
          localStorage.setItem('users', JSON.stringify(usersToWrite))
          navigate('/', { replace: true })
        }}
      />
    </>
  )
}

export default AddUser
