import { Avatar,Container } from '@mui/material'
import { Box } from '@mui/system'
import { useState, useEffect } from 'react'
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MessageIcon from '@mui/icons-material/Message';
import { green } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  
  const { id } = useParams()
  const [person,setPerson] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:8000/user/profile/${id}`).then(res=>{
      setPerson(res.data.data)
    })
  },[id])

  const handleChat = e => {
    axios({
      method : 'POST',
      url : 'http://localhost:8000/conversation',
      data : {id:id},
      withCredentials : true
    })
    .then(res=>{
      navigate(`/chat/${res.data.data._id}`)
    })
  }

  return (
    <Container sx={{pt:'10vh'}}>
      <Box  sx={{p:4,backgroundColor:green[300],borderRadius:10}}>
          <Avatar sx={{height:{xs:'10rem',lg:'15rem'},width:{xs:'10rem',lg:'15rem'},m:'0 auto'}}></Avatar>
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#e3e3e3',p:1.5,borderRadius:3,mt:5}}>
        <h2>{person?.username}</h2>
        <Box sx={{display:'flex',gap:2,mr:2}}>
          <MessageIcon onClick={handleChat} sx={{cursor:'pointer'}}/>
          <CallIcon sx={{cursor:'pointer'}}/>
          <VideoCallIcon sx={{cursor:'pointer'}}/>
          <MoreHorizIcon sx={{cursor:'pointer'}}/>
        </Box>
      </Box>
    </Container>
  )
}

export default UserProfile