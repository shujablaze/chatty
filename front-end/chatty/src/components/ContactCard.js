import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';

const ContactCard = ({name,message,time}) => {
  return (
    <>
      <ListItem alignItems="flex-start" sx={{cursor:'pointer','&:hover':{background:green[300]}}}>
        <ListItemAvatar>
          <Avatar alt={name} >{name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{}}
                component="h4"
                variant="body2"
                color="text.primary"
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