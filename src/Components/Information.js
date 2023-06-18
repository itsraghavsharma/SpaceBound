import React from 'react';

function Information() {
  return (
    <div style={{ textAlign: 'center', color: 'white', background: 'rgb(8 3 33 )' }}>
      <br />
      <h2 style={{fontSize: "2.3rem"}}>ऐlaan</h2>
      <br></br>
      <h2>Message Box</h2>
      <div className="card mx-auto" style={{ width: '18rem', alignItems: 'center', justifyContent: 'center' }}>
        <div className="card-body">
          <h5 className="card-title">Message:</h5>
          <p className="card-text"><span id="taskMessage">Display Message here from Backend!</span></p>
        </div>
      </div>
    <br></br>
    </div>
  );
}

export default Information;
