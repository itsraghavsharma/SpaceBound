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
          style={{ width: '300px', height: '50px', marginTop: "2px", borderRadius: "50px", fontWeight: 'bold' }}
        >
          Player Name: <span id="playerName"> {name} </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"></div>
        
      </nav>
      
  );
}

export default Navbar;
