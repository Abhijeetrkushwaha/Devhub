import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from '../images/chat.png'

function Nav({ auth }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenClick = () => {
        setIsOpen(true)
    }

    const navItems = auth ? (
        <ul className="nav-list right purple">
             <div class="menu-icon close">
                <i class="fas fa-times"></i>
             </div>        
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
        </ul>
    ) : (
        <ul className={`nav-list right purple ${ isOpen && 'active'}`}>
             <div class="menu-icon close">
                <i class="fas fa-times"></i>
             </div>
            <li>
                <Link to="/create">Create Project</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/logout">logout</Link>
            </li>
            <li>
                <Link to="/logout">
                    <div className="img msg-bg">
                        <img src={Chat} alt=""/>
                    </div>
                </Link>
            </li>
        </ul> 
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
                        <Link to="/logout">
                            <div className="img right msg-sm" style={{marginTop: '5px'}}>
                                <img src={Chat} alt=""/>
                            </div>
                        </Link>
                    { navItems }
                </div>
            </nav>
        </header>
    )
}

export default Nav
