import { Box, Stack, Typography, TextField, FormControlLabel, Switch, Button } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Select from './Select'
import countriesAndCities from './countries-and-cities.json'

console.log(countriesAndCities)

const validationFormSchema = z.object({
    fullName: z
    .string()
    .refine(data => {
        const names = data.split(" ");
        return names.length >= 2 && names.every(name => name.length > 0);}, {
        message: 'Digite um Nome e ao menos um Sobrenome',
    }),

    emailAddress: z
    .string()
    .email({
        message: 'Digite um endereço de email válido',
    }),

    country: z
    .string()
    .min(1, 'mensagem do erro'),

    city: z
    .string()
    .min(1, 'mensagem de erro'),
    
    referralCode: z.string().refine((value) => /^([A-Z]{3}-[0-9]{3})$/.test(value), {
        message: 'O código de indicação deve seguir o formato AAA-001',
    }),
    
});


type ValidationFormsData = z.infer<typeof validationFormSchema>

export function Forms () {
    const [output, setOutput] = useState('');
    const [driveMyOwnCar, setDriveMyOwnCar] = useState(true); // switch true por padrão
    const [hoveredCar, setHoveredCar] = useState(''); // alterar imagem ao passar mouse

    const { register, watch, handleSubmit, control, formState: {errors} } = useForm<ValidationFormsData>({
        resolver: zodResolver(validationFormSchema)
    })

    const [citiesOptions, setCitiesOptions] = useState<{label:string, value:string}[]>([])

    const countries = Object.keys(countriesAndCities).map((country) => ({label:country, value:country}))
    const handleSwitchChange = () => {
        setDriveMyOwnCar(!driveMyOwnCar);
    };
    
    const handleCarMouseOver = (carType: string) => {
        // Atualizar o estado quando o mouse estiver sobre a imagem
        setHoveredCar(carType);
      };
    
      const handleCarMouseLeave = () => {
        // Resetar o estado quando o mouse deixar a imagem
        setHoveredCar('');
      };
 
     const handleSearchCity =() => {
         const normalizeJson = Object.entries(countriesAndCities).map(([country, valor]) => ({
             country,
             ...valor,
         }));
         const getCity:any = normalizeJson.find(({ country }) => country === watch().country);
 
         const filteredCityValues = Object.values(getCity).filter(
             value => value !== watch().country,
         );
         const formatedCity = Object.values(filteredCityValues).map(cities => ({
             label: cities as string,
             value: cities as string,
         }));
         setCitiesOptions(formatedCity);
    }  

    useEffect(( ) => {
        console.log(errors)
    }, [errors])

    useEffect(() => {
        if (!watch().country) return
        handleSearchCity()
    }, [watch().country] )

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
                            helperText={errors.fullName ? errors.fullName.message : ''}
                            error={Boolean(errors.fullName)}

                        />
                        {/* {errors.fullName && <span>{errors.fullName.message}</span>} */}
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
                            helperText={errors.emailAddress ? errors.emailAddress.message : ''}
                            error={Boolean(errors.emailAddress)}

                        />
                        {/* {errors.emailAddress && <span>{errors.emailAddress.message}</span>} */}
                    </div>
                    <>
                        <Controller   
                            control={control} 
                            name='country'  
                            render={({ field, fieldState: { error } }) => (
                            <Select
                            {...field}
                                options={countries} 
                                error={error?.message}
                                id="country" 
                                label="Country" 
                            />
                            )} 
                        />
                    </>
                    <>
                        <Controller   
                            control={control} 
                            name='city'  
                            render={({ field, fieldState: { error } }) => (
                                <div style={{ opacity: citiesOptions.length ? 1 : 0.5, 
                                pointerEvents: citiesOptions.length ? 'auto' : 'none' }}>
                            <Select
                            {...field}
                                options={citiesOptions} 
                                error={error?.message}
                                id="city" 
                                label="City" 
                            />
                            
                            </div>
                            )} 
                        />
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
                            helperText={errors.referralCode ? errors.referralCode.message : ''}
                            error={Boolean(errors.referralCode)}
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
                            {driveMyOwnCar && (
                            <>
                                <img
                                onMouseOver={() => handleCarMouseOver('sedan')}
                                onMouseLeave={handleCarMouseLeave}
                                style={{ marginRight: '1rem' }}
                                src={hoveredCar === 'sedan' ? "../public/sedan-amarelo.png" : "../public/sedan.png"}
                                alt="image sedan car"
                                />
                                <img
                                onMouseOver={() => handleCarMouseOver('suv')}
                                onMouseLeave={handleCarMouseLeave}
                                style={{ marginRight: '1rem' }}
                                src={hoveredCar === 'suv' ? "../public/sedan-amarelo.png" : "../public/suv.png"}
                                alt="image suv car"
                                />
                                <img
                                onMouseOver={() => handleCarMouseOver('semiluxury')}
                                onMouseLeave={handleCarMouseLeave}
                                style={{ marginRight: '1rem' }}
                                src={hoveredCar === 'semiluxury' ? "../public/sedan-amarelo.png" : "../public/semiluxury.png"}
                                alt="image semiluxury car"
                                />
                                <img
                                onMouseOver={() => handleCarMouseOver('luxury')}
                                onMouseLeave={handleCarMouseLeave}
                                style={{ marginRight: '1rem' }}
                                src={hoveredCar === 'luxury' ? "../public/sedan-amarelo.png" : "../public/luxury.png"}
                                alt="image luxury car"
                                />
                            </>
                            )}    
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

// function setHoveredCar(carType: string) {
//     throw new Error('Function not implemented.')
// }
