import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './headernav.css'
const HeaderNav = () => {
  return (
    <header className='header__nav'>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/usuarios">users</Link>
        <Link style={padding} to="/tarjetas">CardContainer</Link>
      </div>
      </header>
  )
}

export default HeaderNav