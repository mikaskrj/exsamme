import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiAlignRight } from 'react-icons/fi';

const NavBar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="center">
            <nav>

                <ul className="nav-links" style={{ transform: open ? "translatex(0px)" : "" }}>

                    <li> <Link className="link" to="/" onClick={() => setOpen(!open)} >forside</Link></li>
                    <li> <Link className="link" to="/produkter" onClick={() => setOpen(!open)}>produkter</Link></li>
                    <div className="logo">bageriet</div>
                    <li> <Link className="link" to="/kontakt" onClick={() => setOpen(!open)}>kontakt</Link></li>
                    <li> <Link className="link" to="/login" onClick={() => setOpen(!open)}>login</Link></li>


                </ul>
                <FiAlignRight onClick={() => setOpen(!open)} className="line" />
            </nav>

        </div>
    )
}

export default NavBar