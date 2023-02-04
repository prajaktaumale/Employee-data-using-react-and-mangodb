import React from 'react'


export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">PU FOOD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a style={{ fontWeight: '600', color: 'black', fontSize: '20px' }} className="nav-link" href="/">Login</a>
            </li>
          </ul>
        </div>
      </nav >
        </div>
    )
}