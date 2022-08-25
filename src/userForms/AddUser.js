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
          const lastUser = usersToWrite[usersToWrite.length - 1]
          usersToWrite.push({
            ...values,
            id: lastUser ? lastUser.id + 1 : 0
          })
          localStorage.setItem('users', JSON.stringify(usersToWrite))
        }}
      />
    </>
  )
}

export default AddUser
