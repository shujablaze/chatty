import React, { useContext } from 'react'
import {screenSizeProvider} from '../../App'
import DesktopAuth from '../desktop/DesktopAuth'
import MobileAuth from '../mobile/MobileAuth'

const Authentication = ( {setIsLoggedIn}) => {

    const isMobile = useContext(screenSizeProvider)

    return (
        <>
        {isMobile ? <MobileAuth setIsLoggedIn={setIsLoggedIn} />: <DesktopAuth setIsLoggedIn={setIsLoggedIn}/>}
        </>
        
    )
}

export default Authentication