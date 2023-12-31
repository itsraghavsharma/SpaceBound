import React from 'react';

function Team({ teammates, id }) {
    // const teammatesString = teammates.join(', ');
  return (
    <div style={{ textAlign: 'center', color: 'white' }}>

      <br></br>
      <h2>Teammates</h2>
      <div className="card mx-auto" style={{ width: '18rem', alignItems: 'center', justifyContent: 'center' }}>
        <div className="card-body">
        <h5 className="card-title">Team ID: {id}</h5>
          <p className="card-text"><span id="taskMessage"  dangerouslySetInnerHTML={{__html:teammates.toString().replaceAll(",","<br/>")}}></span></p>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Team;
