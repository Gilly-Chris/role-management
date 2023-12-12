import React, { useEffect, useState } from "react";
import './style.scss';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Header() {
    const location = useLocation()
    const [hide, setHide] = useState(false)
    const {
        user
    } = useSelector(state => state.Core)

    useEffect(() => {
        console.log(user)
    })
    useEffect(() => {
        if (location.pathname === '/auth/login') {
            setHide(true)
        }
    }, [])

    return (
        <div className={`header ${hide ? 'd-none': ''}`}>
            <div className="container">
                <div className="header-content">
                    <div className="nav-brand">Role Management</div>
                    <nav className="header-nav">
                        {/* <NavLink className="nav-link" exact to=""></NavLink> */}
                        { user && (
                            <Dropdown>
                                {/* <Dropdown.Toggle className="nav-link">User Name</Dropdown.Toggle> */}
                                <Dropdown.Menu>
                                    <NavLink className="dropdown-item" exact to="/">{user.username}</NavLink>
                                    <div className="dropdown-item">Logout</div>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    )
}