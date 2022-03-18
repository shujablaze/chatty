import { Box } from '@mui/system'
import React from 'react'
import LoginBar from '../../components/LoginBar'


const MobileAuth = ({setIsLoggedIn}) => {

  const styles = {
    width : '100vw'
  } 

  return (
    <Box sx={styles}>
      <LoginBar setIsLoggedIn={setIsLoggedIn} />
    </Box>
    
  )
}

export default MobileAuth