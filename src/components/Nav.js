import React from 'react';
import { Link } from 'react-router-dom';
import Chat from '../images/chat.png'

function Nav({ auth }) {

    const navItems = auth ? (
        <ul className="nav-list right">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
    ) : (
        <ul className="nav-list right">
                        <li>
                            <Link to="/create">Create Project</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                        <li>
                            <Link to="/logout">
                                <div className="img">
                                    <img src={Chat} alt=""/>
                                </div>
                            </Link>
                        </li>
                    </ul> 
    )

    return (
        <header>
            <nav className="nav-wrapper grey lighten-1">
                <div className="container">
                    <Link to="/" >
                        <a href="#" className="brand-logo left orange-text">Devhub</a>
                    </Link>
                    { navItems }
                </div>
            </nav>
        </header>
    )
}

export default Nav
