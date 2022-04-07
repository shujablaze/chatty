import { React, useContext, useState } from 'react'
import { Box, Button,TextField, Typography } from '@mui/material'
import logo_black from '../logo_black.png'
import { green } from '@mui/material/colors'
import setCookie from '../utils/setCookie'
import { userProvider,socketProvider } from '../App'
import io from 'socket.io-client'
import axios from 'axios'

const LoginBar = ({ setIsLoggedIn,setIsSignup }) => {

  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()

  const { setUser } = useContext(userProvider)
  const { setSocket } = useContext(socketProvider)

  const handleLogin = async () => {
    const data = {
      email,
      password
    }

    try{
      const res = await axios({
        method:'POST',
        url : 'http://localhost:8000/user/login',
        withCredentials: true,
        data
      })
      setIsLoggedIn(true)

      setCookie('loggedIn','true',1)
      setCookie('username',res.data.data.username,1)
      setCookie('userId',res.data.data._id,1)

      const socket = io('http://localhost:3000',{autoConnect:false})
      socket.userId = res.data.data._id
      socket.connect()
      setSocket(socket)

      setUser({username : res.data.data.username,userId : res.data.data._id})
    }
    catch(err){

    }
  }

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
              onChange={(e)=>setEmail(e.target.value)} 
           />

          <TextField 
              sx={{width:"90%",mt:5}}  
              required
              type="password"
              label="Password" 
              variant="outlined"
              onChange={(e)=>setPassword(e.target.value)} 
          />

          <Button 
              variant="contained"
              sx={{width:"70%",mt:5,p:2}}
              onClick={handleLogin} 
          >
              Login
          </Button>

          <Typography variant="body1" sx={{mt:5}}>Don't have an account?</Typography>

          <Typography 
            variant="body1" 
            color="primary" 
            sx={{cursor:'pointer'}}
            onClick = {()=>setIsSignup(true)}
          >
            Sign Up
          </Typography>

        </Box>
    </Box>
  )
}

export default LoginBar