import { Box } from '@mui/system'
import { React, useState } from 'react'
import LoginBar from '../../components/LoginBar'
import SignupBar from '../../components/SignupBar'


const MobileAuth = ({setIsLoggedIn}) => {

  const styles = {
    width : '100vw'
  }

  const [isSignup,setIsSignup] = useState(false)

  return (
    <Box sx={styles}>
      {isSignup ?
        <SignupBar setIsLoggedIn={setIsLoggedIn} setIsSignup={setIsSignup}/>
          : 
        <LoginBar setIsLoggedIn={setIsLoggedIn} setIsSignup={setIsSignup}/>
      }
    </Box>
  )
}

export default MobileAuth