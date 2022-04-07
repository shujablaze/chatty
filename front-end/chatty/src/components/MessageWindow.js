import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import { useState, useEffect, useContext } from 'react'
import backgroundImage from '../chatBackground.jpg'
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Message from './Message';
import ChatBar from './ChatBar';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { userProvider,socketProvider } from '../App'

const MessageWindow = () => {

  const [messages, setMessages] = useState([])
  const { id } = useParams()
  const { user } = useContext(userProvider)
  const { socket } = useContext(socketProvider)

  useEffect(()=>{
    axios({
      method:'GET',
      url:`http://localhost:8000/conversation/${id}`,
      withCredentials: true
    })
    .then(res => {
      setMessages(res.data.data.messages)
    })
  },[id])

  useEffect(()=>{
    socket?.on('conv_message',mssg => {
      setMessages(prev=>[...prev,mssg])
    })
  },[socket])

  const styles = {
    backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.82), rgba(5, 5, 5, 0.82)),url('+backgroundImage+')',
    height:'86vh',
    backgroundSize : 'cover',
    backgroundAttachment:'fixed',
    overflow:'auto',
    overflowX:'hidden',
    display:'flex',
    flexDirection:'column',
    pt:2,
    pb:'8vh'
  }

  return (
    <Box sx={{position:'relative',pt:'8vh'}}>
        <Box sx={{height:'6vh',backgroundColor:'#555',p:1,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Box sx={{display:'flex',alignItems:'center',gap:5}}>
                <Avatar sx={{height:{sm:'1.7rem',lg:'2.4rem'},width:{sm:'1.7rem',lg:'2.4rem'}}}></Avatar>
                <h4 style={{fontSize:'1.4rem',color:'#e3e3e3'}}>Shuja</h4>
            </Box>
            <Box sx={{display:'flex',gap:2,mr:2}}>
                <CallIcon sx={{color:'#e3e3e3',cursor:'pointer'}}/>
                <VideoCallIcon sx={{color:'#e3e3e3',cursor:'pointer'}}/>
                <MoreHorizIcon sx={{color:'#e3e3e3',cursor:'pointer'}}/>
            </Box>
        </Box >
        <Box sx={styles}>
            {messages?.map(el => <Message key={el._id} isMine={user.userId === el.senderId} date={el.createdAt}>{el.text}</Message>)}
        </Box>

        <Box sx={{position:'absolute',left:0,bottom:0,right:0,backgroundColor:'#555',p:1.2}}>
          <ChatBar convId={id} messages={messages} setMessages={setMessages}/>
        </Box>
    </Box>
  )
}

export default MessageWindow