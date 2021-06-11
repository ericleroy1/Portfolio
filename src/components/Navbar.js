import { Link } from 'gatsby'
import React from 'react'

function Navbar() {
    return (
        <nav>
           <h1>Eric Le Roy</h1>
           <div className='links'></div>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/projects">My Work</Link>
        </nav>
    )
}

export default Navbar
