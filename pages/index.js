import React, { Component } from 'react' 
import HeadTag from './../components/HeadTag'
import Header from './../components/Header'
import Footer from './../components/Footer'

class Index extends Component { 
  render () { 
    return ( 
      <div>
        <HeadTag />
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <Header />
              <br /><br /><br />
              <div className="inner cover">
                {this.props.children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    ) 
  } 
}

export default Index