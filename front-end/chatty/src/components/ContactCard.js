import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import { useContext } from 'react'
import { screenSizeProvider } from '../App'
import { useNavigate } from 'react-router-dom';

const ContactCard = ({ name,message,time,convId }) => {
  const isMobile = useContext(screenSizeProvider)
  let style = !isMobile ? {cursor:'pointer','&:hover':{background:green[300]}} : {}

  const navigate = useNavigate()

  return (
    <>
      <ListItem alignItems="flex-start" sx={style} onClick={()=>navigate(`/chat/${convId}`)}>
        <ListItemAvatar>
          <Avatar alt={name} ></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<div style={{textTransform:'capitalize',fontWeight:'bold'}}>{name}</div>}
          secondary={
            <React.Fragment>
              <Typography
                color="text.primary"
                component='span'
                sx={{display:'block'}}
              >
                {message}
              </Typography>
              {time}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default ContactCard