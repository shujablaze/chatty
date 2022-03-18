import React from 'react'
import { Drawer } from '@mui/material'
import ContactBar from '../../components/ContactBar'
import { Box } from '@mui/system'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const DesktopDashboard = () => {
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
          <ContactBar/>
        </Drawer>
        <Box sx={{ml:{xl:'30vw',lg:'35vw',md:'40vw',sm:'42vw'}}}>hello</Box>
    </>
  )
}

export default DesktopDashboard