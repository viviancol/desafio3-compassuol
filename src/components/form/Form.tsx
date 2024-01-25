import React from 'react'
import { Box, Stack, Typography, TextField, FormControlLabel, Switch, Button, FormControl } from '@mui/material'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { validationFormSchema } from './validation'


interface FormData {
  fullName: string;
  emailAddress: string;
}

const Form: React.FC = () => {

  const { control, handleSubmit, formState: { isSubmitting, isValid, errors, isSubmitSuccessful } } = useForm<FormData>({
    resolver: zodResolver(validationFormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Recolhendo os dados submetidos
      console.log(data);
    } catch (error) {
      // tratar os erros caso eles existam
    }
  };


  
  return (
    <Stack onSubmit={handleSubmit(onSubmit)}
      sx={{bgcolor:'#242424', display:'flex', flexDirection:'column', padding:'2rem'}}>
      <FormControl sx={{bgcolor:'#282828', my:'54px', mx:'20px', padding:'2rem'}}>
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'start'}}>
            <img
              src="../public/Popup image.png"
              alt="Imagem formulario registro de carro"
            />

          <Box>
            <Typography
              sx={{
                fontSize: "27px",
                color: "#FBA403",
              }}
            >
              Drive with MyRide
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#FFF",
              }}
            >
              Register as a driver using the form below. Our team will assess and
              get back to you within 48 hours.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                }}
                label="Full Name"
                placeholder="Full Name"
                variant="outlined"
                inputProps={{
                  style: { color: "#FBA403" },
                }}
                helperText={errors.fullName? "testando pra ver se funciona" :null}
              />
            )}
          />

          <Controller
            name="emailAddress"
            control={control}
            render={({ field }) => (
            <>
              <TextField
              {...field}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                }}
                label="Email Address"
                placeholder="Email Address"
                variant="outlined"
                inputProps={{
                  style: { color: "#FBA403" },
                }}
                helperText={errors.emailAddress?.message}
              />
              </>
            )}
          />

          <TextField
            style={{
              width: "100%",
              marginBottom: "10px",
            }}
            id="outlined-select-currency"
            select
            label="Country"
            placeholder="Country"
            defaultValue=""
            // helperText="Please select your country"
            >
          </TextField>

          <TextField
            style={{
              width: "100%",
              marginBottom: "10px",
            }}
            id="outlined-select-currency"
            select
            label="City"
            placeholder="City"
            defaultValue=""
            // helperText="Please select your city"
            >
          </TextField>

          <TextField
            style={{
              width: "100%",
              marginBottom: "10px",
            }}
            label="Referral Code"
            placeholder="Referral Code"
            variant="outlined"
            inputProps={{
              style: { color: "#FBA403" },
            }}
          />

          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#ffffff",
              }}
            >
              I drive my own car
            </Typography>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label=""
            />
          </Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#FBA403",
              my:'1rem'
            }}
            >
            Select your car type
          </Typography>

          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'start'}}>
            <img style={{marginRight:'1rem'}} 
            src="../public/sedan.png" alt="image sedan car" />
            <img style={{marginRight:'1rem'}} 
            src="../public/suv.png" alt="image suv car" />
            <img style={{marginRight:'1rem'}} 
            src="../public/semiluxury.png" alt="image semiluxury car" />
            <img style={{marginRight:'1rem'}} 
            src="../public/luxury.png" alt="image luxury car" />
          </Box>
          <Button 
          type="submit" 
          disabled={isSubmitting || (isSubmitSuccessful && !isValid)}
          sx={{mt:'1rem', width:'20%'}}
          variant="contained">Submit</Button>
        </Box>
      </FormControl>
    </Stack>
  );
}

export default Form