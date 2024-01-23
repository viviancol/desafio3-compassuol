import { Box, Stack, Typography, Button, Card } from '@mui/material'
import React from 'react'
import RideCard from './RideCard'

const PainelRide: React.FC = () => {
  return (
    <Stack>
        <Box> 
            <Box>
                <Typography 
                sx={{
                    fontSize:'26px'
                }} >WHY SHOULD YOU RIDE WITH US?</Typography>
                
                <Typography 
                sx={{
                    fontSize:'40px',
                }} >Best in class rides</Typography>
            </Box>
            <Card>
                <Box>
                    <img src=".//public/card-image1.png" alt="Imagem Card 1" />
                    <RideCard 
                    title={'Basic'} 
                    subtitle={'The best balance of price and comfort. You will not go wrong with our basic rides.'}  />
                    <Button 
                    variant="text" 
                    style={{color:'#FBA403'}} 
                    href="https://www.google.com/search?q=basic+car"
                    target="_blank"
                    > Learn More</Button>
                </Box>
                <Box>
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
                </Box>
                <Box>
                    <img src=".//public/card-image2.png" alt="Imagem Card 2" />
                    <RideCard 
                    title={'Business'} 
                    subtitle={'Do you want to travel around the city in style? Make sure to select or business class rides.'}  />
                    <Button 
                    variant="text" 
                    style={{color:'#FBA403'}} 
                    href="https://www.google.com/search?q=business+car"
                    target="_blank"
                    > Learn More</Button>
                </Box>
                <Box>
                    <img src=".//public/card-image2.png" alt="Imagem Card 2" />
                    <RideCard 
                    title={'Deluxe'} 
                    subtitle={'The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.'}  />
                    <Button 
                    variant="text" 
                    style={{color:'#FBA403'}} 
                    href="https://www.google.com/search?q=carros+de+luxo"
                    target="_blank"
                    > Learn More</Button>
                </Box>
            </Card>
        </Box>
    </Stack>
  )
}

export default PainelRide