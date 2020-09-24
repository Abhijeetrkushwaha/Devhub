import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from '../images/chat.png'

function Nav({ auth }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenClick = () => {
        setIsOpen(true)
    }

    const handleCloseClick = () => {
        setIsOpen(false)
    }

    const navItems = auth ? (
        <ul className={`nav-list right purple ${ isOpen && 'active'}`}>
        <div class="menu-icon close" onClick={handleCloseClick}>
           <i class="fas fa-times"></i>
        </div>
       <li>
           <Link to="/create" onClick={() => setIsOpen(false)}>Create Project</Link>
       </li>
       <li>
           <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
       </li>
       <li>
           <Link to="/logout" onClick={() => setIsOpen(false)}>logout</Link>
       </li>
       <li>
           <Link to="/chat">
               <div className="img msg-bg">
                   <img src={Chat} alt=""/>
               </div>
           </Link>
       </li>
   </ul>
    ) : (
        <ul className={`nav-list right purple ${ isOpen && 'active'}`}>
             <div class="menu-icon close" onClick={handleCloseClick}>
                <i class="fas fa-times"></i>
             </div>        
            <li>
                <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
            </li>
            <li>
                <Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
            </li>
        </ul> 
    )

    const chatRoomAtSmall = auth ? (
        <Link to="/chat">
            <div className="img right msg-sm">
                <img src={Chat} alt=""/>
            </div>
        </Link>
    ) : (
        null
    )

    return (
        <header>
            <nav className="nav-wrapper purple">
                <div className="container">
                    <Link to="/" className="brand-logo hide-on-med-and-down left orange-text">
                        Devhub
                    </Link>
                    <Link to="/" className="brand-logo hide-on-large-only center orange-text">
                       Devhub
                    </Link>
                    <div class="menu-icon open left" onClick={handleOpenClick}>
                        <i class="fas fa-align-left"></i>
                    </div>
                    { chatRoomAtSmall } 
                    { navItems }
                </div>
            </nav>
        </header>
    )
}

export default Nav
