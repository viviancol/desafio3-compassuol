import { Autocomplete, TextField } from '@mui/material'

interface ISelectProps {
error?: string,
id: string,
options: {label:string, value:string}[],
onChange(e: any): void,
label: string
}

const Select = ({error,id, options,onChange, label, ...props}:ISelectProps) => {
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
          renderInput={(params) => <TextField {...params} label={label} />}
        />
        {error && <span>{error}</span>}
      </>
    );
}

export default Select