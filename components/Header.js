import React, { Component } from 'react' 
import Head from 'next/head'

class Header extends Component {
  render () {
    return (
      <div className="masthead clearfix">
        <div className="inner">
          <h3 className="masthead-brand">Suévellyn Fitdance</h3>
          <nav className="nav nav-masthead">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header