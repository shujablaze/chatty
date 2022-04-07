import { React } from 'react'
import { Drawer } from '@mui/material'
import ContactBar from '../../components/ContactBar'
import { Box } from '@mui/system'

const DesktopDashboard = ({contacts,setContacts,children}) => {

  return (
    <>
        <Drawer sx={{
            width: {xl:'30vw',lg:'35vw',md:'40vw',sm:'42vw'},
            mt:'8vh',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: {xl:'30vw',lg:'35vw',md:'40vw',sm:'42vw'},
              mt:'8vh',
              boxSizing: 'border-box',
            }
          }}
          variant="permanent"
          anchor="left"
        >
          <ContactBar contacts={contacts} setContacts={setContacts}/>
        </Drawer>
        <Box sx={{mt:'-8vh',ml:{xl:'30vw',lg:'35vw',md:'40vw',sm:'42vw'}}}>
          {children}
        </Box>
    </>
  )
}

export default DesktopDashboard