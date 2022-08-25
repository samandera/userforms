import React from 'react';
import { useForm } from 'react-hook-form';
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
  const { register, getValues, handleSubmit, formState: { errors }, setValue, watch } = useForm({
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
        setValue(field, value)
      })
    }
  }, [initialValues])
  watch()
  console.log(errors);

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant='h6' gutterBottom>{formHeading}</Typography>
      <Input label='First name' name='firstName' register={register} getValues={getValues} setValue={setValue} required maxLength={80} />
      <Input label='Last name' name='lastName' register={register} getValues={getValues} setValue={setValue} required maxLength={100} />
      <Input type='email' label='Email' name='email' register={register} getValues={getValues} setValue={setValue} pattern={/^\S+@\S+$/i} />
      <Input type='tel' label='Mobile number' name='mobileNumber' register={register} getValues={getValues} setValue={setValue} minLength={6} maxLength={12} />
      <Select
        label='Title'
        name='title'
        options={titleOptions}
        register={register}
        getValues={getValues}
        setValue={setValue}
      />
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button component={Link} to="/" variant="outlined" startIcon={<HomeIcon />}>
          Home
        </Button>
        <Button type='submit' variant="contained">Submit</Button>
      </Stack>
    </Box>
  );
}

export default UserForm
