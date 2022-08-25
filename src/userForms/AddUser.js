import React from 'react'
import UserForm from './UserForm'

const AddUser = () => {
  return (
    <>
      <UserForm
        formHeading='Add User'
        onSubmit={values => {
          const users = localStorage.getItem('users')
          const usersToWrite = users ? JSON.parse(users) : []
          usersToWrite.push(values)
          localStorage.setItem('users', JSON.stringify(usersToWrite))
        }}
      />
    </>
  )
}

export default AddUser
