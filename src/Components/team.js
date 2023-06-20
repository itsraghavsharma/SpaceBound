import React from 'react';

function Team({ teammates }) {
  return (
    <div style={{ textAlign: 'center', color: 'white', background: 'rgb(8 3 33 )' }}>
      <br />
      <h2 style={{fontSize: "2.3rem"}}>ऐlaan</h2>
      <br></br>
      <h2>Teammates</h2>
      <div className="card mx-auto" style={{ width: '18rem', alignItems: 'center', justifyContent: 'center' }}>
        <div className="card-body">
          <p className="card-text"><span id="taskMessage">{teammates}</span></p>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Team;
