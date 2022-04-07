import { Container } from '@mui/material'
import { green } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import Ta from 'timeago-react'

const Message = ({ children, date, isMine }) => {
  const position = isMine ? 'end' : 'start' 
  const bgColor = isMine ? '#e3e3e3' : green[900]
  const textColor = isMine ? '#222' : 'white'

  return (
    <Container sx={{display:'flex', justifyContent:position,mt:2,mb:2}}>
        <Box sx={{
            maxWidth:{xs:'90%',md:'70%'},
            position:'relative',
            p:1,
            pb:4,
            borderRadius:2,
            minWidth:{xs:'70%',lg:'30%'},
            color:textColor,
            background:bgColor
        }}>
          <Box>
            {children}
          </Box>
          <Box sx={{ position:'absolute',bottom:5,right:5,fontSize:'80%' }}>
            <Ta datetime={date}></Ta>
          </Box>  
        </Box>
    </Container>
  )
}

export default Message