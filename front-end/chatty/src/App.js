import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import Authentication from './pages/common/Authentication';
import Dashboard from './pages/common/Dashboard';
import Navbar from './components/Navbar';
import MessageWindow from './components/MessageWindow'
import SearchResults from './pages/common/SearchResults'
import UserProfile from './pages/common/UserProfile'
import getCookie from './utils/getCookie';
import { io } from "socket.io-client";

export const screenSizeProvider = createContext(true)
export const userProvider = createContext(null)
export const socketProvider = createContext(null)

function App() {
  
  const loginStatus = getCookie('loggedIn') === 'true' ? true : false
  const username = getCookie('username')
  const userId = getCookie('userId')

  const mobile = window.innerWidth < 800 ? true : false

  const [isMobile,setIsMobile] = useState(mobile)
  const [isLoggedIn,setIsLoggedIn] = useState(loginStatus)
  const [user,setUser] = useState({username,userId})
  const [socket,setSocket] = useState(null)

  useEffect(()=>{
    if(!isLoggedIn) return

    const socket = io('http://localhost:3000',{autoConnect:false})
    setSocket(socket)
    socket.connect()
  },[isLoggedIn])
  
  const handleViewPortSize = ()=>{
    window.innerWidth < 800 ? setIsMobile(true) : setIsMobile(false)
  }

  useEffect(()=>{
    window.addEventListener('resize',handleViewPortSize)
  },[])

  return (
      <Router>
        {isLoggedIn ? <Navbar/> : ''}
        <socketProvider.Provider value={{socket,setSocket}}>
          <userProvider.Provider value={{user,setUser}}>
            <screenSizeProvider.Provider value={isMobile}>
              {!isLoggedIn ? <Authentication setIsLoggedIn={setIsLoggedIn}/> :
                <Routes>
                  <Route path="/" element={ <Dashboard>chatty</Dashboard> }/>
                  <Route path="/chat/:id" element={ <Dashboard> <MessageWindow/> </Dashboard> }/>
                  <Route path="/profile/:id" element={ <Dashboard> <UserProfile/> </Dashboard> }/>
                  <Route path="/search/:query" element={ <Dashboard> <SearchResults/> </Dashboard>}/>
                </Routes>
              }
            </screenSizeProvider.Provider>
          </userProvider.Provider>
        </socketProvider.Provider>
      </Router>
  );
}

export default App;