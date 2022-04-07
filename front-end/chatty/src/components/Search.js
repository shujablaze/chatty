import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [query,setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
      e.preventDefault()
      if(query.trim() === '') return
      navigate(`/search/${query}`)
  }

  const searchBarStyles = {
    border:'none',
    height:'4vh',
    padding:'0.2rem 0.35rem',
    fontSize:'1.2rem',
    width:'100%',
    borderRadius:3
  }

  const seachButtonStyles = {
      position:'absolute',
      top:0,
      bottom:0,
      right:0,
      border:'none',
      padding:'0 4px',
      background:'#e3e3e3',
      cursor:'pointer',
      borderRadius:'0 3px 3px 0'
  }

  return (
    <Box sx={{ml:{md:'-10vw',xs:'-5vw'},width:{md:'35vw',xs:'45vw'},position:'relative'}}>
        <form onSubmit={handleSubmit}>
            <input style={searchBarStyles} type="text" placeholder="Find new people" onChange={e=>setQuery(e.target.value)}></input>
            <button style={seachButtonStyles}><SearchIcon/></button>
        </form>
    </Box>
  )
}

export default Search