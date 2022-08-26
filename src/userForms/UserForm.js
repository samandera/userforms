import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import Input from './fields/Input'
import Select from './fields/Select'

// in real app it should be fetched from the backend
const titleOptions = [
  { label: 'Mr', value: 'mr' },
  { label: 'Mrs', value: 'mrs' },
  { label: 'Miss', value: 'miss' },
  { label: 'Dr', value: 'dr' }
]

const UserForm = ({
  formHeading,
  initialValues,
  onSubmit
}) => {
  const methods = useForm({
    defaultValues: (
      initialValues
      || {
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        title: titleOptions[0].value,
      }
    )
  });
  React.useEffect(() => {
    if (initialValues) {
      Object.entries(initialValues).forEach(([field, value]) => {
        methods.setValue(field, value)
      })
    }
  }, [initialValues])
  console.log(methods.formState.errors);

  return (
    <FormProvider {...methods} >
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '100ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Typography variant='h6' gutterBottom>{formHeading}</Typography>
        <Input label='First name' name='firstName' required maxLength={80} />
        <Input label='Last name' name='lastName' required maxLength={100} />
        <Input type='email' label='Email' name='email' pattern={/^\S+@\S+$/i} />
        <Input type='tel' label='Mobile number' name='mobileNumber' minLength={6} maxLength={12} />
        <Select label='Title' name='title' options={titleOptions} />
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button component={Link} to="/" variant="outlined" startIcon={<HomeIcon />}>
            Home
          </Button>
          <Button type='submit' variant="contained">Submit</Button>
        </Stack>
      </Box>
    </FormProvider>
  );
}

export default UserForm
