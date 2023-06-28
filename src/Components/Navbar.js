import React from 'react';

function Navbar({ name }) {  const navbarStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  width: '100vw',
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust the transparency here (0.8 represents 80% opacity)
  backdropFilter: 'blur(10px)', // Add a blur effect
};

  return (
        <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand navbar-primary sticky-top" style={navbarStyle}>
          <ul className="navbar-nav mr-auto" style={{ margin: 'auto' }}>
            <li className="nav-link active">
              <img src="./images/clublogo.png" width={'110%'} alt="Club Logo" />
            </li>
          </ul>
          <li></li>
          <li></li>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '300px', height: '50px', paddingTop: "2px",paddingBottom: "2px", borderRadius: "50px", fontWeight: 'bold' }}
          >
            Player Name: <span id="playerName">{name}</span> 
          </button>
          <div className="collapse navbar-collapse" id="navbarNav"></div>
        </nav>
  );
}

export default Navbar;


