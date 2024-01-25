import { Box, Stack, Typography, TextField, FormControlLabel, Switch, Button, FormLabel, RadioGroup, Radio, FormControl } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
// import countriesAndCities from './countries-and-cities.json'

const validationFormSchema = z.object({
    fullName: z
    .string()
    .refine(data => {
        const names = data.split(" ");
        return names.length >= 2 && names.every(name => name.length > 0);}, {
        message: "Digite um Nome e ao menos um Sobrenome",
    }),

    emailAddress: z
    .string()
    .email({
        message: "Digite um endereço de email válido",
    }),

    country: z
    .string(),

    city: z
    .string(),
    
    referralCode: z
    .string(),

    carType: z
    .string(),

});


type ValidationFormsData = z.infer<typeof validationFormSchema>

export function Forms () {
    const [output, setOutput] = useState('');
    const [driveMyOwnCar, setDriveMyOwnCar] = useState(true); // switch true por padrão

    const { register, handleSubmit, formState: {errors} } = useForm<ValidationFormsData>({
        resolver: zodResolver(validationFormSchema)
    })

    const handleSwitchChange = () => {
        setDriveMyOwnCar(!driveMyOwnCar);
    };

    useEffect(( ) => {
        console.log(errors)
    }, [errors])

    function createUser(data: any) {
        console.log(data)
        setOutput(JSON.stringify(data, null, 2))
    }
    
    return (
        <Stack 
            sx={{bgcolor:'#242424', display:'flex', flexDirection:'column', padding:'2rem'}}>
            <form onSubmit={handleSubmit(createUser)} 
                style={{backgroundColor:'#282828', display:'flex', flexDirection:'column', marginRight:'20px', marginLeft:'20px', padding:'2rem'}} >
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'start', mb:'2rem'}}>
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
                    <>
                        <TextField
                            style={{
                            width: "100%",
                            marginBottom: "1rem",
                            }}
                            label="Full Name"
                            placeholder="Full Name"
                            variant="outlined"
                            inputProps={{
                            style: { color: "#FBA403" },
                            }}
                            {...register('fullName')}
                        />
                        {errors.fullName && <span>{errors.fullName.message}</span>}
                    </>
                    <div>
                        <TextField
                            style={{
                            width: "100%",
                            marginBottom: "1rem",
                            }}
                            label="Email Address"
                            placeholder="Email Address"
                            variant="outlined"
                            inputProps={{
                            style: { color: "#FBA403" },
                            }}
                            {...register('emailAddress')}

                        />
                        {errors.emailAddress && <span>{errors.emailAddress.message}</span>}
                    </div>
                    <>
                        <TextField
                            style={{
                            width: "100%",
                            marginBottom: "1rem",
                            }}
                            id="outlined-select-currency"
                            select
                            label="Country"
                            placeholder="Country"
                            defaultValue=""
                            {...register('country')}
                            // helperText="Please select your country"
                            >
                                <p>Vivian</p>
                        </TextField>
                    </>
                    <>
                        <TextField
                            style={{
                            width: "100%",
                            marginBottom: "1rem",
                            }}
                            id="outlined-select-currency"
                            select
                            label="City"
                            placeholder="City"
                            defaultValue=""
                            {...register('city')}
                            // helperText="Please select your city"
                            >
                                <p>Vivian</p>
                        </TextField>
                    </>
                    <>
                        <TextField
                            style={{
                            width: "100%",
                            marginBottom: "1rem",
                            }}
                            label="Referral Code"
                            placeholder="Referral Code"
                            variant="outlined"
                            inputProps={{
                            style: { color: "#FBA403" },
                            }}
                            {...register('referralCode')}
                        />
                    </>
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
                            control={<Switch
                            checked={driveMyOwnCar}
                            onChange={handleSwitchChange} />} label={undefined}
                        />
                    </Box>
                    {driveMyOwnCar && (
                    <div>
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
                    </div>
                    )}

                    <Button 
                    type="submit" 
                    sx={{mt:'1rem', width:'20%'}}
                    variant="contained">Submit</Button>
                </Box>
            </form>
            <pre>{output}</pre>
        </Stack>  
    );
}

export default Forms