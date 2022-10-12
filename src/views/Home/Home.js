import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='home-container'>
      <h3 className="page-heading">Home</h3>

      <div className='row'>
        <div className='col-md-6'>
          <div className='menu-container'>
            <div className='menu-title'>
              LABORATORY
            </div>
            <div className='menu-item'>
              <a href="atlas">Atlas</a> <span>👁️ View</span>
            </div>
            <div className='menu-item'>
              Tests <span>👁️ View</span>
            </div>
          </div>

          <div className='menu-container'>
            <div className='menu-title'>
              SETTINGS
            </div>
            <div className='menu-item'>
              Docs
            </div>
            <div className='menu-item'>
              Support
            </div>
            <div className='menu-item'>
              Collaborations
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <h4 className='action-heading'>Recent actions</h4>
          <h5>My actions</h5>
          <p>None available</p>
        </div>
      </div>
    </div>
  )
}

export default Home
