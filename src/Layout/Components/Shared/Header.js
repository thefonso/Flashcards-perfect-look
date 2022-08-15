import React from 'react'
import logo from '../../Images/logo.png'
import './Header.css'

function Header() {
  return (
    <header className="flex-container">
      <div id="parent" className="d-flex justify-content-center">
        <div id="header-logo">
          <img className="img-fluid" src={logo} alt="Card Deck Logo" ></img>
        </div>
        <div id="header-text">
          <h1 className="title">Flashcards-O-Matic</h1>
          <p className="lead">Awesome Cards for Awesome People</p>
        </div>
      </div>
    </header>
  )
}

export default Header
