import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import UserForm from './UserForm'

const EditUser = props => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [initialValues, setInitialValues] = React.useState({})
  React.useEffect(() => {
    const storedUsers = localStorage.getItem('users')
    if (storedUsers) {
      const users = JSON.parse(storedUsers) || []
      const currentUser = users.find(({ id: currentId }) => currentId.toString() === id)
      const { id: _, ...user } = currentUser
      setInitialValues(user)
    }
  }, [])
  return initialValues
  ? (
    <>
      <UserForm
        formHeading='Edit User'
        initialValues={initialValues}
        onSubmit={values => {
          const users = localStorage.getItem('users')
          const usersToWrite = users ? JSON.parse(users) : []
          const userIndex = usersToWrite.findIndex(({ id: currentId }) => currentId.toString() === id)
          usersToWrite[userIndex] = { id, ...values }
          localStorage.setItem('users', JSON.stringify(usersToWrite))
          navigate('/', { replace: true })
        }}
      />
    </>
  )
  : null
}

export default EditUser
