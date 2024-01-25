import React from 'react'
import { Box, Stack, Typography, TextField, FormControlLabel, Switch } from '@mui/material'


const Form: React.FC = () => {
  return (
    <Stack>
      <Box>
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

        <Box>
          <TextField
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
          />

          <TextField
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
            defaultValue="EUR"
            helperText="Please select your country"
          >
            {/* {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
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
            defaultValue="EUR"
            helperText="Please select your city"
          >
            {/* {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
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

          <Box>
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
              label="Label"
            />
          </Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#FBA403",
            }}
            >
            Select your car type
          </Typography>

          <div id="radio-button">
            <img src="../public/sedan.png" alt="image sedan car" />
            <img src="../public/suv.png" alt="image suv car" />
            <img src="../public/semiluxury.png" alt="image semiluxury car" />
            <img src="../public/luxury.png" alt="image luxury car" />
          </div>

        </Box>
      </Box>
    </Stack>
  );
}

export default Form