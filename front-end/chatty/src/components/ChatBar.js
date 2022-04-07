import { useState, useContext } from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Box } from '@mui/system';
import { green } from '@mui/material/colors';
import { socketProvider } from '../App'
import axios from 'axios'

const ChatBar = ({ convId, messages, setMessages }) => {
  
  const [mssg,setMssg] = useState('')
  const { socket } = useContext(socketProvider)
 
  const sendMessage = async (e) => {
    e.preventDefault()
  
    try{
      const data = {
        text : mssg,
        conversationId : convId
      }
      setMssg('')
      const res = await axios({
        method:'POST',
        url:'http://localhost:8000/chat/text',
        withCredentials:true,
        data 
      })
      setMessages(prev => [...prev,res.data.data])
      socket?.emit('client_mssg',{convId,mssg:res.data.data})
    }catch(err){

    }
  }

  const handleKey = e => {
    if(e.keyCode === 13){
        sendMessage(e)
    }
  }
  const styles = {
    backgroundColor:'white',
    borderRadius:'4px',
    width:'100%',
    padding:'0.5rem 44px 0.5rem 1rem',
    height:'100%',
    fontSize:'1.2rem',
    fontFamily:'Roboto',
    border:'none',
    resize:'none'
  }

  return (
    <form onSubmit={sendMessage} style={{display:'flex',alignItems:'center'}}>
      <EmojiEmotionsIcon sx={{fontSize:{xs:30,md:35},color:'#eee',ml:{xs:0,lg:2},mr:{xs:1,lg:2}}}/>
      <Box sx={{position:'relative',width:'90%',display:'flex',alignItems:'center'}}>
        <textarea
          type='text'
          variant="filled" 
          style={styles}
          placeholder="Type a message"
          onKeyUp={handleKey}
          rows='1'
          value={mssg}
          onChange={e => setMssg(e.target.value)}
          >
        </textarea>
        <DoubleArrowIcon sx={{
            fontSize:{xs:30,md:35},
            height:"100%",
            color:'#eee',
            position:'absolute',
            cursor:'pointer',
            right:0,
            top:0,
            bottom:0,
            background:green[800],
            borderRadius:'0 4px 4px 0'
            }}
          onClick={sendMessage}
        />
      </Box>
    </form>
  )
}

export default ChatBar