import React from 'react';

function Navbar({ name }) {
  const navbarStyle = {
   
    width: '100vw',
    backgroundColor: 'rgb(19 27 77 / 0.9 )', // Adjust the transparency here (0.8 represents 80% opacity)
    backdropFilter: 'blur(10px)', // Add a blur effect
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand navbar-primary sticky-top" style={navbarStyle}>
        <ul className="navbar-nav mr-auto" style={{ margin: 'auto' }}>
          <li className="nav-link active">
            <img src="./images/clublogo.png" width={'110%'} alt="Club Logo" />
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '300px', fontWeight:"600", height: 'auto',lineHeight:"1.25" ,paddingTop:"0px auto 0px auto", marginTop: "2px", marginRight:"15px", border:"none", background:"none"}}
        >
          Player Name: <span id="playerName"  style={{ fontWeight:"400",}}>{name}</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"> </div>
        
      </nav>
      
  );
}

export default Navbar;
