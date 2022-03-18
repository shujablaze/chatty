import React from 'react'
import { Box, Button,TextField, Typography } from '@mui/material'
import logo_black from '../logo_black.png'
import { green } from '@mui/material/colors'

const LoginBar = ({setIsLoggedIn}) => {

  return (
        
    <Box>
        {/*Chatty Logo Header*/}   
        <Box
            sx={{
            display:"flex",
            justifyContent:'space-around',
            alignItems:'center',
            pt:3,
            backgroundColor:green[800]
            }}
            alt="Chatty logo."
            src={logo_black}
        >
            <Box
              component="img"
              sx={{
                height:100
              }}
              alt="Chatty logo."
              src={logo_black}
            /> 
        </Box>
        
        {/*Form Control*/}     
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Typography sx={{mt:3}} variant="h4" color={green[800]} component={'h1'}>Login</Typography>
            <TextField
                sx={{width:"90%",mt:5}}   
                required
                label="Email"
                variant="outlined" 
             />
            <TextField 
                sx={{width:"90%",mt:5}}  
                required
                type="password"
                label="Password" 
                variant="outlined" 
            />
            <Button 
                variant="contained"
                sx={{width:"70%",mt:5,p:2}}
                onClick={()=>{setIsLoggedIn(true)}} 
            >
                Login
            </Button>
            <Typography variant="body1" sx={{mt:5}}>Don't have an account?</Typography>
            <Typography variant="body1" color="primary" sx={{cursor:'pointer'}}>Sign Up</Typography>
        </Box>
    </Box>
  )
}

export default LoginBar