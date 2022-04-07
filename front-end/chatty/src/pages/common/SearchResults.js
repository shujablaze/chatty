import { Container, Grid } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SearchResults = () => {
  const { query } = useParams()
  const [q,setq] = useState(query)
  const [result,setResult] = useState(null)
  
  useEffect(()=>{
    axios.get(`http://localhost:8000/user/search?q=${query}`).then(res=>{
      setResult(res.data.data)
    })
  },[q])

  useEffect(()=>{
    setq(query)
  },[query])

  return (
    <Container sx={{pt:'9vh',m:'auto 0'}}>
        <Grid container>
            {result?.map(el => <ProfileCard key={el._id} name={el.username} id={el._id}></ProfileCard>)}
        </Grid>
    </Container>
  )
}

export default SearchResults