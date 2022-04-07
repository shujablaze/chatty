import { Box, Typography, IconButton } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Search from './Search';

const Navbar = () => {
  return (
    <Box sx={{
        backgroundColor:green[600],
        height:'8vh',
        position:'fixed',
        display:'flex',
        alignItems:'center',
        zIndex : 1000,
        width:'100vw',
        justifyContent:'space-between'
    }}
    >
        
        <Box sx={{display:'flex',alignItems:'center'}} >
          <Typography variant="h4" component="h2" sx={{fontSize:{md:'1.5rem',xs:'1.2rem',lg:'2.5rem'},fontFamily:'Eczar',color:'#e4e4e4',ml:{md:5,xs:1},mr:{md:'10vw'}}}>chatty</Typography>
        </Box>

        <Search></Search>
        
        <Box sx={{mr:{md:5,xs:1}}}>
        <Box sx={{ display: { xs: 'none', md: 'flex' },color:'#e4e4e4' }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Box>
        
    </Box>
  )
}

export default Navbar