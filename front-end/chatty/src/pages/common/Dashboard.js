import {React,useContext} from 'react'
import {screenSizeProvider} from '../../App'
import DesktopDashboard from '../desktop/DesktopDashboard'

const Dashboard = () => {
  const isMobile = useContext(screenSizeProvider)

  return (
    <div >
      {isMobile ? <h1>Mobile</h1> :<DesktopDashboard/>}
    </div>
  )
}

export default Dashboard