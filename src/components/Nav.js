import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from '../images/chat-logo2.png';
import { auth } from '../firebase';

function Nav({ user }) {
    // console.log(user);
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenClick = () => {
        setIsOpen(true)
    }

    const handleCloseClick = () => {
        setIsOpen(false)
    }

    const navItems = user ? (
        <ul className={`nav-list right purple ${ isOpen && 'active'}`}>
        <div className="menu-icon close" onClick={handleCloseClick}>
           <i className="fas fa-times"></i>
        </div>
       <li>
           <Link to="/create" onClick={() => setIsOpen(false)}>Create Project</Link>
       </li>
       <li>
           <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
       </li>
       <li className="hide-on-large-only">
           <Link to="/notifications" onClick={() => setIsOpen(false)}>Notifications</Link>
       </li>
       <li>
           <Link to="/" onClick={() => {
               auth.signOut()
               setIsOpen(false)
               }}>logout</Link>
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
             <div className="menu-icon close" onClick={handleCloseClick}>
                <i className="fas fa-times"></i>
             </div>        
            <li>
                <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
            </li>
            <li>
                <Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
            </li>
        </ul> 
    )

    const chatRoomAtSmall = user ? (
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
                    <Link to="/" className="brand-logo devhub-logo hide-on-med-and-down left white-text">
                        Devhub
                    </Link>
                    <Link to="/" className="brand-logo devhub-logo hide-on-large-only center white-text">
                       Devhub
                    </Link>
                    <div className="menu-icon open left" onClick={handleOpenClick}>
                        <i className="fas fa-align-left"></i>
                    </div>
                    { chatRoomAtSmall } 
                    { navItems }
                </div>
            </nav>
        </header>
    )
}

export default Nav
