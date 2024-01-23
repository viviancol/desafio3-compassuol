import { AppBar, Toolbar, Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';

const Navbar: React.FC = () => {
    const [ value, setValue ] = useState(0);

    const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

  return (
    <AppBar>
      <Toolbar sx={{width:'100%', bgcolor:'#242424', display:'flex', justifyContent:'space-between'}}>
        <Box>
        <img src="../public/icon-ride.png" alt="Logo do Site" />
        </Box>
        <Box>
          <Tabs 
          value={value} 
          onChange={handleChange}
          aria-label="Menu principal"
          >
            <Tab 
            style={{color: value === 0 ? '#FBA403' : 'inherit'}} 
            label="Home" 
            value={0} />
            <Tab 
            style={{color: value === 1 ? '#FBA403' : 'inherit'}} 
            label="Getting a Taxi"
            value={1} />
            <Tab 
            style={{color: value === 2 ? '#FBA403' : 'inherit'}} 
            label="Mobile App"
            value={2} /> 
            <Tab 
            style={{color: value === 3 ? '#FBA403' : 'inherit'}} 
            label="Contact Us"
            value={3} />

          </Tabs>
          </Box>
          <Box>
          <img src="../public/bell.png" alt="Alerta de Notificação" />
          <img style={{marginLeft:'20px', marginRight:'20px'}} src="../public/line.png" alt="Linha divisória"/>
          <img src="../public/ellipse.png" alt="Imagem do Usuário" />
          </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar

{/* <Tabs value={value} onChange={(_e, value) => setValue(value)}> */}