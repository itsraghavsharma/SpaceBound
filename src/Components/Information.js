import React from 'react';

function Information({ message }) {
  return (<div>
     <br />
          <button
            type="button"
            className="btn btn"
            style={{alignItems:"center", width: '50vw', height: 'auto', margin:0, borderRadius: "25px", fontWeight: 'bold', color:"#0B5ED7", backgroundColor:"white" }}
          >
            <a className="navbar-brand" href="#" style={{ color: "#0B5ED7", fontWeight: 'bold',fontSize: '2rem'  }}>
              ऐlaan
            </a>
          </button>
          <br />
          <br />
    <div
    className="card mx-auto"
    style={{ width: '90vw', alignItems: 'center', justifyContent: 'center', borderRadius:"10px", borderColor:"white" ,  backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)',}}
  >
    <div className="card-body">
      <h2 className="card-title" style={{color:"white"}}>Message Box</h2>
      <p className="card-text">
        <span id="taskMessage" style={{color:"white", fontSize:"1.3rem", textTransform:"capitalize"}}>{message}</span>
      </p>
    </div>
  </div>
      <br></br>
    </div>
  );
}

export default Information;
