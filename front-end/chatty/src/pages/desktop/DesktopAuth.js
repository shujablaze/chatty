import React from 'react'
import LoginBar from '../../components/LoginBar'
import heroImg from '../../hero.jpg'
import {Drawer, Typography} from '@mui/material'
import { Box } from '@mui/system'

const DesktopAuth = ( {setIsLoggedIn}) => {

  const styles = {
    backgroundImage:'linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(5, 5, 5, 0.5)),url('+heroImg+')',
    height:"100vh",
    backgroundSize : 'cover',
    overflow:'hidden'
  }

  return (
    <>
      <div style={styles}>
        <Box
          sx={{
            position:'fixed',
            top:'5%',
            left:'5%'
          }}
        >
          <Typography variant="h1" component="h1" color="white" sx={{pb:2,fontFamily:'Eczar',fontWeight:'400'}}>Chatty</Typography>
          <Typography variant="h4" component="h4" color="white" sx={{p:2}}>Talk Easily, Organized and Fast</Typography>
        </Box>
      </div>
      <Drawer sx={{
          width: {xl:'25vw',lg:'30vw',md:'35vw'},
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: {xl:'25vw',lg:'30vw',md:'35vw'},
            boxSizing: 'border-box',
          }
        }}
        variant="permanent"
        anchor="right"
      >
        <LoginBar setIsLoggedIn={setIsLoggedIn}/>
      </Drawer>
    </>
  )
}

export default DesktopAuth