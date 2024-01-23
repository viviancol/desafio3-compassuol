import { Box, Stack, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import React from 'react'

const PainelRide: React.FC = () => {
  return (
    <Stack sx={{bgcolor:'#242424'}} >
        <Box> 
            <Box sx={{textAlign:'center', marginBottom:'30px', marginTop:'58px'}}>
                <Typography 
                sx={{
                    fontSize:'26px',
                    color:'#FBA403'
                }} >WHY SHOULD YOU RIDE WITH US?</Typography>
                
                <Typography 
                sx={{
                    fontSize:'45px',
                    color:'#FFF'
                }} >Best in class rides</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', padding:'58px', fontSize:'24px'}}>
                
                <Card sx={{ width:'100%', marginRight:'1rem', bgcolor:'#2c2c2c'}}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image="../public/card-image1.png"
                        title="Image basic car"
                    />
                    <CardContent >
                        <Typography color="#fff">
                        Basic
                        </Typography>
                        <Typography color="#b3b3b3">
                        The best balance of price price and comfort. You will not not go wrong with our basic rides.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:'end'}}>
                        <Button sx={{color:'#FBA403'}} size="small"
                        href="https://www.google.com/search?q=basic+car"
                        target="_blank">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ width:'100%', marginRight:'1rem', bgcolor:'#2c2c2c'}}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image="../public/card-image2.png"
                        title="Image confort car"
                    />
                    <CardContent>
                        <Typography color="#fff">
                        Confort
                        </Typography>
                        <Typography color="#b3b3b3">
                        If comfort is your priority, this is the ride for you. It’s spacious and packed with features.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:'end'}}>
                        <Button sx={{color:'#FBA403'}} size="small"
                        href="https://www.google.com/search?q=confort+car"
                        target="_blank">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ width:'100%', marginRight:'1rem', bgcolor:'#2c2c2c'}}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image="../public/card-image3.png"
                        title="Image business car"
                    />
                    <CardContent>
                        <Typography color="#fff">
                        Business
                        </Typography>
                        <Typography color="#b3b3b3">
                        Do you want to travel around the city in style? Make sure to select or business class rides.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:'end'}}>
                        <Button sx={{color:'#FBA403'}} size="small"
                        href="https://www.google.com/search?q=business+car"
                        target="_blank">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ width:'100%', bgcolor:'#2c2c2c'}}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image="../public/card-image4.png"
                        title="Image deluxe car"
                    />
                    <CardContent>
                        <Typography color="#fff">
                        Deluxe
                        </Typography>
                        <Typography color="#b3b3b3">
                        The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:'end'}}>
                        <Button sx={{color:'#FBA403'}} size="small"
                        href="https://www.google.com/search?q=carro+de+luxo"
                        target="_blank">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    </Stack>
  )
}

export default PainelRide

{/* <Card sx={{padding:'6px', mr:'6px', bgcolor:'#B3B3B3'}}>
                    <img src=".//public/card-image1.png" alt="Imagem Card 1"/>
                    <RideCard 
                    title={'Basic'} 
                    subtitle={'The best balance of price and comfort. You will not go wrong with our basic rides.'}  />
                    <Button 
                    variant="text" 
                    style={{color:'#FBA403'}} 
                    href="https://www.google.com/search?q=basic+car"
                    target="_blank"
                    > Learn More</Button>
                </Card>
                <Card sx={{padding:'6px', mr:'6px'}}>
                    <img src=".//public/card-image2.png" alt="Imagem Card 2" />
                    <RideCard 
                    title={'Confort'} 
                    subtitle={'If comfort is your priority, this is the ride for you. It’s spacious and packed with features.'}  />
                    <Button 
                    variant="text" 
                    style={{color:'#FBA403'}} 
                    href="https://www.google.com/search?q=confort+car"
                    target="_blank"
                    > Learn More</Button>
                </Card>
                <Card sx={{padding:'6px', mr:'6px'}}>
                    <img src=".//public/card-image3.png" alt="Imagem Card 3" />
                    <RideCard 
                    title={'Business'} 
                    subtitle={'Do you want to travel around the city in style? Make sure to select or business class rides.'}  />
                    <Button 
                    variant="text" 
                    style={{color:'#FBA403'}} 
                    href="https://www.google.com/search?q=business+car"
                    target="_blank"
                    > Learn More</Button>
                </Card>
                <Card sx={{padding:'6px', mr:'6px'}}>
                    <img src=".//public/card-image4.png" alt="Imagem Card 4" />
                    <RideCard 
                    title={'Deluxe'} 
                    subtitle={'The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.'}  />
                    <Button 
                    variant="text" 
                    style={{color:'#FBA403'}} 
                    href="https://www.google.com/search?q=carros+de+luxo"
                    target="_blank"
                    > Learn More</Button>
                </Card> */}