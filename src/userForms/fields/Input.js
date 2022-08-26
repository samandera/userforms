import React from 'react';
import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const Input = ({
  label,
  maxLength,
  minLength,
  name,
  pattern,
  required,
  type = 'text'
}) => {
  const { register, setValue, watch } = useFormContext()
  const { onBlur, ref } = register(name, {
    maxLength,
    minLength,
    pattern,
    required
  });
  return (
    <TextField
      onBlur={onBlur}
      onChange={e => { setValue(name, e.target.value) }}
      value={watch(name)}
      id={name}
      inputRef={ref}
      label={label}
      required={required}
      variant='outlined'
      type={type}
    />
  )
}

export default Input
