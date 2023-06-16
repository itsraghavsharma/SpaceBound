import React from 'react';

function Information() {
  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <br />
      <br />
      <br />
      <h2>Message Box</h2>
      <div className="card mx-auto" style={{ width: '18rem', alignItems: 'center', justifyContent: 'center' }}>
        <div className="card-body">
          <h5 className="card-title">Message:</h5>
          <p className="card-text">Display Message here from Backend!</p>
        </div>
      </div>
    </div>
  );
}

export default Information;
