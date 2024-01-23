import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react'

interface RideCardProps {
    title: string;
    subtitle: string;
}

const RideCard: React.FC <RideCardProps> = ({ title, subtitle }) => {
  return (
    <Card>
        <CardContent>
            <Typography>{title}</Typography>
            <Typography>{subtitle}</Typography>
        </CardContent>
    </Card>
  )
}

export default RideCard