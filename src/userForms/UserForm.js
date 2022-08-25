import React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
  initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: null,
    title: null,
  }
}) => {
  const { register, getValues, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: initialValues
  });
  const values = watch()
  const onSubmit = data => console.log(values);
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

      <Button type='submit' variant="outlined">Submit</Button>
    </Box>
  );
}

export default UserForm
