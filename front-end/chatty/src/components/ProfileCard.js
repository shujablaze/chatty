import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'
import { Avatar } from '@mui/material'
import { green } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'

const ProfileCard = ({ name,id }) => {
  const navigate = useNavigate()
  const handleClick = e => {
    navigate(`/profile/${id}`)
  }

  return (
    <Grid item xs={12} md={4} lg={3} sx={{backgroundColor:green[200],m:1,borderRadius:1}}>
        <Box sx={{p:4}}>
            <Avatar sx={{margin:'0 auto',width:'5rem',height:'5rem'}}></Avatar>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'#eee',p:1}}>
            <Typography>{name}</Typography>
            <Button onClick={handleClick}>View</Button>
        </Box>
    </Grid>
  )
}

export default ProfileCard