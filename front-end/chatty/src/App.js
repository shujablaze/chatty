import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { createContext, useEffect , useState } from 'react';
import Authentication from './pages/common/Authentication';
import Dashboard from './pages/common/Dashboard';
import Navbar from './components/Navbar';

export const screenSizeProvider = createContext(true)

function App() {
  const [isMobile,setIsMobile] = useState(false)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  
  const handleViewPortSize = ()=>{
    window.innerWidth < 800 ? setIsMobile(true) : setIsMobile(false)
  }

  useEffect(()=>{
    window.addEventListener('resize',handleViewPortSize)
  },[])

  return (
      <Router>
        {isLoggedIn ? <Navbar/> : ''}
        <screenSizeProvider.Provider value={isMobile}>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Dashboard/> : <Authentication setIsLoggedIn={setIsLoggedIn}/>}/>
          </Routes>
        </screenSizeProvider.Provider>
      </Router>
  );
}

export default App;
