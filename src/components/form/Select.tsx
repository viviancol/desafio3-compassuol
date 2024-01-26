import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

interface ISelectProps {
error?: string,
id: string,
options: {label:string, value:string}[],
onChange(e: any): void,
label: string
}

const Select = ({error,id, options, onChange, label, ...props}:ISelectProps) => {
    console.log(error)
    return (
      <>
        <Autocomplete
          {...props}
          disablePortal
          id={id}
          options={options}
          sx={{ width: "100%", mb:'1rem'}}
          onChange={(e, value) => {
            if (value) {
              onChange(value.label);
            } else {
              onChange(""); // Caso o valor seja nulo ou indefinido
            }
          }}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => <TextField {...params} label={label} helperText={error} error={Boolean(error)} />}
        />
        {/* {error && <span style={{ color: 'red' }}>{error}</span>} */}
      </>
    );
}

export default Select