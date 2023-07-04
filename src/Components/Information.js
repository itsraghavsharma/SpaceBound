import React from 'react';

function Information({ message }) {
  return (
    <div
          className="card mx-auto"
          style={{ marginTop: '30px',width: '90vw', alignItems: 'center', justifyContent: 'center', borderRadius:"10px", borderColor:"white" , textTransform:"capitalize" , backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(5px)',}}
        >
          <div className="card-body">
            <h2 className="card-title" style={{color:"white"}}>Message Box</h2>
            <p className="card-text">
              <span id="taskMessage" style={{color:"white", fontSize:"1.3rem"}}>{message}</span>
            </p>
          </div>
        </div>
  );
}

export default Information;
