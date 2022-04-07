import {useContext,useState,useEffect} from 'react'
import {screenSizeProvider} from '../../App'
import DesktopDashboard from '../desktop/DesktopDashboard'
import MobileDashboard from '../mobile/MobileDashboard'
import axios from 'axios'

const Dashboard = ({children}) => {
  const isMobile = useContext(screenSizeProvider)
  const [contacts, setContacts] = useState([])
  
  useEffect(()=>{
    axios({
      method:'GET',
      url:'http://localhost:8000/conversation',
      withCredentials : true
    })
    .then(res=>{
      setContacts(res.data.data)
    })
  },[])


  return (
    <div >
      {isMobile ? 
      <MobileDashboard contacts={contacts} setContacts={setContacts}>{children}</MobileDashboard> 
        : 
      <DesktopDashboard contacts={contacts} setContacts={setContacts}>{children}</DesktopDashboard>}
  
    </div>
  )
}

export default Dashboard