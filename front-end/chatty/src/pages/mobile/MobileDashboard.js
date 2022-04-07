import { Box } from '@mui/material'
import ContactBar from '../../components/ContactBar'


const MobileDashboard = ({contacts,setContacts,children}) => {

  return (
    <>
    {children === 'chatty'? 
    <Box sx={{pt:'8vh'}}><ContactBar contacts={contacts} setContacts={setContacts}/> </Box>
      : 
    children
    }
    </>
  )
}

export default MobileDashboard