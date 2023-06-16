import React from 'react';

function Directions() {
  return (
    <div style={{ color: 'white', textAlign: 'center' }}>
      <h2>Directions</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="card" style={{ width: '18rem', margin: '0 10px' }}>
          <div className="card-body">
            <h5 className="card-title">&uarr;</h5>
            <p className="card-text">Forward Direction ↑</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', margin: '0 10px' }}>
          <div className="card-body">
            <h5 className="card-title">&darr;</h5>
            <p className="card-text">Backward Direction ↓</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions;
