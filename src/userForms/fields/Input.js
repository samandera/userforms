import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({
  getValues,
  label,
  maxLength,
  minLength,
  name,
  pattern,
  register,
  required,
  type = 'text',
  setValue
}) => {
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
      value={getValues(name)}
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
