import React from "react";
import "./passwords.css";
import {  useNavigate } from "react-router-dom";
import { auth, db } from '../../services/firebase';
import { doc, updateDoc } from 'firebase/firestore';

function Passwords() {

  const navigate = useNavigate();
  async function validateAnswers () {

    var form = document.forms["AnswerForm"];
    var ans  = ["sun", "saturn", 'supernova', 'solar eclipse', "galaxy", "ursa major", "comet" , "nebula" ];
    for (let index = 0; index <8; ++index) {
      console.log(form[index.toString()].value.toString().toLowerCase().trim());
      if (form[index.toString()].value.toString().toLowerCase().trim() === ans[index]){
        console.log("passed "+index);
      }
      else{
        console.log("leaving "+index);
        return
      }
    }


    try {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'users', user.email);
        await updateDoc(userDocRef, { startQu: true });
        navigate("/game");
      }
    } catch (error) {
      alert("Some error occured, pls try again. If issue persists, pls contact helpdesk")
    }
   
    }
  
  return (
    <div className="container" style={{ textAlign: "center", height: "100vh", display: "flex",margin: "100px auto", justifyContent: "center", alignItems: "center", marginTop:"100px" }}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydMJTLALd6Fysk6FEo4cNQe84_TZHlKLO4wiX7X0glz57eZx0V8RFpf9IDcYXgz63ryc&usqp=CAU"
      alt="Background"
    />
    <div className="container" style={{ textAlign: "center",margin: "100px auto" }}>
      <form style={{ borderRadius: "20px", maxWidth: "600px", margin: "100px auto" }} action="javascript:void (0);" name="AnswerForm">
        {/* <h1>Hello PLAYERNAME</h1> */}
        <h3>Please Enter all the answers here:</h3>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              I'm a Fiery Sphere : 
            </label>
            <input
              type="text"
required
              name="1"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
            I'm a Planet with Rings :
            </label>
            <input
              type="text"
required
              name="2"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
            I'm a Cosmic Event :
            </label>
            <input
              type="text"
required
              name="3"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
            I'm a Phenomenon :
            </label>
            <input
              type="text"
required
              name="4"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              I'm a Cluster of Stars:
            </label>
            <input
              type="text"
required
              name="5"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
            I'm a Constellation:
            </label>
            <input
              type="text"
required
              name="6"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
            I visit Once in a While:
            </label>
            <input
              type="text"
required
              name="7"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              I'm a Celestial Body:
            </label>
            <input
              type="text"
required
              name="8"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <button
          type="submit"
          onClick={validateAnswers}
            className="fluid ui button blue"
            style={{
              borderRadius: "20px",
              height: "auto",
              width: "120px",
              margin: "20px auto",
              padding:"1%",
              fontSize:"larger",
              display: "block",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Passwords;