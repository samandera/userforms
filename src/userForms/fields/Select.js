import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const SelectField = ({
  label,
  name,
  options = [],
  required
}) => {
  const { register, setValue, watch } = useFormContext()
  const { onBlur, ref } = register(name, {
    required
  });

  return (
    <FormControl>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        inputRef={ref}
        label={label}
        onBlur={onBlur}
        onChange={e => { setValue(name, e.target.value) }}
        value={watch(name) || options[0].value}
      >
        {options.map(({ value, label: optionLabel }) => (
          <MenuItem key={value} value={value}>{optionLabel}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField
