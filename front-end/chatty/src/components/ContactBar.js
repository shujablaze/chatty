import {  useContext } from 'react'
import { List } from '@mui/material'
import ContactCard from './ContactCard'
import { userProvider } from '../App'


const ContactBar = ({contacts,setContacts}) => {

  const  { user } = useContext(userProvider)

  return (
    <List sx={{mb:10}}>
        {contacts?.map(el => {
          const person = el.members.find(el=> el.username !== user.username)
          return(
          <ContactCard
            key = {el.id}
            convId = {el.id}
            name={person.username} 
            message={"Meet at SPR house at 8, ok?"} 
            time={"6:54"}
          />)})
        }
    </List>
  )
}

export default ContactBar