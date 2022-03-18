import { Box,Typography,TextField,InputAdornment,IconButton} from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

const Navbar = () => {
  return (
    <Box sx={{
        backgroundColor:green[600],
        height:'8vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }}
    >
        
        <Box sx={{display:'flex',alignItems:'center'}} >
          <Typography variant="h4" component="h2" sx={{fontFamily:'Eczar',color:'#e4e4e4',ml:5,mr:'10vw'}}>chatty</Typography>
          <TextField 
            variant="filled" 
            sx={{backgroundColor:'white',borderRadius:1,width:'35vw'}}
            size='small'
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon color={green[400]}/></InputAdornment>
            }}
            >
            
          </TextField>
        </Box>
        
        <Box sx={{mr:5}}>
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